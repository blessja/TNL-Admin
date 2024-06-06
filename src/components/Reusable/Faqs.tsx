import Link from "next/link";
import React, { useState } from "react";

interface Props {
  data: any;
}

const FaqAccordion: React.FC<Props> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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
          <div
            className={`px-4 border-t transition-all duration-300 ${
              openIndex === index
                ? "max-h-96 py-2"
                : "py-0 max-h-0 overflow-hidden"
            }`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
