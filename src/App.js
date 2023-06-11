import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
// import HomePage from './professional/pages/Home/Home';
import Customer from './customer/Customer';
import Web from './website/Web';
import Auth from './Auth/Auth';
import Professional from './professional/Professional';
import HomeLoggedIn from './website/pages/HomeLoggedIn/HomeLoggedIn';
import BrowseProfessional from './website/pages/BrowseProfessional/BrowseProfessional';
import Charts from './professional//Charts/Charts';

function App() {
  const mainRoutes = createBrowserRouter([
    {
      path: '/',
      element: <Web />,
    },
    {
      path: '/handsForHire/browseProfessional/',
      element: <BrowseProfessional />
    },
    {
      path: '/handsForHire/homeLoggedIn',
      element: <HomeLoggedIn />
    },
    {
      path: '/auth/login',
      element: <Auth authenticationType='user-login' />
    },
    {
      path: '/auth/register',
      element: <Auth authenticationType='register' />
    },
    
    {
      path: '/customer/',
      element: <Customer />
    },
    {
      path: '/professional/dashboard',
      element: <Professional />,
      children: [
        {
          path: '/professional/dashboard',
          element: <Charts />
        }
      ]
    }
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={mainRoutes} />
    </React.StrictMode>
  );
}

export default App;
