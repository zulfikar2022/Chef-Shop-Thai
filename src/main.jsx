/* eslint-disable no-unused-vars */
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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import ChefRecipe from "./components/ChefRecipe/ChefRecipe.jsx";





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader:() => fetch('https://chef-shop-server.vercel.app/'),
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
      {
        path:':id',
        element:<PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
        loader:({params}) => fetch(`https://chef-shop-server.vercel.app/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
