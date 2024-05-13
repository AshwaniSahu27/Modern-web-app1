import React from "react";
import { FaLocationArrow } from "react-icons/fa6";


function Button({name,isHover}) {
  return (
    <>
      <button className={`mt-5 flex items-center justify-center gap-3 rounded-[30px] 
     transition-all duration-500 px-8 py-4  text-xl ${isHover?"bg-slate-400 text-black":"bg-slate-950 text-white"}`}>
         {name}
        <div className={`flex h-6 w-6 items-center justify-center rounded-full border-[1px] border-zinc-100 text-[1vw] ${isHover?"scale-1":"scale-[0.5]"} transition-all duration-300`} >
          <FaLocationArrow />
        </div>
      </button>
    </>
  );
}

export default Button;
