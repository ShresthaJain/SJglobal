'use client'
export default function Role() {
  return (
    <div className="text-white mb-10">
      <p className="text-white text-lg mb-3 font-medium">Whether you're a:</p>
      <ul className="text-white text-lg list-disc list-inside space-y-1 mb-4">
        <li>Customs Broker (CHA) or freight forwarder</li>
        <li>HRMS/payroll software vendor</li>
        <li>ERP implementation expert</li>
        <li>Legal or compliance advisor</li>
        <li>Technology or SaaS platform provider</li>
      </ul>
      <p className="text-white">We’d love to explore opportunities to collaborate, co-deliver solutions, and bring value to our growing client base.</p>
      <p>
        Fill out our Vendor Partner Form below or{' '}
        <a href="mailto:info@sjglobalconsulting.com" className="text-orange-500 underline">
          email us
        </a>{' '}
        to start the conversation.
      </p>
      <p className="text-white mt-2">
        Together, we can deliver smarter solutions to the businesses that need them most.
      </p>
    </div>
  );
}
