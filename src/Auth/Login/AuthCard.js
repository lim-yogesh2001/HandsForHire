import { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import './login.css';

export default function AuthCard() {
    const authmode = {
        signInAsUser: 'user',
        signUpAsProfessional: 'professional',
        register: 'register'
    };

    const [authForm, setAuthForm] = useState(authmode.register);

    console.log(authForm);

    return (
        <>
            <div className="auth-details">
                <div className="auth-part1">
                    <div className="auth-headers">
                        <img style={{ borderRadius: "100px", objectFit: "cover", width: "80px", height: "80px" }} src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" width="60px" height="70px" alt="dog"></img>
                        <div className="custom-logo"></div>
                        <p className="text-btn" onClick={() => setAuthForm(authmode.signInAsUser)}>Login</p>
                        <p className="text-btn" onClick={() => setAuthForm(authmode.register)}>Sign UP</p>
                    </div>
                    {authForm === 'register' ? 
                    <div className="register-container">
                        <p className="label-header">Sign Up</p>
                        <RegisterForm />
                    </div> :
                        <div className="auth-body">
                            <div>
                                <p className="label-header">Sign In</p>
                                <LoginForm authForm={authForm} />
                                <p className="switch-user" onClick={() => setAuthForm(!authmode.signUpAsProfessional)}>{authForm === "user" ? "Professional Sign In Here" : "User Sign In Here"}</p>
                            </div>
                        </div>}
                </div>
                
                {/* this is the blue background in login page */}
                <div className="auth-part2">
                </div>
            </div>
        </>
    );
}