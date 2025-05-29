import React from "react";
import Slider from "react-slick";
import osman from "../../../assets/images/الشيخ_عثمان_الخميس.png";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

const LecturersList = () => {
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
    slidesToShow: 5,
    slidesToScroll: 1,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="py-8 mx-auto lg:px-24 md:px-3">
        <div className="flex items-center justify-center ">
          <h1 className="title text-[32px] text-center">المحاضرون </h1>
        </div>
        <div className="container py-5 mt-16">
          <Slider {...settings}>
            <div className="px-2">
              <div className="flex items-center justify-center p-2 px-6 mb-4 bg-white rounded-lg ">
                <div className="flex-col items-center justify-center py-4 text-center">
                  <div className="flex items-center justify-center mb-4 text-secondary">
                    <img
                      src={osman}
                      alt="Profile"
                      className="object-cover w-32 h-32 rounded-full"
                    />
                  </div>
                  <h2 className="py-4 mb-2 font-bold text-[16px] text-gray">
                    الشيخ عثمان الخميس{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className="flex items-center justify-center p-2 px-6 mb-4 bg-white rounded-lg ">
                <div className="flex-col items-center justify-center py-4 text-center">
                  <div className="flex items-center justify-center mb-4 text-secondary">
                    <img
                      src={osman}
                      alt="Profile"
                      className="object-cover w-32 h-32 rounded-full"
                    />
                  </div>
                  <h2 className="py-4 mb-2 font-bold text-[16px] text-gray">
                    الشيخ عثمان الخميس{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className="flex items-center justify-center p-2 px-6 mb-4 bg-white rounded-lg ">
                <div className="flex-col items-center justify-center py-4 text-center">
                  <div className="flex items-center justify-center mb-4 text-secondary">
                    <img
                      src={osman}
                      alt="Profile"
                      className="object-cover w-32 h-32 rounded-full"
                    />
                  </div>
                  <h2 className="py-4 mb-2 font-bold text-[16px] text-gray">
                    الشيخ عثمان الخميس{" "}
                  </h2>
                </div>
              </div>
            </div>
           
          </Slider>
        </div>
      </div>
    </>
  );
};

export default LecturersList;
