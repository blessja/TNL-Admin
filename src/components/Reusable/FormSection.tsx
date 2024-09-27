import React, { useEffect, useState } from "react";
import FaqAccordion from "./Faqs";
import RichTextEditor from "../RichTextEditor";

interface PageData {
  page: string;
  link: string;
}

interface LanguagesProps {
  Language: string;
  page: PageData[];
}

const FormSection = ({ title, onSubmit, data, language, context }: any) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestionChange = (e: any) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e: any) => {
    console.log(answer);
    setAnswer(e.target.value);
  };

  const handleFormSubmit = () => {
    onSubmit({ question, answer, language, context });
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
        <div>
          <h1>Answer</h1>
          <RichTextEditor
            value={answer}
            onChange={(value) => setAnswer(value)}
          />
        </div>
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
