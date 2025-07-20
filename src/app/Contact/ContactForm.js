'use client';
import React, { useRef, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app, storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import ServicesDropdown from './ServicesDropdown.js';
import Textbox from './textbox.js';

const db = getFirestore(app);

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompany] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [services, setServices] = useState([]);
  const [file, setFile] = useState(null);

  const onChangeCountry = (val) => {
    setCountry(val);
    if (!val) setRegion('');
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      let fileURL = '';
      if (file) {
        const storageRef = ref(storage, `contactFormFiles/${firstName}_${lastName}_${Date.now()}`);
        await uploadBytes(storageRef, file);
        fileURL = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, 'ServicesContact'), {
        firstName,
        lastName,
        companyName,
        designation,
        email,
        phone,
        country,
        region,
        services: services.map((d) => d.value),
        files: fileURL,
      });

      alert('Form submitted successfully!');
    } catch (e) {
      console.log(e);
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <div className="mt-10 p-6 rounded-lg">
      <h4 className="text-2xl font-bold text-[#ff9500] mb-4">Contact Form</h4>
      <p className="text-gray-800 mb-6">
        Fill out the form below to schedule your consultation. We’ll get back to you within 24–48 hours.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="w-60 border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium">Designation</label>
            <input
              type="text"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
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
            onChange={(phone) => setPhone(phone)}
            required
            inputClass="!w-75 !py-2 !px-3 !border !rounded"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Country</label>
            <CountryDropdown
              value={country}
              onChange={onChangeCountry}
              className="w-50 border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium">Region</label>
            <RegionDropdown
              country={country}
              value={region}
              onChange={(val) => setRegion(val)}
              className="w-50 border rounded px-3 py-2"
              required
            />
          </div>
        </div>

        <ServicesDropdown onChange={setServices} />

        <div>
          <label className="block font-medium">Upload Files (optional)</label>
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
