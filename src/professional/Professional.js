
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from './Home/Home';
import Charts from "./Charts/Charts";

export default function Professional() {
    const professionalRouter = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            children: [
                {
                    path: '/',
                    element: <Charts />
                }
            ]
        }
    ])

    return (<React.StrictMode>
        <RouterProvider router={professionalRouter} />
    </React.StrictMode>)
}