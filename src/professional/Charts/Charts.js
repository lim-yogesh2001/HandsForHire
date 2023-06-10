
import Followers from './Followers/Followers';
import Interaction from './Interaction/Interaction';
import Work from './Work/Work';
import './charts.css';

export default function Charts () {
    return (
        <div className='charts-container'>
            <Followers total={200000} />
            <Interaction total={1001} />
            <Work percentage={30} totalWork={300} />
        </div>
    )
}
