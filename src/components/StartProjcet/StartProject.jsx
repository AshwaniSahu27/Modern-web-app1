import React, { useState } from "react";
import Button from "../Button";
import Eye from "../Eye/Eye";

function StartProject() {
  const [rotate, setRotate] = useState(0);
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [range,setRange] = useState(0)

  function rotateMethod(evt) {
    let clientX = evt.clientX;
    let clientY = evt.clientY;
    let deltaX = clientX - window.innerWidth / 2;
    let deltaY = clientY - window.innerHeight / 2;
    let angel = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    setRotate(angel - 180);
    setRotate(angel-180);
  }

  return (
    <div className=" relative w-full bg-[#CDEA68]" onMouseMove={rotateMethod}>
      <div className="flex flex-col items-center  justify-center px-28 py-16 leading-none tracking-tighter text-zinc-700 ">
        <div className="first">
          <h1 className=" landing_page text-[12vw] leading-[10vw] tracking-tighter">
            READY
          </h1>
        </div>
        <div className="second flex items-center gap-1 overflow-hidden">
          <h1 className=" landing_page text-[12vw] leading-[10vw] tracking-tighter">
            TO START
          </h1>
        </div>
        <div className="third">
          <h1 className=" tracking-tigh landing_page text-[12vw] leading-[10vw] tracking-tighter">
            THE PROJECT?
          </h1>
        </div>
      </div>
      <Eye rotate={rotate} range={range} />

      <div className="flex flex-col items-center justify-center ">
        <div
        onMouseEnter={()=>setIsHover1(true)}
                onMouseLeave={()=>setIsHover1(false)}
              className=" w-72 ">
          <Button name="START THE PROJECT" isHover={isHover1} />
        </div>
        <h1>OR</h1>
        <div 
         onMouseEnter={()=>setIsHover2(true)}
         onMouseLeave={()=>setIsHover2(false)}
       className=" w-72 ">
          <Button name="LOOK THE PROJECT" isHover={isHover2}/>
        </div>
      </div>
    </div>
  );
}

export default StartProject;
