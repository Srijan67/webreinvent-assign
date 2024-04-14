import React, { FC } from "react";

interface ButtonSubmitProps {
  onClick?: () => void;
  label: string;
}

const ButtonSubmit: FC<ButtonSubmitProps> = ({ onClick, label }) => {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors w-full"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonSubmit;
