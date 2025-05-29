import React from "react";
import herosection from "../../../assets/images/header2-d1cd08ba.png"; // Adjust the path as necessary

const HeroSection = () => {
  return (
    <>
      <div>
        <div>
          <div className="relative w-full h-screen">
            <img
              src={herosection}
              alt="Hero Section"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 z-10 flex items-center justify-center mt-4">
              <button className="px-12 py-3 text-xl text-black rounded-3xl bg-primary hover:bg-secondary">
                ابدا التعلم الان
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
