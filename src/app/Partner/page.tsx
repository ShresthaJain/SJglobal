'use client'
import Intro from './intro.js';
import Role from './Role.js';
import PartnerForm from './PartnerForm.js';
import Link from 'next/link';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import SlideShow from './SlideShow.js';

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
      <header className="bg-white fixed inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">SJ Global</span>
              <img src="/images/logo.png" alt="SJ Logo" className="h-17 w-auto" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button onClick={() => setMobileMenuOpen(true)} className="-m-2.5 p-2.5 text-gray-700">
              <Bars3Icon className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-lg font-semibold text-gray-900">
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <img src="/images/logo.png" alt="SJ Logo" className="h-8 w-auto" />
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                <XMarkIcon className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

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
      <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300">
          <div className="mx-auto w-full max-w-screen-xl px-4 py-10 lg:py-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              
              {/* Quick Links */}
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick Links</h2>
                <ul className="space-y-3 font-medium">
                  <li><a href="/" className="hover:underline">Home</a></li>
                  <li><a href="/AboutUs" className="hover:underline">About Us</a></li>
                  <li><a href="/Services" className="hover:underline">Services</a></li>
                  <li><a href="/WhyUs" className="hover:underline">Why Us</a></li>
                  <li><a href="/Partner" className="hover:underline">Partner With Us</a></li>
                  <li><a href="/Careers" className="hover:underline">Careers</a></li>
                  <li><a href="/Contact" className="hover:underline">Contact Us</a></li>
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
                <ul className="space-y-3 font-medium">
                  <li>SJ Global Consulting</li>
                  <li>Based in India & US | Serving Clients Globally</li>
                  <li>info@sjglobalconsulting.com</li>
                  <li>+91 99106 28496</li>
                  <li>www.sjglobalconsulting.com</li>
                </ul>
              </div>

              {/* Focus Regions */}
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Focus Regions</h2>
                <ul className="space-y-3 font-medium">
                  <li>GCC (UAE, Saudi Arabia, Oman, Kuwait, Qatar, Bahrain)</li>
                  <li>ASEAN(Singapore, Vietnam, Malaysia, Thailand, etc.)</li>
                  <li>United States of America</li>
                  <li>Canada</li>
                  <li>Europe (Italy, Poland)</li>
                </ul>
              </div>

              {/* Work Together */}
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Let’s Work Together</h2>
                <p className="mb-4">
                  From simplifying exports to building HR systems and ERP workflows — we’re here to help you grow with clarity and compliance.
                </p>
                <a
                  href="/Contact"
                  className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                >
                  🔶 Book a Consultation →
                </a>
              </div>
            </div>
          </div>

          <div className="px-4 py-6 bg-gray-100 dark:bg-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} <a href="https://sjglobalconsulting.com" className="hover:underline">SJ Global Consulting</a>. All rights reserved.
          </div>
        </footer>
        </div>

    );
}