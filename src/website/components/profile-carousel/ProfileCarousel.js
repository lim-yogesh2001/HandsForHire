
import { Carousel } from 'react-responsive-carousel';
import './profile-carousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';

function ProfileCarousel({ profileName, job, description, imageUrl }) {

    return (

        // <div className='carousel-container'>
            <Carousel showThumbs={false}  axis='horizontal'>
                <div className='carousel-item'>
                    <div className='carousel-details'>
                        <div className='carousel-section1'>
                            <div className='profile-image' style={{ backgroundImage: `url(${imageUrl})`}}></div>
                            <p className='profile-name'>{profileName}</p>
                            <p className='job'>{job}</p>
                        </div>
                        <div className='carousel-section2'>
                            <p className='profile-description'>{description}</p>
                        </div>
                    </div>
                </div>
            </Carousel>
        // </div>
    )
}

export default ProfileCarousel;