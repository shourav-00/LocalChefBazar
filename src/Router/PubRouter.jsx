import { createBrowserRouter } from "react-router";
import HomeLayout from "../LAYOUT/HomeLayout";
import Home from "../PAGES/Home";
import Blog from "../PAGES/Blog";
import Login from "../PAGES/Login";
import Register from "../PAGES/Register";
import Error from "../PAGES/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:'blog',
        Component:Blog,

      },

      {
        path:'*',
        Component:Error,
      },
     
      
    ],

     
  },
   {
        path:'login',
        Component:Login,

      },
      {
        path:'register',
        Component:Register,

      },
]);
