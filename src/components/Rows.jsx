import axios from "axios"
import { BsHeart, BsHeartFill } from "react-icons/bs"
import React, { useEffect, useState } from "react"

export const Rows = ({ title, fetchUrl }) => {
  const [movies, setMovie] = useState([])
  const [like, setLike] = useState(false)
  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovie(response.data.results)
    })
  }, [fetchUrl])
  console.log(movies)
  return (
    <>
      <h2 className="text-white">{title}</h2>
      <div>
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide my-8 mt-3 relative"
        >
          {movies.map((item, id) => (
            <div className="w-[190px] sm:w-[200px] md:w-[240px] lg-[280px]  inline-block cursor-pointer relative p-2 ">
              <img
                className="h-[180px] rounded-xl "
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 rounded-xl opacity-0 hover:opacity-100 text-white">
                <p className=" cursor-pointer">
                  {like ? (
                    <BsHeart className="absolute top-4 left-4 text-gray-300" />
                  ) : (
                    <BsHeart className="absolute top-4 left-4 text-gray-300 fill-red-700" />
                  )}
                </p>
                <p className="text-xs md:text-sm font-bold whitespace-normal justify-center text-center items-center h-full flex">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
