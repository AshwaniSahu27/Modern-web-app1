import React, { useState } from "react";
import Eye from "./Eye";

function EyePage() {
  const [rotate,setRotate] = useState(0)
  const [range,setRange] = useState(0)


  function rotateMethod(evt){

    let clientX = evt.clientX;
    let clientY = evt.clientY;

    let deltaX = clientX - window.innerWidth/2;
    let deltaY = clientY - window.innerHeight/2;
      
    
    let angel = Math.atan2(deltaY,deltaX)*(180/Math.PI)
    setRotate(angel-180)
    setRange(deltaX+deltaY)
  }

  return (
    <div  className="h-screen w-full" onMouseMove={rotateMethod} >
      <div 
      className={`relative h-screen w-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center`}
      >
       <Eye rotate={rotate} range={range}/>
      </div>
    </div>
  );
}

export default EyePage;
