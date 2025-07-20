'use client';
import { useState } from 'react';

export default function ImpactCards({ className = '' }) {
  const cards = [
    "Export-Import (EXIM) Operations & Documentation",
    "Enterprises Resource Planning Optimization and Operational SOPs",
    "Human Resource Policy Setup ",
    "Statutory Compliance and Onboarding Processes",
    "PoSH (Prevention of Sexual Harassment) Policy Drafting, Training & Committee formation"
  ];

  const images = [
    "./images/bg1.jpeg",
    "./images/bg2.jpeg",
    "./images/bg3.jpeg",
    "./images/bg4.jpeg",
    "./images/bg5.jpeg"
  ];

  return (
    <div className={`overflow-x-auto px-4 py-6 ${className}`}>
      <div className="flex gap-4">
        {cards.map((text, idx) => (
          <div
            key={idx}
            className="min-w-[300px] max-w-[300px] h-[180px] rounded-xl shadow-md p-4 flex items-center justify-center text-center text-black overflow-hidden break-words relative"
            style={{
              backgroundImage: `url(${images[idx]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'rgba(255,255,255,0.90)', // fallback
              backgroundBlendMode: 'lighten',
              opacity: 0.95
            }}
          >
            <div className="p-2">
              <h3 className="text-lg font-semibold">{text}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
