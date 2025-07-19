import React, { useState } from 'react';
import Select from 'react-select'

const options = [
  { value: "EXIM", label: "EXIM" },
  { value: "HR & Compliance", label: "HR & Compliance" },
  { value: "ERP & Process Design", label: "ERP & Process Design" },
  { value: "Operations Strategy", label: "Operations Strategy" },
  { value: "Project/Process Documentation", label: "Project/Process Documentation" },
  { value: "Other", label: "Other" }
];

function DropdownSelect({ onChange }) {
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [otherDomain, setOtherDomain] = useState('');

  const handleOtherKeyDown = (e) => {
    if (e.key === 'Enter') {
      const filtered = selectedDomains.filter(d => d.value !== 'Other');
      if (otherDomain.trim() !== '') {
        const newDomains = [...filtered, { value: otherDomain, label: otherDomain }];
        setSelectedDomains(newDomains);
        onChange(newDomains); // Notify parent
      } else {
        setSelectedDomains(filtered);
        onChange(filtered); // Notify parent
      }
    }
  };

  const handleChange = (domains) => {
    setSelectedDomains(domains || []);
    onChange(domains || []);
    if (!domains?.some(d => d.value === 'Other')) {
      setOtherDomain('');
    }
  };

  return (
    <>
      <br />
      <label>Please select all relevant domains</label>
      <Select
        instanceId="relevant-domains"
        inputId="relevant-domains-input"
        options={options}
        onChange={handleChange}
        value={selectedDomains}
        isMulti
      />
      {selectedDomains.some(d => d.value === 'Other') && (
        <div style={{ marginTop: '10px' }}>
          <label>Other: </label>
          <input
            type="text"
            value={otherDomain}
            onChange={(e) => setOtherDomain(e.target.value)}
            onKeyDown={handleOtherKeyDown}
            placeholder="Enter other domain (press Enter to confirm)"
          />
        </div>
      )}
    </>
  );
}


export default DropdownSelect;
