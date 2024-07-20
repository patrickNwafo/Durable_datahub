import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Services from '../components/FeaturesSection';
import TestimonialSection from '../components/TestimonialSection';
import AboutUsSection from '../components/AboutUsSection';
import ContactUsSection from '../components/Services';
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
            <ContactUsSection />
            <Footer />
        </div>
    );
};

export default LandingPage;