import React from 'react'
import { motion, useInView } from "framer-motion"

const Services = () => {
    const ref1 = React.useRef(null);
    const ref2 = React.useRef(null);
    const ref3 = React.useRef(null);

    const inView1 = useInView(ref1, { once: true });
    const inView2 = useInView(ref2, { once: true });
    const inView3 = useInView(ref3, { once: true });

    return (
        <div className='container mx-auto'>
            <div className='flex flex-col items-center justify-center p-2 my-8'>
                <h2 className='text-3xl font-bold'>Service We Provide</h2>
                <motion.p className='flex p-4 text-sm text-center'
                    ref={ref3}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}>We Provide Awesome Services We use cutting-edge technology to run our services. Our data delivery and wallet funding is automated, airtime top-up and data purchase are automated and get delivered to you almost instantly. We offer instant recharge of Airtime, Databundle, CableTV (DStv, GOtv & Startimes), Electricity Bill Payment and Airtime to cash...
                </motion.p>
            </div>
            <div className="grid md:grid-cols-5 place-items-center">
                <div className='flex flex-col items-center justify-center text-center text-black'>
                    <img
                        src="https://images.unsplash.com/photo-1674027326476-3ea3cbf7b9be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNlYXJjaCUyMGVuZ2luZXxlbnwwfHwwfHx8MA%3D%3D" alt="img"
                        width={64} height={64}
                        className='w-32 h-32 p-2 rounded-full'
                    />
                    <h2 className='p-2 text-xl font-bold'>Airtime TopUp</h2>
                    <p className='w-48 mb-4 '>Start enjoying this very low rate dataplan for your internet browsing Databundle</p>
                </div>
                <div className='flex flex-col items-center justify-center text-center text-black'>
                    <img
                        src="https://media.istockphoto.com/id/1051616786/photo/digital-marketing-businessman-working-with-laptop-computer-tablet-and-smart-phone-modern.webp?b=1&s=170667a&w=0&k=20&c=zN5VNOPaPTjspX5dG8sY7zCyhXoCmS978wXf8mMgBpQ=" alt="img"
                        width={64} height={64}
                        className='w-32 h-32 p-2 rounded-full'
                    />
                    <h2 className='p-2 text-xl font-bold'>Buy Data</h2>
                    <p className='w-48 mb-4 '>instantly Activate Cable Subscription with favourable discount compare to others.</p>
                </div>
                <div className='flex flex-col items-center justify-center text-center text-black'>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1682309524785-cf2288f7b544?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3Vic2NyaXB0aW9ufGVufDB8fDB8fHww" alt="img"
                        width={64} height={64}
                        className='w-32 h-32 p-2 rounded-full'
                    />
                    <h2 className='p-2 text-xl font-bold'>Cable Subscription</h2>
                    <p className='w-48 mb-4 '>Cover your airtime easily to cash here at peacesub with less Charges</p>
                </div>
                <div className='flex flex-col items-center justify-center text-center text-black'>
                    <img
                        src="https://media.istockphoto.com/id/1126636063/photo/transfer-of-money-from-hand-to-hand.webp?b=1&s=170667a&w=0&k=20&c=diPjNBLP2EReqc6d85LUu2HBXNRCvoasjSl_3-0duXA=" alt="img"
                        width={64} height={64}
                        className='w-32 h-32 p-2 rounded-full'
                    />
                    <h2 className='p-2 text-xl font-bold'>Air time to cash</h2>
                    <p className='w-48 mb-4 '>Because we understand your needs, we have made bill and utilities payment more convenient.</p>
                </div>
                <div className='flex flex-col items-center justify-center text-center text-black'>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1675242132223-9aa7268fbbc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXRpbGl0eSUyMHBheW1lbnR8ZW58MHx8MHx8fDA%3D" alt="img"
                        width={64} height={64}
                        className='w-32 h-32 p-2 rounded-full'
                    />
                    <h2 className='p-2 text-xl font-bold'>Utility Bill Payment</h2>
                    <p className='w-48 mb-4 '>Making an Online recharge has become very easy and safe on peacesub.</p>
                </div>

            </div>
        </div>
    )
}

export default Services;