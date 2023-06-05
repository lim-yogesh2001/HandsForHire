
import { Rating, Menu, MenuItem } from '@mui/material';
import { MdMoreHoriz, MdMonitor, MdPhoneAndroid, MdOutlineLightbulb } from 'react-icons/md';
import './professional-profile.css';


function ProfessionalProfile() {

    return (
        <div className="profile-container">
            <div className="profile-intro-card">
                <img className='profile' src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt='profile' />
                <p className='first-name'>Username</p>
                <p className='job-type'>Job Type</p>
                <div className='ratings-reviews'>
                    <p className='rating-letter'>4.1</p>
                    <Rating value={4.1} size='30px' style={{ margin: "0px 10px" }} />
                    <p className='reviews'>( 10 reviews )</p>
                </div>
                <div className='message-container'>
                    <button className='message-button'>Message Now</button>
                    <button className='menu-bar'><MdMoreHoriz style={{ height: '85px', width: '85px' }} /></button>
                    <Menu
                        id='menu'
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }} >
                        <MenuItem >Hire Now</MenuItem>
                        <MenuItem >Report</MenuItem>
                    </Menu>
                </div>
                <div className='user-rate-container'>
                    <p>Per Hour: Rs.500</p>
                </div>
            </div>
            <div className="profile-description-container">
                <div className='about-user'>
                    <p className='title-style'>About Me</p>
                    <p className='role'>Piple Fitting | Installation</p>
                    <p className='description'>Training and development research has a long tradition within applied psychology dating back to the early 1900s. Over the years, not only has interest in the topic grown but there have been dramatic changes in both the science and practice of training and development. In the current article, we examine the evolution of training and development research using articles published in the Journal of Applied Psychology (JAP) as a primary lens to analyze what we have learned and to identify where future research is needed.</p>
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
                    <div className=''></div>
                </div>
            </div>

        </div>
    )
}

export default ProfessionalProfile;