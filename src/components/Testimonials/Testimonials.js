import React from 'react';
import client1 from '../../assets/testimonials/happy-customer-1.png';
import client2 from '../../assets/testimonials/happy-customer-2.png';
import client3 from '../../assets/testimonials/happy-customer-3.png';

const Testimonials = () => {
    return (
        <div>
            <h1 className='text-center my-5'>Testimonials</h1>
            <div class="container px-5">
                <div class="row mb-5 g-5">
                    <div class="col-12 col-md-6 col-lg-4">
                        <div>
                            <div className='d-flex align-items-center mb-3'>
                                <img src={client1} alt='customer' className='w-25 me-3'></img>
                                <div>
                                    <h5>Arun Dhaban</h5>
                                    <h6>CEO, B Plus</h6>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div>
                            <div className='d-flex align-items-center mb-3'>
                                <img src={client2} alt='customer' className='w-25 me-3'></img>
                                <div>
                                    <h5>Mr. Elon Musk</h5>
                                    <h6>Owner, Twitter</h6>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div>
                            <div className='d-flex align-items-center mb-3'>
                                <img src={client3} alt='customer' className='w-25 me-3'></img>
                                <div>
                                    <h5>Mark Newton</h5>
                                    <h6>CEO, Faceback</h6>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center mb-5'>
                    <p>⚪⚫⚫</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;