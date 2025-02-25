import React from 'react';
import { FaCarSide } from "react-icons/fa";

function Features() {
    return (
        <>
            <section className='container mx-auto px-4 py-10'>
                <div className='text-center'>
                    <h3 className='text-[24px] font-bold text-[#2a2a2a]'>
                        <span className='font-[300]'>OUR</span> FEATURES
                    </h3>
                    <p className='text-[#777777] font-[400] text-[14px] py-3'>
                        Buzz analytics business-to-consumer partner network ramen social media
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6'>
                    <div className='flex gap-6 '>
                    <div>
                        <FaCarSide className='text-[40px] md:text-[50px] lg:text-[50px] '/>
                        </div>
                        <div>
                            <h2 className='text-[20px] font-bold pt-2'>DISTRIBUTION SERVICES</h2>
                            <div className='border-2 w-10 border-[#fcb900] mt-2 mb-3'></div>
                            <p className='text-[14px] font-[300] leading-[25px]'>
                                Route to Market is Zimbabwe’s most experienced distribution company for all your confectionery, groceries, beverages, perishables and cosmetic ranges.
                            </p>
                    </div>
                    </div>
                    <div className='flex gap-6'>
                    <div>
                        <FaCarSide className='text-[40px] md:text-[50px] lg:text-[50px] '/>
                        </div>
                        <div>
                            <h2 className='text-[20px] font-bold pt-2'>MERCHANDISING EXPERTISE</h2>
                            <div className='border-2 w-10 border-[#fcb900] mt-2 mb-3'></div>
                            <p className='text-[14px] font-[300] leading-[25px]'>
                            With well-trained and professional staff across the country, Route to Market ensures your product is in stock and on shelf when it matters most. 
                            </p>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div>
                        <FaCarSide className='text-[40px] md:text-[50px] lg:text-[50px] '/>
                        </div>
                        <div>
                            <h2 className='text-[20px] font-bold pt-2'>WAREHOUSING AND STORAGE</h2>
                            <div className='border-2 w-10 border-[#fcb900] mt-2 mb-3'></div>
                            <p className='text-[14px] font-[300] leading-[25px]'>
                            Our three warehouses are conveniently located in the two biggest cities in Zimbabwe, Harare and Bulawayo, where we have a total of 11,000sq/m (dry goods) and 1200sq/m (refrigerated) in storage space.                              </p>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
}

export default Features;
