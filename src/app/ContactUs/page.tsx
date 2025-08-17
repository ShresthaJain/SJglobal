'use client';

import ContactForm from './ContactForm';

import { useState } from 'react';

import Header from '../Globals/header.js';
import Footer from '../Globals/Footer.js';

export default function Contact() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/AboutUs'},
    { name: 'Services', href: '/Services' },
    { name: 'Why Us', href: '/WhyUs' },
    { name: 'Partner With Us', href: './Partner'},
    { name: 'Careers', href: '/Careers'},
    { name: 'Contact Us', href: '/Contact' },
    
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
    <div className="relative isolate min-h-screen overflow-hidden scroll-smooth">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animated-gradient opacity-30 blur-2xl" />

      {/* NAVBAR */}
      <Header />

      {/* Main Content */}
      <div className="relative isolate overflow-hidden px-6 pt-32 sm:pt-48 lg:px-8 lg:pt-35">
        {/* Top Gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffad30] to-[#ffe6b3] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <main className="flex-grow px-6 py-10 max-w-5xl mx-auto">
            <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-5">
            <div className="flex justify-center pb-10 ">
              <img
                  src="/images/contactString.jpeg"
                  className="w-auto object-contain h-auto rounded-lg"
                  alt="Contact us image"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-12">

              {/* Text Section - 2/3 width */}
              <div className="w-full lg:w-2/3 lg:ml-auto text-left">
                
              <div>
                <h2 className="text-3xl font-bold text-black mb-4">Contact Us / Enquiry</h2>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Schedule a Consultation</h4>
                <p className="text-gray-700">
                At SJ Global Consulting, we’re here to support International company expanding into India, Manufacturing Unit, Importers, Exporters, Early Stage Ventures to Established Enterprises with structured, compliant,
                and scalable solutions across Import-Export, Human Resource, ERP, and operations.
                <br /><br />
                If you’re ready to simplify complexity and move forward with confidence, let’s connect.
                <br /><br />
                </p>
            </div>
                
              </div>
              {/* Image Section - 1/3 width */}
              <div className="w-full lg:w-1/3">
              <br />
              <br />
                <img
                  src="/images/woodicons.jpeg"
                  alt="Founder"
                  className="w-25rem h-auto rounded-sm shadow-md"
                />
              </div>
            </div>

          {/* Form Section */}
          <ContactForm />
        </main>

        {/* Bottom Gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ffad30] to-[#ffe6b3] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
