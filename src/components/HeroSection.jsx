import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="relative flex flex-col justify-between min-h-screen text-white bg-blue-500">
            <div className="container flex flex-col items-center py-16 mx-auto md:flex-row md:py-32">
                <div className="w-full text-center md:w-1/2 md:text-left">
                    <motion.h1
                        className="mb-4 text-4xl font-bold md:text-5xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Welcome To DataHub
                    </motion.h1>
                    <motion.p
                        className="mb-6 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        DataHub is your one-stop solution for all data transmission services.
                    </motion.p>
                    <motion.div
                        className="flex justify-center md:justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <Link to="/login">
                            <button className="px-6 py-3 mr-4 font-bold text-white transition duration-500 bg-blue-500 border rounded-full hover:bg-white hover:text-black">Log In</button>
                        </Link>

                        <Link to="/register">
                            <button className="px-6 py-3 font-bold text-white transition duration-500 bg-blue-500 border rounded-full hover:bg-white hover:text-black">Register</button>
                        </Link>

                    </motion.div>
                </div>
                <div className="flex justify-center w-full md:w-1/2 md:justify-end">
                    <motion.img
                        src="https://media.istockphoto.com/id/1333748315/photo/young-friendly-operator-woman-agent-with-headsets-beautiful-business-woman-wearing-microphone.webp?b=1&s=170667a&w=0&k=20&c=h8ulRZcWiC-JB82F4RdXXjDhv8bhersFphUaIx4riCs="
                        alt="Hero"
                        className="w-3/4 md:w-full"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    />
                </div>
            </div>
            <div className="relative w-full overflow-hidden wavy-container">
                <svg
                    className="absolute bottom-0 left-0 w-full h-32 animate-wavy"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#3A9BDC"
                        fillOpacity="1"
                        d="M0,160L48,170.7C96,181,192,203,288,218.7C384,235,480,245,576,218.7C672,192,768,128,864,117.3C960,107,1056,149,1152,176C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default HeroSection;