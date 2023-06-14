import { IconContext } from 'react-icons';
import './header.css';
import { BsCaretDownFill, BsChatDots } from "react-icons/bs";
import { IoNotificationsOutline } from 'react-icons/io5';
import SearchBar from '../searchbar/Searchbar';
import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isAuthenticated, imageheight, height, boolSearchBar }) {

    return (
        <header className='inline-container'>
            <div className='image' style={{ minHeight: `${imageheight}` }}>
                <div className='image-overlay' style={{ height: `${height}` }}>
                    <div className='header'>
                        <div className='header-item1'>
                            <p className='handsforhire'>HandsForHire</p>
                            <p className='works'>How It Works</p>
                        </div>

                        {isAuthenticated === false ? <div className='header-item2'>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <p className='be-professional'>Become a professional</p><span><BsCaretDownFill style={{ paddingLeft: "10px", color: 'white' }} /></span>
                            </div>
                            <Link className='navigation-li' to='/auth/register/'><p className='sign-up-txt'>Sign Up</p></Link>
                            <Link className='navigation-li' to='/auth/login/'><p className='sign-in-txt'>Sign In</p></Link>
                        </div> :
                            <div className='header-item2'>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                                    <IconContext.Provider value={{ size: "30px", color: "white" }}>
                                        <BsChatDots style={{ marginRight: "20px", marginLeft: "50px" }} />
                                        <IoNotificationsOutline style={{ marginRight: "20px" }} />
                                    </IconContext.Provider>
                                    <img src='https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' className='header-profile-image' alt='profileImage' />
                                    <p className='username'>Jhon Doe</p>
                                </div>
                            </div>
                        }

                    </div>
                    {isAuthenticated === false && boolSearchBar === false ?
                        <div className='header-content'>
                            <div>
                                <p className='header-title'>Find a Plumber and Elecrician for maintenance</p>
                            </div>
                            <div>
                                <button className='hirenow-button'>Hire Now</button>
                            </div>
                        </div> : isAuthenticated === true && boolSearchBar === true ?
                            <div className='flex-container'>
                                <SearchBar />
                            </div> : null
                    }

                </div>
            </div>
        </header>
    )
}

export default Header;