"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useGetBannerQuery, useUpdateBannerMutation } from "@/Store/apiSlice";
import homePageBannerGirl from "./homePageBannerGirl.png";
import axios from "axios";
import BookAFreeDemoButton from "../../BookAFreeDemoButton";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [Splicing, setSplicing] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false); 
  const [inputValues, setInputValues] = useState({
    bannerTitle: "",
    bannerDescription: "",
    buttonText: "",
    bannerImage: null,
  });

  const { data, isLoading: fetchLoading } = useGetBannerQuery("");
  const [updateBanner] = useUpdateBannerMutation();
  console.log(data);

  // Update input values in state
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  // Update image files in state
  const handleImageUpload = (e: any) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setInputValues({ ...inputValues, [name]: files[0] });
    }
  };

  const handleUpdateBanner = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("bannerTitle", inputValues.bannerTitle);
      formData.append("bannerDescription", inputValues.bannerDescription);
      formData.append("buttonText", inputValues.buttonText);
      formData.append("pageName", "English");
      if (inputValues.bannerImage) {
        formData.append("bannerImage", inputValues.bannerImage as any);
      }
      const response = await axios.patch(`http://3.110.121.13/api/banner/update/English`, formData);
      console.log('Success:', response.data);

    } catch (error) {
      console.error("Error updating banner:", error);
    }
    setIsLoading(false);
  };

  if (isLoading || !data || fetchLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="loader">Loading...</div>
      </div>
    );
  }
  const updatedData = data.filter((item: any) => item.pageName === "English");
  const bannerDescription = (updatedData && updatedData.length > 0 && inputValues.bannerDescription === "")
    ? updatedData[0].bannerDescription
    : inputValues.bannerDescription;
  
  return (
    <div className="w-full h-full flex flex-col gap-5 p-4">
      <label htmlFor="bannerTitle" className="block text-3xl mb-2 font-bold text-gray-700">
        Banner Section:
      </label>
      <div className="flex flex-wrap gap-5">
        <div>
          <label htmlFor="bannerTitle" className="block mb-2 font-bold text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="bannerTitle"
            name="bannerTitle"
            placeholder="Enter Your Banner Title"
            className="w-3xl px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={inputValues.bannerTitle}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="bannerDescription" className="block mb-2 font-bold text-gray-700">
            Description:
          </label>
          <input
            type="text"
            id="bannerDescription"
            name="bannerDescription"
            placeholder="Enter Your Banner Description"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={inputValues.bannerDescription}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="buttonText" className="block mb-2 font-bold text-gray-700">
            Button Text:
          </label>
          <input
            type="text"
            id="buttonText"
            name="buttonText"
            placeholder="Enter Button Text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={inputValues.buttonText}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="bannerImage" className="block mb-2 font-bold text-gray-700">
            Banner Image:
          </label>
          <div className="flex items-center">
            <input
              type="file"
              id="bannerImage"
              name="bannerImage"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <button
              type="button"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-blue-500 text-white hover:bg-blue-600"
              onClick={() => document.getElementById("bannerImage")?.click()}
            >
              Choose Image
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="updateBanner" className="block mb-2 font-bold text-gray-700">
            Update Banner:
          </label>
          <div className="flex items-center">
            <button
              type="button"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500 bg-green-500 text-white hover:bg-green-600"
              onClick={handleUpdateBanner}
            >
              Update
            </button>
          </div>
        </div>
      </div>
      
      {/* Banner Display Section */}
      
      {/* <div className="md:mx-10 mt-5">
        <div className="max-w-[1681px] lg:min-h-[542px] w-full justify-between items-center flex flex-col lg:flex-row px-5 xl:mx-auto">
          <div className="lg:w-[525px] lg:min-h-[542px] min-h-fit flex-col z-10 max-lg:my-10 justify-center w-full lg:items-start gap-0 inline-flex">
            <div className="self-stretch lg:h-[261px] h-fit 2xl:h-[261px] xl:h-[261px] flex-col justify-center items-start gap-4 flex">
              <div className="self-stretch text-stone-900 2xl:text-[40px] xl:text-4xl max-md:text-2xl max-xl:text-5xl text-[24px] font-bold">
              {(updatedData && updatedData.length > 0 && inputValues.bannerTitle === "") ? updatedData[0].bannerTitle : inputValues.bannerTitle}
              </div>
              <div className="self-stretch text-stone-900 2xl:text-5xl xl:text-4xl lg:text-3xl text-xl font-normal">
              {(updatedData && updatedData.length > 0 && inputValues.bannerDescription === "") ? updatedData[0].bannerDescription : inputValues.bannerDescription}
              </div>
            </div>
            <div className="max-xl:mt-6 max-2xl:-ml-9">
              <BookAFreeDemoButton text={(updatedData && updatedData.length > 0 && inputValues.buttonText === "") ? updatedData[0].buttonText : inputValues.buttonText} />
            </div>
          </div>
          <Image
            alt="homePageBannerGirl"
            className="h-[500px] w-[500px] rounded-lg object-contain"
            width = {500}
            height = {500}
            src={updatedData[0].bannerImage}
            ></Image>
        </div>
      </div> */}
      <div className="w-full relative flex justify-center items-center flex-col mb-[112px]">
      <div className="mt-[43px] max-md:mt-8 max-w-[1681px]  mx-auto w-full">
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-lg:flex-col max-md:gap-0">
            <div className="flex flex-col  max-w-[700px] max-md:ml-0 max-lg:w-full">
              <div className="flex z-10 flex-col px-5 text-black max-md:max-w-full">
                <div className="text-5xl font-bold max-md:max-w-full max-md:text-2xl">
                {(updatedData && updatedData.length > 0 && inputValues.bannerTitle === "") ? updatedData[0].bannerTitle : inputValues.bannerTitle}
                </div>
                <div className="mt-2 max-sm:text-sm text-xl leading-7 lg:text-base 2xl:text-xl lg:w-[450px] xl:w-[600px] max-md:max-w-full relative mb-[32px]">
      <div className="mb-8 max-md:text-[#757575]">
        {showFullDescription ? (
          <div>
            {bannerDescription}
            <span
              className="cursor-pointer text-neutral-color"
              onClick={() => setShowFullDescription(false)}
            >
              Read less
            </span>
          </div>
        ) : (
          <div>
            {bannerDescription.slice(0, 370)}
            <span
              className="cursor-pointer text-primary-color"
              onClick={() => setShowFullDescription(true)}
            >
              Read more...
            </span>
          </div>
        )}
      </div>
      <div className="max-sm:absolute max-sm:-left-[4px] flex justify-star max-2xl:-ml-8 max-2xl:-mt-6 max-md:-ml-8 ">
                  <BookAFreeDemoButton text={(updatedData && updatedData.length > 0 && inputValues.buttonText === "") ? updatedData[0].buttonText : inputValues.buttonText} />
                  </div>
                      </div>
              </div>
            </div>
            <div className="max-2xl:w-[540px] max-sm:hidden mx-auto right-0 max-lg:left-0 lg:absolute w-[700px] lg:block flex-grow">
            <Image
            alt="homePageBannerGirl"
            className="h-[350px] w-[640px] ml-10 rounded-lg object-contain"
            width = {500}
            height = {500}
            src={updatedData[0].bannerImage}
          ></Image>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full -my-10">
        <Image
          alt="girlAndBoy"
          src={girlAndBoy}
          className="-mb-10 md:hidden w-full"
        />
        <Image
          alt="homePageBannerGirl"
          className="w-full  -ml-8 h-full object-contain -mb-10 md:hidden"
          src={girlImage}
        ></Image>
      </div> */}
    </div>
    </div>
  );
};

export default Page;
