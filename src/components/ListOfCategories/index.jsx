import React from "react";
import Category from "../Category";
import { categories } from "./db.json";
export default function ListOfCategories() {
  return (
    <ul className="flex overflow-scroll w-full">
      {categories.map((category) => (
        <li className="px-2" key={category.id}>
          <Category {...category} />
        </li>
      ))}
    </ul>
  );
}
