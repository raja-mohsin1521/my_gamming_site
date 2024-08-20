import { createBrowserRouter } from "react-router-dom";

import GameDetailPage from "./Pages/GameDetails";
import HomePage from "./Pages/Home";
import Layout from "./Pages/Layout";
import Login from "./Components/Login";
import Signup from "./Components/Signup";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,

    children: [
      { index: true, element: <HomePage /> },
      {  path: 'index.html', element: <HomePage /> },
      { path: 'games', element: <HomePage /> },
      { path: 'games/:slug', element: <GameDetailPage /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> }
    ]
  }

]);

export default router;