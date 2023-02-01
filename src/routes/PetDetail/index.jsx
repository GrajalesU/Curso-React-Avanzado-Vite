import { gql, useQuery } from "@apollo/client";
import React from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useParams } from "react-router-dom";
import PhotoCard from "../../components/PhotoCard";
import NotFound from "../NotFound";

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

  if (data?.photo?.id === null) {
    return <NotFound />;
  }

  return (
    <>
      <PhotoCard {...data.photo} />
      <hr className="w-11/12 mx-auto mb-6" />
      <ul className="ml-6 flex flex-col gap-2 mb-12">
        <li className="flex gap-4 items-center mr-4">
          <div className="w-16 p-1 border rounded-full border-[#4161ffbd]">
            <img
              src="https://loremflickr.com/64/64/animals?lock=7"
              alt="profile"
              className="w-full object-cover rounded-full block"
            />
          </div>
          <div className="items-center flex justify-between gap-1 w-full">
            <p className="block">
              Wow it's so cute, I love it 💕😁😁💕
            </p>
            <div className="justify-self-end">
              <MdFavorite size="24px" color="#758bff"  />
            </div>
          </div>
        </li>
        <li className="flex gap-4 items-center mr-4">
          <div className="w-16 p-1 border rounded-full border-[#4161ffbd]">
            <img
              src="https://loremflickr.com/64/64/animals?lock=10"
              alt="profile"
              className="w-full object-cover rounded-full block"
            />
          </div>
          <div className="items-center flex justify-between gap-1 w-full">
            <p className="block">
            This is awesome🔥❤️
            </p>
            <div className="justify-self-end">
              <MdFavorite size="24px" color="#758bff"  />
            </div>
          </div>
        </li>
        <li className="flex gap-4 items-center mr-4">
          <div className="w-16 p-1 border rounded-full border-[#4161ffbd]">
            <img
              src="https://loremflickr.com/64/64/animals?lock=12"
              alt="profile"
              className="w-full object-cover rounded-full block"
            />
          </div>
          <div className="items-center flex justify-between gap-1 w-full">
            <p className="block">
            Is that a hexbug or a different toy? Rosie likes playing with these too! 😻
            </p>
            <div className="justify-self-end">
              <MdFavoriteBorder size="24px" color="#758bff"  />
            </div>
          </div>
        </li>
        <li className="flex gap-4 items-center mr-4">
          <div className="w-16 p-1 border rounded-full border-[#4161ffbd]">
            <img
              src="https://loremflickr.com/64/64/animals?lock=13"
              alt="profile"
              className="w-full object-cover rounded-full block"
            />
          </div>
          <div className="items-center flex justify-between gap-1 w-full">
            <p className="block">
            ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️😘️😹😹😹😹😹😹😹😹😹😹😹🤣😹😹🤣😹🤣
            </p>
            <div className="justify-self-end">
              <MdFavoriteBorder size="24px" color="#758bff"  />
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
