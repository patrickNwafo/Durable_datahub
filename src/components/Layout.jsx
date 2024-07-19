import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>


            <div className="flex">
                <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
                <div className="flex flex-col flex-1 min-h-screen">
                    <Navbar toggleSidebar={toggleSidebar} />
                    <main className="flex-1 p-4">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
};

export default Layout;