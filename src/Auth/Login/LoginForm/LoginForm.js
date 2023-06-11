import { useState } from "react";
import { IconContext } from "react-icons";
import { MdLockReset, MdEmail } from "react-icons/md";
import './login-form.css';

export default function LoginForm({ login }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
       if (email !== null && password !== null){
        login(email, password);
       }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <IconContext.Provider value={{ className: "custom-icons" }}>
                <div className="form-items">
                    <input className="input-style" name="email" type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email} ></input>
                    <MdEmail />
                </div>
                <div className="form-items">
                    <input className="input-style" name="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <MdLockReset />
                </div>
            </IconContext.Provider>
            <div>
                <button className="btn-submit" onSubmit={handleSubmit}>Sign In</button>
            </div>
        </form>
    );
}