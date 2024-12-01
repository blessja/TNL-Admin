"use client";
import Image from "next/image";
import Pinnaccf from "../../../assets/cf_pinnac.svg";
import Siddhicf from "../../../assets/cf_siddhi.svg";
import Shubhamcf from "../../../assets/cf_shubham.svg";

type CofounderProps = {
  pinnacName: string;
  siddhiName: string;
  shubhamName: string;
  pinnacDesc: string;
  siddhiDesc: string;
  shubhamDesc: string;
};

const Cofounders = ({
  pinnacName,
  siddhiName,
  shubhamName,
  pinnacDesc,
  siddhiDesc,
  shubhamDesc,
}: CofounderProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center p-8 gap-y-10"
      style={{
        background: "linear-gradient(to bottom, rgba(117, 117, 117, 0.5), #F6F3F3)",
      }}
    >
      <p className="text-2xl md:text-4xl font-bold mb-7">Meet our Co-Founders:</p>
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col md:flex-row gap-9 justify-center items-center">
          <Image
            src={Pinnaccf}
            alt="Pinnac Yeddy"
            className="w-100 h-100 md:w-auto md:h-auto"
          />
          <div className="flex flex-col gap-y-4 md:gap-y-7 max-w-lg">
            <p className="text-2xl md:text-4xl font-bold">{pinnacName}</p>
            <p className="text-sm md:text-base leading-relaxed mt-4">{pinnacDesc}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-9 justify-center items-center">
          <Image
            src={Siddhicf}
            alt="Siddhi Chokani"
            className="w-100 h-100 md:w-auto md:h-auto"
          />
          <div className="flex flex-col gap-y-4 md:gap-y-7 max-w-lg">
            <p className="text-2xl md:text-4xl font-bold">{siddhiName}</p>
            <p className="text-sm md:text-base leading-relaxed mt-4">{siddhiDesc}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-9 justify-center items-center">
          <Image
            src={Shubhamcf}
            alt="Shubham Pille"
            className="w-100 h-100 md:w-auto md:h-auto"
          />
          <div className="flex flex-col gap-y-4 md:gap-y-7 max-w-lg">
            <p className="text-2xl md:text-4xl font-bold">{shubhamName}</p>
            <p className="text-sm md:text-base leading-relaxed mt-4">{shubhamDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cofounders;
