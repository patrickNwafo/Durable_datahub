import React, { useEffect, useState } from 'react';
import { FaBars, FaCode, FaHome, FaLightbulb, FaPhoneAlt, FaQrcode, FaUser, FaWallet, FaWifi } from 'react-icons/fa';
import NavBar from '../components/NavBar';
import { GrTransaction } from 'react-icons/gr';
import { BsFillWalletFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { RiLogoutBoxLine, RiPriceTagFill } from 'react-icons/ri';
import MenuBar from '../components/MenuBar';

const Layout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleSidebar = () => {
        if (window.innerWidth < 768) {
            setIsMobile(!isMobile);
        } else {
            setIsCollapsed(!isCollapsed);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobile(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className="flex min-h-screen">
            <aside className={`bg-blue-500 text-white flex flex-col transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16 hover:w-64' : 'w-64'} ${isMobile ? 'block' : 'hidden'} md:block md:sticky md:top-0`}>
                <div className={`p-4 font-bold text-xl flex items-center justify-between ${isCollapsed ? 'justify-center' : ''}`}>
                    <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Welcome</span>
                    <FaBars className="cursor-pointer md:hidden" onClick={toggleSidebar} />
                </div>
                <nav className="flex-1">
                    <ul>
                        <li className="flex items-center p-4 hover:bg-blue-700">
                            <FaHome className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Dashboard</span>
                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <FaUser className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Account</span>
                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <FaWallet className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Fund Wallet</span>
                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <FaWifi className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Buy Data</span>

                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <FaWifi className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Buy Bulk SME Data</span>

                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <FaWifi className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden ' : 'block'}`}>Buy Glo CG Data</span>

                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <FaWifi className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Buy Bulk Airtel CG Data</span>

                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <FaPhoneAlt className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Buy Airtime</span>

                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <FaLightbulb className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Bills</span>

                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <GrTransaction className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Transactions</span>

                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <GrTransaction className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Data Transactions</span>

                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <GrTransaction className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Airtime Transactions</span>

                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <GrTransaction className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Data Wallet Summary</span>

                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <BsFillWalletFill className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Wallet Summary</span>

                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <FaLightbulb className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Others</span>

                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <IoMdSettings className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Setting</span>

                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <RiPriceTagFill className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Pricing</span>

                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <FaQrcode className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>FAQS</span>

                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <FaCode className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Developer's API</span>

                        </li>
                        <li className="flex items-center p-4 border hover:bg-blue-700">
                            <RiLogoutBoxLine className="inline mr-2" />
                            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Log Out</span>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className={`flex-1  bg-white transition-all duration-300 ease-in-out ${isCollapsed ? 'ml-0' : 'ml-0'} ${isMobile ? 'ml-0' : ''}`}>

                <NavBar toggleSidebar={toggleSidebar} />
                <MenuBar />
            </main>
        </div>
    );
};

export default Layout;