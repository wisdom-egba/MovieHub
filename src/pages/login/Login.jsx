import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../../context/AuthContextApi"

export const Login = () => {
  const { user, logIn } = UserAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await logIn(email, password)
      navigate("/")
    } catch (error) {
      console.log(error)
      setError(`Invalid login detail`)
    }
  }
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/76c10fc9-7ccd-4fbf-bc59-f16a468921ca/3f3954fa-4c3d-4566-ace8-e7b9318bf30b/NG-en-20230529-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
      />
      <div className="bg-black/60 top-0 left-0 fixed w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            {error ? <p className="text-red-700">{error}</p> : null}
            <form
              onSubmit={handleSubmit}
              action=""
              className="flex flex-col py-4"
            >
              <input
                className="p-3 my-2 rounded-lg bg-gray-600 outline-none focus:drop-shadow-lg"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                name="email"
                id="email "
                autoComplete="email"
              />
              <input
                className="p-3 my-2 rounded-lg bg-gray-600 outline-none focus:shadow-lg"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                name="password"
                id="password"
                autoComplete="current-password"
              />
              <button className="heroBtn my-6">Sign In</button>
              <div className="flex justify-between text-sm text-gray-500">
                <p>
                  <input type="checkbox" /> Remember me
                </p>
                <p>Need help?</p>
              </div>
              <p className="py-4">
                <span className="text-gray-600">New to Movie-hubz?</span>{" "}
                <Link to="/signup">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
