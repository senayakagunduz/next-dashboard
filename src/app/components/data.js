import { RiDashboardLine, RiMailCheckLine } from "react-icons/ri";
import { TbDeviceAnalytics } from "react-icons/tb";
import { BsClipboardData, BsTable } from "react-icons/bs";
import { FiUserCheck } from "react-icons/fi";
import { GiChart } from "react-icons/gi";

const data = [
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
        { icon: <FiUserCheck />, text: 'Users' },
        { icon: <RiMailCheckLine />, text: 'Mail' },
        { icon: <BsTable />, text: 'Tablo' },
        { icon: <FiUserCheck />, text: 'Users' },
        { icon: <RiMailCheckLine />, text: 'Mail' },
        { icon: <BsTable />, text: 'Tablo' },
      ],
    },
  ]
  export default data