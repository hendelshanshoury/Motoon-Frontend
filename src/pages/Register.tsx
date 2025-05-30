import React from "react";
import { Link } from "react-router-dom";
import herosection from "../assets/images/header2-d1cd08ba.png";
import logo from "../assets/images/download (1).png"; // Adjust the path as necessary

const Register = () => {
  return (
    <>
      {/* <div className="relative w-full min-h-full lg:overflow-hidden">
        <div className="absolute z-50 flex items-center justify-between px-3 py-6 bg-transparent right-8 top-8 md:px-18">
          <Link to="/" className="text-2xl font-bold">
            <img src={logo} alt="logoImage" className="w-[55px] md:w-[60px]" />
          </Link>
        </div>

        <img
          src={herosection}
          alt="Hero Section"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-0 bg-black/30" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:w-[98%] mx-auto  px-4 py-8 lg:mt-16 md:w-[80%]">
          <div className="w-full p-12 m-4 bg-white rounded-lg lg:w-1/2">
            <h2 className="mb-1 text-[24px] font-bold text-center text-black">
              انضم الآن إلى منصة موتون عن طريق كود المنح
            </h2>
            <p className="mb-6 text-[16px] text-center text-gray-700">
              تأسيس جيل من طلبة العلم المتقنين شرعياً ليكونوا نواة لعلماء ودعاة
              المستقبل في جميع دول العالم
            </p>
            <form className="flex flex-col w-[90%] mx-auto">
              <input
                type="text"
                placeholder="أدخل رمز التفعيل"
                className="px-5 py-2 mb-8 text-sm text-black border rounded-3xl border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="py-2 font-semibold text-black rounded-lg mx-14 bg-primary hover:bg-secondary"
              >
                إرسال
              </button>
            </form>
            <div className="mt-4 mb-5 text-sm text-center text-gray-600">
              ليس لديك رمز تفعيل؟{" "}
              <Link to="/contact" className="text-secondary hover:underline">
                اتصل بنا
              </Link>
            </div>
          </div>

          <div className="w-full p-12 m-4 bg-white rounded-lg lg:w-1/2">
            <h2 className="mb-1 text-[24px] font-bold text-center text-black">
              اشتراك
            </h2>
            <p className="mb-6 text-[16px] text-center text-gray-700">
              تأسيس جيل من طلبة العلم المتقنين شرعياً ليكونوا نواة لعلماء ودعاة
              المستقبل في جميع دول العالم
            </p>
            <div className="mb-4 text-xl font-bold text-center text-gray">
              قيمة الاشتراك: <span className="text-secondary">1$</span>
            </div>
            <form className="flex flex-col w-full max-w-md mx-auto">
              <button
                type="submit"
                className="py-2 mt-20 font-semibold text-black rounded-lg mx-14 bg-primary hover:bg-secondary"
              >
                اشتراك
              </button>
            </form>
          </div>
        </div>
      </div> */}

      <div className="relative w-full min-h-screen lg:overflow-hidden">
        <div className="absolute z-50 flex justify-between px-3 py-8 bg-transparent md:px-6 itemscenter top-52 right-6 lg:right-8 lg:top-8 md:px-18">
          <Link to="/" className="text-2xl font-bold">
            <img src={logo} alt="logoImage" className="w-[55px] md:w-[60px]" />
          </Link>
        </div>

        <img
          src={herosection}
          alt="Hero Section"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-0 bg-black/30" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:w-[98%] mx-auto px-4  mt-[300px] lg:mt-20 md:w-[80%] h-auto">
          <div className="w-full p-12 m-4 bg-white rounded-lg lg:w-1/2">
            <h2 className="mb-1 text-[24px] font-bold text-center text-black">
              انضم الآن إلى منصة موتون عن طريق كود المنح
            </h2>
            <p className="mb-6 text-[16px] text-center text-gray-700">
              تأسيس جيل من طلبة العلم المتقنين شرعياً ليكونوا نواة لعلماء ودعاة
              المستقبل في جميع دول العالم
            </p>
            <form className="flex flex-col w-[90%] mx-auto">
              <input
                type="text"
                placeholder="أدخل رمز التفعيل"
                className="px-5 py-2 mb-8 text-sm text-black border rounded-3xl border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="py-2 font-semibold text-black rounded-lg mx-14 bg-primary hover:bg-secondary"
              >
                إرسال
              </button>
            </form>
            <div className="mt-4 mb-5 text-sm text-center text-gray-600">
              ليس لديك رمز تفعيل؟{" "}
              <Link to="/contact" className="text-secondary hover:underline">
                اتصل بنا
              </Link>
            </div>
          </div>

          <div className="w-full p-12 m-4 bg-white rounded-lg lg:w-1/2">
            <h2 className="mb-1 text-[24px] font-bold text-center text-black">
              اشتراك
            </h2>
            <p className="mb-6 text-[16px] text-center text-gray-700">
              تأسيس جيل من طلبة العلم المتقنين شرعياً ليكونوا نواة لعلماء ودعاة
              المستقبل في جميع دول العالم
            </p>
            <div className="mb-4 text-xl font-bold text-center text-gray">
              قيمة الاشتراك: <span className="text-secondary">1$</span>
            </div>
            <form className="flex flex-col w-full max-w-md mx-auto">
              <button
                type="submit"
                className="py-2 mt-20 font-semibold text-black rounded-lg mx-14 bg-primary hover:bg-secondary"
              >
                اشتراك
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
