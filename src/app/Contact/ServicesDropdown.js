import React, { useState } from 'react';
import Select from 'react-select'

const options = [
  { value: "EXIM Advisory", label: "EXIM Advisory" },
  { value: "HR Policy & Compliance", label: "HR Policy & Compliance" },
  { value: "Payroll & Statutory Support", label: "Payroll & Statutory Support" },
  { value: "ERP & SOP Design", label: "ERP & SOP Design" },
  { value: "Other", label: "Other" }
];

function ServicesDropdown({ onChange }) {
  const [selectedServices, setSelectedServices] = useState([]);
  const [otherService, setOtherService] = useState('');

  const handleOtherKeyDown = (e) => {
    if (e.key === 'Enter') {
      const filtered = selectedServices.filter(d => d.value !== 'Other');
      if (otherService.trim() !== '') {
        const newServices = [...filtered, { value: otherService, label: otherService }];
        setSelectedServices(newServices);
        onChange(newServices); // Notify parent
      } else {
        setSelectedServices(filtered);
        onChange(filtered); // Notify parent
      }
    }
  };

  const handleChange = (Services) => {
    setSelectedServices(Services || []);
    onChange(Services || []);
    if (!Services?.some(d => d.value === 'Other')) {
      setOtherService('');
    }
  };

  return (
    <>
      <br />
      <label>Services You're Interested In: </label>
      <Select
        instanceId="relevant-Services"
        inputId="relevant-Services-input"
        options={options}
        onChange={handleChange}
        value={selectedServices}
        isMulti
      />
      {selectedServices.some(d => d.value === 'Other') && (
        <div style={{ marginTop: '10px' }}>
          <label>Other: </label>
          <input
            type="text"
            value={otherService}
            onChange={(e) => setOtherService(e.target.value)}
            onKeyDown={handleOtherKeyDown}
            placeholder="Enter other Service (press Enter to confirm)"
          />
        </div>
      )}
    </>
  );
}


export default ServicesDropdown;
