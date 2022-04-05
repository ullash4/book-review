import React from "react";

const Inlineblock = () => {
  return (
    <div className="m-20 p-20 shadow-lg rounded-xl shadow-indigo-200 ">
      <h1 className="text-justify text-xl">
        There are two values of display block and inline. Compare to inline
        block the difference is that inline block allows to set height and width
        in the elements. And with inline block elements the top and bottom
        margins and paddings are respected but inline block elements are not.
        Compared to block elements the major difference is that inline block
        elements does not add a line break after the elements thats why elements
        can sit next to others elements. Some inline elements are anchor tag,
        button tag, image tag, input tag, span tag. And some of block elements
        are header tag, div tag, footer tag, paragraph tag, ul/li tag.
      </h1>
    </div>
  );
};

export default Inlineblock;
