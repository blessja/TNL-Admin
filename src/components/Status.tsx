import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { CustomRating } from "./CustomRating";

interface StatusBarProps {
  data: {
    AlphaMentors: number;
    GoogleReviewsRating: number;
    HappyLearners: number;
    HoursOfEnlightenment: number;
    Languages: number;
  };
}

const StatusBar: React.FC<StatusBarProps> = (data) => {
  const StatusDATA = data.data;
  console.log(StatusDATA);
  return (
    <div>
      {" "}
      <div className="flex p-5 w-full h-full justify-center items-center">
        <div className="w-fit xl:w-[1680px]  min-h-[199px] py-[52px] bg-white z-10 rounded-2xl border border-stone-300 flex-col max-sm:mx-4 justify-center items-center flex">
          <div className="justify-around w-full 3xl:gap-[90px] gap-10 items-center flex-wrap flex">
            <div className="flex-col justify-center items-center gap-3 inline-flex w-full lg:w-auto">
              <div className="text-center text-stone-900 max-sm:text-3xl text-5xl font-bold">
                {StatusDATA.Languages ? StatusDATA.Languages : " 7"}
              </div>
              <div className="w-fit xl:w-[125px] lg:w-[125px] text-center text-black text-opacity-60 mx-auto max-sm:text-base xl:text-xl lg:text-lg  font-normal">
                Languages
              </div>
            </div>
            <div className="flex-col justify-center items-center gap-3 inline-flex w-full lg:w-auto">
              <div className="text-center max-sm:text-3xl text-stone-900 text-5xl font-bold">
                {StatusDATA.HappyLearners ? StatusDATA.HappyLearners : " 5000+"}
              </div>
              <div className="w-fit xl:w-[180px] lg:w-[180px] text-center text-black text-opacity-60 mx-auto max-sm:text-base xl:text-xl lg:text-lg  font-normal">
                Happy Learners
              </div>
            </div>
            <div className="flex-col justify-center items-center gap-3 inline-flex w-full lg:w-auto">
              <div className="text-center max-sm:text-3xl text-stone-900 text-5xl font-bold">
                {StatusDATA.AlphaMentors ? StatusDATA.AlphaMentors : " 150+"}
              </div>
              <div className="w-fit xl:w-[165px] lg:w-[165px] text-center text-black text-opacity-60 xl:text-xl lg:text-lg  mx-auto max-sm:text-base font-normal">
                Alpha Mentors
              </div>
            </div>
            <div className="flex-col justify-center items-center gap-3 inline-flex w-full lg:w-auto">
              <div className="text-center text-stone-900 text-5xl font-bold max-sm:text-3xl">
                {StatusDATA.HoursOfEnlightenment
                  ? StatusDATA.HoursOfEnlightenment
                  : " 50000+"}
              </div>
              <div className="w-fit xl:w-[267px] lg:w-[267px] mx-auto max-sm:text-base text-center text-black text-opacity-60 xl:text-xl lg:text-lg  font-normal">
                Hours of Enlightenment
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-3 inline-flex w-full lg:w-auto">
              <div className="justify-start items-center gap-3 flex">
                <div className="text-center text-stone-900 text-5xl justify-center items-center max-sm:text-3xl font-bold gap-x-[8px] flex">
                  4.9
                  {StatusDATA.HappyLearners ? (
                    <CustomRating
                      initialRating={StatusDATA.GoogleReviewsRating}
                    />
                  ) : (
                    <CustomRating />
                  )}
                </div>
              </div>
              <div className="w-fit xl:w-[182px] lg:w-[182px] text-center text-black text-opacity-60 max-sm:text-base xl:text-xl lg:text-lg  font-normal">
                Google Reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
