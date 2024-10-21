import React from "react";

const MaxWidthWrapper = ({ children }) => {
  return (
    <div className="mx-auto max-w-[1440px] md:pl-7 md:pr-24">{children}</div>
  );
};

export default MaxWidthWrapper;
