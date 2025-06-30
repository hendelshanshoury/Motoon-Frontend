import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FiBookOpen } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

import arrowleft from "../../../assets/images/icons/arrow-next.svg";
import arrowright from "../../../assets/images/icons/arrow-back.svg";

const SubjectCard = () => {
  const subjects = [
    {
      id: 1,
      name: "ماده التجويد ",
      image: "/src/assets/images/icons/stepn/التجويد.png",
      description: `يدرس الطالب فيها متنًا من أهم متون التجويد والتلاوة هو متن المنظومة الجزرية، والمسمى (المقدمة فيما على قارئ القران أن يعلمه) للعلامة / أبي الخير محمد بن محمد بن محمد شمس الدين بن الجزري (المتوفى: 833هـ)، وتميزت المنظومة بجزالة الألفاظ وحسن الاختصار وصغر الحجم مع كثرة أبحاثها ومواضيعها، فقد جمع جل مباحث التجويد بعبارة جميلة وبأسلوب رائع وتحرير مذهل. ويتم تقسيم المقرر على فصلين دراسيين: الفصل الدراسي الثالث: يدرس فيه الطالب مقدمة في علم التجويد وتعريف بالإمام ابن الجزري رحمه الله، ثم شرح المقدمة الجزرية من أول المنظومة حتى الكلام عن التجويد تعريفه وحكمه ومراتب الناس فيه.. ثم حكم قراءة القرآن بالمقامات. الفصل الدراسي الرابع: يدرس فيه الطالب المتبقي من المنظومة الجزرية بداية من أحكام التفخيم والترقيق وحتى نهاية المنظومة.`,
    },
    {
      id: 2,
      name: " ماده الدعوه",
      image: "/src/assets/images/icons/stepn/الدعوة.png",
      description: `يتعلم فيها الطالب فنون الدعوة وأصولها وتطبيقاتها، وما يجب على الداعية الأخذ به وما يجب عليه الانتهاء عنه، وأهم وأبرز القضايا الدعوية والمشكلات التي تواجه الدعوة والدعاة وكيفية معالجتها، وذلك من خلال مذكرات من اعداد استاذ المادة الدكتور / بلال بوقدوم ، ويتم تقسيم المقرر على أربع فصول دراسية: الفصل الدراسي الأول: يدرس فيه الطالب من أول الكتاب إلى عدم متابعة من خالف النص الشرعي مهما علت منزلته. الفصل الدراسي الثاني: يدرس فيه الطالب من (الرجوع عن الرأي إلي الدليل) إلى (الوسطية والاعتدال) الفصل الدراسي الثالث: يدرس فيه الطالب من (وحدة المنهج) إلى (المجال الأخلاقي) الفصل الدراسي الرابع: يدرس فيه الطالب من (المجال الوقائي- الشبهات) إلى (المشكلات الدعوية)`,
    },
    {
      id: 3,
      name: "ماده السيره",
      image: "/src/assets/images/icons/stepn/السيرة.png",
      description: `يدرس فيها الطالب كتاب موسوعة السيرة النبوية، تأليف الدكتور / خالد جمعه الخراز. وهو مقسم على 32 محاضرة تبدأ: الفصل الدراسي الثالث: من أول الكتاب من أهمية السيرة النبوية، ونسب النبي صلى الله عليه وسلم وقبيلته وأقاربه، وولادته، ورضاعه، وحضانته، وكفالته، وبعثته .. إلى تنوع أساليب المشركين في صد المسلمين عن دينهم الحق. الفصل الدراسي الرابع: يستكمل فيه الطالب دراسة السيرة بداية من الحصار في شعب أبي طالب، حتى وفاة النبي -صلى الله عليه وسلم-.`,
    },
    {
      id: 4,
      name: "ماده العقيده",
      image: "/src/assets/images/icons/stepn/العقيدة.png",
      description: `يتم تدريس مادة العقيدة وفق منهج أهل السنة والجماعة في المعتقد، حيث يتم قراءة المتون المعتمدة قراءة صحيحة مع شرحها وبيان مفرداتها بطريقة ميسرة بسيطة، خالية من الحشو والمخالفات، وبيان موضوعاتها مثل: مصادر تلقي علم العقيدة، والتعريف بالتوحيد وأقسامه، والتأصيل لقضايا توحيد الألوهية والربوبية والأسماء والصفات، والتعريف بالتكفير وضوابطه، وأشراط الساعة، والصحابة وآل البيت رضي الله عنهم، والأولياء وكراماتهم، والشفاعة، وما يتعلق بها. إضافة إلى تزويد الطالب بتحصين علمي يرد به على الشبهات المختلفة كشبهات الملحدين، ودعاة تجديد النظر في النصوص الشرعية، وذلك من خلال أربع فصول دراسية: الفصل الدراسي الأول: يدرس الطالب فيه متون العقيدة المختصرة للعلامة / محمد بن عبد الوهَّاب ـ رحمه الله، وهي: - متن الأصول الثلاثة. - متن القواعد الأربعة. - الأصول الستة. الفصل الدراسي الثاني: يدرس الطالب فيه كتاب التوحيد للعلامة / محمد بن عبد الوهَّاب. الفصل الدراسي الثالث: يدرس الطالب فيه كتابين، هما: - العقيدة الواسطية لشيخ الإسلام/ تقي الدين ابن تيمية. رحمه الله - كتاب نواقض الإسلام لشيخ الإسلام / محمد بن عبدالوهاب - رحمه الله. الفصل الدراسي الرابع: يدرس الطالب فيه كتاب القواعد المثلى في صفات الله وأسمائه الحسنى لفضيلة لشيخ/ محمد صالح العثيمين - رحمه الله.`,
    },
    {
      id: 5,
      name: "ماده اصول التفسير",
      image: "/src/assets/images/icons/stepn/التفسير.png",
      description: `يدرس فيها الطالب كتاب موسوعة السيرة النبوية، تأليف الدكتور / خالد جمعه الخراز. وهو مقسم على 32 محاضرة تبدأ: الفصل الدراسي الثالث: من أول الكتاب من أهمية السيرة النبوية، ونسب النبي صلى الله عليه وسلم وقبيلته وأقاربه، وولادته، ورضاعه، وحضانته، وكفالته، وبعثته .. إلى تنوع أساليب المشركين في صد المسلمين عن دينهم الحق. الفصل الدراسي الرابع: يستكمل فيه الطالب دراسة السيرة بداية من الحصار في شعب أبي طالب، حتى وفاة النبي -صلى الله عليه وسلم-.`,
    },
    {
      id: 6,
      name: "ماده  الحديث",
      image: "/src/assets/images/icons/stepn/الحديث.png",
      description: `يتعلم فيها الطالب علم مصطلح الحديث وتطبيقاته، ونماذج حديثية مختلفة وذلك من خلال قراءة وشرح متن نخبة الفكر في مصطلح أهل الأثر وهو في علم مصطلح الحديث للإمام / ابن حجر العسقلاني، وكتاب الأربعون النووية للإمام النووي، وكتاب عمدة الأحكام للمقدسي. ويتم تقسيم هذا المقرر على الفصول الدراسية الأربعة كالآتي: الفصل الدراسي الأول: يدرس الطالب فيه متن نخبة الفكر من أول الكتاب حتى أنواع الجهالة الفصل الدراسي الثاني: يدرس الطالب فيه متن نخبة الفكر من أول درس العلو وأقسامه حتى نهاية الكتاب. الفصل الدراسي الثالث: يدرس الطالب فيه متن الأربعون النووية. الفصل الدراسي الرابع: يدرس الطالب فيه متن عمدة الأحكام للمقدسي كتابي (الطهارة والصلاة).`,
    },
    {
      id: 7,
      name: "ماده الفقه",
      image: "/src/assets/images/icons/stepn/الفقه.png",
      description: `يتعلم فيها الطالب علم مصطلح الحديث وتطبيقاته، ونماذج حديثية مختلفة وذلك من خلال قراءة وشرح متن نخبة الفكر في مصطلح أهل الأثر وهو في علم مصطلح الحديث للإمام / ابن حجر العسقلاني، وكتاب الأربعون النووية للإمام النووي، وكتاب عمدة الأحكام للمقدسي. ويتم تقسيم هذا المقرر على الفصول الدراسية الأربعة كالآتي: الفصل الدراسي الأول: يدرس الطالب فيه متن نخبة الفكر من أول الكتاب حتى أنواع الجهالة الفصل الدراسي الثاني: يدرس الطالب فيه متن نخبة الفكر من أول درس العلو وأقسامه حتى نهاية الكتاب. الفصل الدراسي الثالث: يدرس الطالب فيه متن الأربعون النووية. الفصل الدراسي الرابع: يدرس الطالب فيه متن عمدة الأحكام للمقدسي كتابي (الطهارة والصلاة).`,
    },
  ];
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<
    (typeof subjects)[0] | null
  >(null);

  const NextArrow = () => (
    <div
      ref={nextRef}
      className="absolute z-10 px-2 py-5  transition -translate-y-1/2  rounded-lg  lg:rounded-full  cursor-pointer right-[-4%] top-1/2 lg:text-grayy bg-secondary hover:bg-primary lg:bg-white lg:hover:bg-primary"
    >
      <img src={arrowleft} alt="Next" className="w-5 h-5" />
    </div>
  );

  const PrevArrow = () => (
    <div
      ref={prevRef}
      className="absolute z-10 px-2 py-5  transition -translate-y-1/2 rounded-lg  lg:rounded-full cursor-pointer left-[-4%] top-1/2 lg:text-grayy bg-secondary hover:bg-primary lg:bg-white lg:hover:bg-primary"
    >
      <img src={arrowright} alt="Next" className="w-5 h-5" />
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
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
      >
        {subjects.map((subject) => (
          <SwiperSlide key={subject.id}>
            <div className="p-6">
              <div className="flex flex-col items-center justify-between gap-6 py-4 bg-white rounded-lg shadow-xl cursor-pointer px-7 hover:shadow-shadoww">
                <img
                  src={subject.image}
                  alt={subject.name}
                  className="object-contain w-20 h-20 mb-1"
                />
                <h2 className="mb-2 text-xl font-semibold text-gray-800">
                  {subject.name}
                </h2>
                <p className="mb-2 text-sm text-center text-gray-600">
                  {subject.description.slice(0, 100)}...
                </p>
                <button
                  onClick={() => setSelectedSubject(subject)}
                  className="px-5 py-2 text-white shadow-lg bg-secondary rounded-3xl"
                >
                  المزيد
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {selectedSubject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg max-w-2xl w-[95%]  md:w-full p-6 relative">
            <button
              onClick={() => setSelectedSubject(null)}
              className="absolute text-gray-500 top-4 left-4 hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className="px-3 text-center md:p-6 ">
              <h2 className="mb-4 text-2xl font-bold ">
                {selectedSubject.name}
              </h2>
              <p className="text-gray-700">{selectedSubject.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  // return (
  //   <>
  //     <div className="px-4 py-8">
  //       <Swiper
  //         // modules={[Navigation, Pagination]}
  //         navigation
  //         // pagination={{ clickable: true }}
  //         spaceBetween={20}
  //         breakpoints={{
  //           320: { slidesPerView: 1 },
  //           640: { slidesPerView: 2 },
  //           1024: { slidesPerView: 3 },
  //         }}
  //       >
  //         {subjects.map((subject) => (
  //           <SwiperSlide key={subject.id}>
  //             <div className="flex flex-col items-center justify-between px-6 py-6 bg-white rounded-lg shadow-lg hover:shadow-xl">

  //               <img
  //                 src={subject.image}
  //                 alt={subject.name}
  //                 className="object-contain w-20 h-20 mb-4"
  //               />
  //               <h2 className="mb-2 text-xl font-semibold text-gray-800">
  //                 {subject.name}
  //               </h2>
  //               <p className="mb-4 text-sm text-gray-600">
  //                 {subject.description.slice(0, 100)}...
  //               </p>
  //               <button className="px-5 py-2 text-white shadow-lg bg-secondary rounded-3xl">
  //                 المزيد
  //               </button>
  //             </div>
  //           </SwiperSlide>
  //         ))}
  //       </Swiper>
  //     </div>
  //     {/* <div className="grid grid-cols-1 gap-4 px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-4">
  //       {subjects.map((subject) => (
  //         <div
  //           key={subject.id}
  //           className="flex items-center justify-center px-4 py-6 mb-4 bg-white rounded-lg shadow-lg hover:shadow-xl"
  //         >
  //           <div className="py-4 text-center">
  //             <div className="flex justify-center mb-4 text-secondary"></div>
  //             <img
  //               src={subject.image}
  //               alt={subject.name}
  //               className="w-16 h-16 mx-auto mb-4"
  //             />
  //             <h2 className="mb-2 text-xl font-semibold text-gray">
  //               {subject.name}
  //             </h2>
  //             <p className="py-2 mb-4 text-sm text-graytext">
  //               {subject.description.slice(0, 100)}...
  //             </p>
  //             <button className="px-5 py-2 text-white shadow-lg bg-secondary rounded-3xl">
  //               المزيد
  //             </button>
  //           </div>
  //         </div>
  //       ))}
  //     </div> */}
  //   </>
  // );
};

export default SubjectCard;
