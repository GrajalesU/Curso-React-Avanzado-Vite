import { MdFavoriteBorder, MdHome, MdPersonOutline } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const { pathname } = useLocation();

  return (
    <nav className="flex fixed bottom-0 items-center max-w-[500px] w-full z-50 justify-around border-t border-gray-100 bg-[#fcfcfc] py-3 h-12">
      <Link
        to="/"
        className="inline-flex h-full text-[#888] justify-center items-center w-full"
        style={{
          color: pathname === "/" ? "#000" : "#888",
        }}
      >
        <MdHome size="24px" />
      </Link>
      <Link
        to="/fav"
        className="inline-flex h-full text-[#888] items-center justify-center w-full"
        style={{
          color: pathname === "/fav" ? "#000" : "#888",
        }}
      >
        <MdFavoriteBorder size="24px" />
      </Link>
      <Link
        to="/user"
        className="inline-flex h-full text-[#888] justify-center items-center w-full"
        style={{
          color: pathname === "/user" ? "#000" : "#888",
        }}
      >
        <MdPersonOutline size="24px" />
      </Link>
    </nav>
  );
}
