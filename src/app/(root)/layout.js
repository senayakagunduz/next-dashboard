"use client";
import { useState } from "react";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";


export default function Layout(props) {
  const [collapsed, setCollapsed] = useState(false); //açık
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} collapsed={collapsed} />
      <main className="flex items-start">
        <SideBar  toggleSidebar={toggleSidebar} collapsed={collapsed} setCollapsed={setCollapsed} isActive={isActive}/>
        {props.children}
      </main>
    </div>
  )
}