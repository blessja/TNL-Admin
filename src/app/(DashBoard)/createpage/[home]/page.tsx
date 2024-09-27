"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Page = () => {
  const pathname = usePathname();

  const renderContent = () => {
    switch (pathname) {
      case "/createpage/Home":
        return "English";
      case "/createpage/English":
        return "English";
      case "/createpage/French":
        return "French";
      case "/createpage/Spanish":
        return "Spanish";
      case "/createpage/German":
        return "German";
      case "/createpage/Mandarin":
        return "Mandarin";
      case "/createpage/Korean":
        return "Korean";
      case "/createpage/Japanese":
        return "Japanese";
      default:
        return "Default Page Content";
    }
  };
  return (
    <div className="w-full gap-10 flex flex-wrap p-5">
      <div className="w-[30%] p-4 border text-center transform transition duration-300 ease-linear hover:bg-gray-300 rounded">
        {renderContent()} Home Page
      </div>
      <div className="w-[30%] p-4 border text-center transform transition duration-300 ease-linear hover:bg-gray-300 rounded">
        {renderContent()} Adult Page
      </div>
      <div className="w-[30%] p-4 border text-center transform transition duration-300 ease-linear hover:bg-gray-300 rounded">
        {renderContent()} For Kids Page
      </div>
      <div className="w-[30%] p-4 border text-center transform transition duration-300 ease-linear hover:bg-gray-300 rounded">
        {renderContent()} Study Abroad Page
      </div>
      <Link
        href={`/createpage/${renderContent()}/create`}
        className="w-[30%] p-4 border text-center transform transition duration-300 ease-linear hover:bg-gray-300 rounded"
      >
        Add Another Page
      </Link>
    </div>
  );
};

export default Page;
