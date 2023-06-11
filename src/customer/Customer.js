
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import ProfessionalList from "./ProfList/ProfessionalList";
import MyHirings from "./MyHirings/MyHirings";
import MyFavorite from "./MyFavorite/MyFavorite";
import AccountAndSettings from "./AccountAndSettings/AccountAndSettings";
import MyProfile from "../components/MyProfile/MyProfile";
import Security from "../components/Security/Security";
import PaymentMethod from "../components/PaymentMethod/PaymentMethod";
import PaymentHistory from "../components/PaymentHistory/PaymentHistory";
import DeleteAccount from "../components/DeleteAccount/DeleteAccount";
import React from "react";

export default function Customer () {
    const profileDetails = {
        'fullname': 'Jhon Doe',
        'username': 'Jhon',
        'address': 'Dharan 15',
        'image': "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    }

    const customerRouter = createBrowserRouter(
        [
            {
                path: "/",
                element: <Main />,
                children: [
                    {
                        path: "/",
                        element: <ProfessionalList />
                    },
                    {
                        path: "/customer/hirings",
                        element: <MyHirings />
                    },
                    {
                        path: "/customer/favorite",
                        element: <MyFavorite />
                    },
                ]
            },
            {
                path: "/customer/accountNdsettings",
                element: <AccountAndSettings />,
                children: [
                    {
                        path: '/customer/accountNdsettings',
                        element: <ProfessionalList />
                    },
                    {
                        path: '/customer/accountNdsettings/profile',
                        element: <MyProfile profileDetails={profileDetails} />
                    },
                    {
                        path: '/customer/accountNdsettings/security',
                        element: <Security />
                    },
                    {
                        path: '/customer/accountNdsettings/paymentMethod',
                        element: <PaymentMethod />
                    },
                    {
                        path: '/customer/accountNdsettings/paymentHistory',
                        element: <PaymentHistory />
                    },
                    {
                        path: '/customer/accountNdsettings/deleteAccount',
                        element: <DeleteAccount />
                    }
                ]
            }
        ]
    );

    return (
       <React.StrictMode>
            <RouterProvider router={customerRouter} />
       </React.StrictMode>
    )
}