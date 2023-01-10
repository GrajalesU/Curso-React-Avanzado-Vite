import React, { useEffect, useRef, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
const DEFAULT_IMG =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export default function PhotoCard({ id, likes = 0, src = DEFAULT_IMG }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShow(true);
        console.log("i'm in");
        observer.disconnect();
      } else {
        console.log("i'm not");
      }
    });

    observer.observe(ref.current);

    return () => {};
  }, [ref]);

  return (
    <article ref={ref} className="min-h-[250px] py-4">
      {show && (
        <div
          className="animate__animated animate__fadeIn"
          style={{ "--animate-duration": "1s" }}
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
        </div>
      )}
    </article>
  );
}
