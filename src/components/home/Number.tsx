import React from 'react';
import { FaCarSide } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link';
function Number() {
    return (
        <div className='bg-[#f7f7f7] w-full h-auto py-10'>
            <section className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    {/* Item 1 */}
                    <div className='flex gap-4'>
                        <div>
                            <FaCarSide className='text-[40px] md:text-[50px] lg:text-[50px] mt-4' />
                        </div>
                        <div>
                            <h4 className='text-xl md:text-2xl font-[700] text-[#1874c1]'>
                                11000m2
                            </h4>
                            <div className='border-2 w-10 border-[#fcb900] my-3'></div>
                            <h3 className='text-[16px] md:text-[17px] font-[700] text-[#2a2a2a]'>
                                WAREHOUSE CAPACITY
                            </h3>
                            <p className='text-[12px] md:text-[14px] text-[#777777] py-3 font-[400] leading-[24px]'>
                                Route to Market has two dry goods warehouses totalling 11,000sq/m of floor space available for safe and secure storage with a third cold storage facility totalling 1,900sq/m.
                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className='flex gap-4  '>
                        <div>
                            <FaCarSide className=' text-[40px] md:text-[50px] lg:text-[50px] mt-4' />
                        </div>
                        <div>
                            <h4 className='text-xl md:text-2xl font-[700] text-[#1874c1]'>
                            +400
                            </h4>
                            <div className='border-2 w-10 border-[#fcb900] my-3'></div>
                            <h3 className='text-[16px] md:text-[17px] font-[700] text-[#2a2a2a]'>
                            STORES DELIVERED TO
                            </h3>
                            <p className='text-[12px] md:text-[14px] text-[#777777] py-3 font-[400] leading-[24px]'>
                            Route to Market has established relationships with all major retail outlets across Zimbabwe, including chains and independents.                             </p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className='flex gap-4 mx-auto'>
                        <div>
                            <FaCarSide className='text-[40px] md:text-[50px] lg:text-[50px] mt-4' />
                        </div>
                        <div>
                            <h4 className='text-xl md:text-2xl font-[700] text-[#1874c1]'>
                                +895K
                            </h4>
                            <div className='border-2 w-10 border-[#fcb900] my-3'></div>
                            <h3 className='text-[16px] md:text-[17px] font-[700] text-[#2a2a2a]'>
                            KILOMETERS PER YEAR
                            </h3>
                            <p className='text-[12px] md:text-[14px] text-[#777777] py-3 font-[400] leading-[24px]'>
                            Route to Markets distribution team boasts a 24 hour delivery time within Harare, and 72 hours within the rest of Zimbabwe.                            </p>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className='flex gap-4 mx-auto'>
                        <div>
                            <FaCarSide className='text-[40px] md:text-[50px] lg:text-[50px] mt-4' />
                        </div>
                        <div>
                            <h4 className='text-xl md:text-2xl font-[700] text-[#1874c1]'>
                                500
                            </h4>
                            <div className='border-2 w-10 border-[#fcb900] my-3'></div>
                            <h3 className='text-[16px] md:text-[17px] font-[700] text-[#2a2a2a]'>
                            STAFF COUNTRYWIDE
                            </h3>
                            <p className='text-[12px] md:text-[14px] text-[#777777] py-3 font-[400] leading-[24px]'>
                            Route to Market has experienced, well trained staff in every corner of Zimbabwe to supply the retail services your need
                            </p>
                        </div>
                    </div>
                </div>
                {/* /// */}
                <div className='text-center py-14'>
                    <h2 className='text-[20px] font-[700] py-3'>THE ULTIMATE TRANSPORT</h2>
                    <p className='text-[20px] text-[#777777]'>We deliver the goods to the most complicated places on earth</p>
                    <Image
                        src="/images/icon-car.webp"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className='w-40 mx-auto py-6 pb-10'
                    />
                    <Link href='/' className='border px-8 py-4 bg-[#0081c2] text-[16px] text-white font-[400] '>
                        Book a Transport Now 
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Number;
