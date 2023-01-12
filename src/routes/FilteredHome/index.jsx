import React from "react";
import { useParams } from "react-router-dom";
import ListOfCategories from "../../components/ListOfCategories";
import ListOfPhotoCards from "../../components/ListOfPhotoCards";
import { Helmet } from "react-helmet";

export default function FilteredHome() {
  const { categoryId } = useParams();
  const id = categoryId.split("-").splice(-1)[0];
  return (
    <>
    <Helmet>
        <title>PetGram | your photo pet app</title>
        <meta
          name="description"
          content="With PetGram you can found the cutest pet photos"
        />
      </Helmet>
      <ListOfCategories />
      {id ? <ListOfPhotoCards categoryId={id} /> : <ListOfPhotoCards />}
    </>
  );
}
