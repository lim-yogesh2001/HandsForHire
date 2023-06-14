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
import ProfessionalProfile from './website/pages/professional-profile/ProfessionalProfile';
import Charts from './professional//Charts/Charts';
import ProfSecurity from './professional/ProfSecurity/ProfSecurity';
import ProfPayment from './professional/ProfPayment/ProfPayment';
import ProfPaymentHistory from './professional/ProfPaymentHistory/ProfPaymentHistory';
import ProfDeleteAcc from './professional/ProfDeleteAcc/PorfDeleteAcc';
import ProfList from './customer/ProfList/ProfessionalList';
import MyHirings from './customer/MyHirings/MyHirings';
import MyFavorite from './customer/MyFavorite/MyFavorite';
import AccountAndSettings from './customer/AccountAndSettings/AccountAndSettings';
import MyProfile from './customer/MyProfile/MyProfile';
import Security from './components/Security/Security';
import PaymentMethod from './components/PaymentMethod/PaymentMethod';
import PaymentHistory from './components/PaymentHistory/PaymentHistory';
import DeleteAccount from './components/DeleteAccount/DeleteAccount';
import ProfMyProfile from './professional/ProfMyProfile/ProfMyProfile';

function App() {
  
  const profileDetails = {
        'fullname': 'Jhon Doe',
        'username': 'Jhon',
        'address': 'Dharan 15',
        'experience' : "2",
        'image': "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    }

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
      path: '/handsForHire/browseProfessional/',
      element: <BrowseProfessional />
    },
    {
      path: '/handsForHire/viewProfile/',
      element: <ProfessionalProfile />
    },
    {
      path: '/customer/',
      element: <Customer />,
      children:  [
        {
          path: '/customer/dashboard',
          element: <ProfList />
        },
        {
          path: '/customer/hirings',
          element: <MyHirings />
        },
        {
          path: '/customer/favorite',
          element: <MyFavorite />
        },
      ]
    },
    {
      path: '/customer/accountNdSettings/',
      element: <AccountAndSettings />,
      children: [
        {
          path: '/customer/accountNdSettings/',
          element: <ProfList />
        },
        {
          path: '/customer/accountNdSettings/profile',
          element: <MyProfile profileDetails={profileDetails} />
        },
        {
          path: '/customer/accountNdSettings/security',
          element: <Security />
        },
        {
          path: '/customer/accountNdSettings/paymentMethod',
          element: <PaymentMethod />
        },
        {
          path: '/customer/accountNdSettings/paymentHistory',
          element: <PaymentHistory />
        },
        {
          path: '/customer/accountNdSettings/deleteAccount',
          element: <DeleteAccount/>
        }
      ]
    },
    {
      path: '/professional/',
      element: <Professional />,
      children: [
        {
          path: '/professional/dashboard/',
          element: <Charts />
        },
        {
          path: '/professional/security/',
          element: <ProfSecurity />
        },
        {
          path: '/professional/paymentMethod/',
          element: <ProfPayment />
        },
        {
          path: '/professional/paymentHistory/',
          element: <ProfPaymentHistory />
        },
        {
          path: '/professional/deleteAccount/',
          element: <ProfDeleteAcc />
        },
        {
          path: '/professional/profile/',
          element: <ProfMyProfile profileDetails={profileDetails} />
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
