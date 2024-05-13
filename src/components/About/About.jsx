import React, { useState } from "react";
import Button from "../Button";


function About() {
  const [isHover,setIsHover] = useState(false);


  return (
    <div
    data-scroll data-scroll-speed="-.1"
      className="w-full rounded-t-3xl py-10 "
      style={{ backgroundColor: "rgb(205 234 104)" }}
    >
      <div className=" border-b-[1px] border-zinc-500  pb-16 ">
        <h1 className="text-[3vw] leading-none tracking-tight">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium unde ratione harum temporibus dolorum amet a doloremque fugit, saepe dolor 
          {/* <img src="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww" alt="" /> */}
        </h1>
      </div>
      <div className="flex gap-2 mt-7">
        <div className="w-1/2">
          <h1 className="text-[5vw]">Our approach:</h1>
          <div onMouseEnter={()=>setIsHover(true)}
                onMouseLeave={()=>setIsHover(false)}
              className=" w-60 ">
            <Button name=" READ MORE" isHover={isHover}/>
          </div>
        </div>

        <div className={`w-[45vw] h-[30vw] bg-gray-500 rounded-2xl transition-all duration-500  overflow-hidden 
        ${isHover?"scale-[0.9]":"scale-[1]"}
        `}>
           <img src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className=" w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  );
}

export default About;
