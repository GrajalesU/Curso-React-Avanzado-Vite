import React from "react";
import footPrint from "../../assets/footPrint.jpg";

export default function Category({ cover = footPrint, path, emoji = "🐾" }) {
  return (
    <a href={path} className=" flex flex-col text-center no-underline w-[75px]">
      <img
        src={cover}
        className="border-[1px] border-[#ddd] shadow-gray-200 shadow-md rounded-[50%] overflow-hidden object-cover h-[75px] w-[75px]"
      />
      <span>{emoji}</span>
    </a>
  );
}
