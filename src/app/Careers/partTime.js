import React from 'react';

export default function PartTime({ value, onChange }) {
    return (
        <div>
            <label>Open to Part-time/Freelance/Consulting Roles?: </label>
            <input
                type="radio"
                name="partTime"
                value="yes"
                checked={value === 'yes'}
                onChange={onChange}
            /> Yes
            <input
                type="radio"
                name="partTime"
                value="no"
                checked={value === 'no'}
                onChange={onChange}
            /> No
        </div>
    );
}
