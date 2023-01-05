import React from 'react';
import bannerImage from '../../assets/banner-image.png';
import './Banner.css';

const Banner = () => {
    return (
        <div id='banner' className='p-3 p-md-5 d-lg-flex flex-row-reverse justify-content-around align-items-center'>
            <img src={bannerImage} className='img-fluid pb-3 pb-lg-0' alt='banner'></img>
            <div>
                <h1><b>BEAUTY SALON<br />FOR EVERY WOMEN</b></h1>
                <p>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Purus commodo ipsum duis<br />laoreet maecenas. Feugiat </p>
                <button className='custom-btn'>Get an Appointment</button>
            </div>
        </div>
    );
};

export default Banner;