import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"

export const HomeNav = () => {
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="hidden m-auto max-w-[90%] mt-4 w-full md:flex absolute justify-between gap-8 uppercase z-[100] items-center">
          <div className="text-gray-500 flex gap-5">
            <Link className="hover:text-[#ADF802] " to="/">
              All
            </Link>
            <Link className="hover:text-[#ADF802]" to="tvshows">
              Tv-Shows
            </Link>
            <Link className="hover:text-[#ADF802]" to="movies">
              Movies
            </Link>
          </div>
          <div className="flex gap-4">
            <Link to="/signup">
              <button className="heroBtn">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="heroBtn2">Sign In</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Small Screen Nav */}
    </>
  )
}
