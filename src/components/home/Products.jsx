import React from "react";
import { MdStarRate } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { PiWarningDiamondFill } from "react-icons/pi";
import { MdOutlineFavorite } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

const Products = () => {
  const data = useLoaderData();
  const productData = data.data;
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-4 relative top-32 md:top-0">
      {productData.map((product) => (
        <div
          key={product.id}
          className="bg-white sm:h-[300px] md:h-auto  border-[1px] border-gray-200 py-8 z-30 hover:border-transparent rounded-2xl shadow-none hover:shadow-textShadow overflow-hidden  duration-200 relative flex flex-col sm:flex-row-reverse md:flex-col items-center  gap-4 "
        >
          <div className="imgSection sm:w-2/4 md:w-full  h-auto flex items-center justify-center md:relative group mx-4 md:mx-0">
            <div className="category  absolute top-2 md:top-0 xl:top-[-30px]  right-2 italic text-xs capitalize text-gray-500">
              {product.category}
            </div>
            <div className="rate flex items-center    absolute  top-6 md:top-4 right-3 xl:top-[-10px]  ">
              <MdStarRate className="text-yellow text-xs" />
              <p className="text-xs">{product.rating.rate}/5</p>
            </div>
            <img
              src={product.image}
              className=" sm:w-3/4   md:w-52 h-64  object-contain cursor-pointer "
              alt="ProductImg"
            />
            <ul className="w-full h-36 hidden group-hover:bg-gray-100 absolute -bottom-[154px]  group-hover:bottom-[-14px] duration-700 lg:flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r ">
              <li className="productLi text-xl">
                view details{" "}
                <span>
                  <PiWarningDiamondFill className="" />
                </span>
              </li>
              <li className="productLi text-xl">
                Add to Favorites
                <span>
                  <MdOutlineFavorite className="hover:text-red-500" />
                </span>
              </li>
              <li className="productLi text-xl">
                Add to Cart
                <span>
                  <FaCartShopping />
                </span>
              </li>
            </ul>
          </div>

          <div className="dataSection sm:w-2/4 md:w-auto h-full  px-4 md:z-10 bg-white flex flex-col justify-evenly gap-2 sm:gap-0 md:gap-2     ">
            <div className="flex sm:flex-col md:flex-row items-center sm:items-start gap-2 md:items-center justify-between">
              <h2 className="font-titleFont font-bold md:font-medium tracking-wide text-xl sm:text-2xl  md:text-lg text-blue  text-nowrap">
                <span className="hidden md:block ">
                  {product.title.substring(0, 21)}
                </span>
                <span className="hidden sm:block md:hidden">
                  {product.title.substring(0, 25)}
                </span>
                <span className="block sm:hidden">
                  {product.title.substring(0, 20)}
                </span>
              </h2>
              <p className="text-sm text-gray-600 font-semibold">
                ${product.price}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 ">
                <span className="hidden md:block">
                  {product.description.substring(0, 60)}. . .
                </span>
                <span className="hidden sm:block md:hidden tracking-wider">
                  {product.description.substring(0, 150)}
                </span>
                <span className="block sm:hidden tracking-wider">
                  {product.description.substring(0, 60)}. . . .
                </span>
              </p>
            </div>
            <button className="bg-yellow active:bg-yellow/60  hover:shadow-md border-black border duration-200 hover:scale-105 sm:w-full font-titleFont font-medium text-base md:mt-3  p-2 sm:p-1 rounded-md cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
