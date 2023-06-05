import React from "react"
import { GoHome } from "react-icons/go"
import { BsBookmark, BsSearch } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import { NavLink } from "react-router-dom"
export const Sidebar = ({ children }) => {
  const menuItems = [
    {
      path: "/",
      name: "Home",
      icon: <GoHome />,
    },
    {
      path: "/bookmark",
      name: "Bookmark",
      icon: <BsBookmark />,
    },
    {
      path: "/search",
      name: "Search",
      icon: <BsSearch />,
    },
    {
      path: "/user",
      name: "User",
      icon: <AiOutlineUser />,
    },
  ]
  return (
    <div className=" flex">
      <div className="">
        {menuItems.map((items, index) => (
          <NavLink to={items.path} key={index}>
            <div>
              <li className=" list-none">{items.icon}</li>
            </div>
          </NavLink>
        ))}
      </div>
      <main className="w-full">{children}</main>
    </div>
  )
}
