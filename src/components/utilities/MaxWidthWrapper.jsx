import React from "react";

const MaxWidthWrapper = ({ children }) => {
  return <div className="mx-auto max-w-[1440px]">{children}</div>;
};

export default MaxWidthWrapper;
