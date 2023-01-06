import React from 'react';
import './SpecialService.css';
import specialService from '../../assets/special-service.png';

const SpecialService = () => {
    return (
        <div className='py-5' id='special-service'>
            <div className='d-lg-flex align-items-center px-5'>
                <img src={specialService} alt='Special Service' className='img-fluid mb-4 mb-lg-0 me-0 me-lg-5'></img>
                <div>
                    <h1>Let us handle your<br />skin <span className='p-text'>Professionally</span>.</h1>
                    <p className='mb-4'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
                    <div className='d-flex align-items-center'>
                        <div className='me-5'>
                            <h1 className='p-text'><b>500+</b></h1>
                            <p>Happy Customers</p>
                        </div>
                        <div>
                            <h1 className='p-text'><b>20+</b></h1>
                            <p>Total Services</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialService;