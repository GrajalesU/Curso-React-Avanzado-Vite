import React, { memo, useEffect, useState } from "react";
import Category from "../Category";

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://petgram-api-grajalesu.vercel.app/categories")
      .then((res) => res.json())
      .then((res) => setCategories(res))
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
}

function ListOfCategories() {
  const [showFixed, setShowFixed] = useState(false);
  const { categories, loading } = useCategoriesData();

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 180;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);

  if (loading) {
    return (
      <ul className="flex overflow-scroll overflow-y-hidden w-full mb-3">
        {[1, 2, 3, 4, 5, 6].map((loadElement) => (
          <li className="px-2" key={loadElement}>
            <Category />
          </li>
        ))}
      </ul>
    );
  }

  const fixedCategory = () => (
    <ul className="flex fixed overflow-scroll overflow-y-hidden w-full bg-white rounded-[60px] shadow-md shadow-gray-100 left-0 right-0 mx-auto max-w-[450px] p-2 top-0 scale-[0.7] z-10">
      {categories.map((category) => (
        <li className="px-2" key={category.id}>
          <Category {...category} />
        </li>
      ))}
    </ul>
  );

  const category = () => (
    <ul className="flex overflow-scroll overflow-y-hidden w-full mb-3">
      {categories.map((category) => (
        <li className="px-2" key={category.id}>
          <Category {...category} />
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {category()}
      {showFixed && fixedCategory()}
    </>
  );
}

export default memo(ListOfCategories);
