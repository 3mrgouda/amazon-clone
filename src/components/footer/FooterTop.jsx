import React from "react";

const FooterTop = () => {
  return (
    <div className="w-full bg-white py-6">
      <div className="w-full border-t-[1px] border-b-[1px] py-8">
        <div className="w-64 mx-auto text-center flex flex-col gap-2">
          <p>see personalised recommendations</p>
          <button className="w-full bg-yellow/90 cursor-pointer hover:bg-yellow/60 capitalize duration-200 py-1 font-semibold rounded-md active:bg-yellow">
            sign in
          </button>
          <p className="text-xs mt-1">
            New Customer?
            <span className="text-sky-600 ml-1 cursor-pointer">
              Start here.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
