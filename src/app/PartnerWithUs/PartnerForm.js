'use client';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { CountryDropdown } from 'react-country-region-selector';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app, storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import ServicesOfferedDropdown from './ServicesOffered';
import Textbox from './textbox';
import axios from "axios";

const db = getFirestore(app);

export default function PartnerForm() {
  const [company, setCompany] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [offeredServices, setOfferedServices] = useState([]);
  const [profile, setProfile] = useState('');
  const [website, setWebsite] = useState('');
  const [file, setFile] = useState(null);

  const onChangeCountry = (val) => {
    setCountry(val);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      let fileURL = '';
      if (file) {
        const storageRef = ref(storage, `PartnerFiles/${firstName}_${lastName}_${company}_${Date.now()}`);
        await uploadBytes(storageRef, file);
        fileURL = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, 'PartnerForm'), {
        firstName,
        lastName,
        company,
        email,
        phone,
        country,
        servicesOffered: offeredServices.map((d) => d.value),
        website,
        files: fileURL,
        
      });

      alert('Partner form submitted successfully!');
      setFirstName(''),
      setLastName(''),
      setCompany(''),
      setEmail(''),
      setPhone(null),
      setCountry(''),
      setOfferedServices([null]),
      setWebsite(''),
      setFile(null)
    } catch (e) {
      console.error(e);
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <div className="p-6 rounded-lg">
      <h4 className="text-2xl font-bold text-[#ff9500] mb-4">Become a Partner</h4>
      <p className="mb-6 text-gray-800">
        Please fill out the form below to express your interest. We’ll connect with you to discuss collaboration
        opportunities and onboarding.
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
              className="w-60 border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-60 border rounded px-3 py-2"
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
            className="w-75 border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Phone</label>
          <PhoneInput
            country={'in'}
            value={phone}
            onChange={setPhone}
            inputClass="!w-75 !py-2 !px-3 !border !rounded"
            required
            
          />
        </div>

        <div>
          <label className="block font-medium">Company</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            className="w-60 border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Country</label>
          <CountryDropdown
            value={country}
            onChange={onChangeCountry}
            className="w-50 border rounded px-3 py-2"
          />
        </div>

        <ServicesOfferedDropdown onChange={setOfferedServices} />

        <div>
          <label className="block font-medium">Website / LinkedIn (optional)</label>
          <input
            type="url"
            placeholder="https://www.linkedin.com/in/your-profile"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-85 border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Upload Company Profile or Brochure (optional)</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(event) => setFile(event.target.files[0])}
            className="w-75 border rounded px-3 py-2"
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
