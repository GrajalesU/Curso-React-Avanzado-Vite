import "animate.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Fav from "./routes/Fav";
import FilteredHome from "./routes/FilteredHome";
import Home from "./routes/Home";
import PetDetail from "./routes/PetDetail";
import User from "./routes/User";
import Root from "./routes/root";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotRegisteredUser from "./routes/User/NotRegisteredUser";


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
      {
        path: '/fav',
        element:  <ProtectedRoute>
                    <Fav/>
                  </ProtectedRoute>
      },
      {
        path: '/user',
        element:  <ProtectedRoute>
                    <User/>
                  </ProtectedRoute>
      },
      {
        path: "/login",
        element: <NotRegisteredUser />
      }
    ],
  },
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;
