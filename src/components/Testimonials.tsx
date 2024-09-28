"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import { NavigationOptions } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Rating from "react-rating";
import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  useDeleteTestimonialMutation,
  useGetAllTestimonialsQuery,
} from "../Store/apiSlice";
const TypedRating = Rating as unknown as React.FC<any>;

type Testimonial = {
  _id: string;
  name: string;
  description: string;
  profession: string;
  image: string;
};

type Props = {
  language: string;
  context: string;
};

const Testimonials: React.FC<Props> = ({ language, context }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const navigationPrevRef = React.useRef<HTMLButtonElement | null>(null);
  const navigationNextRef = React.useRef<HTMLButtonElement | null>(null);
  const [deleteTestimonial, isLoading] = useDeleteTestimonialMutation();
  const [deletingIdx, setDeletingIdx] = useState<null | number>(null);

  const { data } = useGetAllTestimonialsQuery({
    language,
    context,
  });

  useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]);

  return (
    <div className="w-full bg-[#F6F3F3] lg:px-10 mx-auto relative flex justify-center items-center flex-col pt-[60px] sm:pt-[80px] pb-[40px]">
      <div className="-mt-[20px] mx-auto flex justify-center flex-col items-center">
        <h1 className="text-stone-900 text-center text-[32px] sm:text-[36px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] sm:font-bold mb-4 font-semibold max-lg:text-2xl">
          Hear It From The Learners
        </h1>
        <div className="w-full">
          <Swiper
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Navigation]}
            navigation
            onBeforeInit={(swiper: SwiperClass) => {
              const navigation = swiper.params.navigation as NavigationOptions;
              navigation.prevEl = navigationPrevRef.current;
              navigation.nextEl = navigationNextRef.current;
              swiper.navigation.update(); // Update Swiper's navigation to use the new elements
            }}
            onSlideChange={(swiper) => setCurrentPage(swiper.activeIndex)}
            slidesPerView="auto"
            breakpoints={{
              1920: { slidesPerView: 4 },
              1280: { slidesPerView: 3 },
              1024: { slidesPerView: 2 },
              368: { slidesPerView: 1 },
            }}
            className="mySwiper mx-auto flex justify-center items-center max-sm:max-h-full w-[326px] sm:w-[404px] lg:w-[808px] xl:w-[1000px] h-[400px] p-4 "
          >
            {data &&
              data.map((student: Testimonial, index: number) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center max-sm:w-[326px] w-[326px] h-[335px] "
                >
                  <div
                    className="flex flex-col justify-between bg-white rounded-2xl shadow-md m-2 p-[20px] transition duration-300 hover:shadow-xl lg:p-8 max-w-[404px] h-[350px] hover:scale-105 cursor-pointer"
                    onClick={(e) => {}}
                  >
                    <div className="text-[12px]/[16px] text-stone-900">
                      “{student?.description.slice(0, 250)}...”
                    </div>
                    <div className="flex gap-2.5">
                      <Image
                        alt="studentPic"
                        height={150}
                        width={150}
                        src={student.image}
                        className="w-14 h-14 object-cover rounded-full"
                      />
                      <div className="flex flex-col flex-1 self-start">
                        <div className="font-bold text-stone-900">
                          {student.name}
                        </div>
                        <div className="mt-1 text-sm font-medium text-neutral-500">
                          {student.profession}
                        </div>
                        <div className="flex gap-1.5 pr-20 mt-1">
                          <TypedRating
                            className="text-[#FFC107] text-[14px]"
                            initialRating={5}
                            readonly
                            emptySymbol={<FaRegStar />}
                            fullSymbol={<FaStar />}
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={async () => {
                        // Add your delete logic here
                        setDeletingIdx(index);
                        try {
                          const response = deleteTestimonial(student?._id);
                          response.then(() => {
                            alert("Testimonial Deleted Successfully");
                            setDeletingIdx(null);
                          });
                        } catch (error) {
                          alert("Not able to delete");
                          setDeletingIdx(null);
                        }
                      }}
                      className="bg-red-600 text-white rounded-md py-2 px-4 mt-4 hover:bg-red-700 transition-colors duration-200"
                    >
                      {deletingIdx===index ? "Deleting" : "Delete"}
                    </button>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          <div className="mt-8 flex items-center justify-center gap-x-[16px]">
            <button
              ref={navigationPrevRef}
              className="w-16 h-[58px] px-5 py-4 rounded-lg border-2 border-primary-color text-xl text-primary-color focus:text-white hover:text-white hover:bg-primary-color focus:bg-primary-color inline-flex items-center justify-center"
            >
              <FaArrowRight className="rotate-180" />
            </button>
            <button
              ref={navigationNextRef}
              className="w-16 h-[58px] px-5 py-4 rounded-lg border-2 border-primary-color text-xl text-primary-color focus:text-white hover:text-white hover:bg-primary-color focus:bg-primary-color inline-flex items-center justify-center"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
