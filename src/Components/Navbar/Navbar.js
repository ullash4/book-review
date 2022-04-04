import React from "react";
import Activelink from "../Activelink/Activelink";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center p-5 bg-slate-300">
      <div>
        <h1 className="text-3xl font-semibold cursor-pointer font-mono">Books Review</h1>
      </div>
      <div className="flex justify-around items-center">
        <Activelink className="mr-5 font-mono font-semibold cursor-pointer text-xl" to="/">Home</Activelink>
        <Activelink className="mr-5 font-mono font-semibold cursor-pointer text-xl" to="/review">Review</Activelink>
        <Activelink className="mr-5 font-mono font-semibold cursor-pointer text-xl" to="/dashboard">Dashboard</Activelink>
        <Activelink className="mr-5 font-mono font-semibold cursor-pointer text-xl" to="/blog">Blog</Activelink>
        <Activelink className="mr-5 font-mono font-semibold cursor-pointer text-xl" to="/contact">Contact</Activelink>
      </div>
    </div>
  );
};

export default Navbar;
