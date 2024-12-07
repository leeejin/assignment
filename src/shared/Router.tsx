import { createBrowserRouter } from "react-router-dom";
import { HOME, LOGIN, MYPAGE, SIGNUP } from "../constants/pathname";
import Layout from "../layouts/Layout";
import LogInPage from "../pages/LogInPage";
import MainPage from "../pages/MainPage";
import SignUpPage from "../pages/SignUpPage";
import UserPage from "../pages/UserPage";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: HOME,
        element: <MainPage />,
      },
      {
        path: LOGIN,
        element: <LogInPage />,
      },
      {
        path: MYPAGE,
        element: <UserPage />,
      },
      {
        path: SIGNUP,
        element: <SignUpPage />,
      },
    ],
  },
]);

export default router;
