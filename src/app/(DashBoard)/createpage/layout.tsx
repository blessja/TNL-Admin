"use client";
import Link from "next/link";
import React, { useState } from "react";

const languages = [
  { name: "English", link: "/createpage/English" },
  { name: "French", link: "/createpage/French" },
  { name: "Mandarin", link: "/createpage/Mandarin" },
  { name: "Spanish", link: "/createpage/Spanish" },
  { name: "German", link: "/createpage/German" },
  { name: "Korean", link: "/createpage/Korean" },
  { name: "Japanese", link: "/createpage/Japanese" },
];

const LanguageItem = ({ name, link, isSelected, onClick }: any) => (
  <Link
    href={link}
    className={`py-4 px-2 transform transition duration-300 ease-linear rounded cursor-pointer ${
      isSelected ? "bg-gray-300" : "hover:bg-gray-300"
    }`}
    onClick={onClick}
  >
    {name}
  </Link>
);

const AddLanguageButton = () => (
  <div className="py-4 px-2 text-center transform transition duration-300 ease-linear hover:bg-gray-300 rounded cursor-pointer">
    Add Language page
  </div>
);

const Sidebar = ({ selectedLanguage, setSelectedLanguage }: any) => (
  <div className="flex flex-col gap-5 w-[250px] border-r px-5">
    <div className="pt-5">Pages</div>
    <hr />
    {languages.map((language) => (
      <LanguageItem
        key={language.name}
        name={language.name}
        link={language.link}
        isSelected={language.name === selectedLanguage}
        onClick={() => setSelectedLanguage(language.name)}
      />
    ))}
    <hr />
    <AddLanguageButton />
  </div>
);

const PageMakerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div className="p-5 w-full text-start">
      <div className="block mb-2 font-bold text-2xl text-start text-gray-700">
        Page Maker:
      </div>
      <div className="border flex gap-5 rounded p-2">
        <Sidebar
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
        <div className="gap-5 w-full flex flex-col">
          <div className="pt-5">Pages</div>
          <hr />
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageMakerLayout;
