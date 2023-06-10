
import './interaction.css';

export default function Interaction ({ total }) {

    function kformatter (num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }

    let interactions = kformatter(total);
    
    return (
        <div className="interaction-container">
            <p className="total-interactions">{interactions}</p>
            <p className="follow-up-text">total interaction</p>
        </div>
    )
}