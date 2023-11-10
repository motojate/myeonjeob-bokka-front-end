import React from 'react'
import LoginForm from 'src/components/forms/LoginForm'

const Login = () => {
  const onLogin = (userName: string, password: string) => {
    console.log(userName, password)
  }
  return <LoginForm onLogin={onLogin} />
}

export default Login
