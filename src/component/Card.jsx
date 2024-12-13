import React from "react";
import RatingIcon from "../icons/RatingIcon";

const Card = ({ imageSrc, name, title, description, rating }) => {
  return (
    <div>
      <div className="bg-white lg:w-full max-md:w-full py-5 rounded-[10px] shadow-md cursor-pointer flex flex-col gap-3 px-3 transition-transform duration-300 transform hover:-translate-y-2">
        <div className="flex flex-row items-center gap-3 px-3 ">
          <img
            src={imageSrc}
            alt={name}
            height={100}
            width={100}
            className="rounded-full aspect-square h-[100px]"
          />
          <div className="flex flex-col ">
            <p className="whitespace-nowrap font-medium text-black lg:text-[20px] max-md:text-[12px] ">
              {name}
            </p>
            <p className="whitespace-nowrap font-normal text-black text-[15px] max-md:text-[10px]">
              {title}
            </p>
          </div>
        </div>
        <div className="flex justify-start font-medium lg:text-[13px] max-md:text-[9px] px-3">
          {description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-row items-center  px-3">
          {[...Array(rating)].map((_, index) => (
            <RatingIcon key={index} color="#2B2B5E" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
