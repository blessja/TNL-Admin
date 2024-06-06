"use client";
import Accordion from "@/components/Reusable/Accordian";
import React, { useState } from "react";

interface PageData {
  page: string;
  link: string;
}

interface LanguagesProps {
  Language: string;
  page: PageData[];
}

const Page = () => {
  const LanguagePages: LanguagesProps[] = [
    {
      Language: "English",
      page: [
        { page: "English HomePage", link: "/Language/English/Home" },
        { page: "English ForKids Page", link: "/Language/English/ForKids" },
        { page: "English Adult Page", link: "/Language/English/adult" },
        {
          page: "English Study Abroad Page",
          link: "/Language/English/StudyAbroad",
        },
      ],
    },
    {
      Language: "Mandarin",
      page: [
        { page: "Mandarin HomePage", link: "/Language/Mandarin/Home" },
        { page: "Mandarin ForKids Page", link: "/Language/Mandarin/ForKids" },
        { page: "Mandarin Adult Page", link: "/Language/Mandarin/adult" },
        {
          page: "Mandarin Study Abroad Page",
          link: "/Language/Mandarin/StudyAbroad",
        },
      ],
    },
    {
      Language: "Korean",
      page: [
        { page: "Korean HomePage", link: "/Language/Korean/Home" },
        { page: "Korean ForKids Page", link: "/Language/Korean/ForKids" },
        { page: "Korean Adult Page", link: "/Language/Korean/adult" },
        {
          page: "Korean Study Abroad Page",
          link: "/Language/Korean/StudyAbroad",
        },
      ],
    },
    {
      Language: "Spanish",
      page: [
        { page: "Spanish HomePage", link: "/Language/Spanish/Home" },
        { page: "Spanish ForKids Page", link: "/Language/Spanish/ForKids" },
        { page: "Spanish Adult Page", link: "/Language/Spanish/adult" },
        {
          page: "Spanish Study Abroad Page",
          link: "/Language/Spanish/StudyAbroad",
        },
      ],
    },
    {
      Language: "German",
      page: [
        { page: "German HomePage", link: "/Language/German/Home" },
        { page: "German ForKids Page", link: "/Language/German/ForKids" },
        { page: "German Adult Page", link: "/Language/German/adult" },
        {
          page: "German Study Abroad Page",
          link: "/Language/German/StudyAbroad",
        },
      ],
    },
    {
      Language: "Japanese",
      page: [
        { page: "Japanese HomePage", link: "/Language/Japanese/Home" },
        { page: "Japanese ForKids Page", link: "/Language/Japanese/ForKids" },
        { page: "Japanese Adult Page", link: "/Language/Japanese/adult" },
        {
          page: "Japanese Study Abroad Page",
          link: "/Language/Japanese/StudyAbroad",
        },
      ],
    },
    {
      Language: "French",
      page: [
        { page: "French HomePage", link: "/Language/French/Home" },
        { page: "French ForKids Page", link: "/Language/French/ForKids" },
        { page: "French Adult Page", link: "/Language/French/adult" },
        {
          page: "French Study Abroad Page",
          link: "/Language/French/StudyAbroad",
        },
      ],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-5 p-4">
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
