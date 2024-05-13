import React from "react";
import Project from "./Project";
import Button from "../Button";

function Projects() {
  let projectData = [
    {
      name: "FYDE",
      image:
        "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png",
      array: ["Audit", "CopyWriting", "SalesDeck", "SlidesDesign"],
    },
    {
      name: "VISE",
      image:
        "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg",
      array: ["Agency", "Company Presentation"],
    },
  ];

  return (
    <div className="w-full bg-zinc-800">
      <div className="border-b-[1px] border-zinc-400 py-12 px-7">
        <h1 className="text-[5vw] text-white ">Featured Projects</h1>
      </div>
      <div className="flex flex-wrap px-7">
        {projectData.map((data,idx) => {
          
            if(idx==1){
                return <Project data={data}  style=""/>;
            }else{
                return  <Project data={data} style="-right-[12vw] " />;
            }
            
        })}
      </div>
      <div className="py-6 flex justify-center items-center">
          <Button name="START NEW PROJECT"/>
      </div>
    </div>
  );
}

export default Projects;
