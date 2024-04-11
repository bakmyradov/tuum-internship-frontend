"use client"
import { useState } from "react";
export default function BaseSelectCountry({ list }) {
  const [hasBlurred, setHasBlurred] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('country');

  const handleSelectChange = (e) => {
    setSelectedCountry(e.target.value);
    setHasBlurred(false);
  };

  const handleSelectBlur = () => {
    if (selectedCountry === 'country') {
      setHasBlurred(true);
    }
  };

  return (
    <div className="relative formelement after:content-['\25be'] after:text-[1em] after:absolute after:right-2.5 after:top-1/2 after:transform after:-translate-y-1/2">
      {hasBlurred && selectedCountry === 'country' && (
        <span className="text-xs absolute z-10 left-[0.75rem] top-[-0.5rem] px-1 bg-white text-red-500">Please complete this required field</span>
      )}
      <select
        id="countries"
        name="countries"
        className="w-full px-4 py-2 relative border rounded-lg drop-shadow-sm border-[#d0d5dd] h-full appearance-none"
        value={selectedCountry}
        onChange={handleSelectChange}
        onBlur={handleSelectBlur}
      >
        <option value="country" disabled>
          Country
        </option>
        {list.map((country, index) => (
          <option key={index} value={country.code}>
            {country.emoji} {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
