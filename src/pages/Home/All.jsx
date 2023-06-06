import React from "react"
import { MovieList } from "../../api/MovieList"
import { Rows } from "../../components/Rows"
import { request } from "../../Request"

export const All = () => {
  return (
    <div className=" object-fill">
      <MovieList />
      <Rows rowId="1" title="Upcoming" fetchUrl={request.requestUpcoming} />
      <Rows rowId="2" title="Popular" fetchUrl={request.requestPopular} />
      <Rows rowId="3" title="Top-Rated" fetchUrl={request.requestToprated} />
      <Rows
        rowId="4"
        title="Now Playing"
        fetchUrl={request.requestNowPlaying}
      />
    </div>
  )
}
