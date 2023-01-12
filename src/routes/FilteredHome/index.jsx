import React from "react";
import { useParams } from "react-router-dom";
import ListOfCategories from "../../components/ListOfCategories";
import ListOfPhotoCards from "../../components/ListOfPhotoCards";

export default function FilteredHome() {
  const { categoryId } = useParams();
  const id = categoryId.split("-").splice(-1)[0];
  console.log(id);
  return (
    <>
      <ListOfCategories />
      {id ? <ListOfPhotoCards categoryId={id} /> : <ListOfPhotoCards />}
    </>
  );
}
