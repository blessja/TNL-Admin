"use client";
import { useAddFAQsMutation, useGetFAQsQuery } from "@/Store/apiSlice";
import FormSection from "@/components/Reusable/FormSection";
import React from "react";

const Page = () => {
  const { data, isLoading } = useGetFAQsQuery("");
  const [addFAQs, { isLoading: isAdding }] = useAddFAQsMutation();
  const handleFAQSubmit = (formData: any) => {
    addFAQs(formData);
    console.log("FAQ Form Data:", formData);
    // You can perform further actions with the form data, such as sending it to a server
  };

  const handleInfoSectionSubmit = (formData: any) => {
    const updatedFormData = {
      ...formData,
      category: "Everything you need to know",
    };
    addFAQs(updatedFormData);
    console.log("Info Section Form Data:", updatedFormData);
    // You can perform further actions with the form data, such as sending it to a server
  };

  const filterData = { filter: "language", type: "korean" };

  if (isLoading || !data || isAdding) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="loader">Loading...</div>{" "}
        {/* Replace this with your actual loader component or HTML */}
      </div>
    );
  }

  const faqData = data.filter(
    (item: any) =>
      item.language === "Korean" &&
      item.context === "Language" &&
      item.category === "General"
  );
  const infoSectionData = data.filter(
    (item: any) =>
      item.category === "Everything you need to know" &&
      item.context === "Language" &&
      item.language === "Korean"
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
        language={"Korean"}
      />
      <div className="py-10">
        <FormSection
          data={infoSectionData}
          category={"Everything you need to know"}
          context={"Language"}
          language={"Korean"}
          title="Everything you need to know section"
          onSubmit={handleInfoSectionSubmit}
        />
      </div>
    </div>
  );
};

export default Page;
