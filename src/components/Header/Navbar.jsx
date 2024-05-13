import React from "react";
import logo from "../../../public/logo.svg"

function Navbar() {
  return (
    <div className="navbar backdrop:blur-[100px] fixed z-40 w-full px-20 py-6 text-white flex justify-between">
      <div className="logo">
        <img src={logo} alt="logo" className="invert"  />
      </div>
      <div className="links flex gap-3 font-medium   text-xl ">
        <a href="">Services</a>
        <a href="">Our work</a>
        <a href="">About us</a>
        <a href="">Insights</a>
        <a href="" className=" ml-72  ">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
