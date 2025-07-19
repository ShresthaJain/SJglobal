'use client';

import Link from 'next/link';

export default function Home() {
  return (
      <div>
          <h2>Home Page</h2>
          <p>Navigate to other pages</p>
          <ol>
            <li><Link href="/AboutUs">About Us</Link></li>
            <li><Link href="/Services">Services</Link></li>
            <li><Link href="/Careers">Careers</Link></li>
            <li><Link href="/Contact">Contact Us</Link></li>
            <li><Link href="/Partner">Partner with Us</Link></li>
            <li><Link href="/WhyUs">Why Us</Link></li>
          </ol>
      </div>

  );
}3