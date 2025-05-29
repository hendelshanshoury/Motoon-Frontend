import React from "react";
import { FiBookOpen, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import Slider from "react-slick";
import background from "../../../assets/images/background-27da0ac0.svg";

const SubjectsList = () => {
  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      onClick={onClick}
      className="absolute z-10 p-2 text-white transition -translate-y-1/2 rounded-full cursor-pointer right-[-4%] top-1/2 bg-secondary hover:bg-amber-500"
    >
      <MdKeyboardDoubleArrowRight size={24} />
    </div>
  );

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      onClick={onClick}
      className="absolute z-10 p-2 text-white transition -translate-y-1/2 rounded-full cursor-pointer left-[-4%] top-1/2 bg-secondary hover:bg-amber-500"
    >
      <MdOutlineKeyboardDoubleArrowLeft size={24} />
    </div>
  );

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="relative py-8 mx-auto re lg:px-24 md:px-3">
        <div className="absolute right-0 hidden top-10 lg:block">
          <img src={background} alt="background" className="w-[65%] " />
        </div>
        <div className="flex items-center justify-center ">
          <h1 className="title text-[32px] text-center">انواع المواد</h1>
        </div>
        <div className="container py-10 mt-24">
          <Slider {...settings}>
            <div className="px-8 lg:px-4">
              <div className="flex items-center justify-center px-4 py-6 mb-4 bg-white rounded-lg shadow-lg hover:shadow-xl">
                <div className="py-4 text-center">
                  <div className="flex justify-center mb-4 text-secondary">
                    <FiBookOpen size={48} />
                  </div>
                  <h2 className="mb-2 text-xl font-semibold text-gray">
                    ماده اصول التفسير
                  </h2>
                  <p className="py-2 mb-4 text-sm text-graytext">
                    {" "}
                    يتعلم فيها الطالب قواعد علم التفسير وأصوله وضوابطه، وشروط
                    المفسر وما يحتاج إليه من علوم، ومناهج...
                  </p>
                  <button className="px-5 py-2 text-white shadow-lg bg-secondary rounded-3xl">
                    {" "}
                    المزيد
                  </button>
                </div>
              </div>
            </div>
            <div className="px-8">
              <div className="flex items-center justify-center p-4 px-10 mb-4 bg-white rounded-lg shadow-lg">
                <div className="py-4 text-center">
                  <div className="flex justify-center mb-4 text-secondary">
                    <FiBookOpen size={48} />
                  </div>
                  <h2 className="mb-2 text-xl font-semibold text-gray">
                    ماده اصول التفسير
                  </h2>
                  <p className="py-2 mb-4 text-sm text-graytext">
                    {" "}
                    يتعلم فيها الطالب قواعد علم التفسير وأصوله وضوابطه، وشروط
                    المفسر وما يحتاج إليه من علوم، ومناهج...
                  </p>
                  <button className="px-5 py-2 text-white shadow-lg bg-secondary rounded-3xl">
                    {" "}
                    المزيد
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SubjectsList;
