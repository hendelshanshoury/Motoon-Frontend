// import React from "react";
// import HeroSection from "./../domains/home/components/HeroSection";
// import SubjectsList from "../domains/home/components/SubjectsList";
// import LecturersList from "../domains/home/components/LecturersList";
// import { AppDownloadSectio } from "../domains/shared/components/AppDownloadSectio";
// import UserNavbar from "./../domains/shared/components/UserNavbar";
// import HelpPage from "./AuthPages/HelpPage";
// import ProfilePage from "./AuthPages/ProfilePage";

// const Home = () => {
//   return (
//     <>
//       <HeroSection />
//       <UserNavbar />
//       <ProfilePage />
//       <HelpPage />
//       <SubjectsList />
//       <LecturersList />
//       <AppDownloadSectio />
//     </>
//   );
// };

// export default Home;

import React from "react";
import herosection from "../assets/images/header2-d1cd08ba.png"; // Adjust the path as necessary
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div className="relative w-full h-screen">
          <img
            src={herosection}
            alt="Hero Section"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 z-10 flex items-center justify-center mt-4">
            <Link to={"/login"}>
              <button className="px-12 py-3 text-xl text-black rounded-3xl bg-primary hover:bg-secondary">
                ابدا التعلم الان
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
