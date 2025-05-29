import React from "react";
import Navbar from "./../domains/shared/components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../domains/shared/components/Footer";
import App from "../App";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      {/* <div className="px-5 py-10 lg:py-20"> */}
      <Outlet />
      {/* </div> */}
      <Footer />
    </>
  );
};

export default MainLayout;
