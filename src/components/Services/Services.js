import React from 'react';
import './Services.css';
import faceTreatment from '../../assets/services/face-treatment.png';
import skinCare from '../../assets/services/skin-care.png';
import hairColor from '../../assets/services/hair-color.png';

const Services = () => {
    return (
        <div>
            <h1 className='text-center my-5'>Our Awesome <span className='p-text'>Services</span></h1>
            <div class="container px-5">
                <div class="row mb-5 g-3">
                    <div class="col-12 col-md-6 col-lg-4">
                        <div className='p-card'>
                            <img src={faceTreatment} alt='Face Treatment'></img>
                            <h5>Anti Age Face Treatment</h5>
                            <h5>$56</h5>
                            <p>We craft stunning and amazing<br />web UI, using a well drrafted UX<br />to fit your product.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div className='p-card'>
                            <img src={hairColor} alt='Face Treatment'></img>
                            <h5>Hair Color & Styleing</h5>
                            <h5>$27</h5>
                            <p>Amazing flyers, social media<br />posts and brand representations<br />that would make your brand<br />stand out.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div className='p-card'>
                            <img src={skinCare} alt='Face Treatment'></img>
                            <h5>Skin Care Treatment</h5>
                            <h5>$61</h5>
                            <p>With well written codes, we<br />build amazing apps for all<br />platforms, mobile and web<br />apps in general.</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center mb-5'>
                    <button className='custom-btn'>Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Services;