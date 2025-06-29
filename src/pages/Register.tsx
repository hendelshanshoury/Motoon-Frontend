import React from "react";
import { Link } from "react-router-dom";
import herosection from "../assets/images/header2-d1cd08ba.png";
import logo from "../assets/images/download (1).png";
import RegisterForm from "../domains/auth/components/RegisterForm";

const Register = () => {
  return (
    <div className="relative w-full min-h-[100vh]">
      <img
        src={herosection}
        alt="Hero Section"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 z-0 bg-black/30" />
      <div className="relative z-10 flex items-center justify-center py-10 mx-auto bg-white shadow-md md:w-[95%] rounded-2xl">
        <div className="absolute z-50 right-8 top-5">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-[60px]" />
          </Link>
        </div>
        <div className="w-full px-4">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
