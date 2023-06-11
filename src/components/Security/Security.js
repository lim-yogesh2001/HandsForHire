
import './security.css';

export default function Security () {
    return (
        <div className='security-box'>
            <div className='security-box-header'>
                <p className='security-header-item1'>Security</p>
            </div>
            <div className='security-body'>
                <div className='security-card'>
                    <div className='security-card-header'>
                        <p>Update Profile</p>
                    </div>
                    <div className='p-5'>
                        <form className='security-form'>
                            <div className='p-10'>
                                <label>Old Password *</label>
                                <input type='password'  readOnly />
                            </div>
                            <div className='p-10'>
                                <label>New Password *</label>
                                <input type='password' />
                            </div>
                            <div className='p-10'>
                                <label>Confirm Password *</label>
                                <input type='password' />
                            </div>
                            <div className='pt-20'>
                                <button className='update-pw-button'>Update Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
} 