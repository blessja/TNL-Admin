"use client";
import Image from "next/image";
import React, { useState } from "react";
import img1 from "@/assets/image12.svg";
import img2 from "@/assets/image11.svg";
import { useGetNewsQuery } from "@/Store/apiSlice";
import axios from "axios";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    newsTitle: "",
    newsHeadline: "",
    newsDescription: "",
    newsDate: "",
    newsImage: null,
    bannerImage: null,
  });

  const { data, isLoading: fetchLoading } = useGetNewsQuery("");
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

  const handleUpdateNews = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("newsTitle", inputValues.newsTitle);
      formData.append("newsHeadline", inputValues.newsHeadline);
      formData.append("newsDescription", inputValues.newsDescription);
      formData.append("newsDate", inputValues.newsDate);
      formData.append("newsImage", inputValues.newsImage as any);
      formData.append("bannerImage", inputValues.bannerImage as any);

      const response = await axios.patch(
        `https://backend.thelanguagenetwork.co/api/news/update/${data[0]._id}`,
        formData
      );
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error updating news:", error);
    }
    setIsLoading(false);
  };

  if (isLoading || !data || fetchLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="loader">Loading...</div>{" "}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col gap-5 p-4 ">
      <label
        htmlFor="newsTitle"
        className="block text-3xl mb-2 font-bold text-gray-700"
      >
        News Section:
      </label>
      <div className="flex flex-wrap gap-5">
        <div>
          <label
            htmlFor="newsTitle"
            className="block mb-2 font-bold text-gray-700"
          >
            Title:
          </label>
          <input
            type="text"
            id="newsTitle"
            name="newsTitle"
            placeholder="Enter Your News Title"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={inputValues.newsTitle}
            onChange={handleInputChange}
          />
        </div>{" "}
        <div>
          <label htmlFor="news" className="block mb-2 font-bold text-gray-700">
            News:
          </label>
          <input
            type="text"
            id="newsHeadline"
            name="newsHeadline"
            placeholder="Enter Your News"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={inputValues.newsHeadline}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            htmlFor="newsDescription"
            className="block mb-2 font-bold text-gray-700"
          >
            News Para:
          </label>
          <input
            type="text"
            id="newsDescription"
            name="newsDescription"
            placeholder="Enter Your News"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={inputValues.newsDescription}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            htmlFor="newsDate"
            className="block mb-2 font-bold text-gray-700"
          >
            Publish At:
          </label>
          <input
            type="datetime-local"
            id="newsDate"
            name="newsDate"
            placeholder="Enter Your News"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={inputValues.newsDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            htmlFor="newsImage"
            className="block mb-2 font-bold text-gray-700"
          >
            News-Image:
          </label>
          <div className="flex items-center">
            <input
              type="file"
              id="newsImage"
              name="newsImage"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <button
              type="button"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-blue-500 text-white hover:bg-blue-600"
              onClick={() => document.getElementById("newsImage")?.click()}
            >
              Choose Image
            </button>
          </div>
        </div>
        <div>
          <label
            htmlFor="bannerImage"
            className="block mb-2 font-bold text-gray-700"
          >
            Banner-Image:
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
          <label
            htmlFor="updateNews"
            className="block mb-2 font-bold text-gray-700"
          >
            Update News:
          </label>
          <div className="flex items-center">
            <button
              type="button"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500 bg-green-500 text-white hover:bg-green-600"
              onClick={() => handleUpdateNews()}
            >
              Update
            </button>
          </div>
        </div>
      </div>
      {/* News Section */}
      <div className="flex justify-center items-center px-16 py-20 bg-secondary-color max-md:px-5">
        <div
          className="mt-7 w-full max-w-[1680px] max-md:max-w-full"
          data-aos="fade-up"
        >
          <div className="xl:flex gap-5 lg:flex-row max-xl:flex-col max-md:gap-0">
            <div className="flex flex-col w-full xl:w-[33%] max-md:ml-0 min-h-[275px] max-md:w-full">
              <div className="flex flex-col grow justify-center p-2.5 w-full bg-white rounded-2xl shadow-2xl text-stone-900 max-md:px-5 items-center lg:max-md:mt-5 max-md:max-w-full">
                <Image
                  alt="bannerImage"
                  src={
                    inputValues.bannerImage
                      ? URL.createObjectURL(inputValues.bannerImage)
                      : data &&
                        data.length > 0 &&
                        inputValues.bannerImage === null
                      ? data[0].bannerImage
                      : img2
                  }
                  height={40}
                  width={300}
                  className="h-[40px] w-[300px]"
                />
                <div className="flex flex-col items-center justify-center px-12 mx-8 mt-8 max-md:px-5 max-md:mx-2.5">
                  <div className="text-3xl flex items-center justify-center text-nowrap">
                    {data && data.length > 0 && inputValues.newsTitle === ""
                      ? data[0].newsTitle
                      : inputValues.newsTitle}
                  </div>
                  <div className="self-center mt-1 text-5xl font-bold max-md:text-4xl">
                    NEWS
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:mt-5 xl:mt-0 xl:ml-5 w-full xl:w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center md:p-8 w-full bg-white rounded-2xl shadow-2xl max-md:px-5 max-md:mt-5 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow justify-center lg:py-1.5 max-md:mt-8">
                        <Image
                          alt="girlImg"
                          className="h-full rounded-lg w-full object-cover"
                          width={300}
                          src={
                            inputValues.newsImage
                              ? URL.createObjectURL(inputValues.newsImage)
                              : data &&
                                data.length > 0 &&
                                inputValues.newsImage === null
                              ? data[0].newsImage
                              : img2
                          }
                          height={300}
                        />
                        <div className="mt-4 text-xl leading-7 text-primary-color">
                          Brand Stories
                        </div>
                        <div className="mt-1 text-base text-stone-300">
                          Published on{" "}
                          {data &&
                          data.length > 0 &&
                          inputValues.newsDate === ""
                            ? data[0].newsDate
                            : inputValues.newsDate}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow self-stretch pb-9 text-xl max-md:mt-8 max-md:max-w-full">
                        <div className="lg:text-3xl text-stone-900 text-xl lg:font-bold font-normal  max-md:max-w-full">
                          {data &&
                          data.length > 0 &&
                          inputValues.newsHeadline === ""
                            ? data[0].newsHeadline
                            : inputValues.newsHeadline}
                          <br />
                          <br />
                        </div>
                        <div className="mt-2 leading-7 text-neutral-500 text-base max-md:max-w-full lg:text-xl">
                          {data &&
                          data.length > 0 &&
                          inputValues.newsDescription === ""
                            ? data[0].newsDescription
                            : inputValues.newsDescription}
                        </div>
                        <div className="mt-5 text-primary-color max-md:max-w-full text-base lg:text-xl">
                          <span className="text-neutral-500">
                            Read our full story
                          </span>{" "}
                          <span className="font-bold leading-6 text-teal-600">
                            Here
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
