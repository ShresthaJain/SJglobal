'use client'
import Intro from './intro.js';
import Role from './Role.js';
import PartnerForm from './PartnerForm.js';

import { useState } from 'react';
import SlideShow from './SlideShow.js';

import Header from '../Globals/header.js';
import Footer from '../Globals/Footer.js';

export default function Partner() {
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
      <section className="relative bg-[url('/images/partner.jpeg')] bg-cover bg-center py-20 px-6">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Content */}
        <div className="relative z-10 text-white isolate overflow-hidden px-6 pt-10 sm:pt-48 lg:px-8 lg:pt-10">
            <main className="flex-grow px-6 py-10 max-w-5xl mx-auto text-white">
            <section>
                <h2 className="text-3xl font-bold text-white mb-4 text-center pb-5">Partner With Us – Let’s Build Together</h2>
                <Intro />
                <Role />
            </section>
            </main>
        </div>
        </section>
      
        <div className="relative isolate overflow-hidden px-6 pt-15 sm:pt-15 lg:px-8 lg:pt-20">
            <main className="flex-grow px-6 py-10 max-w-5xl mx-auto">
                <section className="scroll-mt-15" id="talent">
                    <PartnerForm />
                </section>
            </main>

        </div>

        <div className="relative isolate overflow-hidden px-6 pt-2 lg:px-8">
            <main className="flex-grow px-6 py-5 max-w-5xl mx-auto">
                <section className="scroll-mt-10" id="talent">
                    <SlideShow />
                </section>
            </main>

        </div>
          
        
          

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
      <Footer />
        </div>

    );
}