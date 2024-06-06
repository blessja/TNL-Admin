"use client";
import {
  getStatsAsync,
  // updateStatsAsync,
  selectFAQStatus,
  selectStats,
} from "@/Store/adminSlice";
import StatusBar from "@/components/Status";
import { useAppDispatch } from "@/helpers/hooks";
import React, { ChangeEventHandler, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const dispatch = useAppDispatch();

  const statsData = useSelector(selectStats);
  const status = useSelector(selectFAQStatus);

  const [languages, setLanguages] = useState<number>(0);
  const [learners, setLearners] = useState<number>(0);
  const [alphaMentors, setAlphaMentors] = useState<number>(0);
  const [hoursOfEnlightenment, setHoursOfEnlightenment] = useState<number>(0);
  const [googleReviews, setGoogleReviews] = useState<number>(0);

  useEffect(() => {
    dispatch(getStatsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (statsData) {
      setLanguages(statsData.totalLanguages);
      setLearners(statsData.totalLearners);
      setAlphaMentors(statsData.totalMentors);
      setHoursOfEnlightenment(statsData.totalHours);
      setGoogleReviews(statsData.googleReviews);
    }
  }, [statsData]);

  const handleLanguagesChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setLanguages(value);
    }
  };

  const handleLearnersChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setLearners(value);
    }
  };

  const handleAlphaMentorsChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setAlphaMentors(value);
    }
  };

  const handleHoursOfEnlightenmentChange: ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setHoursOfEnlightenment(value);
    }
  };

  const handleGoogleReviewsChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setGoogleReviews(value);
    }
  };
  const handleUpdate = () => {
    const updatedStats = {
      totalLanguages: languages ? languages : statsData.totalLanguages,
      totalLearners: learners ? learners : statsData.totalLeaners,
      totalMentors: alphaMentors ? alphaMentors : statsData.totalMentors,
      totalHours: hoursOfEnlightenment
        ? hoursOfEnlightenment
        : statsData.totalHours,
      googleReviews: googleReviews ? googleReviews : statsData.googleReviews,
    };
    console.log(updatedStats);
    // dispatch(updateStatsAsync(updatedStats));
  };

  if (status === "loading") {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="loader">Loaders</div>{" "}
        {/* Replace this with your actual loader component or HTML */}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col gap-5 p-4">
      <label
        htmlFor="inputData"
        className="block mb-2 text-3xl font-bold text-gray-700"
      >
        Stats Bar:
      </label>
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-wrap gap-5 items-center">
          <div>
            <label
              htmlFor="languages"
              className="block mb-2 text-xl font-light text-gray-700"
            >
              Languages
            </label>
            <input
              id="languages"
              type="number"
              value={languages}
              onChange={handleLanguagesChange}
              placeholder={statsData.totalLanguages}
              className="p-2 rounded-md border focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="learners"
              className="block mb-2 text-xl font-light text-gray-700"
            >
              Learners
            </label>
            <input
              id="learners"
              type="number"
              value={learners}
              onChange={handleLearnersChange}
              placeholder={statsData.totalLeaners}
              className="p-2 rounded-md border focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="alphaMentors"
              className="block mb-2 text-xl font-light text-gray-700"
            >
              Alpha Mentors
            </label>
            <input
              id="alphaMentors"
              type="number"
              value={alphaMentors}
              onChange={handleAlphaMentorsChange}
              placeholder={statsData.totalMentors}
              className="p-2 rounded-md border focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="hoursOfEnlightenment"
              className="block mb-2 text-xl font-light text-gray-700"
            >
              Hours of Enlightenment
            </label>
            <input
              id="hoursOfEnlightenment"
              type="number"
              value={hoursOfEnlightenment}
              onChange={handleHoursOfEnlightenmentChange}
              placeholder={statsData.totalHours}
              className="p-2 rounded-md border focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="googleReviews"
              className="block mb-2 text-xl font-light text-gray-700"
            >
              Google Reviews
            </label>
            <input
              id="googleReviews"
              type="number"
              value={googleReviews}
              onChange={handleGoogleReviewsChange}
              placeholder={statsData.googleReviews}
              className="p-2 rounded-md border focus:outline-none"
            />
          </div>
        </div>
      </div>
      <StatusBar data={statsData} />
      <div className="flex w-full gap-5">
        <button className="border rounded-md p-2">Cancel</button>
        <button className="border rounded-md p-2" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Page;
