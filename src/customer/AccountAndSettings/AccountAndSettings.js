
import Dashboard from '../components/dashboard/Dashboard';
import { Outlet } from 'react-router-dom';
import HelpSupport from '../../components/help&support/HelpSupport';
import ServerHeader from '../../components/ServerHeader/ServerHeader';

import './account-settings.css';

export default function AccountAndSettings() {
    const accountsDashboard = [
        { key: 'dashboard', name: 'Dashboard' },
        { key: 'profile', name: 'My Profile' },
        { key: 'security', name: 'Security' },
        { key: 'paymentMethod', name: 'Payment Method' },
        { key: 'paymentHistory', name: 'Payment History' },
        { key: 'deleteAccount', name: 'Delete Account' },
        { key: 'logout', name: 'Logout' },];

    return (
        <>
            <ServerHeader />
            <main className='main-body'>
                <div className='main-content'>
                    <div className='main-item1'>
                        <Dashboard items={accountsDashboard} />
                    </div>
                    <div className='main-item2'>
                        <Outlet />
                    </div>
                    <div className='main-item3'>
                        <HelpSupport />
                    </div>
                </div>
            </main>
        </>
    )
}