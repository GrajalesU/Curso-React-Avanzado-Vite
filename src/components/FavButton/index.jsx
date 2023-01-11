import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage.js";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { gql, useMutation } from "@apollo/client";

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export default function FavButton({ id, likes }) {
  const [liked, setLiked] = useLocalStorage(`like-${id}`, false);

  const [likePhoto, { data, loading, error }] = useMutation(LIKE_PHOTO);

  return (
    <button
      className="pt-2 flex items-center gap-1"
      onClick={() => {
        setLiked(!liked);
        !liked && likePhoto({ variables: { input: { id } } });
      }}
    >
      {liked ? <MdFavorite size="32px" /> : <MdFavoriteBorder size="32px" />}
      {likes} likes!
    </button>
  );
}
