
import Header from '../../components/header/Header';
import ProfessionalCard from '../../components/professional-card/ProfessionalCard';
import RapidServices from '../../components/rapid-service/RapidServices';
import ProfileCarousel from '../../components/profile-carousel/ProfileCarousel';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import './homeloggedin.css';

export default function HomeLoggedIn() {
    const profiles = [{
        profileName: "Jhon Denvier",
        job: "ceo TIA",
        description: "He’s a 16-time World Champion, New York Times best-selling author and record-setting Make-A-Wish granter. He’s released a hit album, starred in blockbuster movies and carried the torch for WWE since he first set foot in a WWE ring nearly two decades ago. If you really can’t see John Cena at this point, chances are you simply aren’t looking. Was there any doubt Cena would become the living legend he is today? You practically knew you were glimpsing the future “Face That Runs the Place” when a muscular Massachusetts kid threw down with Kurt Angle for a chance to become a true WWE Superstar. Sure enough, a little ruthless aggression went a long way. After gaining the respect of his peers by stepping to The Olympic Hero, Cena went supernova as the fire-spitting Doctor of Thuganomics, eventually reaching the peak by upending JBL for his first WWE Championship at WrestleMania 21. Far from being a one-hit wonder, however, Cena set up shop at the mountaintop and refused to decamp, instituting an open-challenge policy to anyone who thought they could knock him off: You want some, come get some. And slowly but surely, Cena — preaching an ethos of “Hustle, Loyalty, Respect” — not only amassed a battalion of followers he dubbed the “Cenation,” but also accumulated enough hardware to fill a Home Depot.",
        imageUrl: 'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    ];

    const navigate = useNavigate();

    function navigateToBrowseProfessional() {
        navigate('/handsForHire/browseProfessional/');
    }


    const renderProfiles = profiles.map((x) => {
        return <ProfileCarousel profileName={x.profileName} job={x.job} description={x.description} imageUrl={x.imageUrl} />
    });

    return (
        <>
            <Header isAuthenticated imageheight="80vh" height="80vh" boolSearchBar={true} />
            <main>
                <section>
                    <div className='section-1'>
                        <div className='section-1-item'>
                            <img className='section-1-image' src='https://images.unsplash.com/photo-1502613374390-8da7aa532177?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80' alt='img' />
                        </div>
                        <div className='section-1-item'>
                            <p className='section-1-p'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</p>
                            <button className='browse-button' onClick={navigateToBrowseProfessional}>Browse Professionals</button>
                        </div>
                    </div>
                    <div className='headline-text1'>
                        <p>Get help from top rated plumber and electrician</p>
                    </div>
                </section>
                <section>
                    <div className='section-2'>
                        <div className='regular-div'>
                            <div className='loggedIn-grid-container'>
                                <ProfessionalCard jobType="electrician" />
                                <ProfessionalCard jobType="electrician" />
                                <ProfessionalCard jobType="electrician" />
                                <ProfessionalCard jobType="electrician" />
                                <ProfessionalCard jobType="electrician" />
                                <ProfessionalCard jobType="electrician" />
                                <ProfessionalCard jobType="electrician" />
                                <ProfessionalCard jobType="electrician" />
                                <ProfessionalCard jobType="electrician" />
                            </div>
                        </div>
                        <RapidServices />
                    </div>
                </section>
                <section>
                    {renderProfiles}
                </section>
            </main>
            <Footer />
        </>
    );
}