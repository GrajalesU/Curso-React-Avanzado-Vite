import React from "react";
import Logo from "../components/Logo";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Logo />
      <Outlet />
    </>
  );
}
