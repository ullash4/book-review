import React from "react";
import ReviewForHome from "../Review/ReviewForHome";

const Home = () => {
  return (
    <div className="my-10">
      <div className="flex justify-around items-center p-24">
        <div>
          <div className="border-l-2 p-3 border-slate-200">
            <h1 className="text-5xl font-semibold mb-5 ">
              The best book you have ever read
            </h1>
            <p className="font-medium font-xl ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam{" "}
              <br /> ducimus nihil ex ullam, ab possimus dolorem porro quisquam
              saepe modi.
            </p>
          </div>
          <button className="py-2 px-3 bg-slate-400 rounded-lg font-semibold m-5">
            Read Books
          </button>
        </div>
        <div>
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
