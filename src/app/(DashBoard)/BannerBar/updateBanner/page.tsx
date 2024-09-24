"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  useAddBannerMutation,
  useGetBannerByContxtAndLangQuery,
  useGetBannerQuery,
  useUpdateBannerMutation,
} from "@/Store/apiSlice";
import axios from "axios";
import BookAFreeDemoButton from "../BookAFreeDemoButton";
import Link from "next/link";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const imageRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [updated, setUpdated] = useState(false);
  const [inputValues, setInputValues] = useState({
    bannerTitle: "",
    bannerDescription: "",
    buttonText: "",
    bannerImage: null,
    language: "",
    context: "Home",
  });

  const { data, isLoading: fetchLoading } = useGetBannerByContxtAndLangQuery({
    context: inputValues.context,
    language: inputValues.language,
  });

  const [bannerData, setBannerData] = useState(data && data.length > 0 && data);
  const [updateBanner, { isLoading: isUpdating }] = useUpdateBannerMutation();

  // Update input values in state
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  // Update image files in state
  const handleImageUpload = (e: any) => {
    const { name, files } = e.target;
    showPhoto(e);
    if (files && files.length > 0) {
      setInputValues({ ...inputValues, [name]: files[0] });
    }
  };

  const showPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (isLoading || !data || fetchLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      // formData.append("_id", data[0]?._id);
      formData.append("bannerTitle", inputValues.bannerTitle);
      formData.append("bannerDescription", inputValues.bannerDescription);
      formData.append("buttonText", inputValues.buttonText);
      formData.append("buttonLink", "");
      formData.append("language", inputValues.language);
      formData.append("context", inputValues.context);

      console.log("Form data: =>" + formData);
      console.log("Banner data: =>" + data[0]._id);

      if (inputValues.bannerImage) {
        formData.append("bannerImage", inputValues.bannerImage as any);
      }
      // const response = addBanner(formData);
      const response = updateBanner({
        _id: data[0]._id,
        updatedBannerData: formData,
      }).unwrap();
      console.log("Success:", response);
      // response.then((res) => setUpdated(true));
      response.then((res) => alert("Updated successfully"));
    } catch (error) {
      console.error("Error updating banner:", error);
    }
    setIsLoading(false);
  };

  // const updatedData = data.filter((item: any) => item.pageName === "English");
  const bannerDescription =
    data && data.length > 0 && inputValues.bannerDescription === ""
      ? data[0]?.bannerDescription
      : inputValues.bannerDescription;

  return (
    <>
      {fetchLoading ? (
        <div>"Loading..."</div>
      ) : (
        <div className="w-full h-full flex flex-col gap-5 p-4">
          <label
            htmlFor="bannerTitle"
            className="block text-3xl mb-2 font-bold text-gray-700"
          >
            Update banner
          </label>
          <div className="flex flex-wrap gap-5">
            <div>
              <label
                htmlFor="bannerTitle"
                className="block mb-2 font-bold text-gray-700"
              >
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
              <label
                htmlFor="bannerDescription"
                className="block mb-2 font-bold text-gray-700"
              >
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

            {/* <div>
              <label
                htmlFor="buttonText"
                className="block mb-2 font-bold text-gray-700"
              >
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
            </div> */}
            <div>
              <label
                htmlFor="buttonText"
                className="block mb-2 font-bold text-gray-700"
              >
                Language name:
              </label>
              <select
                id="language"
                name="language"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
                value={inputValues.language}
              >
                <option value="">No Option</option>
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
                <option value="German">German</option>
                <option value="Italian">Italian</option>
                <option value="Mandarine">Mandarine</option>
                <option value="Japanese">Japanese</option>
                <option value="Korean">Korean</option>
                <option value="Russian">Russian</option>
                <option value="Arabic">Arabic</option>
                <option value="Hindi">Hindi</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="buttonText"
                className="block mb-2 font-bold text-gray-700"
              >
                Context:
              </label>
              <select
                id="context"
                name="context"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                value={inputValues.context}
                onChange={handleInputChange}
              >
                <option value="Home">Home</option>
                <option value="Adult">Adult</option>
                <option value="Kids">Kids</option>
                <option value="StudyAbroad">StudyAbroad</option>
                <option value="Language">Language</option>
                <option value="Work">Work</option>
                <option value="Travel">Travel</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="bannerImage"
                className="block mb-2 font-bold text-gray-700"
              >
                Banner Image:
              </label>
              <div className="flex items-center">
                <input
                  ref={imageRef}
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
                  onClick={() =>
                    document.getElementById("bannerImage")?.click()
                  }
                >
                  Choose Image
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="updateBanner"
                className="block mb-2 font-bold text-gray-700"
              >
                Update Banner:
              </label>
              <div className="flex items-center">
                <button
                  type="button"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500 bg-green-500 text-white hover:bg-green-600"
                  onClick={handleUpdate}
                >
                  {isUpdating ? "Updating..." : "Update"}
                </button>
              </div>
            </div>
          </div>

          {updated ? (
            <p className="text-center text-green-600 font-bold">
              Updated successfully
            </p>
          ) : (
            ""
          )}
          {data && data.length > 0 ? (
            <div className="w-full relative flex justify-center items-center flex-col mb-[112px]">
              <div className="mt-[43px] max-md:mt-8 max-w-[1681px]  mx-auto w-full">
                <div className="flex-auto max-md:max-w-full">
                  <div className="flex gap-5 max-lg:flex-col max-md:gap-0">
                    <div className="flex flex-col  max-w-[700px] max-md:ml-0 max-lg:w-full">
                      <div className="flex z-10 flex-col px-5 text-black max-md:max-w-full">
                        <div className="text-5xl font-bold max-md:max-w-full max-md:text-2xl">
                          {data &&
                          data.length > 0 &&
                          inputValues.bannerTitle === ""
                            ? data[0].bannerTitle
                            : inputValues.bannerTitle}
                        </div>
                        <div className="mt-2 max-sm:text-sm text-xl leading-7 lg:text-base 2xl:text-xl lg:w-[450px] xl:w-[600px] max-md:max-w-full relative mb-[32px]">
                          <div className="mb-8 max-md:text-[#757575]">
                            {showFullDescription ? (
                              <div>
                                <span className="text-wrap">
                                  {bannerDescription}
                                </span>
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
                            <BookAFreeDemoButton text={"Get started"} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="max-2xl:w-[540px] max-sm:hidden mx-auto right-0 max-lg:left-0 lg:absolute w-[700px] lg:block flex-grow">
                      <Image
                        alt="banner image"
                        className="h-[350px] w-[640px] ml-10 rounded-lg object-contain"
                        width={500}
                        height={500}
                        src={selectedImage || data[0]?.bannerImage}
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-center text-gray-700 font-bold">
                No data found. Please add a new banner.
              </p>
              <div className="text-center mt-4">
                <Link
                  href={"/BannerBar/addBanner"}
                  className="border bg-blue-600 hover:bg-blue-900 hover:scale-105 text-white px-4 py-2 rounded-lg"
                >
                  Add new Banner
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Page;
