import React from 'react'
import { Login } from '../screens/Auth/Login'

export default function (Stack: any) {
  return (
    <>
      <Stack.Screen name="Login" component={Login} />
    </>
  )
}