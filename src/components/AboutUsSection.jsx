import React from 'react'
import { motion, useInView } from 'framer-motion'
const AboutUsSection = () => {
    const ref1 = React.useRef(null);
    const ref2 = React.useRef(null);
    const ref3 = React.useRef(null);

    const inView1 = useInView(ref1, { once: true });
    const inView2 = useInView(ref2, { once: true });
    const inView3 = useInView(ref3, { once: true });

    return (
        <div className='container mx-auto '>
            <div className='flex flex-col items-center justify-center p-2 my-8'>
                <h2 className='text-3xl font-bold'>About Durable Datahub</h2>
                <motion.p className='flex p-4 text-sm text-center'
                    ref={ref3}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}>This is a telecommunication industry playing a major role in distribution, selling affordable and most cheapest data, airtime, Dstv subscription, Gotv subscription, Startimes subscription, Convert Airtime to Cash and Electricity subscription.
                    Certain things are hard; making payments shouldn't be one of them. peacesub helps you make payments for services you enjoy right from the comfort of your home or office. The experience of total convenience,fast service delivery and easy payment is just at your fingertips..</motion.p>
            </div>
            <div className='flex flex-col gap-2 p-4 md:flex-row justify-evenly' >
                <motion.div className='inline-block p-4 text-black border rounded-lg shadow-md'
                    ref={ref1}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inView1 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1 }}>
                    <img src="https://media.istockphoto.com/id/1435014643/photo/ai-machine-learning-robot-hand-ai-artificial-intelligence-assistance-human-touching-on-big.webp?b=1&s=170667a&w=0&k=20&c=hneWKKCxBCUN0SLnewghFPW3BI_WWqri_mfXdmHfJ1Y=" alt="img" width={64} height={64} className='w-32 h-32 p-2 rounded-full'

                    />
                    <h2 className='p-2 text-xl font-bold'>We are Automated</h2>
                    <p className='p-2 mb-4 text-sm w-72'>We use cutting-edge technology to run our services. Our delivery and wallet funding is automated, any service purchased will get delivered to you instantly....</p>
                </motion.div>
                <motion.div className='inline-block p-4 text-black border rounded-lg shadow-md'
                    ref={ref2}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inView2 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 1 }}>
                    <img src="https://media.istockphoto.com/id/500907535/photo/reliability-level-conceptual-meter.webp?b=1&s=170667a&w=0&k=20&c=N7zrAaUX5BL4bhKufUa17sxnAkYa5d1YzQXYT_uf6fA=" alt="img" width={64} height={64} className='w-32 h-32 p-2 rounded-full'

                    />
                    <h2 className='p-2 text-xl font-bold'>We Are Reliable</h2>
                    <p className='p-2 mb-4 text-sm w-72'>Our platform is a fully optimized platform for reliability and dependability. You get 100% value for any transaction you carry with us...</p>
                </motion.div>
                <motion.div className='inline-block p-4 text-black border rounded-lg shadow-md'
                    ref={ref3}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inView3 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 2 }} >
                    <img src="https://media.istockphoto.com/id/1864356267/photo/artificial-intelligence-and-robotics-concept.webp?b=1&s=170667a&w=0&k=20&c=tucfQV-5ggumWNL0EFQzQ9VPCCGoOjIc0rUfPNRirCA=" alt="img" width={64} height={64} className='w-32 h-32 p-2 rounded-full'
                    />
                    <h2 className='p-2 text-xl font-bold'>24/7 Support!</h2>
                    <p className='p-2 mb-4 text-sm w-72'>Our customers are premium to us, hence satisfying them is our topmost priority. Our customer service is just a click away.....</p>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutUsSection