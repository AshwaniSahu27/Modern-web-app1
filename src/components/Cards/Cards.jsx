import React from "react";
import Button from "../Button";

function Cards() {
  return (
    <div className="flex w-full gap-2 bg-zinc-800 px-5 py-14">
      <div className=" relative h-[30vw] w-1/2 rounded-lg bg-[#0B60B0] flex justify-center items-center ">
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt=""
        />
        <button className=' absolute bottom-2 left-4 py-1 px-4 border-2 border-zinc-100 rounded-3xl text-white'>@Copy Write </button>
      </div>
      <div className="flex h-[30vw] w-1/2 gap-3">
        <div className=" relative h-full w-1/2  rounded-lg bg-[#9AC8CD] text-black flex justify-center items-center ">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className=' absolute bottom-2 left-4 py-1 px-4 border-2 border-zinc-100 rounded-3xl text-white'>@Copy Write </button>
        </div>
        <div className=" relative h-full w-1/2  rounded-lg bg-[#212121] flex justify-center items-center ">

            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" className="w-32" />
            <button className=' absolute bottom-2 left-4 py-1 px-4 border-2 border-zinc-100 rounded-3xl text-white'>@Copy Write </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
