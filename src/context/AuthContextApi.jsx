import React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../../firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"

const AuthContext = createContext()

export const AuthContextApi = ({ children }) => {
  const [user, setUser] = useState({})

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser)
  //   })
  //   return () => {
  //     unsubscribe()
  //   }
  // })
  return (
    <AuthContextApi.Provider value={{ signUp, signOut, logIn, logOut, user }}>
      {children}
    </AuthContextApi.Provider>
  )
}

export function UserAuth() {
  return useContext(AuthContext)
}
