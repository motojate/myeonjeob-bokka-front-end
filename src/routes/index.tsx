import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from './PrivateRoute'
import Home from 'src/pages/Home'
import Login from 'src/pages/Login'

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default RouterConfig
