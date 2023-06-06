import axios from "axios"

import React, { useEffect, useState } from "react"
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md"
import { Movies } from "./Movies"
export const Rows = ({ title, fetchUrl, rowId }) => {
  const [movies, setMovie] = useState([])

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovie(response.data.results)
    })
  }, [fetchUrl])
  console.log(movies)

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId)
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <>
      <h2 className="text-white">{title}</h2>
      <div className="flex items-center relative group">
        <MdOutlineArrowBackIos
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-30 hover:opacity-80 z-10 cursor-pointer hidden group-hover:block "
          size={35}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide my-8 mt-3 relative"
        >
          {movies.map((item, id) => (
            <Movies key={id} item={item} />
          ))}
        </div>
        <MdArrowForwardIos
          onClick={slideRight}
          size={35}
          className="bg-white right-0 rounded-full absolute opacity-30 hover:opacity-80 z-10 hidden group-hover:block"
        />
      </div>
    </>
  )
}
