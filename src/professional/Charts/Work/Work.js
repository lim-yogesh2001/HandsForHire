
import './work.css';

export default function Work({ percentage, totalWork }) {
    return (
        <div className="work-container">
            <div className='circular-pie-container'>
                <div className="circular-pie" style={{ "--p": `${percentage}`, "--b": "10px", "--c": "teal" }}>
                    {totalWork}
                </div>
            </div>
            <p className='follow-up-text'>total work</p>
        </div>
    )
}
