
import { MdOutlineTextsms, MdOutlineNotificationsNone, MdMargin } from 'react-icons/md';
import './server-header.css';

export default function ServerHeader() {
    return (
        <header>
            <div className='header-container'>
                <div className='header-item-1'>
                    <p className='title'>HandsForHire</p>
                    <p className='works'>How it works</p>
                </div>
                <div className='header-item-2'>
                    <MdOutlineTextsms size='40px' color='white' />
                    <MdOutlineNotificationsNone size='40px' color='white' style={{ margin: "10px" }} />
                    <img src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80' className='profile-img' alt='profile'/>
                    <p className='user'>Amber Heard</p>
                </div>
            </div>
        </header>
    )
}