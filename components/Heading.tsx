import React from "react";

const Heading = ({ title, subtext }: HeadingProps) => {
  return (
    <div className="">
      <h2 className="mb-3 font-semibold text-2xl">{title}</h2>
      <p className="leading-tight text-gray-500">{subtext}</p>
    </div>
  );
};

export default Heading;
