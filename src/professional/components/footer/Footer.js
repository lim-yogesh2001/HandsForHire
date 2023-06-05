import './footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className='main-footer'>
                    <div className='about'>
                        <p className='footer-title'>About Us</p>
                        <p className='footer-description'>
                            A remarkable about page is genuine, approachable, and distinguished. Visitors should get a glimpse into what working with you might be like. You can include personal interests, stories, and photos that convey the unique story of your business. You may also include information about who’s on your team and what their roles are
                        </p>
                    </div>
                    <div className='our-page'>
                        <p className='footer-title'>Our Pages</p>
                        <p className='footer-description'>
                            Got some loyal customers in your portfolio? Use your about page to tell the world about them. Consider naming your most successful clients and linking to a case study. Case studies can influence your prospects purchasing decisions since they show your companys past successes. Plus, they help prospects to envision their future success through the stories of your best customers.
                        </p>
                    </div>
                </div>
            </div>
            <div className='footer-end'>
                <ul>
                    <li>Copyright 2021</li>
                    <li>Our Policies</li>
                    <li>Terms And Services</li>
                    <li>Need Any Help?</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;