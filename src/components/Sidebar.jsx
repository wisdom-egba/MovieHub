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
    <div className="flex h-[100vh]">
      <div className=" flex flex-col justify-evenly bg-[#222222]">
        {menuItems.map((items, index) => (
          <NavLink to={items.path} key={index}>
            <div>
              <li className=" list-none text-3xl px-4 text-gray-600 hover:text-[#ADF802] fill-[#FFFA33] py-5 focus:opacity-25">
                {items.icon}
              </li>
            </div>
          </NavLink>
        ))}
      </div>
      <main className="w-full">{children}</main>
    </div>
  )
}
