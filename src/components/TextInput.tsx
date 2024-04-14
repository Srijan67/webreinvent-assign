import React, { ChangeEvent, FC } from "react";

interface InputProps {
  value: string;
  setFormDetail: (value: any) => void;
  type: string;
  placeholder: string;
  label: string;
}

const TextInput: FC<InputProps> = ({
  value,
  setFormDetail,
  type,
  label,
  placeholder,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormDetail((prevState: any) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="mb-6">
      <label htmlFor={type} className="block text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={type}
        name={type}
        className="form-input mt-1 p-2 block w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default TextInput;
