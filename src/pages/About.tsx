// import React from "react";
// import { OurVision } from "../domains/about/components/OurVision";
// import Home from "./Home";
// import HeroSection from "../domains/home/components/HeroSection";
// import LecturersList from "../domains/home/components/LecturersList";
// import { AppDownloadSectio } from "./../domains/shared/components/AppDownloadSectio";

// const About = () => {
//   return (
//     <>
//       <HeroSection />
//       <div className="flex items-center justify-center mt-8 mb-4">
//         <h1 className="py-2 text-3xl font-semibold title">نبذه من نكون ؟</h1>
//       </div>
//       <LecturersList />

//       <OurVision />
//       <AppDownloadSectio />
//     </>
//   );
// };

// export default About;

import React from "react";
import Home from "./Home";
import SubjectType from "./SubjectType";
import LectureType from "./LectureType";
import { LuArrowUpDown } from "react-icons/lu";
import { AppDownloadSection } from "./UpDownloadSection";
import { OurVision } from "./OurVision";

const About = () => {
  return (
    <>
      <Home />
      {/* <SubjectType />
      <LectureType /> */}
      <AppDownloadSection />
      <OurVision />
    </>
  );
};

export default About;
