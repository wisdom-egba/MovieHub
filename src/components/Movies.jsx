import React, { useState } from "react"
import { BsHeart, BsHeartFill } from "react-icons/bs"
export const Movies = ({ item }) => {
  const [like, setLike] = useState(false)

  return (
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
  )
}
