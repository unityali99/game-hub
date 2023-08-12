import { createBrowserRouter } from "react-router-dom";
import Layout from "./sections/Layout";
import GamesPage from "./pages/GamesPage";
import GameDetails from "./pages/GameDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <GamesPage /> },
      { path: ":id", element: <GameDetails /> },
    ],
  },
]);

export default router;
