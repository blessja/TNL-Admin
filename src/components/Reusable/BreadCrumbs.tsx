"use client";
import React from "react";
import { usePathname } from "next/navigation";

const BreadCrumbs = () => {
  const pathname = usePathname();

  const getStartedText = () => {
    switch (pathname) {
      case "/About":
        return "Learn more about us and our mission.";
      case "/Promo":
        return "Discover our latest promotions and offers.";
      case "/StatusBar":
        return "Update the status of your WebPage.";
      case "/News":
        return "Updated the latest news.";
      case "/Language":
        return "Update The language courses and resources.";
      default:
        return "Get Started...";
    }
  };

  return (
    <div className="px-5 py-[14px] h-fit lg:col-span-9 col-span-12 xl:col-span-10 w-full">
      <div className="text-3xl font-semibold">Welcome Back! 🙏🏼</div>
      <div className="mt-3">{getStartedText()}</div>
    </div>
  );
};

export default BreadCrumbs;
