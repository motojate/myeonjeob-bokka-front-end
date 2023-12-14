import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from 'src/pages/Home'
import Login from 'src/pages/Login'
import QuestionMain from 'src/pages/question/QuestionMain'
import PrivateRoutes from './PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoutes />, // Assuming PrivateRoutes is a layout component
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'question',
        element: <QuestionMain />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
])

const RouterConfig = () => {
  return <RouterProvider router={router} />
}

export default RouterConfig
