'use client';
import Founder from './Founder.js';
import Impact from './Impact.js';
import Values from './Values.js';

import { useState } from 'react';
import Header from '../Globals/header.js';
import Footer from '../Globals/Footer.js';


export default function About() {
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
            {/*NAVBAR */}
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

                <div className="mx-auto max-w-full text-left">
                <main className="flex-grow px-6 py-10 max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-black mb-2">About Us</h2>

                        {/* <section className="mb-10">
                            <Founder />
                        </section> */}

                        <section className="mb-10">
                            <Impact />
                        </section>

                        <section className="mb-10">
                            <Values />
                        </section>

                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <p className="text-lg text-center">
                                <em>"At SJ Global Consulting, our values are our promise. To lead with empathy, to act with honesty,
                                to build with people, and to grow with purpose."
                                <br />
                                Let’s turn complexity into clarity — together..."</em>
                            </p>
                        </div>
                        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-5 pt-15">
                          <div className="flex justify-center pb-10 ">
                            <img
                                src="/images/globe.jpeg"
                                className="w-auto object-contain h-auto rounded-lg"
                                alt="Plants"
                            />
                          </div>
                        </div>
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
        </div>
        <Footer />
        </div>
    );
}
