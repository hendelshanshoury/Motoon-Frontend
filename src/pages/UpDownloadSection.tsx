import React from "react";
import background from "../assets/images/background-27da0ac0.svg";
import appstore from "../assets/images/download (2).png";
import googleplay from "../assets/images/download (3).png"; // Adjust the path as necessary
import motonphone from "../assets/images/motoon-phone-2f77f833.png"; // Adjust the path as necessary

export const AppDownloadSection = () => {
  return (
    <>
      <div className="relative px-5 py-20 mx-auto md:px-12 lg:px-28 bg-main">
        <div className="absolute right-0 hidden top-10 lg:block">
          <img src={background} alt="background" className="w-[65%] " />
        </div>
        <div className="flex flex-col items-center gap-8 px-0 py-10 mx-auto lg:justify-around lg:flex-row ">
          <div className="flex flex-col md:items-start md:justify-start gap-4  lg:w-[45%] py-5 justify-center items-center ">
            <h2 className="text-2xl font-bold text-center text-black md:text-5xl">
              تابع محاضراتك عبر تطبيقنا
            </h2>
            <p className="md:text-xl text-center md:text-start text-black text-[16px] md:w-[80%] ">
              حمل التطبيق الان على هاتفك حيث يتوفر الان بنظامي الاندرويد و الأبل{" "}
            </p>
            <div className="flex gap-4 ">
              <div className="flex items-center justify-center gap-4 py-2 md:justify-start">
                <img
                  src={appstore}
                  alt="appstore"
                  className="md:w-[32%] w-[45%] py-1"
                />
                <img
                  src={googleplay}
                  alt="googleplay"
                  className="md:w-[32%] py-1 w-[45%]"
                />
              </div>
            </div>
          </div>
          <div className="md:w-[35%] flex items-center md:justify-end w-[70%] justify-center">
            <img src={motonphone} alt="motonphone" className="" />
          </div>
        </div>
      </div>
    </>
  );
};
