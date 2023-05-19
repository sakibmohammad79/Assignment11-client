import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import AllToys from "../pages/AllToys/AllToys";
import AddToys from "../pages/AddToys/AddToys";
import MyToys from "../pages/MyToys/MyToys";
import ToyDetails from "../pages/Home/ToyDetails/ToyDetails";
import UpdateToys from "../pages/UpdateToys/UpdateToys";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";

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
          path: "/alltoys",
          element: <AllToys></AllToys>
        },
        {
          path: "/addtoys",
          element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
        },
        {
          path: "/mytoys",
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: "/toysdetails/:id",
          element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://assignment11-toy-market-place-server.vercel.app/toys/${params.id}`)
        },
        {
          path: '/updatetoys/:id',
          element: <UpdateToys></UpdateToys>,
          loader: ({params}) => fetch(`https://assignment11-toy-market-place-server.vercel.app/toys/${params.id}`)
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '/*',
      element: <Error></Error>
    }
  ]);

  export default router;