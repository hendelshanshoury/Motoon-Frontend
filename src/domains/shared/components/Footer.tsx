import React from "react";
import SocialIcon from "./SocialIcon";
import appstore from "../../../assets/images/download (2).png";
import googleplay from "../../../assets/images/download (3).png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-center px-24 pt-12 pb-6 bg-gray text-main md:text-right rtl">
        <div className="container grid gap-2 mx-auto md:grid-cols-3 md:flex-row">
          <div className="">
            <h3 className="py-4 text-[20px] font-semibold">مختصرات سريعه </h3>
            <div>
              <div className="flex ">
                <div className="flex flex-col w-1/2 gap-y-2">
                  <p className="py-1">
                    <Link to={""} className=" text-[16px] hover:text-secondary">
                      من نحن{" "}
                    </Link>
                  </p>
                  <p className="py-1">
                    <Link
                      to={""}
                      className="py-3 text-[16px] hover:text-secondary"
                    >
                      الفصول{" "}
                    </Link>
                  </p>
                </div>
                <div className="flex flex-col w-1/2 gap-y-2">
                  <p className="py-1">
                    <Link
                      to={""}
                      className="py-3 text-[16px] hover:text-secondary"
                    >
                      سياسه الخصوصيه{" "}
                    </Link>
                  </p>

                  <p className="py-1">
                    <Link
                      to={""}
                      className="py-3 text-[16px] hover:text-secondary"
                    >
                      اتصل بنا
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="py-3 text-xl font-semibold"> تابعونا علي </h3>
            <div className="py-1">
              <SocialIcon />
            </div>
            <p>جميع الحقوق محفوظة لسنة 2025 ©</p>
          </div>

          <div>
            <h3 className="py-1 text-[28px] font-semibold"> تطبيق الهاتف</h3>
            <p className="text-[16px] ">
              حمل التطبيق الان على هاتفك حيث يتوفر الان بنظامي الاندرويد و الأبل
            </p>
            <div className="py-2">
              <img src={appstore} alt="appstore" className="w-[50%] py-1" />
              <img src={googleplay} alt="googleplay" className="w-[50%] py-1" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
