"use client";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import { useState } from "react";
import data from "./components/data"
import Content from "./components/Content";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import SideBarDynamic from "./components/SideBarDynamic";

export default function Home() {
  const [collapsed, setCollapsed] = useState(false); //açık

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }
  return (
    <>
      <Header toggleSidebar={toggleSidebar} collapsed={collapsed} />
      <main className="flex min-h-screen items-start">
        <SideBar className="" collapsed={collapsed} >
          <div className={`${collapsed && 'flex-col'}`}>
            {data.map((item, index) => (
              <SideBarDynamic key={index} {...item} collapsed={collapsed} />
            ))}
          </div>
          {/* <hr className="border-t border-gray-300 mb-10 mt-2" /> */}
        </SideBar>
        <Content />
      </main>
    </>
  )
}
