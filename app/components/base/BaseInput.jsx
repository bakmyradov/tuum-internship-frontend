"use client"
import { useState } from 'react';

export default function BaseInput({
  type = "text",
  name,
  placeholder,
  className,
  required = false,
  ...props
}) {
  const [hasBlurred, setHasBlurred] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    if (!inputValue.trim() && required) {
      setHasBlurred(true);
    }
  };

  const handleInputFocus = () => {
    setHasBlurred(false);
  };

  return (
    <div className="formelement relative">
      {hasBlurred && !inputValue.trim() && (
        <span className="text-xs absolute z-[10] top-[-0.5rem] left-[0.75rem] text-red-500 font-thin bg-white px-1">Please complete this required field</span>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`w-full px-4 py-2.5 border rounded-lg drop-shadow-sm border-[#d0d5dd] focus:outline-none ${className}`}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        value={inputValue}
        {...props}
      />
    </div>
  );
}
