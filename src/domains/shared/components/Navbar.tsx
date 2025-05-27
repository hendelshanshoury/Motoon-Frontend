// import React from "react";

// const Navbar = () => {
//   return <div>Navbar</div>;
// };

// export default Navbar;
// src/domains/shared/components/Navbar.tsx
import { Link, NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import logo from "../../../assets/images/download (1).png"; // Adjust the path as necessary
import SocialIcon from "./SocialIcon";

const navLinks = [
  { name: "الرئيسية", path: "/" },
  { name: "من نحن", path: "/about" },
  { name: "الفصول", path: "/classes" },
  { name: "اتصل بنا", path: "/contact" },
];

const Navbar = () => {
  return (
    <header
      className={clsx("fixed  w-full z-50 ")}
    >
      <div className="px-28 bg-gray">
        <div className="flex items-center justify-between gap-2 ">
          <div>
            <NavLink
              to={"/"}
              className="px-2 text-[16px] font-semibold text-main font-cairo hover:text-secondary"
            >
              تسجيل الدخول
            </NavLink>
            <span className="px-2 text-xl text-main">|</span>
            <NavLink
              to={"/"}
              className="px-2 text-[16px] font-semibold text-main font-cairo hover:text-secondary"
            >
              انشاء حساب جديد{" "}
            </NavLink>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <SocialIcon />
            </div>
            <span className="px-2 text-xl text-main">|</span>
            <div className="flex flex-col text-center uppercase gap-y-1">
              <span className="px-2 font-semibold text-[8px] text-secondary font-cairo">
                powered by
              </span>
              <span className="px-2 text-[8px] font-semibold text-[#2196f3] font-cairo">
                taaseel academy
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-between px-32 py-8 mx-auto">
        <Link to="/" className="text-2xl font-bold ">
          <img src={logo} alt="logoImage" className="w-[70%]" />
        </Link>
        <nav className="gap-4 px-3 text-sm font-medium bg-transparent en md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                clsx(
                  "text-[21px] transition font-cairo mx-3 font-bold hover:text-secondary nav-link",
                  isActive ? "text-secondary" : "text-main"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
