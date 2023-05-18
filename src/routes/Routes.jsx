import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import AllToys from "../pages/AllToys/AllToys";
import AddToys from "../pages/AddToys/AddToys";
import MyToys from "../pages/MyToys/MyToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "alltoys",
          element: <AllToys></AllToys>
        },
        {
          path: "addtoys",
          element: <AddToys></AddToys>
        },
        {
          path: "mytoys",
          element: <MyToys></MyToys>
        },

      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);

  export default router;