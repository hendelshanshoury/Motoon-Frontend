import React from "react";
import SocialIcon from "./SocialIcon";
import appstore from "../../../assets/images/download (2).png";
import googleplay from "../../../assets/images/download (3).png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-center pt-12 pb-6 md:px-24 bg-grayy text-main md:text-right rtl">
        <div className="container grid grid-cols-1 gap-6 mx-auto text-center 4x-2 md:grid-cols-2 md:items-start md:justify-center md:te lg:grid-cols-3 lg:items-start">
          <div className="flex flex-col items-center justify-between md:justify-center md:items-center lg:justify-start md:text-right lg:text-center lg:items-start">
            <h3 className="py-4 text-[20px] font-semibold ">مختصرات سريعه</h3>
            <div className="flex gap-2 md:items-center md:justify-between w-[100%] lg:text-start  ">
              <div className="flex flex-col w-1/2 gap-y-2">
                <p className="py-1">
                  <Link to={""} className="text-[16px] hover:text-secondary">
                    من نحن
                  </Link>
                </p>
                <p className="py-1">
                  <Link to={"login"} className="text-[16px] hover:text-secondary">
                    الفصول
                  </Link>
                </p>
              </div>
              <div className="flex flex-col w-1/2 gap-y-2">
                <p className="py-1">
                  <Link to={""} className="text-[16px] hover:text-secondary">
                    سياسة الخصوصية
                  </Link>
                </p>
                <p className="py-1">
                  <Link to={""} className="text-[16px] hover:text-secondary">
                    اتصل بنا
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center lg:justify-start md:text-right lg:text-center lg:items-start">
            <h3 className="py-3 text-xl font-semibold">تابعونا على</h3>
            <div className="py-1">
              <SocialIcon />
            </div>
            <p>جميع الحقوق محفوظة لسنة 2025 ©</p>
          </div>

          <div className="text-center md:col-span-2 lg:col-span-1 lg:text-right">
            <h3 className="py-1 text-[28px] font-semibold">تطبيق الهاتف</h3>
            <p className="text-[16px]">
              حمل التطبيق الان على هاتفك حيث يتوفر الان بنظامي الاندرويد و الأبل
            </p>
            <div className="flex items-center justify-center gap-1 py-2 md:flex-col lg:items-start">
              <img
                src={appstore}
                alt="appstore"
                className="w-[40%] md:w-[30%] lg:w-[40%] py-1"
              />
              <img
                src={googleplay}
                alt="googleplay"
                className="w-[40%] md:w-[30%] lg:w-[40%] md: py-1"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
