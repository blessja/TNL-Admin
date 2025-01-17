"use client";
import FormSection from "@/components/Reusable/FormSection";
import React from "react";
import { useAddFAQsMutation, useGetFAQsQuery } from "@/Store/apiSlice";


const Page = () => {
  const {data,isLoading}=useGetFAQsQuery("");
  const [addFAQs,{isLoading:isAdding}]=useAddFAQsMutation();

  const handleFAQSubmit = (formData: any) => {
    addFAQs(formData);
    console.log("FAQ Form Data:", formData);
    // You can perform further actions with the form data, such as sending it to a server
  };

  const handleInfoSectionSubmit = (formData: any) => {
    const updatedFormData = { ...formData, category: "Everything you need to know" };
    addFAQs(updatedFormData);
    console.log("Info Section Form Data:", updatedFormData);
    // You can perform further actions with the form data, such as sending it to a server
  };
  
  const filterData = { filter: "language", type: "english" };

  if (isLoading || !data||isAdding) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="loader">Loading...</div>{" "}
        {/* Replace this with your actual loader component or HTML */}
      </div>
    );
  }
  // const englishData = data.filter((item: any) => item.language === "English");
  // console.log(englishData);
  // Filter data into two categories
  const faqData = data.filter(
    (item: any) => item.language === "English" && item.context === "StudyAbroad" && item.category === "General" 
  );
  const infoSectionData = data.filter(
    (item: any) =>
      item.category === "Everything you need to know" && item.context === "StudyAbroad" && item.language === "English"
  );

  return (
    <div className="w-full h-full flex flex-col gap-5 p-4">
      <label
        htmlFor="inputData"
        className="block mb-2 text-3xl font-bold text-gray-700"
      >
        Study Abroad Page:
      </label>
      {/* FAQ&apos;s */}
      <FormSection data={faqData} title="FAQ's" onSubmit={handleFAQSubmit} context={"StudyAbroad"} language={"English"} />
      <div className="py-10">
      <FormSection
        data={infoSectionData}
        category ={"Everything you need to know"}
        context={"StudyAbroad"} language={"English"}
        title="Everything you need to know section"
        onSubmit={handleInfoSectionSubmit}
      />
      </div>
    </div>
  );
};

export default Page;
