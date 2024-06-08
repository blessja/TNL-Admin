// Page.js
"use client";
import { useGetPromoQuery, useUpdatePromoMutation } from "@/Store/apiSlice";
import React, { useState } from "react";

const Page = () => {
  const [InputValue, setInputValue] = useState({
    topic: "",
    label: "",
    link: "",
  });
  const { data, isLoading, isError, error, refetch } = useGetPromoQuery("");
  console.log(data);
  

  const [updatePromo,{isLoading:isLoadingUpdate}] = useUpdatePromoMutation();

  const handleUpdate = () => {
    updatePromo({...InputValue,id:data[1]._id});
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputValue((prev) => ({ ...prev, [id]: value }));
  };

  if (isLoading || !data || isLoadingUpdate) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="loader">Loading...</div>{" "}
        {/* Replace this with your actual loader component or HTML */}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col gap-5 p-4 ">
      <label htmlFor="inputData" className="block mb-2 font-bold text-gray-700">
        Promo Bar:
      </label>
      <input
        type="text"
        id="label"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        value={InputValue.label}
        onChange={(e) => handleInputChange(e)}
        placeholder="Label"

      />
      <input
        type="text"
        id="topic"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        value={InputValue.topic}
        onChange={(e) => handleInputChange(e)}
        placeholder="Topic"

      />

      <input
        type="text"
        id="link"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        value={InputValue.link}
        onChange={(e) => handleInputChange(e)}
        placeholder="Link"

      />
      <div className="">
        <section className="rounded-lg overflow-hidden">
          <div className="bg-black flex items-center justify-center h-[30px] lg:h-[48px] w-full">
            <h1 className=" text-[#158487] 2xl:text-[16px] xl:text-[14px] text-[10px] md:text-base text-xs font-bold">

              {(InputValue.topic === "" && InputValue.label === "" && InputValue.link === "") ? (
                <>
                  <span className="font-normal">{data[1].label}</span> |{" "}
                  {data[1].topic}
                </>

              ) : (
                <>
                  <span className="font-normal">{InputValue.label}</span> |{" "}
                  {InputValue.topic}
                </>
              )}
              
            </h1>
          </div>
        </section>
      </div>
      <div className="flex justify-start items-center gap-5">
        <button className="py-2 px-4 rounded-lg border">cancel</button>
        <button className="py-2 px-4 text-white rounded-lg border bg-[#349de3]" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Page;
