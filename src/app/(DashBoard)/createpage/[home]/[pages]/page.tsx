"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    bannerImage: "",
    bannerTitle: "",
    bannerDescription: "",
    buttonText: "",
    pageName: "",
  });

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend API
    console.log(formData);
  };

  const pathname = usePathname();

  const renderContent = () => {
    const languages = [
      "English",
      "French",
      "Mandarin",
      "Spanish",
      "German",
      "Korean",
      "Japanese",
    ];

    const parts = pathname.split("/"); // Assuming pathname is like /createpage/English/Home
    const language = parts[2];

    if (languages.includes(language)) {
      return `${language} Page`;
    } else {
      return "Default Page Content";
    }
  };

  const handleSwitchToggle = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <div className="w-full gap-5 flex flex-col h-[685px] overflow-y-auto p-5">
      <div className="text-xl font-bold">{renderContent()}</div>
      <hr />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="bannerImage"
            className="block text-gray-700 font-bold mb-2"
          >
            Banner Image URL
          </label>
          <input
            type="text"
            id="bannerImage"
            name="bannerImage"
            value={formData.bannerImage}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="bannerTitle"
            className="block text-gray-700 font-bold mb-2"
          >
            Banner Title
          </label>
          <input
            type="text"
            id="bannerTitle"
            name="bannerTitle"
            value={formData.bannerTitle}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="bannerDescription"
            className="block text-gray-700 font-bold mb-2"
          >
            Banner Description
          </label>
          <textarea
            id="bannerDescription"
            name="bannerDescription"
            value={formData.bannerDescription}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
          />
        </div>
        <div>
          <label
            htmlFor="buttonText"
            className="block text-gray-700 font-bold mb-2"
          >
            Button Text
          </label>
          <input
            type="text"
            id="buttonText"
            name="buttonText"
            value={formData.buttonText}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="pageName"
            className="block text-gray-700 font-bold mb-2"
          >
            Page Name
          </label>
          <input
            type="text"
            id="pageName"
            name="pageName"
            value={formData.pageName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
      <hr />
      <div>
        <div>Why Should Section</div>
        <div className="mt-6">
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              checked={isSwitchOn}
              onChange={handleSwitchToggle}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div>Upcoming Batches</div>
        <div className="mt-6">
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              checked={isSwitchOn}
              onChange={handleSwitchToggle}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div>Any Level Section</div>
        <div className="mt-6">
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              checked={isSwitchOn}
              onChange={handleSwitchToggle}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div>Exams</div>
        <div className="mt-6">
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              checked={isSwitchOn}
              onChange={handleSwitchToggle}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div>Review</div>
        <div className="mt-6">
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              checked={isSwitchOn}
              onChange={handleSwitchToggle}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div>FAQs</div>
        <div className="mt-6">
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              checked={isSwitchOn}
              onChange={handleSwitchToggle}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div>Finest Section</div>
        <div className="mt-6">
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              checked={isSwitchOn}
              onChange={handleSwitchToggle}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>
      </div>
      <div className="flex gap-10 items-center ">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
        <button
          type="submit"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Page;
