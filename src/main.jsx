import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<p>This is home page</p>
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
