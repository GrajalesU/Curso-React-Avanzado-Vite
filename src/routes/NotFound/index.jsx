import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="flex flex-col gap-6 w-full h-[90vh] items-center justify-center">
      <h1 className="block">This page doesn't exists :c</h1>
      <button
        className="bg-[#758bff] rounded text-white w-3/5 mx-auto block text-center py-2 px-1 font-medium tracking-wider"
        onClick={goBack}
      >
        Go Back
      </button>
    </div>
  );
}
