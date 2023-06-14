
import './login-register.css';
import { Link } from 'react-router-dom';
import { urls } from '../../Auth/const/urls';
import { useState } from 'react';

export default function LoginAndRegNav({ authType }) {

    const [type, setType] = useState('Sign Up');

    return (
        <header>
            <div className="nav-body">
                <div className="nav-item1">
                    <div className='handsforhireLogo'></div>
                    <div className="main-label"></div>
                </div>
                <div className="nav-item2">
                    <ul>
                        <li className='auth-li-item'><Link to={urls.handsForHireWebsite} className='auth-link'>Home </Link></li>
                        <li className='auth-li-item'><Link className='auth-link'>About</Link></li>
                        <li className='auth-li-item'><Link className='auth-link'>Contact</Link></li>
                        <li className="active"><Link  className='auth-link'>{type}</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}