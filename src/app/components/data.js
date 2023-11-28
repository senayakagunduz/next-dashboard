import { RiCustomerService2Line, RiDashboardLine, RiMailCheckLine } from "react-icons/ri";
import { TbDeviceAnalytics, TbLayoutKanban, TbRuler2Off } from "react-icons/tb";
import { BsClipboardData, BsTable } from "react-icons/bs";
import { FiUserCheck } from "react-icons/fi";
import { GiChart } from "react-icons/gi";
import { MdOutlineSupervisorAccount, MdOutlineWifiTethering } from "react-icons/md";
import { CiChat1, CiMail } from "react-icons/ci";
import { IoCalendarNumberOutline } from "react-icons/io5";

const data = [
  {
    text: 'Dashboard',
    submenu: true,
    children: [
      { icon: <RiDashboardLine />, text: 'Default', active: true },
      { icon: <TbDeviceAnalytics />, text: 'Analytics' },
    ],
  },
  {
    text: 'Widget',
    submenu: true,
    children: [
      { icon: <MdOutlineWifiTethering />, text: 'Statistics' },
      { icon: <BsClipboardData />, text: 'Data' },
      { icon: <GiChart />, text: 'Chart' },
    ],
  },
  {
    text: 'Application',
    submenu: true,
    children: [
      {
        icon: <FiUserCheck />,
        text: 'Users',
        children: [
          {
            text: 'AccountProfile',
            children: [
              { text: 'Profile01' },
              { text: 'Profile02' },
              { text: 'Profile03' }
            ]
          },
          {
            text: 'Customer',
            children: [
              { text: 'Customer List' },
              { text: 'Order List' },
              { text: 'Create Invoice' },
              { text: 'Order Details' },
              { text: 'Product' },
              { text: 'Product Review' }
            ]
          },
        ]
      },
      { icon: <CiChat1 />, text: 'Chat' },
      { icon: <TbLayoutKanban />, text: 'Kanban' },
      { icon: <CiMail />, text: 'Mail' },
      { icon: <IoCalendarNumberOutline />, text: 'Calendar' },
      {
        icon: <FiUserCheck />,
        text: 'E-commerce',
        children: [
          { text: 'Products' },
          { text: 'Products Detail' },
          { text: 'Product List' },
          { text: 'Checkout' },
        ]

      },

    ],
  },
  {
    text: 'Forms',
    submenu: true,
    children: [
      {
        icon: <FiUserCheck />,
        text: 'Components',
        children: [
              { text: 'Autocomplete' },
              { text: 'Button' },
              { text: 'Checkbox' },
              { text: 'Datte & Time' },
              { text: 'Radio' },
              { text: 'Slider' }, 
              { text: 'Switch' },
              { text: 'Text Field'}
        ]
      },
      { icon: <CiChat1 />, text: 'Plugins' },
      { icon: <TbLayoutKanban />, text: 'Layouts' },
      { icon: <CiMail />, text: 'Table' },
      {
        icon: <FiUserCheck />,
        text: 'Data Grid',
        children: [
          { text: 'Basic' },
          { text: 'Inline Editing' },
          { text: 'Column Groups' },
          { text: 'Save & Restore' },
        ]

      },

    ],
  },
]
export default data