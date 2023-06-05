import React from "react"
import { Outlet, Link } from "react-router-dom"
import { HomeNav } from "./HomeNav"
HomeNav
export const SharedLayout = () => {
  return (
    <div>
      <HomeNav />
      <Outlet />
    </div>
  )
}
