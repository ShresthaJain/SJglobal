'use client';

import React, { useRef, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import DropdownSelect from './DropdownSelect.js';
import Years from './YearsDropDown.js';
import Textbox from './textbox.js';
import PartTime from './partTime.js';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app, storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const db = getFirestore(app);

export default function TalentNetwork() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [domains, setDomains] = useState([]);
  const [years, setYears] = useState('');
  const [partTime, setPartTime] = useState('');
  const [bio, setBio] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const messageRef = useRef();
  const Talentref = collection(db, 'talentNetwork');

  const onChangeCountry = (val) => {
    setCountry(val);
    if (!val) setRegion('');
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      let resumeURL = '';
      if (resumeFile) {
        const storageRef = ref(storage, `resumes/${firstName}_${lastName}_${Date.now()}`);
        await uploadBytes(storageRef, resumeFile);
        resumeURL = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, 'talentNetwork'), {
        firstName,
        lastName,
        email,
        phone,
        country,
        region,
        linkedin,
        domains: domains.map((d) => d.value),
        yearsOfExperience: years,
        partTime,
        bio,
        resume: resumeURL,
      });

      alert('Form submitted successfully!');
    } catch (error) {
      console.log(error);
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <div className="mt-16 bg-white p-6 rounded-lg shadow border">
      <h4 className="text-2xl font-bold text-[#ff9500] mb-4">Join Our Talent Network</h4>
      <p className="text-gray-800 mb-6">
        Please fill out the form below, and we’ll reach out when relevant opportunities arise.
      </p>
      <form onSubmit={handleSave} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Phone</label>
          <PhoneInput
            country={'in'}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            required
            inputClass="!w-full !py-2 !px-3 !border !rounded"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Country</label>
            <CountryDropdown value={country} onChange={onChangeCountry} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium">Region</label>
            <RegionDropdown
              country={country}
              value={region}
              onChange={(val) => setRegion(val)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-medium">LinkedIn Profile (optional)</label>
          <input
            type="url"
            placeholder="https://www.linkedin.com/in/your-profile"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <DropdownSelect onChange={setDomains} />
        <Years onChange={setYears} />
        <PartTime value={partTime} onChange={(e) => setPartTime(e.target.value)} />
        <Textbox value={bio} onChange={setBio} limit={300} />

        <div>
          <label className="block font-medium">Upload Resume</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(event) => setResumeFile(event.target.files[0])}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
