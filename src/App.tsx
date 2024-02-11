import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import { AuthenticationProvider } from "./contexts/AuthenticationContext";
import "./api/mocks";
import PostPage from "./pages/PostPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SignupPage from "./pages/SignupPage";
import PostWritePage from "./pages/PostWritePage";
import PostUpdatePage from "./pages/PostUpdatePage";

const queryClient = new QueryClient();

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
        element: <MyPage />,
      },
      {
        path: "/post/:id",
        element: <PostPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/post/write",
    element: <PostWritePage />,
  },
  {
    path: "/post/:id/update",
    element: <PostUpdatePage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </AuthenticationProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
