import React from "react";
import { NavLink } from "react-router-dom";
import { FaBook, FaRegUser } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";

const UserNavbar = () => {
  return (
    <>
      {/* <nav className="navbar-expand navbar-light bg-light shadow mb-[50px]">
        <ul className=" container mr-auto justify-center lg:justify-start third-ul text-[25px] sm:text-[18px]">
          <li className="nav-item">
            <NavLink
              to="/profile"
              className="px-4 py-4 nav-link lg:px-4 bg-main-hover"
            >
              <FaRegUser />
              <span className="hidden mx-1 lg:inline">الملف الشخصي </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/reports-certifications"
              className="px-4 py-4 nav-link lg:px-4 bg-main-hover"
            >
              <FaRegUser />
              <span className="hidden mx-1 lg:inline">التقارير والشهادات </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/semesters"
              className="px-4 py-4 nav-link lg:px-4 bg-main-hover"
            >
              <FaRegUser />
              <span className="hidden mx-1 lg:inline">الفصول </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/help"
              className="px-4 py-4 nav-link lg:px-4 bg-main-hover"
            >
              <FaRegUser />
              <span className="hidden mx-1 lg:inline">المساعده </span>
            </NavLink>
          </li>
        </ul>
      </nav> */}

      <nav className="shadow-lg ">
        <ul className="container flex flex-wrap justify-center lg:justify-start text-[18px] lg:text-[25px]">
          <li className="">
            <NavLink
              to="/profile"
              className="flex items-center px-6 py-6 text-xl text-black transition lg:px-4 lg:text-lg hover:bg-secondary"
            >
              <FaRegUser />
              <span className="hidden mx-1 lg:inline">الملف الشخصي</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/reports-certifications"
              className="flex items-center px-6 py-6 text-xl text-black transition lg:px-4 lg:text-lg hover:bg-secondary"
            >
              <FaBook />
              <span className="hidden mx-1 lg:inline">التقارير والشهادات</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/semesters"
              className="flex items-center px-6 py-6 text-xl text-black transition lg:px-4 lg:text-lg hover:bg-secondary"
            >
              <FaBook />
              <span className="hidden mx-1 lg:inline">الفصول</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/helppage"
              className="flex items-center px-6 py-6 text-xl text-black transition lg:px-4 lg:text-lg hover:bg-secondary"
            >
              <IoIosHelpCircleOutline />
              <span className="hidden mx-1 lg:inline">المساعدة</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default UserNavbar;
