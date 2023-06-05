import React from "react";
import Home from "./pages/Home/Home";
import HomeLoggedIn from "./pages/HomeLoggedIn/HomeLoggedIn";
import BrowseProfessional from "./pages/BrowseProfessional/BrowseProfessional";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const professionalRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/home/loggedIn',
        element: <HomeLoggedIn />
    },
    {
        path: '/browse-professionals',
        element: <BrowseProfessional />
    }
])

function Professional () {
    return (
        <React.StrictMode>
            <RouterProvider router={professionalRouter} />
        </React.StrictMode>
    );
}

export default Professional;