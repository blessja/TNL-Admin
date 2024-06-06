"use client";
import {
  getAllFAQsAsync,
  getFilteredFAQsAsync,
  selectFAQStatus,
  selectFAQsData,
} from "@/Store/adminSlice";
import FormSection from "@/components/Reusable/FormSection";
import { useAppDispatch } from "@/helpers/hooks";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const handleFAQSubmit = (formData: any) => {
    console.log("FAQ Form Data:", formData);
    // You can perform further actions with the form data, such as sending it to a server
  };

  const handleInfoSectionSubmit = (formData: any) => {
    console.log("Info Section Form Data:", formData);
    // You can perform further actions with the form data, such as sending it to a server
  };

  const filterData = { filter: "language", type: "korean" };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFilteredFAQsAsync(filterData));
  }, [dispatch]);

  const data = useSelector(selectFAQsData);
  const status = useSelector(selectFAQStatus);

  if (status === "loading" || !data) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="loader">Loader...</div>{" "}
        {/* Replace this with your actual loader component or HTML */}
      </div>
    );
  }
  const faqData = data.filter(
    (item: any) => item.category === "General" && item.context === "Home"
  );
  const infoSectionData = data.filter(
    (item: any) =>
      item.category === "Everything you need to know" && item.context === "Home"
  );

  return (
    <div className="w-full h-full flex flex-col gap-5 p-4">
      <label
        htmlFor="inputData"
        className="block mb-2 text-3xl font-bold text-gray-700"
      >
        Home Page:
      </label>
      {/* FAQ's */}
      <FormSection title="FAQ's" data={faqData} onSubmit={handleFAQSubmit} />
      <FormSection
        title="Everything you need to know section"
        data={infoSectionData}
        onSubmit={handleInfoSectionSubmit}
      />
    </div>
  );
};

export default Page;
