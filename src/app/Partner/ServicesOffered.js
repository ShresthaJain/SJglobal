import React, { useState } from 'react';
import Select from 'react-select'

const options = [
  { value: "Freight Forwarding/CHA", label: "Freight Forwarding / CHA" },
  { value: "ERP / HRMS Software", label: "ERP / HRMS Software" },
  { value: "Logistics / Warehousing", label: "Logistics / Warehousing" },
  { value: "Legal / Compliance Advisory", label: "Legal / Compliance Advisory" },
  { value: "Training / Documentation", label: "Training / Documentation" },
  { value: "Other", label: "Other" }
];

function ServicesOfferedDropdown({ onChange }) {
  const [selectedServicesOffered, setSelectedServicesOffered] = useState([]);
  const [otherService, setOtherService] = useState('');

  const handleOtherKeyDown = (e) => {
    if (e.key === 'Enter') {
      const filtered = selectedServicesOffered.filter(d => d.value !== 'Other');
      if (otherService.trim() !== '') {
        const newServicesOffered = [...filtered, { value: otherService, label: otherService }];
        setSelectedServicesOffered(newServicesOffered);
        onChange(newServicesOffered); // Notify parent
      } else {
        setSelectedServicesOffered(filtered);
        onChange(filtered); // Notify parent
      }
    }
  };

  const handleChange = (ServicesOffered) => {
    setSelectedServicesOffered(ServicesOffered || []);
    onChange(ServicesOffered || []);
    if (!ServicesOffered?.some(d => d.value === 'Other')) {
      setOtherService('');
    }
  };

  return (
    <>
      <br />
      <label>Type(s) of Services Offered: </label>
      <Select
        instanceId="relevant-ServicesOffered"
        inputId="relevant-ServicesOffered-input"
        options={options}
        onChange={handleChange}
        value={selectedServicesOffered}
        isMulti
      />
      {selectedServicesOffered.some(d => d.value === 'Other') && (
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


export default ServicesOfferedDropdown;
