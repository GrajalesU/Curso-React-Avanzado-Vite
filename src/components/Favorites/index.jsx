import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export default function Favorites() {
  const { loading, error, data } = useQuery(GET_FAVS, {
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <p>Loading ...</p>;
  if (error) return <pre>{error.message}</pre>;
  return (
    <ul className="pt-8">
      {data.favs.map((fav) => (
        <li
          key={fav.id}
          className="w-[31.33%] h-28 inline-block rounded-lg shadow shadow-gray-100 m-[1%] overflow-hidden relative"
        >
          <Link to={`/${fav.id}`}>
            <img
              className="inset-0 object-cover w-full h-full absolute"
              src={fav.src}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
