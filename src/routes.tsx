import { createBrowserRouter } from "react-router-dom";
import Layout from "./sections/Layout";
import GamesPage from "./pages/GamesPage";
import GameDetails from "./pages/GameDetails";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <GamesPage /> },
      { path: ":id", element: <GameDetails /> },
    ],
  },
]);

export default router;
