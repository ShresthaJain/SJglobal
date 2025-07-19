'use client';
import React, { useRef } from 'react';
import { useState } from 'react';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app,storage } from '../firebase'; // your initialized Firebase app
import { ref,uploadBytes,getDownloadURL } from 'firebase/storage';

import ServicesOfferedDropdown from './ServicesOffered.js';
import Textbox from './textbox.js';

const db = getFirestore(app);

export default function ContactForm() {
    const[company, setCompany] = useState('');
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');

    const [country, setCountry] = useState('');

    const [OfferedServices, setOfferedServices] = useState([]);
    const [profile, setProfile] = useState('');
    const [website, setWebsite] = useState('');
    const [file, setFile] = useState(null);


    const onChangeCountry = (val) => {
        setCountry(val);
    };

    const messageRef = useRef();
    const Contactref = collection(db, "PartnerForm");

    const handleSave = async (e) => {
        e.preventDefault();
        
        try {
            let fileURL = '';

            // Upload resume to Firebase Storage if file exists
            if (file) {
                const storageRef = ref(storage, `PartnerFiles/${firstName}_${lastName}__${company}_${Date.now()}`);
                await uploadBytes(storageRef, file);
                fileURL = await getDownloadURL(storageRef);
            }

            await addDoc(collection (db, 'PartnerForm'), {
                firstName: firstName,
                lastName: lastName,
                company: company,
                email: email,
                phone: phone,
                country: country,
                servicesOffered: OfferedServices.map(d => d.value),
                Profile: profile,
                website: website,
                files: fileURL
            });
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div>
            <h4>🤝 Become a Partner</h4>
            <p>Please fill out the form below to express your interest. We’ll connect with you to discuss collaboration opportunities and onboarding.</p>
            <form onSubmit={handleSave}>
                <div style={{ display: 'flex'}}>
                    <label>First Name: </label>
                    <input 
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <label>Last Name: </label>
                    <input 
                        type="text" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <br />
                    <label>Email: </label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <br />
                    <label>Phone:</label>
                    <PhoneInput
                        placeholder='Enter phone number'
                        country={'in'}
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                        required
                    />
                </div>
                <div>
                    <label>Company: </label>
                    <input 
                        type="text" 
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <br />
                    <label>Country: </label>
                    <CountryDropdown value={country} onChange={onChangeCountry} />
                </div>
                <ServicesOfferedDropdown onChange={setOfferedServices}/>
                <Textbox value={profile} onChange={setProfile} limit={300} />
                <div>
                    <br />
                    <label>Website / LinkedIn (optional):  </label>
                    <input 
                        type="url" 
                        placeholder="https://www.linkedin.com/in/your-profile"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        
                    />
                </div>
                
                <div>
                    <label>Upload Company Profile or Brochure (optional): </label>
                    <input type="file" accept=".pdf,.doc,.docx" onChange={(event) => {setFile(event.target.files[0])}} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}