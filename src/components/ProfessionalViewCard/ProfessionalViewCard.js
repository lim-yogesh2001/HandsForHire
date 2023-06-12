import './professionalviewcard.css';
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ProfessionalViewCard({ title, image, job, description, status, ratings, reviews }) {

    let showStatus;

    const navigate = useNavigate();

    const navigateToViewProfile = () => {
        navigate('/handsForHire/viewProfile/', {
            state: {
                title,
                image,
                job,
                description,
                status,
                ratings,
                reviews,
            }
        })
    }

    if (status === "online") {
        showStatus = (
            <div className="status-container">
                <div style={{ backgroundColor: "#E6EA32", height: "8px", width: "8px", borderRadius: "15px" }}></div>
                <p style={{ fontSize: "12px", paddingLeft: "10px" }}>Online</p>
            </div>
        );
    }
    else {
        showStatus = (
            <div className="status-container">
                <div style={{ backgroundColor: "#EA5332", height: "8px", width: "8px", borderRadius: "15px" }}></div>
                <p style={{ fontSize: "12px", paddingLeft: "10px" }}>Offline</p>
            </div>
        );
    }

    return (
        <div className="custom-card">
            <div className="card-item1">
                <img src={image} style={{ width: "83px", height: "85px", objectFit: "cover", borderRadius: "50px" }} alt="img"></img>
                {showStatus}
            </div>
            <div className="card-item2">
                <div className="card-details">
                    <div className="card-title">
                        <div style={{ margin: "0px 20px 5px 0px", flex: "60%" }}>
                            <p style={{ fontSize: "25px" }}>{title}</p>
                            <p style={{ color: "rgb(0,0,0,0.6)" }}>{job}</p>
                        </div>
                        <div style={{ flex: "40%", display: "flex" }}>
                            <p style={{ fontSize: "18px", marginRight: "5px", color: "#010101" }}>
                                {ratings}
                            </p>
                            <div style={{ margin: "0 5px" }}>
                                <Rating readOnly size="small" value={ratings} />
                            </div>
                            <div style={{ flex: "10%" }}>({reviews} reviews)</div>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-body-item1">{description}</p>
                        <div className="card-body-item2">
                            <button className="view-button" onClick={navigateToViewProfile}>View Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessionalViewCard;