import React from "react";
import BottomData from "./BottomData";
import { logo } from "../../../assets";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <div className="w-full bg-light text-white">
      <div className="topSection w-full border-b-2 border-gray-500 py-10">
        <div className="max-w-7xl mx-auto text-gray-300 ">
          <div className=" w-full grid grid-cols-2 lg:grid-cols-4 pb-5">
            <BottomData />
          </div>
          <div className="footerLogo w-full flex items-center justify-center gap-6 pt-8 border-t">
            <Link to={"/"}>
              <img src={logo} className="w-32 pt-3 headerHover" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
