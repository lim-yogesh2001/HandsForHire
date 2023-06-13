
import { Link } from 'react-router-dom';
import './professional-dashboard.css';

export default function ProfessionalDashboard({items}) {

    const renderedItems = items.map( (item) => {
        return <div className='dashboard-items' key={item.key}>
            <Link className='item-links' to={`/professional/${item.key}`}>{item.name}</Link>
        </div>
    })
    return (
       <div className='dashboard-container'>{renderedItems}</div>
    )
}
