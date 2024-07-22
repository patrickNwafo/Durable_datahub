import React from 'react'
import Logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom'
import { PiPhone } from 'react-icons/pi'
import { MdMail } from 'react-icons/md'
import { HiHome } from 'react-icons/hi'
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
    return (
        <div className='container mx-auto mb-4'>
            <div className='flex flex-col md:flex-row justify-evenly items-center md:items-start p-4 Parent'>
                {/* Logo and introductory text */}
                <div className='flex flex-col items-center md:items-start md:w-1/4 mb-4 md:mb-0'>
                    <ScrollLink to="home" smooth={true} duration={500}>
                        <img src={Logo} alt='Logo' width={62} height={62} className="cursor-pointer" />
                    </ScrollLink>
                    <p className='text-sm p-2 text-center md:text-left'>
                        Here at DurabledataHub, we offer you the most affordable and cheapest data, airtime, Dstv, Gotv, and Startimes subscriptions.
                    </p>
                </div>

                {/* Services */}
                <div className='md:w-1/4 mb-4 md:mb-0'>
                    <h2 className='font-bold text-xl pb-2 text-center md:text-left'>SERVICES</h2>
                    <ul className='text-center md:text-left space-y-2'>
                        <li className='duration-500 hover:text-blue-400 cursor-pointer'>Buy Data</li>
                        <li className='duration-500 hover:text-blue-400 cursor-pointer'>Airtime TopUp</li>
                        <li className='duration-500 hover:text-blue-400 cursor-pointer'>Cable Subscription</li>
                        <li className='duration-500 hover:text-blue-400 cursor-pointer'>Bill Payment</li>
                        <li className='duration-500 hover:text-blue-400 cursor-pointer'>Bulk Sms</li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className='md:w-1/4 mb-4 md:mb-0'>
                    <h2 className='font-bold text-xl pb-2 text-center md:text-left'>CONTACT US</h2>
                    <ul className='p-3 text-center md:text-left space-y-2'>
                        <li className='flex items-center justify-center md:justify-start font-semibold mb-2'>
                            <PiPhone size={30} />
                            <span className='ml-2'>Phone:</span>
                        </li>
                        <li className='mb-2'>0703304303</li>
                        <li className='flex items-center justify-center md:justify-start font-semibold mb-2'>
                            <MdMail size={30} />
                            <span className='ml-2'>EMAIL:</span>
                        </li>
                        <li className='mb-2'>peacesub@gmail.com</li>
                        <li className='flex items-center justify-center md:justify-start font-semibold'>
                            <HiHome size={30} />
                            <span className='ml-2'>Address:</span>
                        </li>
                    </ul>
                </div>

                {/* About Peacesub */}
                <div className='md:w-1/4'>
                    <h2 className='font-bold text-xl pb-2 text-center md:text-left'>ABOUT DurableDataHub</h2>
                    <p className='text-sm text-center md:text-left'>
                        We offer fast and reliable data bundles for all networks, cable TV subscriptions, VTU for all networks, and PHCN prepaid meter subscriptions. We are the number one trusted vendor. Patronize us now and you won't regret it.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Footer