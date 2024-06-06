import React, { useEffect, useState } from "react";
import FaqAccordion from "./Faqs";

interface PageData {
  page: string;
  link: string;
}

interface LanguagesProps {
  Language: string;
  page: PageData[];
}

const FormSection = ({ title, onSubmit, data }: any) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestionChange = (e: any) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e: any) => {
    setAnswer(e.target.value);
  };

  const handleFormSubmit = () => {
    onSubmit({ question, answer });
    setQuestion("");
    setAnswer("");
  };
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full flex flex-col gap-5">
        <label
          htmlFor="inputData"
          className="block mb-2 text-xl font-light text-gray-700"
        >
          {title}:
        </label>
        <input
          id="question"
          type="text"
          placeholder="Write your Question here..."
          value={question}
          onChange={handleQuestionChange}
          className="p-2 rounded-md border"
        />
        <textarea
          id="Answer"
          placeholder="Write your Answer here..."
          value={answer}
          onChange={handleAnswerChange}
          className="p-2 rounded-md border"
        />
      </div>
      <div className="flex w-full gap-5">
        <button className="border rounded-md p-2" onClick={handleFormSubmit}>
          Add
        </button>
      </div>
      <FaqAccordion data={data} />
    </div>
  );
};

export default FormSection;
