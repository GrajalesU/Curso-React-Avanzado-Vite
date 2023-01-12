import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";

export default function Root() {
  return (
    <>
      <Logo />
      <Outlet />
      <NavBar />
    </>
  );
}
