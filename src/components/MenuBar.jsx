import React from 'react'
import { FaGooglePlay, FaPlus } from 'react-icons/fa'

const MenuBar = () => {
    return (
        <div className='p-5 mt-10'>
            <div className='flex items-center gap-4'>
                <div className='p-2 text-sm border shadow-sm cursor-pointer'>Wema Bank</div>
                <div className='text-sm text-blue-700 cursor-pointer'>Rehoboth Microfinance Bank</div>
            </div>
            <div className='h-[450px] md:h-[320px] w-full rounded-md bg-blue-900 text-white flex flex-col gap-2'>
                <div className='p-2 text-black '>
                    <div className='w-24 p-2 m-2 text-center bg-white shadow-md h-14 '>Wema</div>
                </div>
                <div className='p-2 m-2'>
                    <span className='text-2xl font-bold'> Account Number: 9821339548</span>
                </div>
                <div className='flex flex-col justify-between p-2 m-2 md:flex-row'>
                    <div className='flex flex-col'>
                        <span className='font-bold text-md'>Account Name: PEACESUB.COM.NG - cutedeji</span>
                        <span className='font-semibold text-md'>Bank Name: Wema bank</span>
                    </div>

                    <div>1.5% <br /><span className='text-sm font-semibold'>Charge</span></div>
                </div>
                <div className='flex flex-col p-2 m-2 -my-5'>
                    <span>AUTOMATED BANK TRANSFER</span>
                    <span>Make transfer to this account to fund your wallet</span>
                </div>
            </div>
            <div className='p-4 '>
                <h2 className='font-bold text-md md:text-3xl'>To update your virtual accounts, as required by the CBN <span className='text-red-500 underline cursor-pointer hover:text-blue-600'>click here</span></h2>
            </div>
            <div className='flex items-center justify-center h-20 p-4 bg-white shadow-lg'>
                <div className='text-sm font-bold'> MTN issues resolved All mtn services enabled. 07085978185 Message this number on WhatsApp for all your complains for those who didn't have the number before.</div>
            </div>
            <div className='flex flex-col items-center gap-10 md:flex-row'>
                <div className=' h-[400px] md:h-[350px] bg-blue-900 text-white flex flex-col w-full md:w-[850px] my-10 p-4 rounded-md'>
                    <div className='flex justify-end '>
                        <div className='flex flex-row items-center w-32 gap-0.5 p-2 my-5 transition delay-150 border cursor-pointer hover:bg-red-900 rounded-md'>
                            <FaPlus />
                            <button className='text-sm font-bold'>
                                Fund Wallet
                            </button>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold'>Welcome Cutedeji</h1>
                        <h3 className='text-xl uppercase'>smart earner</h3>
                    </div>
                    <div className='my-5'>
                        <h2 className='text-xl font-bold'># 0.00</h2>
                        <h2 className='pt-2 uppercase'>wallet balance</h2>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className=''>
                            <button className='p-1 font-semibold text-black rounded-md bg-slate-100'>Wallet Ballance</button>
                            <button className='mx-2'>Bonus</button>
                        </div>
                        <div className='flex flex-row items-center w-32 gap-0.5 p-2 my-5 transition delay-150 border cursor-pointer hover:translate-y-1 bg-black text-white rounded-md shadow-md shadow-red-700/100'>
                            <FaGooglePlay />
                            <button className='text-sm font-bold'>
                                Google play
                            </button>
                        </div>
                    </div>
                </div>
                <div className=' h-[400px] md:h-[350px] bg-slate-800 rounded-md text-white flex flex-col w-full md:w-[400px] p-4 -my-8'>
                    <div></div>
                </div>
            </div>

        </div>
    )
}

export default MenuBar