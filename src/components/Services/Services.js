import React from 'react';
import './Services.css';
import skinCare from '../../assets/services/skin-care.png';
import faceTreatment from '../../assets/services/face-treatment.png';
import hairColor from '../../assets/services/hair-color.png';

const Services = () => {
    return (
        <div>
            <h2 className='text-center my-5'>Our Awesome <span className='p-text'>Services</span></h2>
            <div className='d-lg-flex justify-content-center m-3 m-md-5'>
                <div className='p-card mb-3 mb-md-0 me-0 me-md-5'>
                    <img src={skinCare} alt='Service - Skin Care'></img>
                    <p><b>Skin Care Treatment</b></p>
                    <p className='p-text'>$99</p>
                    <p>We craft stunning and amazing<br />web UI, using a well drrafted UX<br />to fit your product.</p>
                </div>
                <div className='p-card  mb-3 mb-md-0 me-0 me-md-5'>
                    <img src={faceTreatment} alt='Service - Skin Care'></img>
                    <p><b>Anti Age Face Treatment</b></p>
                    <p className='p-text'>$89</p>
                    <p>With well written codes, we<br />build amazing apps for all<br />platforms, mobile and web<br />apps in general.</p>
                </div>
                <div className='p-card  mb-3 mb-md-0 me-0 me-md-5'>
                    <img src={hairColor} alt='Service - Skin Care'></img>
                    <p><b>Hair Color & Styleing</b></p>
                    <p className='p-text'>$74</p>
                    <p>Amazing flyers, social media<br />posts and brand representations<br />that would make your brand<br />stand out.</p>
                </div>
            </div>
            <div className='d-flex justify-content-center my-4'>
            <button className='custom-btn'>Explore more</button>
            </div>
        </div>
    );
};

export default Services;