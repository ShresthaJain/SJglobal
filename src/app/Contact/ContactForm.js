'use client';
import React, { useRef } from 'react';
import { useState } from 'react';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app,storage } from '../firebase'; // your initialized Firebase app
import { ref,uploadBytes,getDownloadURL } from 'firebase/storage';

import ServicesDropdown from './ServicesDropdown.js';
import Textbox from './textbox.js';

const db = getFirestore(app);

export default function ContactForm() {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[company, setCompany] = useState('');
    const[designation, setDesignation] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');

    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [services, setServices] = useState([]);
    const [requs, setRequs] = useState('');
    const [file, setFile] = useState(null);
    
    const handleFileChange = () => {
        if (file == null) return;
        const fileRef = ref(storage, 'ContactFormFiles/${firstName}_${lastName}')
        uploadBytes(fileRef, file).then(() => {
            alert("resume uploaded successfully");
        })
    };

    const onChangeCountry = (val) => {
        setCountry(val);
        if (!val) {
        setRegion('');
        }
    };

    const messageRef = useRef();
    const Contactref = collection(db, "ContactForm");

    const handleSave = async (e) => {
        e.preventDefault();
        
        try {
            let fileURL = '';

            // Upload resume to Firebase Storage if file exists
            if (file) {
                const storageRef = ref(storage, `contactFormFiles/${firstName}_${lastName}_${Date.now()}`);
                await uploadBytes(storageRef, file);
                fileURL = await getDownloadURL(storageRef);
            }

            await addDoc(collection (db, 'ServicesContact'), {
                firstName: firstName,
                lastName: lastName,
                company: company,
                designation: designation,
                email: email,
                phone: phone,
                country: country,
                region: region,
                services: services.map(d => d.value),
                requirements: requs,
                files: fileURL
            });
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div>
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
                    <label>Company: </label>
                    <input 
                        type="text" 
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                    />
                    <label>Designation </label>
                    <input 
                        type="text" 
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
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
                    <br />
                    <label>Country and Region: </label>
                    <CountryDropdown value={country} onChange={onChangeCountry} />
                    <RegionDropdown
                        country={country}
                        value={region}
                        onChange={(val) => setRegion(val)}
                        required
                    />
                </div>
                <ServicesDropdown onChange={setServices}/>
                <Textbox 
                    value={requs}
                    onChange={setRequs}
                    limit={500}/>
                
                <div>
                    <label>Upload Files (optional): </label>
                    <input type="file" accept=".pdf,.doc,.docx" onChange={(event) => {setFile(event.target.files[0])}} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}