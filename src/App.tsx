import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootPage from './pages/RootPage';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import MyPage from './pages/MyPage';
import LoginPage from './pages/LoginPage';
import { AuthenticationProvider } from './contexts/AuthenticationContext';
import './api/mocks';
import PostPage from './pages/PostPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import SignupPage from './pages/SignupPage';
import PostWritePage from './pages/PostWritePage';
import PostUpdatePage from './pages/PostUpdatePage';
import DonationPage from './pages/DonationPage';
import RootPageNoBottomNavigation from './pages/RootPageNoBottomNavigation';
import DonationListPage from './pages/DonationListPage';
import SearchPage from './pages/SearchPage';
import ProfileUpdatePage from './pages/ProfileUpdatePage';
import MemberPage from './pages/MemberPage';
import TagPostPage from './pages/TagPostPage';
import SettlementPage from './pages/SettlementPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      retry: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: '/post/:id',
        element: <PostPage />,
      },
    ],
  },
  {
    path: '/',
    element: <RootPageNoBottomNavigation />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/post/write',
        element: <PostWritePage />,
      },
      {
        path: '/post/:id/update',
        element: <PostUpdatePage />,
      },
      {
        path: '/donation',
        element: <DonationListPage />,
      },
      {
        path: '/donation/:id',
        element: <DonationPage />,
      },
      {
        path: '/profile/update',
        element: <ProfileUpdatePage />,
      },
      {
        path: '/member/:id/profile',
        element: <MemberPage />,
      },
      {
        path: '/tag/:tag',
        element: <TagPostPage />,
      },
      {
        path: '/settlement',
        element: <SettlementPage />,
      },
    ],
  },
  {
    path: '/test',
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
