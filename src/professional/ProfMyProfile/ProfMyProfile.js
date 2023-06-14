
import { useState } from 'react';
import './prof-my-profile.css';

export default function ProfMyProfile({ profileDetails }) {
    const [fullName, setFullName] = useState(profileDetails.fullname);
    const [username, setUserName] = useState(profileDetails.username);
    const [address, setAddress] = useState(profileDetails.address);
    const [experience, setExperience] = useState(profileDetails.experience);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fullName);
        console.log(username);
        console.log(address);
    }

    return (
        <div className='prof-profile-container'>
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
                                <label>Experience</label>
                                <input type='number' name="experience" onChange={(e) => setExperience(e.target.value)} value={experience} placeholder='Enter Experience' />
                            </div>
                            <button className='prof-about-button'>About</button>
                            <button className='update-button' onSubmit={handleSubmit}>Update Profile</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

