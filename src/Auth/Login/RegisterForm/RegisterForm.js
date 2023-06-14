
import { useState } from 'react';
import './register.css';

export default function RegisterForm() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [phone, setPhone] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }

    return (
        <form className='reg-form' onSubmit={handleSubmit}>
            <div className='register-form-item'>
                <input className="reg-input-style" name="name" type="text" placeholder="Enter Full Name" onChange={(e) => setName(e.target.value)} value={name} ></input>
            </div>
            <div className='register-form-item'>
                <input className="reg-input-style" name="email" type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email} ></input>
            </div>
            <div className='register-form-item'>
                <input className="reg-input-style" name="password" type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value={password} ></input>
            </div>
            <div className='register-form-item'>
                <input className="reg-input-style" name="repassword" type="password" placeholder="Re-Type Password" onChange={(e) => setRePassword(e.target.value)} value={repassword} ></input>
            </div>
            <div className='register-form-item'>
                <input className="reg-input-style" name="phone" type="phone" placeholder="Mobile no." onChange={(e) => setPhone(e.target.value)} value={phone} ></input>
            </div>
            <button className='btn-sign-up'>Sign Up</button>
        </form>
    )
}