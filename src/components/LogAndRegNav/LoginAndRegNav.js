
import './login-register.css';

export default function LoginAndRegNav () {
    return (
        <header>
            <div className="nav-body">
                <div className="nav-item1">
                    <div className='handsforhireLogo'></div>
                    <div className="main-label"></div>
                </div>
                <div className="nav-item2">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li className="active">Sign Up</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}