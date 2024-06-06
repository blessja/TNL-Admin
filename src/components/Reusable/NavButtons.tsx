"use client";
import React from "react";

const NavButtons = () => {
  return (
    <div className="fixed bottom-1 w-screen flex justify-between items-center">
      <button className="  py-2 px-4 rounded-lg border">Prev {"<<"}</button>
      <button className="py-2 fixed right-0 px-4 rounded-lg border">
        Next {">>"}
      </button>
    </div>
  );
};

export default NavButtons;
