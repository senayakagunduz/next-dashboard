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
    <>
      <Header toggleSidebar={toggleSidebar} collapsed={collapsed} />
      <main className="flex  items-start">
        <SideBar className={`py-8 text-lg h-screen relative top-0 bottom-0`} toggleSidebar={toggleSidebar} collapsed={collapsed}/>
        <Content />
      </main>   
    </>
  )
}
