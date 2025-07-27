'use client';

import { useState } from 'react';

import Header from '../Globals/header.js';
import Footer from '../Globals/Footer.js';

export default function WhyUs() {
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

      {/* Navbar */}
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

        <main className="flex-grow px-6 py-10 max-w-5xl mx-auto">
            <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-5">
            <div className="flex justify-center pb-10 ">
              <img
                  src="/images/roped.jpeg"
                  className="w-auto object-contain h-auto rounded-lg"
                  alt="Rope view pattern"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center text-black mb-10">Why Us</h2>

          <section className="space-y-8 text-lg text-gray-900">
            <div>
              <h4 className="text-2xl font-semibold mb-2">Creating Space That Feels Like Home</h4>
              <p>
                At SJ Global Consulting, we believe that true excellence comes from workplaces where people feel they truly belong...
              </p>
            </div>

           <div className="flex flex-col lg:flex-row items-start gap-12">

              {/* Text Section - 2/3 width */}
              <div className="w-full lg:w-1/2 lg:ml-auto text-left">
                <div>
              <h4 className="text-2xl font-semibold mb-2">Stand Up, Speak Up</h4>
              <p className='pb-5'>
                We empower every individual we work with to bring their whole self to the table...
              </p>
            </div>
              <div>
                <h4 className="text-2xl font-semibold mb-2">A Workplace Where You Can Be You</h4>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Diversity in backgrounds, ideas, and experiences</li>
                    <li>Equity in opportunity, representation, and growth</li>
                    <li>Inclusion in voice, visibility, and contribution</li>
                </ul>
                <p className="mt-2">
                    We strongly encourage women professionals, whether re-entering the workforce or seeking meaningful roles...
                </p>
            </div>
                
              </div>
              {/* Image Section - 1/3 width */}
              <div className="w-full lg:w-1/2">
                <img
                  src="/images/graphs.jpeg"
                  alt="Founder"
                  className="w-150 h-auto rounded-sm shadow-md"
                />
              </div>
            </div>

            
            <div>
              <h4 className="text-2xl font-semibold mb-2">Continuous Action, Not Just Aspiration</h4>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Encouraging allyship across roles and responsibilities</li>
                <li>Designing HR and compliance systems that reflect gender sensitivity and cultural awareness</li>
                <li>Measuring progress and staying accountable to our principles</li>
              </ul>
            </div>

            <p>
              As we grow, our commitment remains: to build a consulting culture where difference is celebrated, and inclusion is standard, it's not exceptional.
            </p>

            <p>Let’s grow together, by making space for everyone.</p>
          </section>
          <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-5">
            <div className="flex justify-center pb-10 ">
              <img
                  src="/images/mountain.jpeg"
                  className="w-auto object-contain h-auto rounded-lg"
                  alt="Hiking photo"
              />
            </div>
          </div>
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
