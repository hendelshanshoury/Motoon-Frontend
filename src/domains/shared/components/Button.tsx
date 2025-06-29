import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex justify-center items-center py-2.5 mt-6 text-lg font-medium text-black transition duration-300 bg-primary rounded-3xl hover:bg-secondary w-[70%] mx-auto ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
