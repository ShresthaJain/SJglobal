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
      title: 'EXIM Advisory & Documentation Solutions',
      description: 'Navigate the complexities of international trade with confidence. We provide:',
      items: [
        'Export-Import process setup and optimization',
        'HS code classification & documentation review',
        'DGFT, Customs, and compliance advisory',
        'SOP creation for cross-border trade workflows',
        'Audit checklists, training, and post-clearance support',
      ],
    },
    hr: {
      title: 'HR Policy & Compliance Frameworks',
      description: 'Empower your people with well-structured and compliant HR practices:',
      items: [
        'HR policy manuals tailored to your industry',
        'PoSH (Prevention of Sexual Harassment) policy drafting and committee setup',
        'Leave, attendance, onboarding & disciplinary procedures',
        'Code of conduct and grievance redressal frameworks',
        'Compliance with labor laws and statutory obligations',
      ],
    },
    erp: {
      title: 'Operational Excellence & ERP Integration',
      description: 'Structure drives scale. We help you streamline:',
      items: [
        'Process mapping for core business functions',
        'SOPs for procurement, inventory, finance, and logistics',
        'ERP integration support (SAP, Oracle, custom tools)',
        'Training guides and implementation handholding',
        'Workflow redesign for efficiency and transparency',
      ],
    },
    payroll: {
      title: 'Payroll & Statutory Compliance Management',
      description: 'Stay legally sound and employee-friendly:',
      items: [
        'Monthly payroll setup and structure advisory',
        'PF, ESI, TDS, and bonus compliance',
        'Employee cost optimization models',
        'Documentation for audits and inspections',
        'Salary structure design aligned with industry benchmarks',
      ],
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
        {sections.map(({ id }) => {
          const service = services[id];
          return (
            <div
              key={id}
              id={id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 scroll-mt-28"
            >
              <h3 className="text-2xl font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
