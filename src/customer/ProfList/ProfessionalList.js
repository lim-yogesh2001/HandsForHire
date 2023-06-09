
import ProfessionalViewCard from '../../components/ProfessionalViewCard/ProfessionalViewCard';
import './professional-list.css';

export default function ProfessionalList() {

    const professionals = [  {
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
        image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        job: "Model",
        description: "Darshan was sued for 5 Rupees for damages done to hukka. The jury unanimously found that Heard could not substantiate her allegations against Depp and that she knew her claims of abuse were false when she published her 2018 essay. ",
        status: "offline",
        ratings: 3.0,
        reviews: 50.0
    },
    {
        id: "i4",
        title: "Sagar Gurung",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        job: "Cook",
        description: "Darshan was sued for 5 Rupees for damages done to hukka. The jury unanimously found that Heard could not substantiate her allegations against Depp and that she knew her claims of abuse were false when she published her 2018 essay. ",
        status: "offline",
        ratings: 3.0,
        reviews: 50.0
    },];

    const renderedItems = professionals.map((x) => {
        return <ProfessionalViewCard title={x.title} image={x.image} job={x.job} ratings={x.ratings} reviews={x.reviews} description={x.description} status={x.status} />
    }) 

    return (
        <div className='box'>
            <div className='box-header'>
                <p className='b-header-item1'>Top Rated professional</p>
                <p className='b-header-item2'>Browse All Professional</p>
            </div>
            <div className='box-body'>
                {renderedItems}
            </div>
        </div>
    );
}