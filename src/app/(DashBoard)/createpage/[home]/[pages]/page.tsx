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
    <div className="w-full gap-5 flex flex-col p-5">
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
        <hr />
        <div>
          <div>Why Should Section</div>
          <div className="mt-6">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="group peer ring-0 bg-gray-400  rounded-full outline-none duration-300 after:duration-300 w-20 h-8  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0"></div>
            </label>
          </div>
        </div>
        <hr />
        <div>
          <div>Upcoming Batches</div>
          <div className="mt-6">
            <fieldset className="mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="trainerName"
                >
                  Trainer Name:
                </label>
                <input
                  type="text"
                  id="trainerName"
                  name="trainerName"
                  value="John Doe"
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="trainerImage"
                >
                  Trainer Image:
                </label>
                <input
                  type="file"
                  id="trainerImage"
                  name="trainerImage"
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="trainerLanguage"
                >
                  Trainer Language:
                </label>
                <input
                  type="text"
                  id="trainerLanguage"
                  name="trainerLanguage"
                  value="English"
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </fieldset>

            <fieldset className="mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="batchStart"
                >
                  Batch Start Date:
                </label>
                <input
                  type="datetime-local"
                  id="batchStart"
                  name="batchStart"
                  value="2024-05-20T09:00"
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="noOfSeats"
                >
                  Number of Seats:
                </label>
                <input
                  type="number"
                  id="noOfSeats"
                  name="noOfSeats"
                  value="30"
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="startTime"
                >
                  Start Time:
                </label>
                <input
                  type="datetime-local"
                  id="startTime"
                  name="startTime"
                  value="2024-05-25T09:00"
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="endTime"
                >
                  End Time:
                </label>
                <input
                  type="datetime-local"
                  id="endTime"
                  name="endTime"
                  value="2024-05-25T11:00"
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="certification"
                >
                  Certification:
                </label>
                <input
                  type="text"
                  id="certification"
                  name="certification"
                  value="Certified Trainer"
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </fieldset>
          </div>
        </div>
        <hr />
        <div>
          <div>Any Level Section</div>
          <div className="mt-6">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="group peer ring-0 bg-gray-400  rounded-full outline-none duration-300 after:duration-300 w-20 h-8  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0"></div>
            </label>
          </div>
        </div>
        <hr />
        <div>
          <div>Exams</div>
          <div className="mt-6">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="group peer ring-0 bg-gray-400  rounded-full outline-none duration-300 after:duration-300 w-20 h-8  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0"></div>
            </label>
          </div>
        </div>
        <hr />
        <div>
          <div>Review</div>
          <div className="mt-6">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="group peer ring-0 bg-gray-400  rounded-full outline-none duration-300 after:duration-300 w-20 h-8  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0"></div>
            </label>
          </div>
        </div>
        <hr />
        <div>
          <div>FAQs</div>
          <div className="mt-6">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="group peer ring-0 bg-gray-400  rounded-full outline-none duration-300 after:duration-300 w-20 h-8  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0"></div>
            </label>
            <div className="w-full flex flex-col mt-3 gap-5">
              <input
                id="question"
                type="text"
                placeholder="Write your Question here..."
                className="p-2 rounded-md border"
              />
              <textarea
                id="Answer"
                placeholder="Write your Answer here..."
                className="p-2 rounded-md border"
              />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div>Finest Section</div>
          <div className="mt-6">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="group peer ring-0 bg-gray-400  rounded-full outline-none duration-300 after:duration-300 w-20 h-8  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0"></div>
            </label>
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
      </form>
    </div>
  );
};

export default Page;
