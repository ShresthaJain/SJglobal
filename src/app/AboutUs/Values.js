'use client';
import { useState } from 'react';

export default function Values() {
  const values = [
    {
      title: 'Lead with Purpose',
      content:
        "We believe in thoughtful leadership that blends strategy with empathy. Whether we're setting up HR policies for a startup, automating an EXIM workflow, or crafting a compliance roadmap, we approach every challenge with future-focused thinking and practical wisdom.",
    },
    {
      title: 'Act with Integrity',
      content:
        'Integrity is the cornerstone of our work. We uphold the highest standards of ethics, accuracy, and transparency; earning the trust of our clients and ensuring they meet the same standards with confidence and consistency.',
    },
    {
      title: 'Support and Empower',
      content:
        'We care deeply about people; our clients, their employees, and the communities they serve. We help build HR policies and PoSH frameworks that prioritize fairness, safety, and well-being. Our goal: workplaces where people feel valued, protected, and inspired.',
    },
    {
      title: 'Foster Inclusion and Dignity',
      content:
        'Inclusion is not an add-on; it\'s embedded in how we think and work. From the policies we design to the advisory we offer, we strive to create inclusive, diverse, and equitable systems that reflect the richness of the real world.',
    },
    {
      title: 'Collaborate for Real Results',
      content:
        'We don’t work in silos. We collaborate across functions, industries, and geographies to deliver impact that’s measurable and meaningful. Our clients don’t just get advice, they get actionable strategies, step-by-step support, and a long-term partner.',
    },
  ];

  const [openStates, setOpenStates] = useState(Array(values.length).fill(false));

  const toggleAccordion = (index) => {
    setOpenStates((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="mt-5">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-5">
            <div className="flex justify-center pb-10 ">
              <img
                  src="/images/flower.jpeg"
                  className="w-auto object-contain h-auto rounded-lg"
                  alt="Plants"
              />
            </div>
          </div>
      <br />
      <h4 className="text-2xl font-semibold mb-4 text-gray-900">Our Shared Values</h4>
      <p className="text-base text-gray-700 leading-relaxed mb-6">
        At SJ Global, our values aren’t just words on a page; they shape every client relationship, every process we build, and every solution we deliver. These values are the compass that guides us as we help businesses grow with clarity, compliance, and care.
      </p>

      {values.map((val, index) => {
        const isOpen = openStates[index];
        return (
          <div key={index} className="border-b border-slate-200">
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center py-5 text-slate-800"
            >
              <span>{val.title}</span>
              <span className="transition-transform duration-300">
                {isOpen ? (
                  // Minus icon
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                ) : (
                  // Plus icon
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="pb-5 text-base text-gray-700 leading-relaxed">{val.content}</div>
            </div>
            
          </div>
          
        );
      })}
    </div>
  );
}


