import React from "react";
import "../App.css";
const Toast = () => {
  return (
    <div className="w-[170px] h-[3rem] bg-green-300 absolute right-5 flex flex-wrap items-center justify-between rounded-lg">
      <p className="text-[0.8rem] ml-3 ">Email Sent Successfully</p>
      <p className="mr-3 text-red-600">X</p>
    </div>
  );
};

export default Toast;
