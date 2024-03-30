import React, { useState } from "react";
import { logo } from "../../assets";
import { IoLocationOutline, IoSearchSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown, MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [showList, setShowList] = useState(false);
  const ArrayList = [
    { title: "All departments" },
    { title: "Arts & Crafts" },
    { title: "Automotive" },
    { title: "Baby" },
    { title: "Beauty & Personal care" },
    { title: "Books" },
    { title: "Boys' Fashion" },
    { title: "Computers" },
    { title: "Deals" },
    { title: "Digital Music" },
    { title: "Electronics" },
    { title: "Girls' Fashion" },
    { title: "Health & Household" },
    { title: "Home & Kitchen" },
    { title: "Kindle Store" },
    { title: "Industrial & Scientific" },
    { title: "Luggage" },
    { title: "Men's Fashion" },
  ];
  return (
    <div className="fixed -top-1 z-50 w-full ">
      <div className="topHeader w-full bg-blue text-white px-4 py-3  grid grid-cols-3 place-items-center md:flex md:items-center gap-4 ">
        <Link to={"/"}>
          <div className="logo headerHover">
            <img className="w-24 mt-2" src={logo} alt="" />
          </div>
        </Link>

        <div className="location headerHover hidden xl:block">
          <IoLocationOutline />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver to{" "}
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              Egypt
            </span>
          </p>
        </div>

        <div className="search col-span-3  h-10 rounded-md flex flex-grow relative order-last md:order-none">
          <span
            onClick={() => setShowList(!showList)}
            className="flex items-center justify-center w-14 h-full text-md bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300  text-blue font-titleFont rounded-tl-md rounded-bl-md"
          >
            All
            <span> </span>
            <MdOutlineArrowDropDown
              className={`${!showList ? "rotate-0" : "-rotate-90"} text-xl`}
            />
          </span>
          {showList && (
            <div className="dataList">
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-blue text-black p-2 flex-col gap-1 z-50">
                {ArrayList.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-blue cursor-pointer duration-200"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            type="text"
            className="h-full text-base text-blue flex-grow  outline-none border-none px-2"
          />
          <span>
            <IoSearchSharp className="w-12 h-full flex items-center justify-center bg-yellow hover:bg-[#f3a847] duration-300 text-blue cursor-pointer rounded-tr-md rounded-br-md" />
          </span>
        </div>

        <Link to={"signin"}>
          <div className="signIn flex flex-col items-center md:items-start justify-center headerHover">
            <p class="text-xs text-lightText font-light text-nowrap">
              Hello, sign in
            </p>
            <p className="flex items-end md:items-center text-xs md:text-sm font-semibold -mt-1 text-whiteText">
              <span className="hidden sm:block">Accounts & Lists</span>
              <span className="block sm:hidden">
                <MdAccountCircle className="text-3xl mt-1" />
              </span>
              <span>
                <MdOutlineArrowDropDown className="text-xl hidden md:block" />
              </span>
            </p>
          </div>
        </Link>

        <div className="orders hidden lg:flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="flex items-center text-sm font-semibold -mt-1 text-whiteText">
            & Orders
          </p>
        </div>

        <div className="cart flex items-start justify-center headerHover relative">
          <FaShoppingCart />
          <p className="text-xs font-semibold mt-3 text-whiteText">
            Cart{" "}
            <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-blue rounded-full flex justify-center items-center">
              0
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
