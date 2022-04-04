import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center p-5 bg-slate-300">
      <div>
        <h1 className="text-3xl font-semibold cursor-pointer font-mono">Books Review</h1>
      </div>
      <div>
        <a className="mr-5 font-mono font-semibold cursor-pointer text-xl" href="/">Home</a>
        <a className="mr-5 font-mono font-semibold cursor-pointer text-xl" href="/review">Review</a>
        <a className="mr-5 font-mono font-semibold cursor-pointer text-xl" href="/dashboard">Dashboard</a>
        <a className="mr-5 font-mono font-semibold cursor-pointer text-xl" href="/blog">Blog</a>
        <a className="mr-5 font-mono font-semibold cursor-pointer text-xl" href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
