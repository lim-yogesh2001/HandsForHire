
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from './Home/Home';
// import Charts from "./Charts/Charts";
// import ProfSecurity from "./ProfSecurity/ProfSecurity";
// import ProfPayment from "./ProfPayment/ProfPayment";
// import ProfPaymentHistory from "./ProfPaymentHistory/ProfPaymentHistory";
// import ProfDeleteAcc from "./ProfDeleteAcc/PorfDeleteAcc";

export default function Professional() {
    // const professionalRouter = createBrowserRouter([
    //     {
    //         path: '/professional/',
    //         element: <Home />,
    //         children: [
    //             {
    //                 path: '/professional/',
    //                 element: <Charts />
    //             },
    //             {
    //                 path: '/professional/security/',
    //                 element: <ProfSecurity />
    //             },
    //             {
    //                 path: '/professional/paymentMethod/',
    //                 element: <ProfPayment />
    //             },
    //             {
    //                 path: '/professional/paymentHistory/',
    //                 element: <ProfPaymentHistory />
    //             },
    //             {
    //                 path: '/professional/deleteAcc/',
    //                 element: <ProfDeleteAcc />
    //             }
    //         ]
    //     }
    // ])

    return (
        <Home />
    )
}