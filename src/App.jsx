import "animate.css";
import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import FilteredHome from "./routes/FilteredHome";
import Home from "./routes/Home";
import Root from "./routes/root";

const Fav = lazy(() => import("./routes/Fav"));
const Login = lazy(() => import("./routes/User/Login"));
const NotFound = lazy(() => import("./routes/NotFound"));
const NotRegisteredUser = lazy(() => "./routes/User/NotRegisteredUser");
const PetDetail = lazy(() => import("./routes/PetDetail"));
const User = lazy(() => import("./routes/User"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
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
      {
        path: "/fav",
        element: (
          <ProtectedRoute>
            <Fav />
          </ProtectedRoute>
        ),
      },
      {
        path: "/user",
        element: (
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <NotRegisteredUser />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<div />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
