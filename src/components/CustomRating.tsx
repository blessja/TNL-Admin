"use client";
import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

interface CustomRatingProps {
  initialRating?: number;
}

export const CustomRating: React.FC<CustomRatingProps> = ({
  initialRating = 4.5,
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const maxStars = 5; // Maximum number of stars for the rating



  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      const starIcon =
        i <= Math.floor(rating) ? (
          <FaStar className=" w-4 fill-yellow-300" key={i} />
        ) : i > rating ? (
          <FaRegStar className=" w-4" key={i} />
        ) : (
          <FaStar className=" w-4" key={i} style={{ color: "#FFC107" }} />
        );
      stars.push(
        <div
          className="cursor-pointer inline-flex items-center justify-center"
        >
          {starIcon}
        </div>
      );
    }
    return stars;
  };

  return (
    <div className="flex items-center">
      <div className="mr-2 h-2 w-8 flex">{renderStars()}</div>
    </div>
  );
};
