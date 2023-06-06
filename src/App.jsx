import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Bookmark } from "./pages/Bookmark/Bookmark"
import { Search } from "./pages/Search/Search"
import { User } from "./pages/User/User"
import { All } from "./pages/Home/All"
import { TvShow } from "./pages/Home/TvShow"
import { Movie } from "./pages/Home/Movie"
import { SharedLayout } from "./pages/Home/SharedLayout"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<All />} />
            <Route path="tvshows" element={<TvShow />} />
            <Route path="movies" element={<Movie />} />
          </Route>
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/search" element={<Search />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
