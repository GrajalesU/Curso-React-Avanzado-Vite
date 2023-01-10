import React from "react";
import Category from "../Category";
export default function ListOfCategories() {
  return (
    <ul className="flex overflow-scroll w-full">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((category) => (
        <li className="px-2" key={category}>
          <Category />
        </li>
      ))}
    </ul>
  );
}
