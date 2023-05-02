import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import MainLayout from './components/MainLayout/MainLayout.jsx'
import Login from './components/Login/Login.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import HomePage from './components/Registration/HomePage/HomePage.jsx'
import Registration from './components/Registration/Registration.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>
      }
      ,
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Registration></Registration>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      }
    ]
  }
  ,
  {
    path:'/error',
    element:<ErrorPage></ErrorPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
