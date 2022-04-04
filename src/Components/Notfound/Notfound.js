import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="bg-white h-[90vh]">
      <div className="flex justify-around items-center p-24">
        <div>
          <div className="">
            <h1 className="text-5xl font-semibold mb-5 ">
              OOpss Page not found!!
            </h1>
            <p className="font-medium font-xl ">
              The page you have searching for is not found. Please click below button to return home
            </p>
          </div>
          <Link to={'/'}>
          <button className="py-2 px-3 bg-red-500 rounded-lg font-semibold m-5">
            Return Home
          </button>
          </Link>
        </div>
        <div>
          <img src="https://i.ibb.co/FXDSsJP/Untitled-design-3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Notfound;
