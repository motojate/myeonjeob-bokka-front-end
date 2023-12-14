import React from 'react'
import { Route, Routes, createBrowserRouter } from 'react-router-dom'
import PrivateRoutes from './PrivateRoute'
import Home from 'src/pages/Home'
import Login from 'src/pages/Login'
import QuestionMain from 'src/pages/question/QuestionMain'

const router = createBrowserRouter([])

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<QuestionMain />} />
      </Route>
    </Routes>
  )
}

export default RouterConfig
