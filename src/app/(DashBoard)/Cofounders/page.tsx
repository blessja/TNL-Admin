"use client";
import Cofounderscomp from "./Cofounders-comp";
import React, { useState } from "react";
import axios from "axios";

const Cofounders = () => {
  const [Name, setName] = useState("");
  // const [siddhiName, setSiddhiName] = useState("");
  // const [shubhamName, setShubhamName] = useState("");

  // const [pinnacDesc, setPinnacDesc] = useState("");
  // const [siddhiDesc, setSiddhiDesc] = useState("");
  // const [shubhamDesc, setShubhamDesc] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    cfTitle: "",
    cfsubTitle1: "",
    cfDescription1: "",
    cfImage1: null,
  });

  // const [cofoundersData, setCofoundersData] = useState([
  //   {
  //     name: "Pinnac Yeddy",
  //     desc: "Pinnac Yeddy, the CEO and Marketing Head of The Language Network, brings extensive marketing experience...",
  //     isExpanded: false,
  //   },
  //   {
  //     name: "Siddhi Chokani",
  //     desc: "Siddhi Chokani, the dynamic Chief of Staff at The Language Network. It was Siddhi's profound expertise...",
  //     isExpanded: false,
  //   },
  //   {
  //     name: "Shubham Pille",
  //     desc: "Meet our co-founder, Shubham Pille, the dedicated Chief Operating Officer at The Language Network...",
  //     isExpanded: false,
  //   },
  // ]);

  //fetch the data from api

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

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("cfTitle", inputValues.cfTitle);
      formData.append("cfsubTitle1", inputValues.cfsubTitle1);
      formData.append("cfDescription1", inputValues.cfDescription1);
      if (inputValues.cfImage1) formData.append("cfImage1", inputValues.cfImage1);

      // const response = await axios.patch(
      //   `https://backend.thelanguagenetwork.co/api/news/update/${data[0]._id}`,
      //   formData
      // );
      // console.log("Success:", response.data);
    } catch (error) {
      console.error("Error updating news:", error);
    }
    setIsLoading(false);
  };

  // const handleDelete = (index: number) => {
  //   const updatedData = cofoundersData.filter((_, i) => i !== index);
  //   setCofoundersData(updatedData);
  // };

  // const toggleReadMore = (index: number) => {
  //   const updatedData = cofoundersData.map((item, i) =>
  //     i === index ? { ...item, isExpanded: !item.isExpanded } : item
  //   );
  //   setCofoundersData(updatedData);
  // };

  const [showMore, setShowMore] = useState({
      pinnac: false,
      siddhi: false,
      shubham: false,
  });

  // const handleToggle = (cofounder) => {
  //     setShowMore((prev) => ({ ...prev, [cofounder]: !prev[cofounder] }));
  // };

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="loader">Loading...</div>{" "}
      </div>
    );
  }

  return (
    <div>
      {/*input fields */}
      <div className="w-full h-full p-4">
        <h1 className="text-3xl font-bold mb-4">Cofounders Section</h1>
        <div className="flex flex-col gap-5">
          <div>
            {/*title input */}
            <label className="block text-gray-700 font-bold mb-2">Title</label>
            <input
              type="text"
              name="cfTitle"
              placeholder="Meet our Co-Founders:"
              value={inputValues.cfTitle}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>

            {/*subtitle input */}
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Name of Cofounder
                </label>
                <input
                  type="text"
                  name=""
                  placeholder="Enter name of co-founder"
                  value=""
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                {/*description input */}
                <label className="block text-gray-700 font-bold mb-2">
                  Description
                </label>
                <textarea
                  name=""
                  placeholder="Enter Description of co-founder"
                  value=""
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                {/*image input */}
                <label className="block text-gray-700 font-bold mb-2">
                  Image
                </label>
                <input
                  type="file"
                  name=""
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="block"
                />
              </div>
            </div>
          
          {/* <div className="flex gap-7">
                <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Submit
                </button>
                <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
                Delete
            </button>
          </div> */}
          <div className="flex flex-col md:flex-row gap-6">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Create
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        </div>
      </div>

      <div className="m-4">
        <Cofounderscomp
          pinnacName={pinnacName || "Pinnac Yeddy"}
          siddhiName={siddhiName || "Siddhi Chokani"}
          shubhamName={shubhamName || "Shubham Pille"}
          pinnacDesc={showMore.pinnac
            ? pinnacDesc
            : pinnacDesc.substring(0, 100) + "Pinnac Yeddy, the CEO and Marketing Head of The Language Network, brings extensive marketing experience and passion to our team. He leads product development, branding, marketing, and business strategy, driving our vision for growth. Under his leadership, the company has seen consistent innovation and expansion. Pinnac is committed to making language learning accessible and enjoyable for all. With a clear focus on achieving the company&apos;s long-term goals, he believes in empowering the team, promoting a collaborative work environment, and fostering creativity. His leadership style emphasizes transparency, efficiency, and teamwork."}
          siddhiDesc={showMore.siddhi
            ? siddhiDesc
            : siddhiDesc.substring(0, 100) + "Siddhi Chokani, the dynamic Chief of Staff at The Language Network. It was Siddhi&apos;s profound expertise in French that served as the catalyst for The Language Network&apos;s inception. Her background in language and education brings immense value to the team. She is passionate about fostering a love for languages among students and creating a structured, effective curriculum. Siddhi is dedicated to providing an enriching learning experience for all students, focusing on individual growth and progress. Her leadership extends beyond administration; she&apos;s also an inspiration to her team, always encouraging innovative thinking and continuous improvement."}
          shubhamDesc={showMore.shubham
            ? shubhamDesc
            : shubhamDesc.substring(0, 100) + "Meet our co-founder, Shubham Pille, the dedicated Chief Operating Officer at The Language Network. With a keen eye for detail and a knack for multitasking, Shubham oversees various critical aspects of our organization, ensuring smooth daily operations. His focus on operational efficiency and resource management is integral to our success. Shubham is passionate about the intersection of technology and education, striving to enhance the accessibility and effectiveness of our language learning platforms. He believes in creating an environment where both students and team members can thrive, fostering growth through technology-driven solutions."}
        />
      </div>

      {/* <div className="flex flex-col gap-4 mt-2">
        <button
            onClick={() => handleToggle("pinnac")}
            className="text-teal-500 underline"
        >
            {showMore.pinnac ? "Read Less" : "Read More"}
        </button>
        <button
            onClick={() => handleToggle("siddhi")}
            className="text-teal-500 underline"
        >
            {showMore.siddhi ? "Read Less" : "Read More"}
        </button>
        <button
            onClick={() => handleToggle("shubham")}
            className="text-teal-500 underline"
        >
            {showMore.shubham ? "Read Less" : "Read More"}
        </button>
    </div> */}
    </div>
  );
};

export default Cofounders;
