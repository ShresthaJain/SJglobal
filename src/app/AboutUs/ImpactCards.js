'use client'
import { useState } from 'react';
import { Carousel,IconButton } from "@material-tailwind/react";

export default function ImpactCards({ className = '' }) {

    const cards = [
        "Export-Import (EXIM) Operations & Documentation",
        "Enterprises Resource Planning Optimization and Operational SOPs",
        "Human Resource Policy Setup ",
        "Statutory Compliance and Onboarding Processes",
        "PoSH (Prevention of Sexual Harassment) Policy Drafting, Training & Committee formation"
    ]
    
    return (
        <div className={`overflow-x-auto px-4 py-6 ${className}`}>
            <div className="flex gap-4">
                {cards.map((text, idx) => (
                    <div
                        key={idx}
                        className="min-w-[300px] max-w-[300px] h-[180px] bg-orange-100 rounded-xl shadow-md p-4 flex items-center justify-center text-center text-black overflow-hidden break-words"
                    >
                        <h3 className="text-lg font-semibold">{text}</h3>
                    </div>
                ))}
            </div>
        </div>
            
  );
}