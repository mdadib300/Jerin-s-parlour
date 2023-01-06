import React from 'react';
import notFound from '../../assets/notFound.gif';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center p-text mt-5'>404: Sorry, Page not available.</h2>
            <div className='d-flex justify-content-center'>
                <img src={notFound} className='img-fluid' alt='Not Found'></img>
            </div>
        </div>
    );
};

export default NotFound;