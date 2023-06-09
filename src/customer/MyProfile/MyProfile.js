
import { useState } from 'react';
import './my-profile.css';

export default function MyProfile({ profileDetails }) {
    const [fullName, setFullName] = useState(profileDetails.fullname);
    const [username, setUserName] = useState(profileDetails.username);
    const [address, setAddress] = useState(profileDetails.address);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fullName);
        console.log(username);
        console.log(address);
    }


    return (
        <div className='profile-box'>
            <div className='profile-box-header'>
                <p className='profile-header-item1'>My Profile</p>
            </div>
            <div className='profile-body'>
                <div className='blue-background'>
                    <img className='prof-cover-image' src={profileDetails.image} alt='profile' />
                </div>
                <div className='profile-name'>
                    <p>{fullName}</p>
                </div>
                <div className='profile-form'>
                    <div className='profile-form-header'>
                        <p>Update My Profile</p>
                    </div>
                    <div className='m'>
                        <form className='p-form' onSubmit={handleSubmit}>
                            <div className='p-5'>
                                <label>Full Name</label>
                                <input type='text' name="fullName" onChange={(e) => setFullName(e.target.value)} value={fullName} placeholder='Enter Full Name' />
                            </div>
                            <div className='p-5'>
                                <label>Username</label>
                                <input type='text' name="username" onChange={(e) => setUserName(e.target.value)} value={username} placeholder='Enter Username' />
                            </div>
                            <div className='p-5'>
                                <label>Address</label>
                                <input type='text' name="address" onChange={(e) => setAddress(e.target.value)} value={address} placeholder='Enter Address' />
                            </div>
                            <div className='p-5'>
                                <label>Address Map ?</label>
                            </div>
                            <div className='p-5'>
                                <button className='b1'>Choose Your Life</button>
                                <button className='b2'>No Files Chosen</button>
                            </div>
                            <div className='m15'>
                                <button className='update-button' onSubmit={handleSubmit}>Update Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}