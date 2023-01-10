import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
const DEFAULT_IMG =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg";

export default function PhotoCard({ id, likes = 0, src = DEFAULT_IMG }) {
  return (
    <article
      className="animate__animated animate__fadeIn"
      style={{ "--animate-duration": "0.8s" }}
    >
      <a href={`/detail/${id}`}>
        <div className="rounded-lg block h-0 overflow-hidden pt-[56.25%] relative w-full">
          <img
            className="shadow-sm shadow-gray-100 h-full object-cover absolute top-0 w-full"
            src={src}
          />
        </div>
      </a>

      <button className="pt-2 flex items-center gap-1">
        <MdFavoriteBorder size="32px" />
        {likes} likes!
      </button>
    </article>
  );
}
