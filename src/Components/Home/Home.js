import React from "react";
import ReviewForHome from "../Review/ReviewForHome";

const Home = () => {
  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row md:justify-around md:items-center p-24">
        <div className="order-2 md:order-1">
          <div className="border-l-2 p-3 border-slate-200">
            <h1 className="text-xl md:text-5xl font-semibold mb-5 ">
              The best book you have ever read
            </h1>
            <p className="font-thin md:font-medium text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam{" "}
              <br /> ducimus nihil ex ullam, ab possimus dolorem porro quisquam
              saepe modi.
            </p>
          </div>
          <button className="py-2 px-3 bg-slate-400 rounded-lg font-semibold m-5">
            Read Books
          </button>
        </div>
        <div className="order-1 md:order-2">
        <img className="rounded-lg" src="https://i.ibb.co/ZM1L8Bk/Untitled-design-12.png" alt="" />
        </div>
      </div>
      <div>
        <ReviewForHome></ReviewForHome>
      </div>
    </div>
  );
};

export default Home;
