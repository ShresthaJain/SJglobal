'use client';
import React, { useRef } from 'react';
import { useState } from 'react';
import ReactDom from 'react-dom/client';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import DropdownSelect from './DropdownSelect.js';
import Years from './YearsDropDown.js';
import Textbox from './textbox.js';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../firebase'; // your initialized Firebase app

const db = getFirestore(app);

export default function TalentNetwork() {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');

    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');

    const [linkedin, setLinkedin] = useState('');

    const [domains, setDomains] = useState([]);
    const [years, setYears] = useState('');
    const [bio, setBio] = useState('');

    const onChangeCountry = (val) => {
        setCountry(val);
        if (!val) {
        setRegion('');
        }
    };

    const messageRef = useRef();
    const ref = collection(db, "talentNetwork");

    const handleSave = async (e) => {
        e.preventDefault();
        
        try {
            await addDoc(collection (db, 'talentNetwork'), {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                country: country,
                region: region,
                linkedin: linkedin,
                domains: domains.map(d => d.value),
                yearsOfExperience: years,
                bio: bio,
            });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <hr />
            <h4>Join Our Talent Network</h4>
            <p>Please fill out the form below, and we’ll reach out when relevant opportunities arise.</p>
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
                <div>
                    <br />
                    <label>LinkedIn Profile (optional): </label>
                    <input 
                        type="url" 
                        placeholder="https://www.linkedin.com/in/your-profile"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                        
                    />
                </div>
                <DropdownSelect onChange={setDomains}/>
                <Years onChange={setYears}/>
                <Textbox 
                    value={bio}
                    onChange={setBio}
                    limit={300}/>
                <button>Submit</button>
            </form>
        </div>

    );
}