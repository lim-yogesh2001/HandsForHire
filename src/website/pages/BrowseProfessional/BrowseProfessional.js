
import './browseprofessional.css';
import Header from '../../components/header/Header';
import ProfessionalViewCard from '../../../components/ProfessionalViewCard/ProfessionalViewCard';
import Footer from '../../components/footer/Footer';
import BrowseProfBody from './BrowseProfBody';

function BrowseProfessional() {

    const professionals = [
        {
            id: 'i1',
            title: "Jhon Doe",
            image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=848&q=80",
            job: "Electrician",
            description: "a person who takes revenge for an offense: They feel that by engaging in terrorism they become the avengers of a great wrong done to their people. a person who takes revenge on behalf of someone else:In the film, Zorro sees himself as the avenger of the innocent.",
            status: "online",
            ratings: 5.0,
            reviews: 14.0
        },
        {
            id: "i2",
            title: "Amber Heard",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
            job: "Model",
            description: "Depp sued for $50 million in damages. The jury unanimously found that Heard could not substantiate her allegations against Depp and that she knew her claims of abuse were false when she published her 2018 essay. ",
            status: "online",
            ratings: 4.0,
            reviews: 20.0
        },
        {
            id: "i3",
            title: "Darshan Rai",
            image: "https://scontent.fktm12-1.fna.fbcdn.net/v/t39.30808-6/332165938_512191591086080_2255408086980952601_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=nfRGhOaV2vwAX93QAIZ&_nc_ht=scontent.fktm12-1.fna&oh=00_AfBctgyZW6PhI7GhKWzogFGHWZr5U_vgTvO5aO01q5klVg&oe=646BCAF1",
            job: "Model",
            description: "Darshan was sued for 5 Rupees for damages done to hukka. The jury unanimously found that Heard could not substantiate her allegations against Depp and that she knew her claims of abuse were false when she published her 2018 essay. ",
            status: "offline",
            ratings: 3.0,
            reviews: 50.0
        },
        {
            id: "i4",
            title: "Sagar Gurung",
            image: "https://scontent.fktm12-1.fna.fbcdn.net/v/t39.30808-6/344397199_898740664533196_8345421378316101341_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=G8wZiuGI9nYAX8RU9xS&_nc_oc=AQl8PtAPz26WmdlkmdCX42LZmkunSwQ1Ai8Qx6WSdTYlnGORdDvot5XetMvEDSmXRfUwriUGEmi_CartCN63tpWt&_nc_ht=scontent.fktm12-1.fna&oh=00_AfDn4sYd4r4jVzzlpRsNuxJMoXgufaVbhRnkBIoYlL4Hjg&oe=646B33B0",
            job: "Cook",
            description: "Darshan was sued for 5 Rupees for damages done to hukka. The jury unanimously found that Heard could not substantiate her allegations against Depp and that she knew her claims of abuse were false when she published her 2018 essay. ",
            status: "offline",
            ratings: 3.0,
            reviews: 50.0
        },
    ];

    const renderedItems = professionals.map((x) => {
        return <ProfessionalViewCard title={x.title} image={x.image} job={x.job} description={x.description} status={x.status} ratings={x.ratings} reviews={x.reviews} key={x.id} />
    })

    return (
        <>
            <Header boolSearchBar={false} isAuthenticated={true} imageheight="40vh" height="40vh" />
            <main>
                <BrowseProfBody proflist={renderedItems} />
            </main>
            <Footer />
        </>
    )
}

export default BrowseProfessional;