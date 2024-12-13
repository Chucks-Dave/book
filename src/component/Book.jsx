import React, { useState, useEffect } from "react";

const Book = () => {
  const [currentTime, setCurrentTime] = useState(null);
  useEffect(() => {
    setCurrentTime(new Date());

    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);
  const formatTime = (date) => {
    const fullYear = date.getFullYear();

    return { fullYear };
  };

  if (!currentTime) return null;

  const { fullYear } = formatTime(currentTime);
  return (
    <div className="custom-scrollbar ">
      <div
        className="font-outfit  bg-transparent w-full z-50 inset-3 px-5 py-10 bg-cover bg-center hg-repeat-none "
        // style={{
        //   backgroundImage: "url('/GRADUATEEDIT.png')",
        // }}
      >
        {" "}
        <p className="text-center font-black text-[150px] text-purple">
          {" "}
          THANK YOU!
        </p>
      </div>

      <div className="relative top-[220px]">
        <div className="px-8   bg-[#F7F7F7] w-full space-y-7">
          <div className=" flex flex-col justify-center items-center gap-3">
            <div className="text-black max-md:text-center">
              &copy; {fullYear} All rights Reserved from Rayzer Business
              Technologies
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
