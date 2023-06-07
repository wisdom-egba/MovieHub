import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Bookmark } from "./pages/Bookmark/Bookmark"
import { Search } from "./pages/Search/Search"
import { User } from "./pages/User/User"
import { All } from "./pages/Home/All"
import { TvShow } from "./pages/Home/TvShow"
import { Movie } from "./pages/Home/Movie"
import { SharedLayout } from "./pages/Home/SharedLayout"
import { Account } from "./pages/login/Account"
import { Login } from "./pages/login/Login"
import { SignUp } from "./pages/login/SignUp"
import { AuthContextApi } from "./context/AuthContextApi"

function App() {
  return (
    <>
      <AuthContextApi>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<All />} />
              <Route path="tvshows" element={<TvShow />} />
              <Route path="movies" element={<Movie />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/search" element={<Search />} />
            <Route path="/user" element={<User />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </AuthContextApi>
    </>
  )
}

export default App
