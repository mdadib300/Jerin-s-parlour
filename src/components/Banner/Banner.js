import React from 'react';
import bannerImage from '../../assets/banner-image.png';

const Banner = () => {
    return (
        <div className='my-3 my-md-5 d-md-flex flex-row-reverse justify-content-around align-items-center'>
            <img src={bannerImage} className='img-fluid px-3 pb-3' alt='banner'></img>
            <div className='mx-3 mx-md-0'>
                <h1>BEAUTY SALON<br />FOR EVERY WOMEN</h1>
                <p>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Purus commodo ipsum duis<br />laoreet maecenas. Feugiat </p>
                <button className='custom-btn'>Get an Appointment</button>
            </div>
        </div>
    );
};

export default Banner;