import Dashboard from "../components/dashboard/Dashboard";
import { Outlet } from 'react-router-dom';
import HelpSupport from "../../components/help&support/HelpSupport";
import ServerHeader from "../../components/ServerHeader/ServerHeader";
import './main.css';

export default function Main() {
    const dashboardItems = [
        { key: 'dashboard', name: 'Dashboard' },
        { key: "hirings", name: "My Hirings" },
        { key: "favorite", name: "My Favorites" },
        { key: "accountNdsettings", name: "Account & Settings" }, 
        { key: "logout", name: "Logout" }, 
        { key: "faqs", name: "Faqs" },];

    return (
        <>
           <ServerHeader />
            <main className='main-body'>
                <div className='main-content'>
                    <div className='main-item1'>
                        <Dashboard items={dashboardItems} />
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
    );
}