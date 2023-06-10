
import './follower.css';

export default function Followers({ total }) {

    function kformatter (num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }

    const followers = kformatter(total);


    return (
        <div className="followers-card">
            <p className='total-number'>{followers}</p>
            <div>
                <p className='follow-up-text'>total followers</p>
            </div>
        </div>
    )
}