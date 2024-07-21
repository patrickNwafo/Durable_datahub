import React from 'react'
import First from "../assets/images/first.jpg"
import Second from "../assets/images/second.jpg"
import Third from "../assets/images/third.jpg"
import { motion, useInView } from 'framer-motion'

const TestimonialSection = () => {
    const ref1 = React.useRef(null);
    const ref2 = React.useRef(null);
    const ref3 = React.useRef(null);

    const inView1 = useInView(ref1, { once: true });
    const inView2 = useInView(ref2, { once: true });
    const inView3 = useInView(ref3, { once: true });
    return (
        <div className=' bg-slate-500 p-4'>
            <div className='container mx-auto'>
                <div className=' md:flex-row flex flex-col justify-center items-center gap-4 m-2'>
                    <motion.div
                        ref={ref1}
                        initial={{ opacity: 0, y: 100 }}
                        animate={inView1 ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1 }}
                        className='  p-2 shadow-md border text-balance rounded-sm bg-white flex flex-col items-center text-center h-96'>
                        <img src={First} alt="img" width={100} height={100} className=' w-80 ' />
                        <h2 className='p-2 text-xl font-bold'>Enjoy Awoof Discounts.</h2>
                        <p className='p-2 mb-4 text-sm'>We give you massive discounts on all our products/services when you create an account with us. bulk..</p>
                    </motion.div>
                    <motion.div
                        ref={ref2}
                        initial={{ opacity: 0, y: 100 }}
                        animate={inView2 ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 1 }}
                        className=' p-2 shadow-md border text-balance rounded-sm bg-white flex flex-col items-center text-center h-96'>
                        <img src={Second} alt="img" width={100} height={100} className=' w-80 ' />
                        <h2 className='p-2 text-xl font-bold'>Create An Affiliate Website.</h2>
                        <p className='p-2 mb-4 text-sm'>Get a VTU website at a very budget friendly rate, for more informations contact admin. partnerships..</p>
                    </motion.div>
                    <motion.div
                        ref={ref3}
                        initial={{ opacity: 0, y: 100 }}
                        animate={inView3 ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 2 }}
                        className=' p-2 shadow-md border text-balance rounded-sm bg-white flex flex-col items-center text-center h-96'>
                        <img src={Third} alt="img" width={100} height={100} className=' w-96 ' />
                        <h2 className='p-2 text-xl font-bold'>Developer's API.</h2>
                        <p className='p-2 mb-4 text-sm'>We provide well documented & easy to integrate API documention, no matter what programming language you make use of..</p>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default TestimonialSection

