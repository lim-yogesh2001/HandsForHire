
import './dashboard.css';
import { Link } from 'react-router-dom';

export default function Dashboard({ items }) {

    const renderedItems = items.map((item) => {
        console.log(item.accountNdsettings);
        return (
            <div className='dashboard-items' key={item.key}>
                {
                    item.key === "dashboard" ? <Link className='item-links' to={'/customer/dashboard/'}>{item.name}</Link> :
                        item.key === "profile" ? <Link className='item-links' to={'/customer/accountNdSettings/' + item.key}>{item.name}</Link> :
                            item.key === "security" ? <Link className='item-links' to={'/customer/accountNdSettings/' + item.key}>{item.name}</Link> :
                                item.key === "paymentMethod" ? <Link className='item-links' to={'/customer/accountNdSettings/' + item.key}>{item.name}</Link> :
                                    item.key === "paymentHistory" ? <Link className='item-links' to={'/customer/accountNdSettings/' + item.key}>{item.name}</Link> :
                                        item.key === "deleteAccount" ? <Link className='item-links' to={'/customer/accountNdSettings/' + item.key}>{item.name}</Link>
                                            : <Link className='item-links' to={'/customer/' + item.key}><p>{item.name}</p></Link>
                }
            </div>
        );
    });

    return (
        <div className='dashboard-container'>{renderedItems}</div>
    );
}