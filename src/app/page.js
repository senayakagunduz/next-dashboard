"use client";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import { useState } from "react";
import Content from "./components/Content";


export default function Home() {
  const [collapsed, setCollapsed] = useState(false); //açık

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }
 
  return (
   <div className={`inset-0 bg-black bg-opacity-50 transition-opacity ease-in-out duration-300 z-[50] ${toggleSidebar} ? 'opacity-100 pointer-events-none' : 'opacity-0 pointer-events-none' `}>
      <Header toggleSidebar={toggleSidebar} collapsed={collapsed} />
      <main className="flex items-start">
        <SideBar className={`py-8 text-lg h-screen relative top-0 bottom-0`} toggleSidebar={toggleSidebar} collapsed={collapsed} setCollapsed={setCollapsed}/>
        <Content />
      </main>   
    </div>
  )
}
