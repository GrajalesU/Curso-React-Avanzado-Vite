import React from "react";
import { Link } from "react-router-dom";
import FavButton from "../FavButton";

import useNearScreen from "../../hooks/useNearScreen.js";
const DEFAULT_IMG = "https://dummyimage.com/500x281/c4c4c4/c4c4c4";

export default function PhotoCard({ id, likes = 0, src = DEFAULT_IMG, liked }) {
  const [show, ref] = useNearScreen();

  return (
    <div className="w-11/12 mx-auto">
      <article ref={ref} className="min-h-[250px] py-4">
        {show && (
          <div
            className="animate__animated animate__fadeIn"
            style={{ "--animate-duration": "1s" }}
          >
            <Link to={`/${id}`}>
              <div className="rounded-lg block h-0 overflow-hidden pt-[56.25%] relative w-full">
                <img
                  className="shadow-sm shadow-gray-100 h-full object-cover absolute top-0 w-full"
                  src={src}
                />
              </div>
            </Link>
            <FavButton likes={likes} id={id} liked={liked} />
          </div>
        )}
      </article>
    </div>
  );
}

export function SquarePhotoCard({ id, src = DEFAULT_IMG }) {
  const [show, ref] = useNearScreen();

  return (
    <div className="w-[100px]">
      <article ref={ref} className="min-h-[100px]">
        {show && (
          <div
            className="animate__animated animate__fadeIn"
            style={{ "--animate-duration": "1s" }}
          >
            <Link to={`/${id}`}>
              <div className="block h-0 overflow-hidden pt-[100%] relative w-full">
                <img
                  className="shadow-sm shadow-gray-100 h-full object-cover absolute top-0 w-full"
                  src={src}
                />
              </div>
            </Link>
          </div>
        )}
      </article>
    </div>
  );
}
