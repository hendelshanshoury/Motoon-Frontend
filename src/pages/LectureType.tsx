import React from "react";
import SubjectCard from "../domains/classes/components/SubjectCard";
import LecturerCard from "../domains/classes/components/LecturerCard";

const LectureType = () => {
  return (
    <>
      <div className="relative py-8 mx-auto re lg:px-24 md:px-3 h-vh ">
       
        <div className="flex items-center justify-center ">
          <h1 className="title text-[32px] text-center">المحاضرون </h1>
        </div>
        <div className="container py-5 ">
          <LecturerCard />
        </div>
      </div>
    </>
  );
};

export default LectureType;
