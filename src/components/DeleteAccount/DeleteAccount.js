
import './delete-account.css';

export default function DeleteAccount() {
    return (
        <div className='delete-account-container'>
            <div className='delete-account-header'>
                <p>Delete My Account</p>
            </div>
            <div className='delete-account-body'>
                <div className='delete-text-container'>
                    <p>Are you sure you want to delete your account Permanently ?</p>
                </div>
                <div className='choice-container'>
                    <button className='delete-btn'>Yes Delete</button>
                    <button className='cancel-btn'>Cancel</button>
                </div>
            </div>
        </div>
    );
}