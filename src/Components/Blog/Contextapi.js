import React from "react";

const Contextapi = () => {
  return (
    <div className="m-20 p-20 shadow-lg rounded-xl shadow-indigo-200 ">
      <h1 className="text-justify text-xl">
        Context API is the alternative to props drilling or moving props from
        grandparent to child to parent and so on. This is the way for reactjs to
        effectively produce global variable that can be passed around Context is
        also touted as lighter approach fot state management. Context API added
        in reactjs version 16 as a new feature. Now its became very popular for
        share state across the entire code using Context API more easly and
        lightly.
      </h1>
    </div>
  );
};

export default Contextapi;
