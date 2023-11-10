import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
  const isLogin = () => {
    return true
  }
  return isLogin() ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
