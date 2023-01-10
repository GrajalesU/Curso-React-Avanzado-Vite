import React from "react";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

export default function Category({ cover = DEFAULT_IMAGE, path, emoji = "?" }) {
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
