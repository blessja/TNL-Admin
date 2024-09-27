import { useDeleteFAQsMutation, useUpdateFAQsMutation } from "@/Store/apiSlice";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  data: any;
}

const FaqAccordion: React.FC<Props> = ({ data }) => {
  const [updateBoxOpened, setUpdateBoxOpened] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [deleteFAQs] = useDeleteFAQsMutation();
  const [updateFAQs] = useUpdateFAQsMutation();
  const [updatedData,setUpdatedData] = useState({question:"",answer:"",_id:""})

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleUpdateBox = (e: any, item: any) => {
    e.stopPropagation();
    setUpdateBoxOpened(true);
    setUpdatedData(item);
    console.log(item);
  }
  const handleDataChange = (e:any) =>{
    console.log(e)
    const {id,value}=e.target;
    setUpdatedData({...updatedData,[id]:value});
  }
  const handleUpdate = () => {
    updateFAQs({ id: updatedData._id,...updatedData });
    setUpdateBoxOpened(false);
    
  }
  const handleDelete = (e: any, item: any) => {
    e.stopPropagation();
    deleteFAQs(item._id);
  }

  const closeUpdateBox = () => {
    setUpdateBoxOpened(false);
  }

  return (
    <div className="gap-5 flex flex-col">
      {data?.map((item: any, index: any) => (
        <div
          key={index}
          className="border rounded-md shadow-md overflow-hidden"
        >
          <div
            className="flex justify-between items-center px-4 py-2 cursor-pointer transition-colors duration-300 bg-gray-200 hover:bg-gray-300"
            onClick={() => toggleAccordion(index)}
          >
            <div className="font-semibold">{item.question}</div>

            <div className="flex justify-center items-center gap-4">
              <div className="flex w-full gap-5">
                <button className="border rounded-md p-2 " onClick={(e) => handleUpdateBox(e, item)}>
                  Update
                </button>
              </div>
              <div className="flex w-full gap-5">
                <button className="border rounded-md p-2 " onClick={(e) => handleDelete(e, item)}>
                  Delete
                </button>
              </div>
              <div
                className={
                  openIndex === index
                    ? "transform rotate-180"
                    : "transform rotate-0"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={openIndex === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className={`px-4 border-t transition-all duration-300 ${openIndex === index
              ? "max-h-96 py-2"
              : "py-0 max-h-0 overflow-hidden"
              }`}
          >
            <p dangerouslySetInnerHTML={{__html:item.answer}}></p>
          </div>
        </div>
      ))}
      {updateBoxOpened &&
        <div className={`absolute top-0 left-0 w-full h-screen updateBG flex flex-col justify-center items-center`}>
          <div className="w-[90%] md:w-[600px] min-h-[250px] bg-white rounded-lg relative">
            <h1 className="mx-4 mt-4 -mb-4 text-lg">Update the FAQ</h1>
            <p className="absolute right-4 top-4 text-2xl cursor-pointer" onClick={closeUpdateBox}>&#x2716;</p>
            <div className="w-full flex flex-col gap-5 px-4 pb-4">
              <label
                htmlFor="inputData"
                className="block mb-2 text-xl font-light text-gray-700"
              >
                {/* {title}: */}
              </label>
              <input
                id="question"
                type="text"
                placeholder="Write your Question here..."
                value={updatedData.question}
                onChange={(e)=>handleDataChange(e)}
                className="p-2 rounded-md border"
              />
              <textarea
                id="answer"
                placeholder="Write your Answer here..."
                value={updatedData.answer}
                onChange={(e)=>handleDataChange(e)}
                className="p-2 rounded-md border"
              />
            </div>
            <div className="flex items-center justify-center w-full gap-5">
              <button className="border rounded-md p-2"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      }

    </div>
  );
};

export default FaqAccordion;