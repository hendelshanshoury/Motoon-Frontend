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
import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";

const navLinks = [
  { name: "الرئيسية", path: "/" },
  { name: "من نحن", path: "/about" },
  { name: "الفصول", path: "/classes" },
  { name: "اتصل بنا", path: "/contact" },
];
const navLinkssm = [
  { name: "الرئيسية", path: "/" },
  { name: "من نحن", path: "/about" },
  { name: "الفصول", path: "/classes" },
  { name: "اتصل بنا", path: "/contact" },
  { name: " انشاء حساب جديد", path: "/register" },
  { name: " تسجيل الدخول ", path: "/login" },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header
      className={clsx(
        " absolute inset-x-0 top-0 z-50 bg-transparent  transition-all duration-300  overflow-hidden"
      )}
    >
      <div className="hidden px-28 bg-grayy lg:block">
        <div className="flex items-center justify-between gap-2 ">
          <div>
            <NavLink
              to={"/login"}
              className="px-2 text-[16px] font-semibold text-main font-cairo hover:text-secondary"
            >
              تسجيل الدخول
            </NavLink>
            <span className="px-2 text-xl text-main">|</span>
            <NavLink
              to={"/register"}
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
      <div className="flex items-center justify-between px-5 pt-5 mx-auto bg-transparent  lg:py-8 md:w-[85%]  lg:w-[90%] lg:px-20">
        <Link to="/" className="text-2xl font-bold ">
          <img src={logo} alt="logoImage" className="w-[60%] md:w-[70%] " />
        </Link>
        <div className="flex items-center px-6 border rounded-lg lg:hidden border-graytext focus-within:ring-4 focus-within:ring-graytext">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            type="button"
            className="inline-flex items-center justify-center px-2 py-px rounded-md text-graytext lg:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <nav className="hidden gap-4 px-3 text-sm font-medium bg-transparent lg:flex">
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

      <div className="overflow-hidden ">
        <div
          className={clsx(
            "lg:hidden mx-5 bg-main rounded-2xl transition-all duration-500 overflow-hidden md:w-[80%] md:mx-auto ",
            isOpen ? "max-h-[500px] opacity-100 py-4 mt-2" : "max-h-0 opacity-0"
          )}
          role="dialog"
          aria-modal="true"
        >
          <div className="">
            <div className="flex flex-col items-center justify-center py-4 mt-6 space-y-4 text-center">
              {navLinkssm.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={({ isActive }) =>
                    clsx(
                      "text-[21px] transition font-cairo mx-3 py-px font-bold hover:text-secondary nav-link w-fit",
                      isActive ? "text-secondary" : "text-graytext"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to={"/support"}
                className={({ isActive }) =>
                  clsx(
                    "text-[21px] transition font-cairo mx-3 py-px font-bold hover:text-secondary nav-link w-fit flex justify-center items-center",
                    isActive ? "text-secondary" : "text-graytext"
                  )
                }
              >
                <MdOutlineMailOutline className="inline-block text-[24px] mx-1" />{" "}
                <span>support</span>
              </NavLink>
              {/* ?=========================================== */}
              <SocialIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
