import React from "react";
import ListOfCategories from "./components/ListOfCategories";
import ListOfPhotoCards from "./components/ListOfPhotoCards";
import PetDetail from "./routes/PetDetail";
import Root from "./routes/root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <>
            <ListOfCategories />
            <ListOfPhotoCards />
          </>
        ),
      },
      {
        path: "/:petId",
        element: <PetDetail />,
      },
    ],
  },
]);

import "animate.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
