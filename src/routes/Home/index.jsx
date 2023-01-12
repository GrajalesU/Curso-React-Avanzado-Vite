import React from "react";
import { Helmet } from "react-helmet";
import ListOfCategories from "../../components/ListOfCategories";
import ListOfPhotoCards from "../../components/ListOfPhotoCards";
export default function Home() {
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
      <ListOfPhotoCards />
    </>
  );
}
