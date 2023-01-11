import React from "react";
import PetDetail from "./routes/PetDetail";
import Home from "./routes/Home";
import FilteredHome from "./routes/FilteredHome";
import Root from "./routes/root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:petId",
        element: <PetDetail />,
      },
      {
        path: "/photos/:categoryId",
        element: <FilteredHome />,
      },
    ],
  },
]);

import "animate.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
