'use client';

import Link from 'next/link';
import { useState } from 'react';
import Cards from './Services/cards.js';
import RedirectionCard from './RedirectionCard.js';
import Animation from './animation.js';
import SlideShow from './SlideShow'
import Header from './Globals/header.js';
import Footer from './Globals/Footer.js';


const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/AboutUs'},
    { name: 'Services', href: '/Services' },
    { name: 'Why Us', href: '/WhyUs' },
    { name: 'Partner With Us', href: './Partner'},
    { name: 'Careers', href: '/Careers'},
    { name: 'Contact Us', href: '/ContactUs' },
    
  ];

const callToAction = [
  { name: 'Explore Our Services', href: '/Services' },
  { name: 'Book a Consultation', href: '/ContactUs' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <div className="bg-gradient-to-br from-[#ffad30] to-blue-400 text-black">
      <Header />
      {/* Navbar */}
      
      <div className="relative px-6 pt-50 pb-20 sm:pt-48 lg:px-8 lg:pt-56 bg-black text-white">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Text Section - takes 2/3 on large screens */}
            <div className="full lg:w-2/3 text-left">
            <h4 className="mt-8 text-7xl font-semibold text-white sm:text-5xl text-left">
              SJ Global Consulting
            </h4>

              <h3 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
                Turning Complexity into Clarity
              </h3>
              <p className="mt-8 text-lg text-gray-200 sm:text-xl text-justify">
                Guiding Businesses Globally With Structured, Scalable, And Compliant Operations.
              </p>
              <div className="mt-10 pt-20">
                <ul className="grid grid-cols-1 gap-1 lg:grid-cols-2 sm:gap-1 items-left text-base font-medium text-gray-900">
                  {callToAction.map((item) => (
                    <li key={item.name}  className="flex justify-center">
                      <Link
                        href={item.href}
                        className="inline-block border border-gray-300 bg-black text-white text-sm px-2.5 py-1.5 rounded shadow hover:bg-gray-800 align-center"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
             
            </div>

            {/* Image Section - takes 1/3 on large screens */}
            <div className="w-full lg:w-1/3">
              <SlideShow />
           </div>
          </div>
      </div>

      {/* Hero Section */}
        <div className="relative px-6 pt-16 sm:pt-48 lg:px-8 lg:pt-3">
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-2 lg:pt-5">
            <h3 className="mt-6 text-2xl font-semibold text-black sm:text-3xl text-left">
                  About Us
              </h3>
              <br />
            <div className="flex flex-col lg:flex-row items-start gap-12">
              

              {/* Image Section - 1/3 width */}
              <div className="w-full lg:w-1/3">
                <img
                  src="/images/asianAuntie.png"
                  alt="Decorative side"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>

              {/* Text Section - 2/3 width */}
              <div className="w-full lg:w-2/3 lg:ml-auto text-left">
                
                <h4 className="text-2xl font-semibold text-black sm:text-3xl">
                  Making an Impact That Matters
                </h4>
                <p className="mt-8 text-lg text-gray-700 sm:text-xl text-justify">
                  At <strong>SJ Global</strong>, we simplify complexity for growing businesses. Whether you're a International company expanding into India, Manufacturing Unit, Importers, Exporters, Early Stage Ventures to Established Enterprises;  we’re your trusted partner for trade, operations, and compliance.
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-700 text-lg sm:text-xl space-y-2">
                  <li>Export-Import (EXIM) advisory & documentation</li>
                  <li>HR policies, PoSH, Payroll & Statutory Compliance</li>
                  <li>ERP Integration & Operational Excellence</li>
                  <li>Startup-ready Structures for Scale and Sustainability</li>
                </ul>
                <p className="mt-6 text-lg text-gray-700 sm:text-xl text-justify">
                  Backed by strong values of integrity, inclusion, and collaboration, we make global business approachable, ethical, and efficient.
                </p>
                <button 
                  className="mt-6 px-4 py-2 rounded text-black bg-gradient-to-br from-[#ffad30] to-blue-400 shadow-md hover:shadow-lg transition duration-300" 
                  onClick={() => window.location.href = '/AboutUs'}>
                  Read more
                </button>

              </div>



            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-5">
            <h3 className="text-2xl font-semibold text-black sm:text-3xl">
              Our Services
            </h3>
            <Cards className="text-black bg-white" />
          </div>
          <br />
          <br />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-5">
            <div className="flex flex-col lg:flex-row items-start gap-12">

              {/* Text Section - 2/3 width */}
              <div className="w-full lg:w-2/3 lg:ml-auto text-left">
                <h3 className="mt-6 text-2xl font-semibold text-black sm:text-3xl">
                  Our Values
                </h3>
                
                <p className="mt-8 text-lg text-gray-700 sm:text-xl text-justify">
                  At SJ Global Consulting, our values aren’t just words on a page, they shape every client relationship, every process we build, and every solution we deliver. These values are the compass that guides us as we help businesses grow with clarity, compliance, and care.
                </p>
                <button 
                  className="mt-6 px-4 py-2 rounded text-black bg-gradient-to-br from-[#ffad30] to-blue-400 shadow-md hover:shadow-lg transition duration-300" 
                  onClick={() => window.location.href = '/AboutUs'}>
                  Read more
                </button>
                
              </div>

              {/* Image Section - 1/3 width */}
              <div className="w-full lg:w-1/3">
                <img
                  src="/images/wordcloud.png"
                  alt="Decorative side"
                  className="w-full h-auto rounded-full shadow-md"
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-5">
            <div className="flex flex-col lg:flex-row items-start gap-12">

              {/* Image Section - 1/3 width */}
              <div className="w-full lg:w-1/3">
                <img
                  src="/images/target.jpeg"
                  alt="Decorative side"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>

              {/* Text Section - 2/3 width */}
              <div className="w-full lg:w-2/3 lg:ml-auto text-left">
                <h3 className="mt-6 text-2xl font-semibold text-black sm:text-3xl">
                  Our Mission
                </h3>
                <p className="mt-8 text-lg text-gray-700 sm:text-xl text-justify">
                  To empower International company expanding into India, Manufacturing Unit, Importers, Exporters, Early Stage Ventures to Established Enterprises by simplifying complexity,  through strategic consulting in EXIM, ERP implementation, HR policies, and operations,  ensuring clarity, compliance, and operational excellence at every step of growth.
                </p>
                <button 
                  className="mt-6 px-4 py-2 rounded text-black bg-gradient-to-br from-[#ffad30] to-blue-400 shadow-md hover:shadow-lg transition duration-300" 
                  onClick={() => window.location.href = '/AboutUs'}>
                  Read more
                </button>
              </div>

            </div>
          </div>

          <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Text Section - takes 2/3 on large screens */}
            <div className="full lg:w-1/2 text-left">
              <h3 className="mt-6 text-2xl font-semibold text-black sm:text-3xl">
                Where We Work
              </h3>
              <p className="mt-8 text-lg text-gray-700 sm:text-xl text-justify">
                Special Focus Region
              </p>
              <ul className="mt-4 list-disc list-inside text-gray-700 text-lg sm:text-xl space-y-2">  We are specialized globally for cross-border trade and consulting, howe ever our key focussed regions are mentioned but not limited to:
                <li>India</li>
                <li>GCC (UAE, Saudi Arabia, Oman, Kuwait, Qatar, Bahrain)</li>
                <li>China</li>
                <li>ASEAN (Singapore, Vietnam, Malaysia, Thailand, etc.)</li>
                <li>North America</li>
                <li>UK & Europe (Italy, Poland)</li>
              </ul>
              <br />
            </div>

            <div className="flex items-right justify-center pb-5 ">
              <img
                  src="/images/ShipBridge.jpeg"
                  className="h-auto object-contain w-100 rounded-lg shadow-md"
                  alt="Container ship under bridge"
              />
            </div>

          </div>
          <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-5">
            <div className="flex items-right justify-center pb-10 ">
              <img
                  src="/images/plants.jpeg"
                  className="h-70 object-contain w-auto rounded-lg shadow-md"
                  alt="Plants"
              />
            </div>
            {/* Text Section - takes 2/3 on large screens */}
            <div className="full lg:w-1/2 text-left justify-center -mt-5">
              <h3 className="text-2xl font-semibold text-black sm:text-3xl">
                Who We Work With
              </h3>
              <ul className="mt-4 list-disc list-inside text-gray-700 text-lg sm:text-xl space-y-2">
                <li>International Companies entering India</li>
                <li>Exporters & Importers targeting global markets</li>
                <li>Manufacturing Companies</li>
                <li>Trading Firms (New, Old & Used Equipment)</li>
                <li>Auction Houses</li>
                <li>Startups & MSME's</li>
                <li>Early stage Ventures or Established Enterprises</li> 
              </ul>
              
            </div>

            

          </div>
          <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-5">
            <div className="flex justify-center pb-10 ">
              <img
                  src="/images/buildings.jpeg"
                  className="w-auto object-contain h-auto rounded-lg"
                  alt="Plants"
              />
            </div>
          </div>
          
          
        </div>
        <Footer />
        </div>
        

  );
}
