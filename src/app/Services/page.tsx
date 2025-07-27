'use client';
import Services from './serviceslist.js';
import Cards from './cards.js';

import { useState } from 'react';

import Header from '../Globals/header.js';
import Footer from '../Globals/Footer.js';

export default function ServicesPage() {
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
    <div className="relative isolate min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animated-gradient opacity-30 blur-2xl" />

      {/* NAVBAR */}
      <Header />

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden px-6 pt-32 sm:pt-48 lg:px-8 lg:pt-25">
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

        <main className="flex-grow px-6 py-10 max-w-7xl mx-auto">
          <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-5">
            <div className="flex justify-center pb-10 ">
              <img
                  src="/images/building.jpeg"
                  className="w-auto object-contain h-auto rounded-lg"
                  alt="Plants"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center text-black mb-10 pt-10">Our Services</h2>

          <p className="text-lg mb-6 text-gray-800">
            At SJ Global Consulting, we offer customized, end-to-end business solutions that simplify operations, ensure compliance, and prepare your organization for scalable, sustainable growth. Our services are designed specifically for
          </p>

          <section className="mb-10">
            <Services />
          </section>
          <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-5">
            <div className="flex justify-center pb-10 ">
              <img
                  src="/images/poly.jpeg"
                  className="w-auto object-contain h-auto rounded-lg"
                  alt="Plants"
              />
            </div>
          </div>
          <p className="text-lg mb-6 text-gray-800">
            <strong>Custom Solutions | Co-Sourcing | Project Support</strong>
            <br />
            We understand that one model doesn’t fit all. Whether you need outsourced support, staff augmentation, or
            project-based consulting, we deliver practical, hands-on solutions that align with your team and goals.
            <br />
            Let’s build smarter, stronger operations — together.
          </p>

          <section className="mb-10">
            <Cards />
          </section>
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
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-5">
            <div className="flex justify-center pb-10 ">
              <img
                  src="/images/tech.jpeg"
                  className="w-auto object-contain h-auto rounded-lg"
                  alt="laptop"
              />
            </div>
          </div>
      </div>
      
    </div>
    <Footer />
        </div>
  );
}
