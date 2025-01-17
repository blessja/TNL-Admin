"use client";

import FormSection from "@/components/Reusable/FormSection";
import { useAddFAQsMutation, useGetFAQsQuery } from "@/Store/apiSlice";
import React from "react";

const Page = () => {
  const { data, isLoading } = useGetFAQsQuery("");
  const [addFAQs, { isLoading: isAdding }] = useAddFAQsMutation();

  const handleFAQSubmit = (formData: any) => {
    addFAQs(formData);
    console.log("FAQ Form Data:", formData);
  };

  const handleInfoSectionSubmit = (formData: any) => {
    const updatedFormData = {
      ...formData,
      category: "Everything you need to know",
    };
    addFAQs(updatedFormData);
    console.log("Info Section Form Data:", updatedFormData);
  };

  const filterData = { filter: "language", type: "english" };

  if (isLoading || !data || isAdding) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="loader">Loading...</div>{" "}
      </div>
    );
  }
  // const englishData = data.filter((item: any) => item.language === "English");
  // console.log(englishData);
  // Filter data into two categories
  const faqData = data.filter(
    (item: any) =>
      item.language === "English" &&
      item.context === "Language" &&
      item.category === "General"
  );
  const infoSectionData = data.filter(
    (item: any) =>
      item.category === "Everything you need to know" &&
      item.context === "Language" &&
      item.language === "English"
  );

  return (
    <div className="w-full h-full flex flex-col gap-5 p-4">
      <label
        htmlFor="inputData"
        className="block mb-2 text-3xl font-bold text-gray-700"
      >
        Language Page:
      </label>
      {/* FAQ's */}
      <FormSection
        title="FAQ's"
        data={faqData}
        onSubmit={handleFAQSubmit}
        context={"Language"}
        language={"English"}
      />
      <div className="py-10">
        <FormSection
          data={infoSectionData}
          category={"Everything you need to know"}
          context={"Language"}
          language={"English"}
          title="Everything you need to know section"
          onSubmit={handleInfoSectionSubmit}
        />
      </div>
    </div>
  );
};

export default Page;
