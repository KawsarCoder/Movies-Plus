import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../Pages/Home/Home";
import Movies from "../../Pages/Movies/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
    ],
  },
]);

export default router;
