import React from "react"
import { MovieList } from "../../api/MovieList"
import { Rows } from "../../components/Rows"
import { request } from "../../Request"

export const All = () => {
  return (
    <div className="w-full">
      <MovieList />
      {/* <Rows title="Upcoming" fetchUrl={request.requestUpcoming} />
      <Rows title="Popular" fetchUrl={request.requestPopular} />
      <Rows title="Top-Rated" fetchUrl={request.requestToprated} />
      <Rows title="Now Playing" fetchUrl={request.requestNowPlaying} /> */}
    </div>
  )
}
