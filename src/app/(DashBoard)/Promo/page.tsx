// Page.js
"use client";
import {
  getPromoAsync,
  selectFAQStatus,
  selectFAQsData,
  selectPromoData,
} from "@/Store/adminSlice";
import { useAppDispatch } from "@/helpers/hooks";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const [InputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPromoAsync());
  }, [dispatch]);

  const data = useSelector(selectPromoData);
  const status = useSelector(selectFAQStatus);

  if (status === "loading" || !data) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="loader">Loader...</div>{" "}
        {/* Replace this with your actual loader component or HTML */}
      </div>
    );
  }
  const dataObject =
    data?.reduce((acc: any, item: any) => {
      acc["Data"] = {
        topic: item.topic,
        label: item.label,
        link: item.link,
      };
      return acc;
    }, {}) || {};
  console.log(data);
  console.log(dataObject);

  return (
    <div className="w-full h-full flex flex-col gap-5 p-4 ">
      <label htmlFor="inputData" className="block mb-2 font-bold text-gray-700">
        Promo Bar:
      </label>
      <input
        type="text"
        id="inputData"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        value={InputValue}
        onChange={handleInputChange}
      />
      <div className="">
        <section className="rounded-lg overflow-hidden">
          <div className="bg-black flex items-center justify-center h-[30px] lg:h-[48px] w-full">
            <h1 className=" text-[#158487] 2xl:text-[16px] xl:text-[14px] text-[10px] md:text-base text-xs font-bold">
              {InputValue ? (
                InputValue
              ) : (
                <>
                  <span className="font-normal">{dataObject.Data.label}</span> |{" "}
                  {dataObject.Data.topic}
                </>
              )}
            </h1>
          </div>
        </section>
      </div>
      <div className="flex justify-start items-center gap-5">
        <button className="py-2 px-4 rounded-lg border">cancel</button>
        <button className="py-2 px-4 text-white rounded-lg border bg-[#349de3]">
          Update
        </button>
      </div>
    </div>
  );
};

export default Page;
