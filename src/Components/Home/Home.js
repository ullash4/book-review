import React from "react";

const Home = () => {
  return (
    <div className="my-10">
      <div className="flex justify-around items-center p-24">
        <div>
          <div className="border-l-2 p-3 border-orange-400">
            <h1 className="text-5xl font-semibold mb-5 ">
              The best book you have ever read
            </h1>
            <p className="font-medium font-xl ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam{" "}
              <br /> ducimus nihil ex ullam, ab possimus dolorem porro quisquam
              saepe modi.
            </p>
          </div>
          <button className="py-2 px-3 bg-red-500 rounded-lg font-semibold m-5">
            Read Books
          </button>
        </div>
        <div>
        <img className="rounded-lg" src="https://i.ibb.co/vLnRnD2/Untitled-design-1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
