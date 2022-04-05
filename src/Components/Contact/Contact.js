import React from "react";
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className="flex md:flex-row flex-col justify-around items-center p-20 bg-[#3F3F3F]">
      <div className="order-2 md:order-1">
        <h5 className="text-xl md:text-5xl font-bold text-white">
          You can contact me on <br /> Gulisthan Mor
        </h5>
        <span className="flex items-center mt-5">
        <a className="mr-2 text-2xl p-3 bg-white rounded-full text-black" href="https://www.facebook.com/BigBoyUllash"> <FaFacebookF></FaFacebookF> </a>
        <a className="mr-2 text-2xl p-3 bg-white rounded-full text-black" href="https://www.instagram.com/ullash_4/"> <BsInstagram></BsInstagram> </a>
        <a className="mr-2 text-2xl p-3 bg-white rounded-full text-black" href="https://www.instagram.com/ullash_4/"><BsTwitter></BsTwitter></a>
        </span>
      </div>
      <div className="order-1 md:order-2">
        <img
          className=""
          src="https://media.giphy.com/media/Q8Uq257UnqCze/giphy.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
