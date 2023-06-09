
import ProfessionalViewCard from '../../components/ProfessionalViewCard/ProfessionalViewCard';
import './my-favorite.css';

export default function MyFavorite() {

    const favorites = [];

    const renderedItems = favorites.map((x) => {
        return <ProfessionalViewCard title={x.title} image={x.image} job={x.job} ratings={x.ratings} reviews={x.reviews} description={x.description} status={x.status} />
    }) 
    return (
        <div className="box">
            <div className="box-header">
                <p className="b-header-item1">My Hirings</p>
            </div>
            <div className="box-body">
                {renderedItems.length === 0 ? <div className='empty-msg'>
                    <p>No Favorite Yet</p>
                    <p>Browse All Professional</p>
                </div> : renderedItems}
            </div>
        </div>
    )
}