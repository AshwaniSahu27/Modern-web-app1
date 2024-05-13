import React from "react";

function Eye({rotate,range}) {


  return (
    <div className="absolute left-1/2  top-1/3 flex -translate-x-[55%] -translate-y-1/2 gap-2 ">
      <div className="flex h-[13vw] w-[13vw] items-center justify-center rounded-full bg-zinc-100">
        <div
          className={` flex ${range<400?"h-2/3 w-2/3":"h-2/4 w-2/4"} 
          ${range>-450?"h-2/3 w-2/3":"h-2/4 w-2/4"}
          transition-all duration-500 items-center justify-center rounded-full bg-zinc-900`}
        >
          <div
            className={`line h-5 w-full `}
            style={{ transform: `rotate(${rotate}deg)` }}
          >
            <div className="h-5 w-5 rounded-full bg-slate-100"></div>
          </div>
        </div>
      </div>
      <div className="flex h-[13vw] w-[13vw] items-center justify-center rounded-full bg-zinc-100">
        <div className={`flex ${range<400?"h-2/3 w-2/3":"h-2/4 w-2/4"}
        ${range>-450?"h-2/3 w-2/3":"h-2/4 w-2/4"}
        transition-all duration-500 items-center justify-center rounded-full bg-zinc-900`}>
          <div
            className="line h-5 w-full "
            style={{ transform: `rotate(${rotate}deg)` }}
          >
            <div className="h-5 w-5 rounded-full bg-slate-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eye;
