import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import MainLayout from "./components/MainLayout/MainLayout.jsx";
import Login from "./components/Login/Login.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import Registration from "./components/Registration/Registration.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import Banner from "./components/Banner/Banner.jsx";
import SubsidiaryHome from "./components/SubsidiaryHome/SubsidiaryHome.jsx";
import Chefs from "./components/Chefs/Chefs.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <SubsidiaryHome></SubsidiaryHome>,
        children:[
          {
            path:'/chef',
            element:<Chefs></Chefs>
          }
        ]
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
       
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: "/error",
    element: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
