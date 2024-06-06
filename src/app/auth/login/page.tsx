"use client ";
import Image from "next/image";
import Img1 from "../../../../public/small-team-discussing-ideas-2194220-0.svg";
import React from "react";

const page = () => {
  return (
    <div className="p-5">
      <div className="font-semibold text-[20px]">The Language Network</div>
      <div className="w-full h-[900px] flex justify-center items-center">
        <div className="w-[505px] h-[701px] border-black border-[0.5px] rounded-xl">
          <div className="flex flex-col gap-10 p-10">
            <div className="text-[25px]">Welcome !</div>
            <div>
              <div className="text-[31px] font-medium">Sign in to</div>
              <div className="text-[16px]">The TLN Admin Panel</div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-[38px]">
                <div className="w-full ">
                  <div className="mb-2 ml-1 text-[16px]">E-mail</div>
                  <input
                    type="email"
                    className="w-full outline-none text-[14px] rounded-md pl-6 py-5 border-black border-[0.5px]"
                    id="email"
                    placeholder="Enter Your E-Mail"
                  />
                </div>
                <div className="w-full ">
                  <div className="mb-2 ml-1 text-[16px]">Password</div>
                  <input
                    className="w-full outline-none text-[14px] rounded-md pl-6 py-5 border-black border-[0.5px]"
                    type="password"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                </div>
              </div>

              <div className="w-full text-[12px] text-[#4D4D4D] flex justify-between items-center">
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <div>Remember Me</div>
                </div>
                <div>Forgot Password?</div>
              </div>
              <div className="bg-black rounded-md text-white text-center py-4 text-[16px]">
                Login
              </div>
            </div>
            <div className="text-[16px] text-center text-[#4D4D4D]">
              {" "}
              Don’t have an Account ?{" "}
              <strong className="text-black">Request</strong>
            </div>
          </div>
        </div>
        <Image
          alt="Login"
          className="xl:flex lg:flex hidden w-fit h-fit"
          src={Img1}
        />
      </div>
    </div>
  );
};

export default page;
