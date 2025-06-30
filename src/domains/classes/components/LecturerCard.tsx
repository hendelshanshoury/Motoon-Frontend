import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import arrowleft from "../../../assets/images/icons/arrow-next.svg";
import arrowright from "../../../assets/images/icons/arrow-back.svg";

const LecturerCard = () => {
  const lecturers = [
    {
      id: 1,
      name: "الشيخ خالد جمعة الخراز",
      image: "/src/assets/images/images/الشيخ_خالد_جمعة_الخراز.png",
    },
    {
      id: 2,
      name: "الشيخ عثمان الخميس",
      image: "/src/assets/images/images/الشيخ_عثمان_الخميس.png",
    },
    {
      id: 3,
      name: "الشيخ محمد طاهري",
      image: "/src/assets/images/images/الشيخ_محمد_طاهري.png",
    },
    {
      id: 4,
      name: "بلال أبو قدوم",
      image: "/src/assets/images/images/بلال_أبو_قدوم.png",
    },
    {
      id: 5,
      name: "عبد الرحمن الحميدي",
      image: "/src/assets/images/images/عبد_الرحمن_الحميدي.png",
    },
    {
      id: 6,
      name: "فهد المقرن",
      image: "/src/assets/images/images/فهد_المقرن.png",
    },
    {
      id: 7,
      name: "محمد العتيبي",
      image: "/src/assets/images/images/محمد_العتيبي.png",
    },
    {
      id: 8,
      name: "محمد خالد الهندي",
      image: "/src/assets/images/images/محمد_خالد_الهندي.png",
    },
    {
      id: 9,
      name: "محمد ضاوي العصيمي",
      image: "/src/assets/images/images/محمد_ضاوي_العصيمي.png",
    },
  ];

  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  const NextArrow = () => (
    <div
      ref={nextRef}
      className="absolute z-10 px-2 py-5 transition -translate-y-1/2 rounded-lg lg:rounded-full cursor-pointer right-[-4%] top-1/2 lg:text-grayy bg-secondary hover:bg-primary lg:bg-white lg:hover:bg-primary"
    >
      <img src={arrowleft} alt="Next" className="w-5 h-5" />
    </div>
  );

  const PrevArrow = () => (
    <div
      ref={prevRef}
      className="absolute z-10 px-2 py-5 transition -translate-y-1/2 rounded-lg lg:rounded-full cursor-pointer left-[-4%] top-1/2 lg:text-grayy bg-secondary hover:bg-primary lg:bg-white lg:hover:bg-primary"
    >
      <img src={arrowright} alt="Previous" className="w-5 h-5" />
    </div>
  );

  return (
    <div className="relative px-4 py-8">
      <PrevArrow />
      <NextArrow />

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {lecturers.map((lecturer) => (
          <SwiperSlide key={lecturer.id}>
            <div className="p-6">
              <div className="flex flex-col items-center justify-between gap-6 py-">
                <div className="px-2">
                  <div className="flex items-center justify-center p-2 px-6 mb-4 bg-white rounded-lg">
                    <div className="flex flex-col items-center justify-center py-4 text-center">
                      <div className="flex items-center justify-center mb-4">
                        <img
                          src={lecturer.image}
                          alt={lecturer.name}
                          className="object-cover w-32 h-32 rounded-full"
                        />
                      </div>
                      <h2 className="py-4 mb-2 text-[16px] font-bold text-gray">
                        {lecturer.name}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LecturerCard;
