import { RiDashboardLine } from "react-icons/ri";
import { TbBasket, TbClipboardTypography, TbColorPicker, TbDeviceAnalytics, TbMap2, TbScreenShare, TbShadow } from "react-icons/tb";
import { BsClipboardData } from "react-icons/bs";
import { FiUserCheck } from "react-icons/fi";
import { GiChart } from "react-icons/gi";
import { MdOutlineWifiTethering } from "react-icons/md";
import { CiDatabase } from "react-icons/ci";
import { IoTabletLandscape } from "react-icons/io5";

const data = [
  {
    text: 'Dashboard',
    children: [
      { id: 1, icon: <RiDashboardLine />, text: 'Default', url: '/' },
      { id: 2, icon: <TbDeviceAnalytics />, text: 'Analytics', url: '/analytics' },
    ],
  },
  {
    text: 'Widget',
    children: [
      { id: 3, icon: <MdOutlineWifiTethering />, text: 'Statistics', url: '/statistics' },
      { id: 4, icon: <BsClipboardData />, text: 'Data', url: '/data' },
      { id: 5, icon: <GiChart />, text: 'Chart', url: '/chart' },
    ],
  },
  {
    text: 'Application',
    children: [
      {

        icon: <FiUserCheck />,
        submenu: true,
        text: 'Users',
        url: "/users",
        children: [
          {

            text: 'AccountProfile',
            url: "/account",
            submenu: true,
            children: [
              { text: ' Profile01', url: '/profile1' },
              { text: ' Profile02', url: '/profile2' },
              { text: ' Profile03', url: '/profile3' }
            ]
          },
          {
            text: 'Customer',
            url: "/customer",
            submenu: true,
            children: [
              { text: ' Customer List', url: '/customerlist', url: '/customerlist' },
              { text: ' Order List', url: '/orderlist', url: '/orderlist' },
              { text: ' Create Invoice', url: '/invoice', url: '/invoice' },
              { text: ' Product', url: '/product', url: '/product' },
            ]
          },
        ]
      },
      { icon: <TbMap2 />, text: 'Map', url: '/map', },
      { icon: <CiDatabase />, text: 'Data Grid', url: '/datagrid', },
      { icon: <IoTabletLandscape />, text: 'Table', url: '/table', },
      {
        icon: <TbBasket />,
        text: 'E-commerce',
        url: "/ecommerce",
        submenu: true,
        children: [
          { text: ' Products', url: '/products', url: '/products' },
          { text: ' Products Detail', url: '/productdetail', url: '/productdetail' },
          { text: ' Product List', url: '/productlist', url: '/productlist' },
          { text: ' Checkout', url: '/checkout', url: '/checkout' },
        ]

      },

    ],
  },
  {
    text: 'Forms',
    children: [
      {
        icon: <TbScreenShare />,
        text: 'Components',
        url: "/components",
        children: [
          { text: 'Autocomplete', url: '/autocomplete' },
          { text: 'Button', url: '/button' },
          { text: 'Checkbox', url: '/checkbox' },
          { text: 'Date & Time', url: '/datetime' },
          { text: 'Radio', url: '/radio' },
          { text: 'Slider', url: '/slider' },
          { text: 'Switch', url: '/switch' },
          { text: 'Text Field', url: '/text' },
        ]
      }
    ]
  },

  { icon: <TbClipboardTypography />, text: 'Typography', url: '/typography' },
  { icon: <TbColorPicker />, text: 'Color', url: '/color' },
  { icon: <TbShadow />, text: 'Shadow', url: '/shadow' },
  //     {
  //       icon: <FiUserCheck />,
  //       text: 'Data Grid',
  //       children: [
  //         { text: '. Basic' ,url:'/basic'},
  //         { text: '. Inline Editing' ,url:'/editing'},
  //         { text: '. Column Groups' ,url:'/groups'},
  //         { text: '. Save & Restore',url:'/saverestore' },
  //       ]

  //     },

  //   ],
  // },
]
export default data