'use client';
import Founder from './Founder.js';
import Impact from './Impact.js';
import Values from './Values.js';

import Link from 'next/link';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';


export default function About() {
    const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/Services' },
    { name: 'Careers', href: '/Careers' },
    { name: 'Contact Us', href: '/Contact' },
    { name: 'Partner with Us', href: '/Partner' },
    { name: 'Why Us', href: '/WhyUs' },
    ];
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    return (
        <div className="relative isolate min-h-screen overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10 animated-gradient opacity-30 blur-2xl" />
            {/*NAVBAR */}
                <header className="bg-white fixed inset-x-0 top-0 z-50">
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">SJ Global</span>
                        <img
                            alt="SJ Logo"
                            src="/images/logo.png"
                            className="h-17 w-auto"
                        />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                        <span className="sr-only">Open main menu</span>
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
                        <img
                        alt=""
                        src='/images/logo.png'
                        className="h-8 w-auto"
                        />
                    </Link>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
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
            
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden px-6 pt-32 sm:pt-48 lg:px-8 lg:pt-56">
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
                        <h2 className="text-3xl font-bold text-center text-black mb-10">About Us</h2>

                        <section className="mb-10">
                            <Founder />
                        </section>

                        <section className="mb-10">
                            <Impact />
                        </section>

                        <section className="mb-10">
                            <Values />
                        </section>

                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <p className="text-lg">
                                At SJ Global Consulting, our values are our promise. To lead with empathy, to act with honesty,
                                to build with people, and to grow with purpose.
                                <br />
                                Let’s turn complexity into clarity — together.
                            </p>
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
    );
}
