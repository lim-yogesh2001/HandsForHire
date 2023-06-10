
import ServerHeader from '../../components/ServerHeader/ServerHeader';
import ProfessionalDashboard from '../components/ProfDashboard/ProfessionalDashboard';
import { Outlet } from 'react-router-dom';
import './home.css';

export default function Home() {
    const professionalDashboard = [
        {key: 'dashboard', name: 'Dashboard'},
        { key: 'profile', name: 'My Profile' },
        { key: 'security', name: 'Security' },
        { key: 'paymentMethod', name: 'Payment Method' },
        { key: 'paymentHistory', name: 'Payment History' },
        { key: 'deleteAccount', name: 'Delete Account' },
        { key: 'logout', name: 'Logout' },
    ];

    return (
        <>
            <ServerHeader />
            <main>
                <div className='main-container'>
                    <div className='main-item-1'>
                        <div className='dashboard-region'>
                            <div className='color-container'>
                                <img className='profile' src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80' alt='profile' />
                            </div>
                            <div className='user-name'>
                                <p>Username</p>
                            </div>
                        </div>
                        <ProfessionalDashboard items={professionalDashboard} />
                    </div>
                    <div className='main-item-2'>
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    )
}