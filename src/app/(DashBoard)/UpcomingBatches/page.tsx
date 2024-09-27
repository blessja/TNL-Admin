"use client";
import React from "react";
import Image from "next/image";
import girl1 from "@/assets/girlRashi.png";
import girl3 from "@/assets/Ishwari-1 1.png";
import girl2 from "@/assets/Prachi-1.png";

const batches = [
  {
    id: 1,
    trainer: "Abhinav Kaushal",
    subject: "Spanish Trainer",
    batchStarts: "March 20th 2024",
    seats: 7,
    timing: "SAT 8:00 pm - 10:00 pm | 2 hrs",
    certification: "Beginners French | A1",
    image: girl1,
    background: "bg-[#F7DF10]",
    overlay: "bg-[#FFF00D]",
  },
  {
    id: 2,
    trainer: "T. Vijayan Joseph Scott",
    subject: "French Trainer",
    batchStarts: "March 15th 2024",
    seats: 7,
    timing: "SAT 10:00 pm - 11:00 pm | 1 hrs",
    certification: "Intermediate French | A1",
    image: girl2,
    background: "bg-[#9127a3]",
    overlay: "bg-[#771192]",
    overlaySecondary: "bg-[#8c0f8d]",
  },
  {
    id: 3,
    trainer: "Anchal Gupta",
    subject: "German Trainer",
    batchStarts: "March 20th 2024",
    seats: 7,
    timing: "SAT 9:00 pm - 11:00 pm | 3 hrs",
    certification: "Advanced French | A1",
    image: girl3,
    background: "bg-[#e76c10]",
    overlay: "bg-[#d06c10]",
    overlaySecondary: "bg-[#ea8110]",
  },
];

const Page = () => {
  return (
    <div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <fieldset className="mb-4">
          <legend className="text-lg font-semibold">Trainer Information</legend>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="trainerName"
            >
              Trainer Name:
            </label>
            <input
              type="text"
              id="trainerName"
              name="trainerName"
              value="John Doe"
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="trainerImage"
            >
              Trainer Image:
            </label>
            <input
              type="file"
              id="trainerImage"
              name="trainerImage"
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="trainerLanguage"
            >
              Trainer Language:
            </label>
            <input
              type="text"
              id="trainerLanguage"
              name="trainerLanguage"
              value="English"
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </fieldset>

        <fieldset className="mb-4">
          <legend className="text-lg font-semibold">Batch Information</legend>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="batchStart"
            >
              Batch Start Date:
            </label>
            <input
              type="datetime-local"
              id="batchStart"
              name="batchStart"
              value="2024-05-20T09:00"
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="noOfSeats"
            >
              Number of Seats:
            </label>
            <input
              type="number"
              id="noOfSeats"
              name="noOfSeats"
              value="30"
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="startTime"
            >
              Start Time:
            </label>
            <input
              type="datetime-local"
              id="startTime"
              name="startTime"
              value="2024-05-25T09:00"
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="endTime"
            >
              End Time:
            </label>
            <input
              type="datetime-local"
              id="endTime"
              name="endTime"
              value="2024-05-25T11:00"
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="certification"
            >
              Certification:
            </label>
            <input
              type="text"
              id="certification"
              name="certification"
              value="Certified Trainer"
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </fieldset>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

      <div className="mb-[112px] mt-[50px]  flex justify-center flex-col items-center">
        <h1 className="text-stone-900 text-2xl text-center mb-[60px] font-bold ">
          Upcoming Batches
        </h1>
        <div
          className=" lg:flex
            justify-center items-center w-full mx-auto lg:min-w-[1000px] 2xl:max-w-[1681px] hidden flex-col gap-4  "
          id="UpcomingCourseCards"
        >
          <div className=" flex-wrap gap-[17px]  flex xl:justify-center justify-center w-full  mb-[40px]">
            {batches.map((batch) => (
              <div
                key={batch.id}
                className="lg:w-[300px] md:w-[300px] xl:w-[300px] 2xl:w-[500px] w-full  lg:scale-100   p-4 flex-col justify-start items-start gap-2.5  rounded-xl  shadow-[#bab8b8]/40 flex shadow-md hover:shadow-2xl transition duration-300"
              >
                <div
                  className={`${batch.background}  h-[240px] rounded-t-xl flex items-center  w-full relative`}
                >
                  <div
                    className={`${batch.overlay} h-[60%] w-full absolute -z-0`}
                  ></div>
                  {batch.overlaySecondary && (
                    <div
                      className={`${batch.overlaySecondary} w-[33%] h-full absolute -z-0`}
                    ></div>
                  )}
                  <Image
                    src={batch.image}
                    alt={batch.trainer}
                    className="object-contain w-full h-full z-10"
                  />
                </div>
                <div className="  rounded-b-lg flex-col justify-start w-full items-start gap-16 flex">
                  <div className="self-stretch min-h-[344px] flex-col justify-start items-start gap-8 flex">
                    <div className="self-stretch h-[60px] px-4 flex-col justify-start items-start gap-3 flex">
                      <div className="self-stretch h-[23px] text-stone-900 text-2xl font-bold ">
                        {batch.trainer}
                      </div>
                      <div className="self-stretch h-[25px] text-neutral-500 text-xl font-normal  leading-7">
                        {batch.subject}
                      </div>
                    </div>
                    <div className="h-[252px] w-full flex-col justify-start items-start flex">
                      <div className="self-stretch px-4 pt-5 pb-4 border-b border-neutral-200 justify-between items-center inline-flex">
                        <div className="w-[122px] h-[23px] text-stone-900 text-base font-medium ">
                          Batch Starts
                        </div>
                        <div className="text-stone-900 xl:text-[14px] lg:text-[14px] text-[10px] font-bold ">
                          {batch.batchStarts}
                        </div>
                      </div>
                      <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center inline-flex">
                        <div className="w-[159px] h-[23px] text-stone-900 text-base font-medium ">
                          Number of seats
                        </div>
                        <div className="text-stone-900 xl:text-[14px] lg:text-[14px] text-[10px] font-bold ">
                          {batch.seats}
                        </div>
                      </div>
                      <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center flex">
                        <div className="w-[65px] h-[23px] text-stone-900 text-base font-medium ">
                          Timing
                        </div>
                        <div className="lg:w-[335px] w-[195px] flex-col justify-center items-end gap-[13px] inline-flex">
                          <div className="self-stretch text-right text-stone-900 text-nowrap xl:text-[14px] lg:text-[14px] text-[10px] text-sm font-bold ">
                            {batch.timing}
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch px-4 py-5 border-b border-neutral-200 justify-between items-center inline-flex">
                        <div className="w-[120px] h-[23px] text-stone-900 text-base font-medium ">
                          Certification
                        </div>
                        <div className="text-stone-900 xl:text-[14px] lg:text-[14px] text-[10px] font-bold ">
                          {batch.certification}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="flex justify-end  w-full">
                    <div className="w-[183px] h-[58px] px-8 py-3.5 bg-teal-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-neutral-50 text-2xl font-medium ">
                        Enroll now
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
