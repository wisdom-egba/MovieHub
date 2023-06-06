import axios from "axios"
import React, { useEffect, useState } from "react"
import { request } from "../Request"
export const MovieList = () => {
  const [movies, setMovie] = useState([])
  const movieRandom = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios
      .get(request.requestPopular)
      .then((response) => setMovie(response.data.results))
  }, [])
  const truncateStr = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "..."
    } else {
      return str
    }
  }
  return (
    <div className=" w-full h-[200px] md:h-[600px] object-contain text-white">
      <div className=" w-full h-full">
        <div className="absolute w-full h-[200px] md:h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="h-full w-full opacity-210"
          src={`https://image.tmdb.org/t/p/original/${movieRandom?.backdrop_path}`}
          alt={movieRandom?.title}
        />
        <div className="">
          <div className="absolute w-full top-[5%] md:top-[20%]">
            <h1 className="text-3xl md:text-5xl font-bold">
              {movieRandom?.title}
            </h1>
            <div className="my-4">
              <button className="px-4 py-2 bg-white text-black border border-gray-300">
                Play
              </button>
              <button className="px-4 py-2 ml-4 text-white border border-gray-300">
                Watch Later
              </button>
            </div>
            <p className="text-gray-200 text-sm">{movieRandom?.release_date}</p>
            <p
              className="w-full md
          max-w-[70%] lg:max-w-[50%] text-gray-200 "
            >
              {/* {truncateStr(movieRandom?.overview, 150)} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
