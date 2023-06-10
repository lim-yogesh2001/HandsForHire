import './home.css';
import Header from '../../components/header/Header';
import Service from '../../components/services/Service';
import RapidServices from '../../components/rapid-service/RapidServices';
import ProfessionalCard from '../../components/professional-card/ProfessionalCard';
import ProfileCarousel from '../../components/profile-carousel/ProfileCarousel';
import Footer from '../../components/footer/Footer';

function HomePage() {
    const profiles = [{
        profileName: "Jhon Denvier",
        job: "ceo TIA",
        description: "He’s a 16-time World Champion, New York Times best-selling author and record-setting Make-A-Wish granter. He’s released a hit album, starred in blockbuster movies and carried the torch for WWE since he first set foot in a WWE ring nearly two decades ago. If you really can’t see John Cena at this point, chances are you simply aren’t looking. Was there any doubt Cena would become the living legend he is today? You practically knew you were glimpsing the future “Face That Runs the Place” when a muscular Massachusetts kid threw down with Kurt Angle for a chance to become a true WWE Superstar. Sure enough, a little ruthless aggression went a long way. After gaining the respect of his peers by stepping to The Olympic Hero, Cena went supernova as the fire-spitting Doctor of Thuganomics, eventually reaching the peak by upending JBL for his first WWE Championship at WrestleMania 21. Far from being a one-hit wonder, however, Cena set up shop at the mountaintop and refused to decamp, instituting an open-challenge policy to anyone who thought they could knock him off: You want some, come get some. And slowly but surely, Cena — preaching an ethos of “Hustle, Loyalty, Respect” — not only amassed a battalion of followers he dubbed the “Cenation,” but also accumulated enough hardware to fill a Home Depot.",
        imageUrl: 'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    ];


    const renderProfiles = profiles.map((x) => {
        return <ProfileCarousel profileName={x.profileName} job={x.job} description={x.description} imageUrl={x.imageUrl} />
    });


    return (
        <div>
            <Header isAuthenticated={false} imageheight="80vh" height="80vh" boolSearchBar={false} />
            <main>
                <section>
                    <div className='headline-text'>
                        <p>Get help from top rated plumber and electrician</p>
                    </div>
                    <Service />
                </section>
                <section>
                    <RapidServices />
                    <div className='top-rated'>
                        <p>Connect with</p>
                        <p>top rated plumber and electrician</p>
                        <div className='regular-div'>
                            <div className='grid-container'>
                                <ProfessionalCard jobType="plumber" />
                                <ProfessionalCard jobType="plumber" />
                                <ProfessionalCard jobType="plumber" />
                                <ProfessionalCard jobType="plumber" />
                            </div>
                        </div>
                        <div className='regular-div'>
                            <button className='rated-electrician-button'>Hire Now</button>
                        </div>
                    </div>
                </section>
                <section>
                    {renderProfiles}
                    <div className='get-started-container'>
                        <p className='title'>Get   Started    Today</p>
                        <div className='get-started-buttons'>
                            <button className='hire-now'>Hire Now</button>
                            <button className='text-button'>Become a Professional</button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default HomePage;