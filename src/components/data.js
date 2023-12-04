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
            leaf:true,
            submenu: true,
            children: [
              { text: ' Profile01', url: '/profile1', leaf:true },
              { text: ' Profile02', url: '/profile2',leaf:true },
              { text: ' Profile03', url: '/profile3',leaf:true }
            ]
          },
          {
            text: 'Customer',
            url: "/customer",
            leaf:true,
            submenu: true,
            children: [
              { text: ' Customer List', url: '/customerlist', url: '/customerlist' ,leaf:true},
              { text: ' Order List', url: '/orderlist', url: '/orderlist',leaf:true },
              { text: ' Create Invoice', url: '/invoice', url: '/invoice',leaf:true },
              { text: ' Product', url: '/product', url: '/product',leaf:true },
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
          { text: ' Products', url: '/products', url: '/products' ,leaf:true},
          { text: ' Products Detail', url: '/productdetail', url: '/productdetail' ,leaf:true},
          { text: ' Product List', url: '/productlist', url: '/productlist',leaf:true },
          { text: ' Checkout', url: '/checkout', url: '/checkout',leaf:true },
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
          { text: 'Autocomplete', url: '/autocomplete',leaf:true },
          { text: 'Button', url: '/button',leaf:true },
          { text: 'Checkbox', url: '/checkbox',leaf:true },
          { text: 'Date & Time', url: '/datetime',leaf:true },
          { text: 'Radio', url: '/radio',leaf:true },
          { text: 'Slider', url: '/slider' ,leaf:true},
          { text: 'Switch', url: '/switch',leaf:true },
          { text: 'Text Field', url: '/text',leaf:true },
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