import React from 'react';

export default function Textbox({ value, onChange, limit = 300 }) {
  const [charCount, setCharCount] = React.useState(0);

  const handleChange = (e) => {
    const text = e.target.value;
    if (text.length <= limit) {
      setCharCount(text.length);
      onChange(text);
    } else {
      const limitedText = text.slice(0, limit);
      setCharCount(limit);
      onChange(limitedText);
    }
  };

  return (
    <div>
      <p>Brief Profile or Area of Specialization: ({limit} character limit): </p>
      <textarea
        rows={7}
        cols={75}
        onChange={handleChange}
        value={value}
        placeholder="Share your background, skills, and what you're looking for in your next opportunity."
      />
      <p>{charCount}/{limit} characters</p>
    </div>
  );
}
