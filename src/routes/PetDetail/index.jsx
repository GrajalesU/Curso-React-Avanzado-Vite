import React from "react";
import PhotoCard from "../../components/PhotoCard";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export default function PetDetail() {
  const { petId } = useParams();
  const { loading, error, data } = useQuery(GET_PHOTO, {
    variables: { id: petId },
  });
  if (error) {
    return <pre>Internal Server Error</pre>;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <PhotoCard {...data.photo} />;
}
