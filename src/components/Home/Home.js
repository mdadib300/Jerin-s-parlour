import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import SpecialService from '../SpecialService/SpecialService';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <SpecialService />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;