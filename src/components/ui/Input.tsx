import React from 'react';

interface InputProps {
  type?: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  className?: string;
  required?: boolean;
  name?: string;
  id?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  className = '',
  required = false,
  name,
  id,
  disabled = false,
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      {icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
          icon ? 'pl-10' : ''
        } ${disabled ? 'bg-gray-100' : 'bg-white'}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        name={name}
        id={id}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;