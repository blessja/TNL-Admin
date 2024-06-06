"use client"
import store from "@/Store/Store";
import NavButtons from "@/components/Reusable/NavButtons";
import SideBar from "@/components/SideBar";
import React from "react";
import { Provider } from "react-redux";

const Homelayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="">
      <SideBar>
        <Provider store={store}>{children}</Provider>
      </SideBar>
      {/* <HomeFooter /> */}
    </div>
  );
};

export default Homelayout;
