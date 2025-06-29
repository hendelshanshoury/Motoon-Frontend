import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/download (1).png";
import herosection from "../assets/images/header2-d1cd08ba.png";
import Button from "../domains/shared/components/Button";

const ForgetPassword = () => {
  return (
    <>
      <div className="relative w-full h-screen lg:overflow-hidden">
        {/* <div className="absolute z-50 flex justify-between px-3 py-8 bg-transparent md:px-6 itemscenter top-52 right-6 lg:right-8 lg:top-8 md:px-18">
          <Link to="/" className="text-2xl font-bold">
            <img src={logo} alt="logoImage" className="w-[55px] md:w-[60px]" />
          </Link>
        </div> */}

        <img
          src={herosection}
          alt="Hero Section"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-0 bg-black/30" />

        <div className="relative z-10 flex flex-col items-center justify-center px-4 mx-auto h-dvh lg:flex-row ">
          <div className=" p-12 m-4 bg-white rounded-3xl w-full md:w-[90%] lg:w-[85%] shadow-lg">
            <h2 className="mb-1 text-[24px] font-bold text-center text-black">
              نسيت كلمة السر؟
            </h2>
            <p className="mb-6 text-[13px] text-center text-gray-700">
              سيتم ارسال لك كود تعريفي علي البريد الالكتروني المسجل لدينا
              لاسترجاع كلمة المرور الخاصة بك من خلالة
            </p>
            <form className="flex flex-col w-[95%] mx-auto mt-10">
              <input
                type="email"
                placeholder=" البريد الإلكتروني"
                className="px-5 py-3.5 mb-8 text-sm text-black border rounded-3xl border-primary focus:outline-none"
              />
             
              <Button type="submit"> إرسال</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
