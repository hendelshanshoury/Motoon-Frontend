import React from "react";
import herosection from "../assets/images/header2-d1cd08ba.png";
import logo from "../assets/images/download (1).png"; // Adjust the path as necessary
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        \{" "}
        <div className="absolute z-50 flex items-center justify-between px-3 py-6 bg-transparent right-8 top-6 md:px-18">
          <Link to="/" className="text-2xl font-bold">
            <img src={logo} alt="logoImage" className="w-[60px] md:w-[60px]" />
          </Link>
        </div>
        <img
          src={herosection}
          alt="Hero Section"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-0 bg-black/30" />
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-4 mt-6">
          <div className="w-full md:w-[80%] lg:w-[90%] bg-main rounded-3xl p-10 md:p-10 shadow-lg">
            <div className="mb-16">
              <h1 className="mb-3 text-[24px] md:text-[24px] font-bold text-black text-center">
                اهلا بك مجدداً، يمكنك الآن الدخول إلى منصة موتون
              </h1>
              <p className="mb-3 text-[13px] font-semibold text-graytext text-center">
                تأسيس جيل من طلبة العلم المتقنين شرعياً ليكونوا نواة لعلماء
                ودعاة المستقبل في جميع دول العالم
              </p>
            </div>

            <form className="w-[100%] flex flex-col mx-auto mt-8">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full px-6 py-3 my-3 text-base border rounded-full placeholder-gray bg-[#FFFFEE] focus:outline-none border-primary"
              />
              <input
                type="password"
                placeholder=" الرقم السري"
                className="w-full px-6 py-3 my-3 text-base border rounded-full placeholder-gray bg-[#FFFFEE] focus:outline-none border-primary"
              />
              <button
                type="submit"
                className="py-3  mt-6 text-lg font-medium text-black transition duration-300 bg-primary rounded-3xl hover:bg-secondary w-[70%] mx-auto"
              >
                دخول{" "}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link
                to="/register"
                className="flex items-center justify-center text-graytext"
              >
                <p className="mb-2 text-[13px] hover:text-secondary hover:underline pt-3">
                  هل ليس لديك حساب؟{" "}
                </p>
                <p className="text-[16px] font-semibold ms-1"> سجل الآن</p>
              </Link>
              <Link
                to="/forgot-password"
                className="text-graytext hover:text-secondary text-[13px] hover:underline"
              >
                هل نسيت كلمة المرور؟
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
