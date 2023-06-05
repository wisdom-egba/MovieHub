import React from "react"
import { Link } from "react-router-dom"

export const HomeNav = () => {
  return (
    <div>
      <Link to="/">All</Link>
      <Link to="tvshows">Tv-Shows</Link>
      <Link to="movies">Movies</Link>
    </div>
  )
}
