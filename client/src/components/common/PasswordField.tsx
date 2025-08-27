import React, { useState } from 'react';

interface PasswordFieldProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  value,
  placeholder,
  onChange,
  required = false,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="block text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-500"
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-3 text-sm text-gray-600 hover:text-black text-center"
        >
          {show ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
