
import ProfessionalViewCard from "../../components/ProfessionalViewCard/ProfessionalViewCard";
import './my-hirings.css';

export default function MyHirings() {
    const hirings = [
        {
            id: "i3",
            title: "Sumnima Kulung Rai",
            image: "https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/313440100_649213390238301_4394824310154575388_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=peVxxzX-v9AAX8J0nl9&_nc_ht=scontent.fktm17-1.fna&oh=00_AfAiR_CVI_-Ga-XQkxYcfcByY-ZGyUMPobIQFkMiJsnzaA&oe=64861214",
            job: "Singer",
            description: "A young artist with talented voice and nature. She makes everybody a heart patient with her voice. She has currently made me addicted with her voice. Therefore, soon I might have to get admmitted to hospital becoz of too much overdose and addiction.",
            status: "offline",
            ratings: 3.0,
            reviews: 50.0
        },
    ];

    const renderedItems = hirings.map((x) => {
        return <ProfessionalViewCard title={x.title} image={x.image} job={x.job} ratings={x.ratings} reviews={x.reviews} description={x.description} status={x.status} />
    }) 

    return (
        <div className="box">
            <div className="box-header">
                <p className="b-header-item1">My Hirings</p>
            </div>
            <div className="box-body">
                {renderedItems.length === 0 ? <div className='empty-msg'>
                    <p>No Hirings Yet</p>
                    <p>Browse All Professional</p>
                </div> : renderedItems}
            </div>
        </div>
    );
}