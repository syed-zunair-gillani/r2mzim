"use client"
import React from 'react';
import { FaCarSide } from "react-icons/fa";
import { motion } from 'framer-motion';

function Features() {
    return (
        <>
            <section className='container mx-auto px-4 py-10'>
                <motion.div 
                    className='text-center'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className='text-[24px] font-bold text-[#2a2a2a]'>
                        <span className='font-[300]'>OUR</span> FEATURES
                    </h3>
                    <p className='text-[#777777] font-[400] py-3'>
                        Buzz analytics business-to-consumer partner network ramen social media
                    </p>
                </motion.div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6'>
                    {[
                        "DISTRIBUTION SERVICES", 
                        "MERCHANDISING EXPERTISE", 
                        "WAREHOUSING AND STORAGE"
                    ].map((title, index) => (
                        <motion.div 
                            key={index} 
                            className='flex gap-6'
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.3, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <FaCarSide className='text-[40px] md:text-[50px] lg:text-[50px] '/>
                            </div>
                            <div>
                                <h2 className='text-[20px] font-bold pt-2'>{title}</h2>
                                <div className='border-2 w-10 border-[#fcb900] mt-2 mb-3'></div>
                                <p className='text-[14px] font-[300] leading-[25px]'>
                                    {index === 0 && "Route to Market is Zimbabwe’s most experienced distribution company for all your confectionery, groceries, beverages, perishables and cosmetic ranges."}
                                    {index === 1 && "With well-trained and professional staff across the country, Route to Market ensures your product is in stock and on shelf when it matters most."}
                                    {index === 2 && "Our three warehouses are conveniently located in the two biggest cities in Zimbabwe, Harare and Bulawayo, where we have a total of 11,000sq/m (dry goods) and 1200sq/m (refrigerated) in storage space."}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Features;
