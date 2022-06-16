import React from "react";

const IndivisualData = ({ item }) => {
  const { icon, name, value, color } = item;
  return (
    <>
      <div className="flex w-48 h-20 bg-white border-gray-200  items-center ">
        <div
          className="text-2xl rounded-full h-12 w-12 flex items-center justify-center ml-6 "
          style={{ backgroundColor: `${color}`, opacity: "0.7" }}
        >
          {icon}
        </div>
        <div className="ml-8">
          <p className="font-bold">{value}</p>

          <p className="font-light">{name}</p>
        </div>
      </div>
    </>
  );
};

export default IndivisualData;
