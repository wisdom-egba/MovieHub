import React from "react"
import { Link } from "react-router-dom"

export const HomeNav = () => {
  return (
    <div className="ml-10 mt-8 flex gap-8 uppercase">
      <Link to="/">All</Link>
      <Link to="tvshows">Tv-Shows</Link>
      <Link to="movies">Movies</Link>
    </div>
  )
}
