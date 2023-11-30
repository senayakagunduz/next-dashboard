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
    <div>
      <Header toggleSidebar={toggleSidebar} collapsed={collapsed} />
      <main className="flex items-start">
        <SideBar  toggleSidebar={toggleSidebar} collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content />
      </main>
    </div>
  )
}
