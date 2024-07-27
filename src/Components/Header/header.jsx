import React from "react";
import img from "../../assets/pic.jpg";

export const Header = () => {
  return (
    <div className="fixed top-0 w-full z-100">
      <div className="header bg-gray-600">
        <div className="content flex items-center justify-between p-1">
          <div className="title flex items-center">
            <img src={img} alt="Air Pollution" className="w-10 h-10 rounded" />
            <h2 className="text-xl font-bold text-white p-2 rounded mr-4">
              Air Pollution
            </h2>
          </div>
          <div className="nav flex items-center">
            <a className="text-white mx-2 hover:text-blue-200">Real Number</a>
            <a className="text-white mx-2 hover:text-blue-200">Chart</a>
            <a className="text-white mx-2 hover:text-blue-200">Table</a>
          </div>
        </div>
      </div>
    </div>
  );
};
