import React from "react"
import { UserAuth } from "../context/AuthContextApi"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth()
  if (!user) {
    return <Navigate to="/" />
  } else {
    return children
  }
}
