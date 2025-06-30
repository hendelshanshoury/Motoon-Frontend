import React from "react";
import background from "../assets/images/background-27da0ac0.svg";
import SubjectCard from "../domains/classes/components/SubjectCard";

const SubjectType = () => {
  return (
    <>
      <div className="relative py-8 mx-auto re lg:px-24 md:px-3 h-vh ">
        <div className="absolute right-0 hidden top-10 lg:block">
          <img src={background} alt="background" className="w-[65%] " />
        </div>
        <div className="flex items-center justify-center ">
          <h1 className="title text-[32px] text-center">انواع المواد</h1>
        </div>
        <div className="container py-10 mt-24">
          <SubjectCard />
        </div>
      </div>
    </>
  );
};

export default SubjectType;
