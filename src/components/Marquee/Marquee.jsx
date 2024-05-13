import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scrll-section data-scroll-speed=".1" className=" font w-full overflow-hidden whitespace-nowrap rounded-t-3xl  bg-green-800 py-8 ">
      <div className=" flex w-full border-y-2 border-zinc-100 text-[10vw] uppercase text-white pl-5">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 6 }}

        >
          we are developer
        </motion.h1>
        <motion.h1
         initial={{ x: "0" }}
         animate={{ x: "-100%" }}
         transition={{ repeat: Infinity, ease: "linear", duration: 6 }}
         className=""
        >we are developer</motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
