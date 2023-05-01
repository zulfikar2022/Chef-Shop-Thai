import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import MainLayout from './components/MainLayout/MainLayout.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>
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
