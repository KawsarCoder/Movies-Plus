import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../Pages/Home/Home";
import Movies from "../../Pages/Movies/Movies";
import SingleMovie from "../../Pages/Movies/SingleMovie/SingleMovie";

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
      {
        path: "/movies/:id",
        element: <SingleMovie />,
        loader: ({ params }) =>
          fetch(`https://api.tvmaze.com/shows/${params.id}`),
      },
    ],
  },
]);

export default router;
