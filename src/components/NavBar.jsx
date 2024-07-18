import React from 'react';
import { FaBars } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';

const Navbar = ({ toggleSidebar }) => {
    return (
        <header className="sticky top-0 z-10 flex items-center justify-between p-5 shadow-md bg-gradient-to-r from-pink-500 to-blue-500">
            <FaBars className="cursor-pointer " onClick={toggleSidebar} />
            <div className="flex items-center justify-center gap-2 mr-20 text-xl font-bold">
                <h3 className='text-sm text-center text-white'>Bal: #0.0</h3>
                <RxAvatar size={30} />
            </div>
        </header>
    );
};

export default Navbar;