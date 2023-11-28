
"use client";
import SideBar from "./components/SideBar";
import SideBarItem from "./components/SideBarItem";
import Header from "./components/Header";
import { useState } from "react";
import data from "./components/data"

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }
  return (
    <>
      <Header toggleSidebar={toggleSidebar} collapsed={collapsed} />
      <main className="flex min-h-screen flex-col items-start">
        <SideBar className="" collapsed={collapsed} >
          <div className="space-y-2">
            {data.map((item, index) => (
              <SideBarDynamic key={index} {...item} collapsed={collapsed} />
            ))}
          </div>
          <hr className="border-t border-gray-300 mb-10 mt-2" />
        </SideBar>
      </main>
    </>
  )
}

const SideBarDynamic = ({ icon, text, children,collapsed }) => {
  return (
    <div>
      {collapsed ? (
        <>
          {children && (
            <div className="ml-2">
              {children.map((child, index) => (
                <SideBarItem key={index} {...child} collapsed={collapsed} />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          {children && (
            <>
              <span>{text}</span>
              <div className="ml-2">
                {children.map((child, index) => (
                  <SideBarItem key={index} {...child} collapsed={collapsed} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}