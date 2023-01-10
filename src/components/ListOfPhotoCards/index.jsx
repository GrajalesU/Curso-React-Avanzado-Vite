import React from "react";
import PhotoCard from "../PhotoCard";
export default function ListOfPhotoCards() {
  return (
    <ul>
      {[1, 2, 3].map((photoCard) => (
        <PhotoCard key={photoCard} />
      ))}
    </ul>
  );
}
