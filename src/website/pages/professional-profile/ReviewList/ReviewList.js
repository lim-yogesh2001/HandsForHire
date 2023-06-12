
import Review from '../../../components/review/Review';
import './review-list.css';

function ReviewList ({ items }) {

    const renderedItems = items.map((x) => {
        return <Review username={x.username} imageUrl={x.imageUrl} comment={x.comment} key={x.id} /> 
    })

    return(
        <div className='review-list'>
            {renderedItems}
        </div>
    )
}

export default ReviewList;