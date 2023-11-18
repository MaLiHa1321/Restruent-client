import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/order/OrderFood";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import Dashboard from "../layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItem/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: 
          //  <PrivateRoute>

            <OrderFood></OrderFood>
          // </PrivateRoute>
        }
      ]
    
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path: 'dashboard',
      element:  <PrivateRoute>

        <Dashboard></Dashboard>
      </PrivateRoute>,
      children: [
        // for user
        {
          path: 'cart',
          element: <Cart></Cart>
        },

        // admin routes
        {
          path: 'addItems',
          element: <AdminRoutes>

            <AddItems></AddItems>
          </AdminRoutes>
        },
        {
          path: 'allUsers',
          element: <AdminRoutes>
            <AllUser></AllUser>
          </AdminRoutes>
        },
        {
          path: 'manageItems',
          element: <AdminRoutes>
            <ManageItems />
          </AdminRoutes>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoutes>
            <UpdateItem />
          </AdminRoutes>,
          loader: ({params}) => fetch(`https://final-restruent-server.vercel.app/menu/${params.id}`)
        },
      ]
    }
  ]);