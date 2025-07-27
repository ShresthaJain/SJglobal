'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function header() {
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
        
        <header className="bg-white fixed inset-x-0 top-0 z-50">
              {/* <Animation /> */}
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
        
    )
}