import React from "react";
import Home from "./pages/Home/Home";
import HomeLoggedIn from "./pages/HomeLoggedIn/HomeLoggedIn";
import BrowseProfessional from "./pages/BrowseProfessional/BrowseProfessional";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const webRouter = createBrowserRouter([
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

function Web () {
    return (
        <React.StrictMode>
            <RouterProvider router={webRouter} />
        </React.StrictMode>
    );
}

export default Web;