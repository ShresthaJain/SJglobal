import React from 'react';

export default function Textbox( {value, onChange, limit = 300}) {
  const [wordCount, setWordCount] = React.useState(0);

  const handleChange = (e) => {
    const text = e.target.value;
    const words = text.split(' ').filter(Boolean);
    if (words.length <= limit) {
      setWordCount(words.length);
      onChange(text);
    } else {
      const limitedText = words.slice(0, limit).join(' ');
      setWordCount(limit);
      onChange(limitedText);
    }
  };
return (
    <div>
      <p>Tell us briefly about yourself (300 word limit): </p>
      <textarea
        rows={7}
        cols={75}
        onChange={handleChange}
        value={value}
        placeholder="Share your background, skills, and what you're looking for in your next opportunity."
      />
      <p>{wordCount}/{limit}</p>
    </div>
  );
}
