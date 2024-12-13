import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  const words = " THANK YOU!";
  const letters = words.split("");
  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05, // Delay each letter's animation by 0.05 seconds
      },
    }),
  };

  return (
    <div className="custom-scrollbar ">
      <div
        className="font-outfit  bg-transparent w-full z-50 inset-3 px-5 py-10 bg-cover bg-center hg-repeat-none "
        // style={{
        //   backgroundImage: "url('/GRADUATEEDIT.png')",
        // }}
      >
        {" "}
        <div className="flex justify-center items-center">
          {letters.map((letter, i) => (
            <motion.h1
              key={i}
              variants={pullupVariant}
              initial="initial"
              animate="animate"
              custom={i}
              className="text-center font-outfit text-purple lg:text-[150px]   font-black tracking-[-0.02em] drop-shadow-sm max-md:text-6xl md:leading-[5rem]"
            >
              {letter === " " ? <span>&nbsp;</span> : letter}
            </motion.h1>
          ))}
             
        </div>
      </div>

      <div className="relative max-md:top-[480px] lg:top-[350px]">
        <div className="px-8    w-full space-y-7">
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
