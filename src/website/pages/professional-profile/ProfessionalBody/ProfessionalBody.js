
import { Rating } from '@mui/material';
import { MdMoreHoriz, MdMonitor, MdPhoneAndroid, MdOutlineLightbulb } from 'react-icons/md';
import ReviewList from '../ReviewList/ReviewList';
import { useLocation, useNavigate } from 'react-router-dom';
import './professional-body.css';



function ProfessionalBody() {
    const reviewsAndComments = [
        {
            id: 1,
            username: 'Yogesh Limbu',
            imageUrl: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
            comment: 'this is an amaizing movies with new technology. What the heck is wrong with my application.'
        },
        {
            id: 2,
            username: 'Sagar Gurung',
            imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            comment: 'this is an amaizing movies with new technology. What the heck is wrong with my application.'
        },
        {
            id: 3,
            username: 'Darshan Rai',
            imageUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80',
            comment: 'this is an amaizing movies with new technology. What the heck is wrong with my application.'
        },
    ]

    const location = useLocation();
    const data = location.state;

    const navigate = useNavigate();
    const handleNavigationToCustomer = ()  => {
        navigate('/customer/dashboard')
    }


    return (
        <div className="profile-container">
            <div className="profile-intro-card">
                <img className='cover-image' src={data.image} alt='profile' />
                <p className='first-name'>{data.title}</p>
                <p className='job-type'>{data.job}</p>
                <div className='ratings-reviews'>
                    <p className='rating-letter'>{data.ratings}</p>
                    <Rating value={data.ratings} size='30px' style={{ margin: "0px 10px" }} />
                    <p className='reviews'>( {data.reviews} reviews )</p>
                </div>
                <div className='message-container'>
                    <button className='message-button' onClick={handleNavigationToCustomer}>Message Now</button>
                    <button className='menu-bar'><MdMoreHoriz style={{ height: '85px', width: '85px' }} /></button>
                </div>
                <div className='user-rate-container'>
                    <p>Per Hour: Rs.500</p>
                </div>
            </div>
            <div className="profile-description-container">
                <div className='about-user'>
                    <p className='title-style'>About Me</p>
                    <p className='role'>Piple Fitting | Installation</p>
                    <p className='description'>{data.description}</p>
                    <div className='skills-container'>
                        <div className='skills'>
                            <MdMonitor style={{ marginRight: "20px", color: 'rgb(0,0,0, 0.8)' }} size="30px" />
                            <MdPhoneAndroid style={{ marginRight: "20px", color: 'rgb(0,0,0, 0.8)' }} size="30px" />
                            <MdOutlineLightbulb style={{ marginRight: "20px", color: 'rgb(0,0,0, 0.8)' }} size="30px" />
                        </div>
                    </div>
                </div>
                <div className='experties'>
                    <p className='title-style'>Experties</p>
                    <p className='experties-description'> Expertise is consensually defined as elite, peak, or exceptionally high levels of performance on a particular task or within a given domain. One who achieves this status is called an expert or some related term, such as virtuoso, master, maven, prodigy, or genius. These terms are meant to label someone whose performance is at the top of the game. An expert's field of expertise can be almost anything from craftsmanship, through sports and music, to science or mathematics. People usually agree on examples of expertise, like Yo-Yo Ma (musical performance), Fred Astaire and Ginger Rogers (ballroom dancing), Antiques Roadshow Appraisers, Albert Einstein (physics), Tiger Woods (golf), Bette Davis (acting), Nelson Mandela (politics), or Hillary Rodham Clinton (international relations).

                        Why different terms? Each term carries with it a slightly nuanced meaning. Shaded meanings vary in their emphasis on experience or constitutional factors as the source of high levels of performance. The term chosen to characterize superior performance carries with it an implied cause. Like expert, virtuoso or master is the result of hard work and long training. If talent is involved, it is a talent for hard labor. In contrast, prodigy, like genius, results from an endowment, which shows up early in life without the benefit of training.</p>
                </div>
                <div className='reviews-customer-container'>
                    <p className='reviews-title'>Reviews From Customer</p>
                    <ReviewList items={reviewsAndComments} />
                </div>
            </div>

        </div>
    )
}

export default ProfessionalBody;