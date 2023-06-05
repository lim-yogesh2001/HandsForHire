import './services.css';

function Service() {
    return (
        <div className='services'>
            <div className='service-1'>
                <div className='service1-item-1'>
                    <p className='service-title'>Plumber Services</p>
                    <ul>
                        <li>Plumbing and sanitary fittings/repairs</li>
                        <li>Boring, Filter and RO system installation</li>
                        <li>Drainage works and other etc.</li>
                    </ul>
                    <button className='service-button'>Find a Plumber</button>
                </div>
                <div className='service1-item-2'>
                    <div className='service1-image'></div>
                </div>
            </div>
            <div className='service-2'>
                <div className='service2-item-1'>
                    <div className='service2-image'></div>
                </div>
                <div className='service2-item-2'>
                    <p className='service-title'>Electrician Services</p>
                    <ul>
                        <li>Electrical repairing and maintenance</li>
                        <li>Solar / Inverter installation and repairs</li>
                        <li>Direct Generator, other backup system works etc</li>
                    </ul>
                    <button className='service-button'>Find a Electrician</button>
                </div>
            </div>
        </div>
    );
}

export default Service;