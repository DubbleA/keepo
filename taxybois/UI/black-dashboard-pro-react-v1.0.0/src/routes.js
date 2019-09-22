/*!

=========================================================
* Black Dashboard PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Expenses from "views/manager/expenses.jsx";
import Inventory from "views/manager/inventory.jsx";
import Sales from "views/manager/sales.jsx";

import Settings from "views/widgets/settings.jsx";

import ReactTables from "views/tables/ReactTables.jsx";
import RegularTables from "views/tables/RegularTables.jsx";
import ExtendedTables from "views/tables/ExtendedTables.jsx";
import Wizard from "views/forms/Wizard.jsx";
import ValidationForms from "views/forms/ValidationForms.jsx";
import ExtendedForms from "views/forms/ExtendedForms.jsx";
import RegularForms from "views/forms/RegularForms.jsx";
import Calendar from "views/Calendar.jsx";
import Widgets from "views/Widgets.jsx";
import Charts from "views/Charts.jsx";
import Dashboard from "views/Dashboard.jsx";
import Buttons from "views/components/Buttons.jsx";
import SweetAlert from "views/components/SweetAlert.jsx";
import Notifications from "views/components/Notifications.jsx";
import Grid from "views/components/Grid.jsx";
import Typography from "views/components/Typography.jsx";
import Panels from "views/components/Panels.jsx";
import Icons from "views/components/Icons.jsx";
import Pricing from "views/pages/Pricing.jsx";
import Register from "views/pages/Register.jsx";
import Timeline from "views/pages/Timeline.jsx";
import User from "views/pages/User.jsx";
import Login from "views/pages/Login.jsx";
import Rtl from "views/pages/Rtl.jsx";
import Lock from "views/pages/Lock.jsx";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Manager",
    rtlName: "صفحات",
    icon: "tim-icons icon-image-02",
    state: "pagesCollapse",
    views: [
      {
        path: "/sales",
        name: "Sales",
        rtlName: "عالتسعير",
        mini: "P",
        rtlMini: "ع",
        component: Charts,
        layout: "/admin"
      },
      {
        path: "/inventory",
        name: "Inventory",
        rtlName: "عالتسعير",
        mini: "P",
        rtlMini: "ع",
        component: Charts,
        layout: "/admin"
      },
      {
        path: "/expenses",
        name: "Expenses",
        rtlName: "عالتسعير",
        mini: "P",
        rtlMini: "ع",
        component: Expenses,
        layout: "/admin"
      },
    ]
  },
  // {
  //   collapse: true,
  //   name: "Components",
  //   rtlName: "المكونات",
  //   icon: "tim-icons icon-molecule-40",
  //   state: "componentsCollapse",
  //   views: [
  //     {
  //       collapse: true,
  //       name: "Multi Level Collapse",
  //       rtlName: "انهيار متعدد المستويات",
  //       mini: "MLT",
  //       rtlMini: "ر",
  //       state: "multiCollapse",
  //       views: [
  //         {
  //           path: "/buttons",
  //           name: "Buttons",
  //           rtlName: "وصفت",
  //           mini: "B",
  //           rtlMini: "ب",
  //           component: Buttons,
  //           layout: "/admin"
  //         }
  //       ]
  //     },
      
  //     {
  //       path: "/grid-system",
  //       name: "Grid System",
  //       rtlName: "نظام الشبكة",
  //       mini: "GS",
  //       rtlMini: "زو",
  //       component: Grid,
  //       layout: "/admin"
  //     },
  //   ]
  // },

  {
    path: "/charts",
    name: "Charts",
    rtlName: "الرسوم البيانية",
    icon: "tim-icons icon-chart-bar-32",
    component: Charts,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Tables",
    rtlName: "الجداول",
    icon: "tim-icons icon-puzzle-10",
    state: "tablesCollapse",
    views: [{
        path: "/regular-tables",
        name: "Regular Tables",
        rtlName: "طاولات عادية",
        mini: "RT",
        rtlMini: "صر",
        component: RegularTables,
        layout: "/admin"
      },
      {
        path: "/extended-tables",
        name: "Extended Tables",
        rtlName: "جداول ممتدة",
        mini: "ET",
        rtlMini: "هور",
        component: ExtendedTables,
        layout: "/admin"
      },
      {
        path: "/react-tables",
        name: "React Tables",
        rtlName: "رد فعل الطاولة",
        mini: "RT",
        rtlMini: "در",
        component: ReactTables,
        layout: "/admin"
      }
    ]
  },
  {
    path: "/calendar",
    name: "Calendar",
    rtlName: "التقويم",
    icon: "tim-icons icon-time-alarm",
    component: Calendar,
    layout: "/admin"
  },

  {
    collapse: true,
    name: "Widgets",
    rtlName: "الجداول",
    icon: "tim-icons icon-settings",
    state: "widgetsCollapse",
    views: [
      {
        path: "/settings",
        name: "Settings",
        rtlName: "الحاجيات",
        mini: "ET",
        component: Settings,
        layout: "/admin"
      },
      {
        path: "/trackingNum",
        name: "Tracking",
        rtlName: "الحاجيات",
        mini: "ET",
        component: Widgets,
        layout: "/admin"
      },
      {
        path: "/export",
        name: "Export Portfolio",
        rtlName: "الحاجيات",
        mini: "ET",
        component: Widgets,
        layout: "/admin"
      },
    ]
  }
];

export default routes;
