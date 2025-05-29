import React from "react";
import HeroSection from "./../domains/home/components/HeroSection";
import SubjectsList from "../domains/home/components/SubjectsList";
import LecturersList from "../domains/home/components/LecturersList";
import { AppDownloadSectio } from "../domains/shared/components/AppDownloadSectio";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SubjectsList />
      <LecturersList />
      <AppDownloadSectio />
    </>
  );
};

export default Home;
