import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Logo from "../assets/images/logo.png"

const Nav = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="sticky top-0 z-50 bg-white ">
            <div className='container mx-auto'>
                <div className="flex items-center justify-between p-2">
                    <Link to="/" className="pt-4">
                        <img src={Logo} alt='Logo' width={62} height={62} />
                    </Link>
                    <FaBars onClick={toggleSidebar} className="cursor-pointer md:hidden" />
                    <div className="hidden space-x-4 font-bold md:flex">
                        <Link className='transition duration-500 hover:text-blue-400 hover:translate-x-1' to="/">HOME</Link>
                        <Link className='duration-500 hover:translate-x-1 hover:transition hover:text-blue-400' to="/about">ABOUT US</Link>
                        <Link className='duration-500 hover:text-blue-400 hover:translate-x-1 hover:transition ' to="/services">SERVICES</Link>
                        <Link className='duration-500 hover:text-blue-400 hover:translate-x-1 hover:transition ' to="/pricing">PRICING</Link>
                        <Link className='duration-500 hover:text-blue-400 hover:translate-x-1 hover:transition ' to="/login">LOG IN</Link>
                        <Link className='duration-500 hover:text-blue-400 hover:translate-x-1 hover:transition ' to="/register">REGISTER</Link>
                    </div>
                </div>
                <div className={`md:hidden ${isSidebarOpen ? 'block' : 'hidden'} bg-white shadow-md p-4`}>
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT US</Link>
                    <Link to="/services">SERVICES</Link>
                    <Link to="/pricing">PRICING</Link>
                    <Link to="/login">LOG IN</Link>
                    <Link to="/register">REGISTER</Link>
                </div>
            </div>

        </div>
    );
};

export default Nav