'use client';

import { useRef } from 'react';

export default function ServicesList() {
  const sections = [
    { id: 'exim', title: 'EXIM Advisory & Documentation' },
    { id: 'hr', title: 'HR Policy & Compliance' },
    { id: 'erp', title: 'Operational Excellence & ERP' },
    { id: 'payroll', title: 'Payroll & Compliance' },
  ];

  const services = {
    exim: {
      title: 'Import-Export Advisory & Documentation Solutions',
      description: 'Navigate the complexities of International trade with confidence. We provide:',
      items: [
        'Export-Import process setup and optimization',
        'HS code classification & documentation review',
        'DGFT, Icegate, Customs, and compliance advisory',
        'SOP creation for cross-border trade workflows',
        'Audit checklists, training, and post-clearance support',
        'Cost control & budget -friendly shipment planning & tracking and more',
        
      ],
      image: './images/exim.jpeg'

    },
    hr: {
      title: 'Human Resource Policy & Compliance Frameworks',
      description: 'Empower your people with well-structured and compliant HR practices:',
      items: [
        'HR policy manuals tailored to your industry',
        'PoSH (Prevention of Sexual Harassment) policy drafting, committee setup, annual return filing',
        'Leave, attendance, onboarding & disciplinary procedures',
        'Code of conduct and grievance redressal frameworks',
        'Compliance with labor laws and statutory obligations',
      ],
      image: './images/hr_policy.jpeg'
    },
    erp: {
      title: 'Operational Excellence & ERP Integration',
      description: 'Structure drives scale. We help you streamline the process, lots of projects go wrong because the gap between verification and validation. We provide you the clarity for all the complex workflows to deliver the right project. We provide our expertise in:',
      items: [
        'Custom Projects and Process flows',
        'Requirement Analysis',
        'Process mapping for core business functions',
        'SOPs for procurement, inventory, finance, and logistics',
        'ERP integration support',
        'Training guides and implementation handholding',
        'Workflow redesign for efficiency and transparency',
        
      ],
      image: './images/tech.jpeg'
    },
    payroll: {
      title: 'Payroll Management',
      description: 'Stay legally sound and employee-friendly:',
      items: [
        'Monthly payroll setup and structure advisory',
        'Salary structure design aligned with industry benchmarks',
        'Help in choosing the right Digital Payroll Tools ',
        'Digitalization of the Payroll system ',
        'Implementation, training and support '
        
      ],
      image: './images/payroll.jpeg'
    },
  };

  return (
    <div className="scroll-smooth">
      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {sections.map(({ id, title }) => (
          <a
            key={id}
            href={`#${id}`}
            className="px-4 py-2 rounded-full bg-orange-400 text-white font-semibold hover:bg-orange-500 transition duration-300"
          >
            {title}
          </a>
        ))}
      </div>

      {/* Services Sections */}
      <div className="space-y-10">
        {sections.map(({ id }, index) => {
          const service = services[id];
          return (
            <div
              key={id}
              id={id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 scroll-mt-28"
            >
              <div className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} items-center gap-12`}>
                <div className='w-full lg:w-2/3 mx-auto text-left'>
                <h3 className="text-2xl font-semibold text-black mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-800">
                    {service.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className='w-fill lg:w-1/3'>
                    <img
                        src={service.image}
                        alt="Impact image"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>

              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
