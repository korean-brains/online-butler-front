import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <h1>Search</h1>,
      },
      {
        path: "/mypage",
        element: <h1>My Page</h1>,
      },
    ],
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
