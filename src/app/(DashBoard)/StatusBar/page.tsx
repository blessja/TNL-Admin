"use client";
import { useGetStatsQuery, useUpdateStatsMutation } from "@/Store/apiSlice";
import StatusBar from "@/components/Status";
import React, { ChangeEventHandler, useEffect, useState } from "react";
import { CustomRating } from "@/components/CustomRating";

const Page = () => {
  const { data: statsData, isLoading } = useGetStatsQuery("");
  const [updateStats, { isLoading: isLoadingUpdate }] =
    useUpdateStatsMutation();

  const [InputValue, setInputValue] = useState({
    totalLanguages: 0,
    totalLeaners: 0,
    totalMentors: 0,
    totalHours: 0,
    googleReviews: 0,
  });

  const [hasUpdated, setHasUpdated] = useState(false);

  useEffect(() => {
    if (statsData) {
      setInputValue({
        totalLanguages: statsData.totalLanguages,
        totalLeaners: statsData.totalLeaners,
        totalMentors: statsData.totalMentors,
        totalHours: statsData.totalHours,
        googleReviews: statsData.googleReviews,
      });
    }
  }, [statsData]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target;
    // Only limit Google Reviews input
    if (id === "googleReviews") {
      // Parse as a float, limit to a maximum of 5.0, and convert to a string for input
      const parsedValue = Math.min(parseFloat(value) || 0, 5.0).toFixed(1); 
      setInputValue((prev) => ({
        ...prev,
        [id]: parseFloat(parsedValue), // Store as a float
      }));
    } else {
      // For other fields, just parse as a float
      const parsedValue = parseFloat(value) || 0;
      setInputValue((prev) => ({
        ...prev,
        [id]: parsedValue,
      }));
    }
    setHasUpdated(true);
  };

  // const handleRatingChange = (newRating: number) => {
  //   setInputValue((prev) => ({ ...prev, googleReviews: newRating }));
  //   setHasUpdated(true);
  // };

  const handleUpdate = () => {
    updateStats({ ...InputValue, id: statsData._id });
    setHasUpdated(false); // Reset the flag after updating
  };

  if (isLoading || !statsData || isLoadingUpdate) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="loader">Loading...</div>
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
              htmlFor="totalLanguages"
              className="block mb-2 text-xl font-light text-gray-700"
            >
              Languages
            </label>
            <input
              id="totalLanguages"
              type="number"
              value={InputValue.totalLanguages}
              onChange={handleInputChange}
              className="p-2 rounded-md border focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="totalLeaners"
              className="block mb-2 text-xl font-light text-gray-700"
            >
              Learners
            </label>
            <input
              id="totalLeaners"
              type="number"
              value={InputValue.totalLeaners}
              onChange={handleInputChange}
              className="p-2 rounded-md border focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="totalMentors"
              className="block mb-2 text-xl font-light text-gray-700"
            >
              Alpha Mentors
            </label>
            <input
              id="totalMentors"
              type="number"
              value={InputValue.totalMentors}
              onChange={handleInputChange}
              className="p-2 rounded-md border focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="totalHours"
              className="block mb-2 text-xl font-light text-gray-700"
            >
              Hours of Enlightenment
            </label>
            <input
              id="totalHours"
              type="number"
              value={InputValue.totalHours}
              onChange={handleInputChange}
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
              value={InputValue.googleReviews.toFixed(1)} // Display with one decimal
              onChange={handleInputChange}
              className="p-2 rounded-md border focus:outline-none"
            />
            {/* Calculate the rating based on the input value */}
            {/* <CustomRating initialRating={InputValue.googleReviews} />  */}
          </div>
        </div>
      </div>
      {hasUpdated ? (
        <StatusBar
          data={{
            Languages: InputValue.totalLanguages,
            HappyLearners: InputValue.totalLeaners,
            AlphaMentors: InputValue.totalMentors,
            HoursOfEnlightenment: InputValue.totalHours,
            GoogleReviewsRating: InputValue.googleReviews,
          }}
        />
      ) : (
        <StatusBar
          data={{
            Languages: statsData.totalLanguages,
            HappyLearners: statsData.totalLeaners,
            AlphaMentors: statsData.totalMentors,
            HoursOfEnlightenment: statsData.totalHours,
            GoogleReviewsRating: statsData.googleReviews,
          }}
        />
      )}
      <div className="flex w-full gap-5">
        <button className="border rounded-md p-2">Cancel</button>
        <button
          className="border rounded-md p-2 bg-[#349de3] text-white"
          onClick={handleUpdate}
          disabled={isLoadingUpdate}
        >
          {isLoadingUpdate ? "Updating..." : "Update"}
        </button>
      </div>
    </div>
  );
};

export default Page;