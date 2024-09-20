"use client"
import NavButtons from "@/components/Reusable/NavButtons";
import SideBar from "@/components/SideBar";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "@/Store/apiSlice";
import React from "react";

const Homelayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div >
      <SideBar>
        <ApiProvider api={api}>{children}</ApiProvider>
      </SideBar>
      {/* <HomeFooter /> */}
    </div>
  );
};

export default Homelayout;
