import React from "react";
import { Link } from "react-router-dom";
import FavButton from "../FavButton";

import useNearScreen from "../../hooks/useNearScreen.js";
const DEFAULT_IMG =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export default function PhotoCard({ id, likes = 0, src = DEFAULT_IMG }) {
  const [show, ref] = useNearScreen();

  return (
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
          <FavButton likes={likes} id={id} />
        </div>
      )}
    </article>
  );
}
