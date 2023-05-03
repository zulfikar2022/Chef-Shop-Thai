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
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader:() => fetch('http://localhost:5000/'),
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
        element:<ChefRecipe></ChefRecipe>,
        loader:({params}) => fetch(`http://localhost:5000/${params.id}`)
      }
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
