import React from "react";
import { ListItems } from "./BottomListItems";

const BottomData = () => {
  return ListItems.map((item, i) => (
    <div key={i} className="text-center md:text-start m-5">
      {item.map((dataList) => (
        <>
          <h3 className="font-titleFont text-white text-base font-semibold mb-3">
            {dataList.sectionName}
          </h3>
          <ul className="font-bodyFont">
            <li className="hover:border-b cursor-pointer duration-100 text-xs ">
              {dataList.title}
            </li>
          </ul>
        </>
      ))}
    </div>
  ));
};

export default BottomData;
