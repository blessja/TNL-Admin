"use client";
import { useAddFAQsMutation, useGetFAQsQuery } from "@/Store/apiSlice";
import FormSection from "@/components/Reusable/FormSection";
import React from "react";

const Page = () => {
  const { data, isLoading } = useGetFAQsQuery("");
  const [addFAQs, { isLoading: isAdding }] = useAddFAQsMutation();

  const handleFAQSubmit = async (formData: any) => {
    try {
      const response = addFAQs(formData).unwrap();
      console.log("FAQ Form Data:", formData);
      response.then((res) => alert("Added successfully..."));
    } catch (error) {
      console.error("Error adding FAQ:", error);
      alert("Not able to add FAQ..");
    }
  };

  if (isLoading || !data || isAdding) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="loader">Loading...</div>{" "}
      </div>
    );
  }
  const faqData = data.filter(
    (item: any) =>
      item.language === "" &&
      item.context === "TOEFL" &&
      item.category === "General"
  );

  return (
    <div className="flex flex-col gap-5 p-4">
      <label
        htmlFor="inputData"
        className="block mb-2 text-3xl font-bold text-gray-700"
      >
        TOEFL Exam Page:
      </label>
      <FormSection
        data={faqData}
        title="FAQ's"
        onSubmit={handleFAQSubmit}
        context={"TOEFL"}
        language={""}
      />
    </div>
  );
};

export default Page;
