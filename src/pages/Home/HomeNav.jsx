import React, { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { UserAuth } from "../../context/AuthContextApi"
export const HomeNav = () => {
  const { user, logOut } = UserAuth()
  const navigate = useNavigate()

  const handleLogOut = async () => {
    try {
      await logOut()
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
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
          {user ? (
            <div className="flex gap-4">
              <Link to="/account">
                <button className="heroBtn">Account</button>
              </Link>

              <button onClick={handleLogOut} className="heroBtn2">
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link to="/login">
                <button className="heroBtn">Sign In</button>
              </Link>
              <Link to="/signup">
                <button className="heroBtn2">Sign Up</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
