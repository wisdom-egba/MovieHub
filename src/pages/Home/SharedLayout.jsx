import React from "react"
import { Outlet, Link } from "react-router-dom"
import { HomeNav } from "./HomeNav"
import { MovieList } from "../../api/MovieList"
HomeNav
export const SharedLayout = () => {
  return (
    <div className="">
      <HomeNav />
      <Outlet />
    </div>
  )
}
