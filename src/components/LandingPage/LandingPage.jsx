import { motion } from "framer-motion";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="h-screen w-full bg-zinc-800 py-36 text-white">
      <div className="px-20 leading-none  tracking-tighter ">
        <div className="first">
          <h1 className=" landing_page text-[7vw] leading-[6vw] tracking-tighter">
            WE CREATE
          </h1>
        </div>
        <div className="second flex items-center gap-1 overflow-hidden">
          <motion.div
            initial={{ width: "0" }}
            animate={{ width: "8vw" }}
            transition={{ease:[0.65, 0, 0.35, 1],duration:1}}
            className="h-[5vw] w-[8vw] rounded-md bg-orange-300"
          ></motion.div>
          <h1 className=" landing_page text-[7vw] leading-[6vw] tracking-tighter">
            EYE-OPENING
          </h1>
        </div>
        <div className="third">
          <h1 className=" tracking-tigh landing_page text-[7vw] leading-[6vw] tracking-tighter">
            PRESENTATIONS
          </h1>
        </div>
      </div>

      <div className=" mt-24 flex justify-between border-t-[1px] border-t-zinc-700 px-5 py-2">
        <h2>For public and private companies</h2>
        <h2>From the first pitch to IPO</h2>

        <div className="flex items-center justify-center gap-1">
          <button className=" rounded-[20px] border-[1px] border-t-slate-300 p-1 px-3 uppercase">
            Start the project
          </button>
          <div className=" flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-zinc-100">
            <FaLocationArrow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
