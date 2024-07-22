import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/FeaturesSection';
import TestimonialSection from '../components/TestimonialSection';
import AboutUsSection from '../components/AboutUsSection';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const LandingPage = () => {
    return (
        <div>
            <Nav />
            <HeroSection />
            <AboutUsSection />
            <Services />
            <TestimonialSection />
            <Footer />
        </div>
    );
};

export default LandingPage;