import { gql, useQuery } from "@apollo/client";
import React from "react";
import PhotoCard from "../PhotoCard";

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export default function ListOfPhotoCards({ categoryId }) {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId },
  });

  if (error) {
    return <pre>Internal Server Error</pre>;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="mb-14">
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
}
