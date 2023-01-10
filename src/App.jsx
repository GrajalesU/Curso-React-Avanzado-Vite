import React from "react";
import ListOfCategories from "./components/ListOfCategories";
import ListOfPhotoCards from "./components/ListOfPhotoCards";
import Logo from "./components/Logo";
function App() {
  return (
    <div>
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  );
}

export default App;
