import React from "react";
import ChexkIcon from "../icons/CheckIcon";
const ServiceText = ({ text }) => {
  return (
    <div className="flex flex-row items-center gap-5">
      <div className="bg-topbar flex justify-center items-center size-[20px]  rounded-full">
        <ChexkIcon />
      </div>
      <p className="text-text font-medium lg:text-[20px] max-md:text-[11px] font-roboto">
        {text}
      </p>
    </div>
  );
};

export default ServiceText;
