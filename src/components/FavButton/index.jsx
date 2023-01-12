import { gql, useMutation } from "@apollo/client";
import React from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import Loader from "../Loader";

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export default function FavButton({ id, likes, liked }) {
  const [likePhoto, { loading }] = useMutation(LIKE_PHOTO);
  if (loading) {
    return (
      <button
        className="pt-2 flex items-center gap-1"
        onClick={() => {
          likePhoto({ variables: { input: { id } } });
        }}
      >
        <Loader />
        {likes} likes!
      </button>
    );
  }
  return (
    <button
      className="pt-2 flex items-center gap-1"
      onClick={() => {
        likePhoto({ variables: { input: { id } } });
      }}
    >
      {liked ? (
        <MdFavorite size="32px" color="#758bff" />
      ) : (
        <MdFavoriteBorder size="32px" color="#758bff" />
      )}
      {likes} likes!
    </button>
  );
}
