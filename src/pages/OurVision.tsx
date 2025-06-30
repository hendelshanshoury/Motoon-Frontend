import React from "react";
import background from "../assets/images/background-27da0ac0.svg";
import vsion from "../assets//images/our-vision-04871090.png"; // Adjust the path as necessary
export const OurVision = () => {
  return (
    <>
      <div className=" relative py-18 mx-auto md:px-12 lg:px-28 bg-[#F5F9FF] ">
        <div className="absolute right-0 hidden top-10 lg:block">
          <img src={background} alt="background" className="w-[65%] " />
        </div>

        <div className="flex flex-col items-center gap-8 px-3 py-8 mx-auto md:flex-row">
          <div className="md:w-[50%] flex items-center md:justify-end lg:w-[60%] justify-center py-4 ">
            <img src={vsion} alt="motonphone" className=" md:w-full" />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:items-start md:justify-start md:w-[50%]  px-4 pb-5">
            <h1 className="md:text-[32px] text-2xl  font-semibold text-black text-cemter md:text-5xl">
              ما هي تطلعاتنا؟{" "}
            </h1>
            <p className="md:text-xl text-center md:text-start text-black text-[20px] md:w-[90%] ">
              نشر العلوم الشرعية في أنحاء المعموره بطريقة أكاديمية سهلة وبسيطة
              لمتلقي العلم الشرعي{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
