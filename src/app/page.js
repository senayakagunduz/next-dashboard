
"use client";
import SideBar from "./components/SideBar";
import SideBarItem from "./components/SideBarItem";
import Header from "./components/Header";
import { RiDashboardLine, RiMailCheckLine } from "react-icons/ri";
import { TbDeviceAnalytics } from "react-icons/tb";
import { BsClipboardData, BsTable } from "react-icons/bs";
import { FiUserCheck } from "react-icons/fi";
import { GiChart } from "react-icons/gi";
import { useState } from "react";

const SideBarDynamic = ({ icon, text, children }) => {
  return (
    <div>
      {icon}
      <span>{text}</span>
      {children && (
        <div className="ml-10">
          {children.map((child, index) => (
            <SideBarItem key={index} {...child} />
          ))}
        </div>
      )}
    </div>
  )
}


export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  const buttonData = [
    {
      text: 'Dashboard',
      children: [
        { icon: <RiDashboardLine />, text: 'Default', active: true },
        { icon: <TbDeviceAnalytics />, text: 'Analytics' },
      ],
    },
    {
      text: 'Widget',
      children: [
        { icon: <BsClipboardData />, text: 'Data' },
        { icon: <GiChart />, text: 'Chart' },
        { icon: <BsClipboardData />, text: 'Data' },
        { icon: <GiChart />, text: 'Chart' },
      ],
    },
    {
      text: 'Dashboard',
      children: [
        { icon: <FiUserCheck />, text: 'Users' },
        { icon: <RiMailCheckLine />, text: 'Mail' },
        { icon: <BsTable />, text: 'Tablo' },
        { icon: <FiUserCheck />, text: 'Users' },
        { icon: <RiMailCheckLine />, text: 'Mail' },
        { icon: <BsTable />, text: 'Tablo' },
      ],
    },
  ]
  return (
    <>
      <Header toggleSidebar={toggleSidebar} collapsed={collapsed} />
      <main className="flex min-h-screen flex-col items-start">
        <SideBar className="" collapsed={collapsed} >
          <div className="space-y-2">
            {buttonData.map((item, index) => (
              <SideBarDynamic key={index} {...item} />
            ))}
          </div>
          <hr className="border-t border-gray-300 mb-10 mt-2" />
        </SideBar>
      </main>
    </>
  )
}
