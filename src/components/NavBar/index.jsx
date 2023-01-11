import React from "react";
import { Link } from "react-router-dom";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";
export default function NavBar() {
  return (
    <nav className="flex fixed bottom-0 items-center max-w-[500px] w-full z-50 justify-around border-t border-gray-100 bg-[#fcfcfc] py-3 h-12">
      <Link
        to="/"
        className="inline-flex h-full text-[#888] justify-center w-full"
      >
        <MdHome />
      </Link>
      <Link
        to="/"
        className="inline-flex h-full text-[#888] justify-center w-full"
      >
        <MdFavoriteBorder />
      </Link>
      <Link
        to="/"
        className="inline-flex h-full text-[#888] justify-center w-full"
      >
        <MdPersonOutline />
      </Link>
    </nav>
  );
}
