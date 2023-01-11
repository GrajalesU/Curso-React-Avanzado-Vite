import React from "react";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Logo />
      <Outlet />
      <NavBar />
    </>
  );
}
