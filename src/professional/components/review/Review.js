
import './review.css';

function Review({ username, imageUrl, comment }) {
    return (
        <div className='review'>
            <div className='img-container'>
                <img className='profile-image-style' src={`${imageUrl}`} alt='profile'></img>
            </div>
            <div className='comment-container'>
                <p className='username-style'>{username}</p>
                <div className='comment'>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    )
}

export default Review;