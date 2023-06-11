import './web-services.css';

function WebService() {
    return (
        <div className='web-services'>
            <div className='web-service-1'>
                <div className='web-service1-item-1'>
                    <p className='web-service-title'>Plumber Services</p>
                    <ul className='un-list-style'>
                        <li className='li-item'>Plumbing and sanitary fittings/repairs</li>
                        <li className='li-item'>Boring, Filter and RO system installation</li>
                        <li className='li-item'>Drainage works and other etc.</li>
                    </ul>
                    <button className='web-service-button'>Find a Plumber</button>
                </div>
                <div className='web-service1-item-2'>
                    <div className='web-service1-image'></div>
                </div>
            </div>
            <div className='web-service-2'>
                <div className='web-service2-item-1'>
                    <div className='web-service2-image'></div>
                </div>
                <div className='web-service2-item-2'>
                    <p className='web-service-title'>Electrician Services</p>
                    <ul className='un-list-style'>
                        <li className='li-item'>Electrical repairing and maintenance</li>
                        <li className='li-item'>Solar / Inverter installation and repairs</li>
                        <li className='li-item'>Direct Generator, other backup system works etc</li>
                    </ul>
                    <button className='web-service-button'>Find a Electrician</button>
                </div>
            </div>
        </div>
    );
}

export default WebService;