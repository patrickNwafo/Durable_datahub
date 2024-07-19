import React from 'react';
import { HomeIcon, InformationCircleIcon, ServiceIcon, PricingIcon, LoginIcon, RegisterIcon } from '@heroicons/react/outline';

const Sidebar = ({ isOpen, closeSidebar }) => {
    return (
        <div className={`fixed inset-y-0 left-0 bg-blue-500 text-white w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300 md:translate-x-0 md:w-20 hover:w-64`}>
            <div className="flex items-center justify-between p-4 md:justify-center">
                <h1 className="text-2xl">Menu</h1>
                <button onClick={closeSidebar} className="md:hidden">
                    Close
                </button>
            </div>
            <ul className="mt-4 space-y-2">
                <li className="flex items-center space-x-2">
                    <HomeIcon className="w-6 h-6" />
                    <span className="md:hidden lg:inline">Home</span>
                </li>
                <li className="flex items-center space-x-2">
                    <InformationCircleIcon className="w-6 h-6" />
                    <span className="md:hidden lg:inline">About Us</span>
                </li>
                {/* Add other items similarly */}
            </ul>
        </div>
    );
};

export default Sidebar;