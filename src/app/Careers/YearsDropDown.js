import React, { useState } from 'react';
import Select from 'react-select'

const options = [
  { value: "0-2", label: "0-2" },
  { value: "3-5", label: "3-5" },
  { value: "6-10", label: "6-10" },
  { value: "10+", label: "10+" },
];

function Years( {onChange} ) {
    const [selectedDomains, setSelectedDomains] = useState([]);
    const [otherDomain, setOtherDomain] = useState('');
    const [experience, setExperience] = useState('');

    const handleChange = (e) => {
        setExperience(e.target.value);
        onChange(e.target.value); // pass to parent
    };

    return (
        <div>
            <br />
            <label>Years of Experience:</label>
            <select value={experience} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="0-2">0-2</option>
                <option value="3-5">3-5</option>
                <option value="6-10">6-10</option>
                <option value="10+">10+</option>
            </select>
        </div>
    );
}

export default Years;
