import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "./ErrorPage";
import Login from "../pages/Login/Login";
import Layout from "../Layout/Layout";
import Cars from "../pages/Cars/Cars";
import SignUp from "../pages/SignUp/SignUp";
import AddCars from "../pages/AddCars/AddCars";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../components/Dashboard/Dashboard";
import CarDetails from "../components/CarDetails/CarDetails";
import MyBookings from "../pages/MyBookings/MyBookings";
import UpdateCar from "../pages/UpdateCar/UpdateCar";
import AllCars from "../pages/AllCars/AllCars";
import AllPayments from "../pages/Payments/AllPayments";
// import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/cars',
                element: <Cars />
            },
            {
                path: '/my-bookings',
                element: <MyBookings/>
            },

            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/cars/:id',
                element: <CarDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/cars/${params.id}`)
            }

        ],
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },

            {
                path: '/dashboard/add-cars',
                element: <AddCars></AddCars>
            },
            {
                path: '/dashboard/update-cars/:id',
                element: <UpdateCar></UpdateCar>,
                loader: ({params})=>fetch(`http://localhost:5000/cars/${params.id}`)
            },
            
            {
                path: '/dashboard/all-cars',
                element: <AllCars></AllCars>
            },
            {
                path: '/dashboard/all-payments',
                element: <AllPayments></AllPayments>
            },

        ]
    }
])

export default router;