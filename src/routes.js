
// Material Dashboard 2 PRO React layouts
import Analytics from "layouts/dashboards/analytics";
import ProfileOverview from "layouts/pages/profile/profile-overview";
import AllProjects from "layouts/pages/profile/all-projects";
import NewUser from "layouts/pages/users/new-user";
import Settings from "layouts/pages/account/settings";
import Billing from "layouts/pages/account/billing";
import Invoice from "layouts/pages/account/invoice";
import Timeline from "layouts/pages/projects/timeline";
import PricingPage from "layouts/pages/pricing-page";
import Widgets from "layouts/pages/widgets";
import Charts from "layouts/pages/charts";
import Notifications from "layouts/pages/notifications";
import Class from "layouts/applications/class";
import Wizard from "layouts/applications/wizard";
import Calendar from "layouts/applications/calendar";
import NewProduct from "layouts/ecommerce/products/new-product";
import EditProduct from "layouts/ecommerce/products/edit-product";
import ProductPage from "layouts/ecommerce/products/product-page";
import OrderList from "layouts/ecommerce/orders/order-list";
import OrderDetails from "layouts/ecommerce/orders/order-details";
import ResetCover from "layouts/authentication/reset-password/cover";
import Rooms from "layouts/datas/rooms";
import Teachers from "layouts/datas/teachers";
import Classes from "layouts/datas/classes";
import ExtraClasses from "layouts/datas/extraClasses";
import Subjects from "layouts/datas/subjects";
import Timetables from "layouts/datas/timetables";
import Air from "layouts/datas/air";
import HelpPage from "layouts/pages/help-page";

// Material Dashboard 2 PRO React components
import MDAvatar from "components/MDAvatar";

// @mui icons
import Icon from "@mui/material/Icon";

// Images
import profilePicture from "assets/images/Lenna.png";


const routes = [
  {
    type: "collapse",
    name: "unknown",
    key: "username",
    icon: <MDAvatar src={profilePicture} alt="Brooklyn Alice" size="sm" />,
    collapse: [
      {
        name: "プロフィール",
        key: "my-profile",
        route: "account/profile",
        component: <ProfileOverview />,
        noCollapse: true,
      },
      {
        type: "collapse",
        name: "設定",
        key: "profile-settings",
        route: "/pages/account/settings",
        icon:  <Icon fontSize="medium">apps</Icon>,
        component: <Settings />,
      },
      {
        name: "Wizard",
        key: "wizard",
        route: "/applications/wizard",
        component: <Wizard />,
      },
    ],
  },
  
  { type: "divider", key: "divider-0" },
  
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboards",
    component: <Analytics />,
    icon: <Icon fontSize="medium">dashboard</Icon>,
    noCollapse: true,
  },
  //{ type: "title", title: "Pages", key: "title-pages" },

  {
    type: "collapse",
    name: "Social",
    key: "social",
    icon: <Icon fontSize="medium">sms</Icon>,
    collapse: [

      {
        name: "Events",
        key: "events",
        route: "/social/events",
        component: <Calendar />,
      },
      {
        name: "Class",
        key: "class",
        route: "/social/class",
        component: <Class />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Class",
    key: "applications",
    icon: <Icon fontSize="medium">group</Icon>,
    collapse: [

      {
        name: "Calendar",
        key: "calendar",
        route: "/applications/calendar",
        component: <Calendar />,
      },
      {
        name: "Class",
        key: "class",
        route: "/applications/class",
        component: <Class />,
      },
    ],
  },

  
  {
    type: "collapse",
    name: "Pages",
    key: "pages",
    icon: <Icon fontSize="medium">image</Icon>,
    collapse: [
      {
        name: "Profile",
        key: "profile",
        collapse: [
          {
            name: "Profile Overview",
            key: "profile-overview",
            route: "/pages/profile/profile-overview",
            component: <ProfileOverview />,
          },
          {
            name: "All Projects",
            key: "all-projects",
            route: "/pages/profile/all-projects",
            component: <AllProjects />,
          },
        ],
      },
      {
        name: "Users",
        key: "users",
        collapse: [
          {
            name: "New User",
            key: "new-user",
            route: "/pages/users/new-user",
            component: <NewUser />,
          },
        ],
      },
      {
        name: "Account",
        key: "account",
        collapse: [
          {
            name: "Settings",
            key: "settings",
            route: "/pages/account/settings",
            component: <Settings />,
          },
          {
            name: "Billing",
            key: "billing",
            route: "/pages/account/billing",
            component: <Billing />,
          },
          {
            name: "Invoice",
            key: "invoice",
            route: "/pages/account/invoice",
            component: <Invoice />,
          },
        ],
      },
      {
        name: "Projects",
        key: "projects",
        collapse: [
          {
            name: "Timeline",
            key: "timeline",
            route: "/pages/projects/timeline",
            component: <Timeline />,
          },
        ],
      },
      {
        name: "Pricing Page",
        key: "pricing-page",
        route: "/pages/pricing-page",
        component: <PricingPage />,
      },
      {
        name: "Help Page",
        key: "help-page",
        route: "/pages/help-page",
        component: <HelpPage />,
      },
      { name: "Widgets", key: "widgets", route: "/pages/widgets", component: <Widgets /> },
      { name: "Charts", key: "charts", route: "/pages/charts", component: <Charts /> },
      {
        name: "Notfications",
        key: "notifications",
        route: "/pages/notifications",
        component: <Notifications />,
      },
    ],
  },

  {
    type: "collapse",
    name: "Ecommerce",
    key: "ecommerce",
    icon: <Icon fontSize="medium">shopping_basket</Icon>,
    collapse: [
      {
        name: "Products",
        key: "products",
        collapse: [
          {
            name: "New Product",
            key: "new-product",
            route: "/ecommerce/products/new-product",
            component: <NewProduct />,
          },
          {
            name: "Edit Product",
            key: "edit-product",
            route: "/ecommerce/products/edit-product",
            component: <EditProduct />,
          },
          {
            name: "Product Page",
            key: "product-page",
            route: "/ecommerce/products/product-page",
            component: <ProductPage />,
          },
        ],
      },
      {
        name: "Orders",
        key: "orders",
        collapse: [
          {
            name: "Order List",
            key: "order-list",
            route: "/ecommerce/orders/order-list",
            component: <OrderList />,
          },
          {
            name: "Order Details",
            key: "order-details",
            route: "/ecommerce/orders/order-details",
            component: <OrderDetails />,
          },
        ],
      },
    ],
  },
  {
    type: "collapse",
    name: "Authentication",
    key: "authentication",
    icon: <Icon fontSize="medium">content_paste</Icon>,
    collapse: [
      {
        name: "Reset Password",
        key: "reset-password",
        collapse: [
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/reset-password/cover",
            component: <ResetCover />,
          },
        ],
      },
    ],
  },
  { type: "divider", key: "divider-1" },
  {
    type: "collapse",
    name: "Datas",
    key: "datas",
    icon: <Icon fontSize="medium">storage</Icon>,
    collapse: [
      
      {
        name: "Rooms",
        key: "rooms",
        route: "/datas/rooms",
        component: <Rooms />,
      },
      {
        name: "Teachers",
        key: "teachers",
        route: "/datas/teachers",
        component: <Teachers />,
      },
      {
        name: "Classes",
        key: "classes",
        route: "/datas/classes",
        component: <Classes />,
      },
      {
        name: "ExtraClasses",
        key: "extraclasses",
        route: "/datas/extraclasses",
        component: <ExtraClasses />,
      },
      {
        name: "Subjects",
        key: "subjects",
        route: "/datas/subjects",
        component: <Subjects />,
      },
      {
        name: "Timetables",
        key: "timetables",
        route: "/datas/timetables",
        component: <Timetables />,
      },
      {
        name: "Air",
        key: "air",
        route: "/datas/air",
        component: <Air />,
      },
    ],

  },
];

export default routes;
