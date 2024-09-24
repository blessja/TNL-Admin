"use client";
import Accordion from "@/components/Reusable/Accordian";
import Link from "next/link";
import React, { useState } from "react";

interface PageData {
  page: string;
  link: string;
}

interface LanguagesProps {
  Language: string;
  page: PageData[];
}

interface HomeProps {
  Language: string;
  page: PageData[];
}

const Page = () => {
  const HomePages: HomeProps[] = [
    {
      Language: "Home",
      page: [{ page: "Home Page", link: "/BannerBar/Home" }],
    },
  ];

  const LanguagePages: LanguagesProps[] = [
    {
      Language: "English",
      page: [{ page: "English HomePage", link: "/BannerBar/English/Home" }],
    },
    {
      Language: "Mandarin",
      page: [{ page: "Mandarin HomePage", link: "/BannerBar/Mandarin/Home" }],
    },
    {
      Language: "Korean",
      page: [{ page: "Korean HomePage", link: "/BannerBar/Korean/Home" }],
    },
    {
      Language: "Spanish",
      page: [{ page: "Spanish HomePage", link: "/BannerBar/Spanish/Home" }],
    },
    {
      Language: "German",
      page: [{ page: "German HomePage", link: "/BannerBar/German/Home" }],
    },
    {
      Language: "Japanese",
      page: [{ page: "Japanese HomePage", link: "/BannerBar/Japanese/Home" }],
    },
    {
      Language: "French",
      page: [{ page: "French HomePage", link: "/BannerBar/French/Home" }],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-5 p-4">
      <div className="flex items-center justify-between">
        <label
          htmlFor="inputData"
          className="block mb-2 text-3xl font-bold text-gray-700"
        >
          Home Page:
        </label>
        <div>
          <Link
            href={"/BannerBar/updateBanner"}
            className="border bg-green-600 hover:bg-green-900 hover:scale-105 text-white px-4 py-2 rounded-lg"
          >
            Update Banner
          </Link>

          <Link
            href={"/BannerBar/addBanner"}
            className="border bg-blue-600 hover:bg-blue-900 hover:scale-105 text-white px-4 py-2 rounded-lg"
          >
            Add new Banner
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col gap-5">
        <Accordion data={HomePages} />
      </div>
      <label
        htmlFor="inputData"
        className="block mb-2 text-3xl font-bold text-gray-700"
      >
        Language Pages:
      </label>
      <div className="w-full flex flex-col gap-5">
        <Accordion data={LanguagePages} />
      </div>
    </div>
  );
};

export default Page;
