import React from "react";

const LoadingSpinner = () => {
  return (
    <div
      className=" inline-block w-[80%] h-[80%] after:content-none 
    after:block after:w-[64px] after:h-[64px] after:m-2 after:rounded-[50%] after:border-gray-900 after:border-[6px] animate-spin duration-500 "
    >
      FUCK OFF
    </div>
  );
};

export default LoadingSpinner;
