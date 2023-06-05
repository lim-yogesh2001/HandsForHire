import './professional-card.css';
import { IoWaterOutline, IoHammerOutline, IoUmbrellaOutline, IoTvOutline, IoTabletPortraitOutline, IoBulb } from "react-icons/io5";

function ProfessionalCard({ jobType }) {
    const profIcons = jobType === 'plumber' ? <div className='professional-plumber-icons'>
        <IoWaterOutline style={{ paddingTop: "10px", paddingRight: "10px" }} />
        <IoHammerOutline style={{ paddingTop: "10px", paddingRight: "10px" }} />
        <IoUmbrellaOutline style={{ paddingTop: "10px", paddingRight: "10px" }} />
    </div> : jobType === 'electrician' ? <div className='professional-electrician-icons'>
        <IoTvOutline style={{ paddingTop: "10px", paddingRight: "10px" }} />
        <IoTabletPortraitOutline style={{ paddingTop: "10px", paddingRight: "10px" }} />
        <IoBulb style={{ paddingTop: "10px", paddingRight: "10px" }} />
    </div> : <div></div>;

    return (
        <div className="professional-card" style={{ width: "300px", height: "150px" }}>
            <div className='professional-picture'>
                <img src='https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='professional' />
            </div>
            <div className='professional-body'>
                <p className='professional-name'>Jhon Doe</p>
                <p className='profession'>Plumber</p>
                {profIcons}
            </div>
        </div>
    )
}

export default ProfessionalCard;