import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiClock2 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <div className='bg-[#2a2a2a] py-14'>
            <section className='container mx-auto px-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    <div>
                        <Image
                            src="/images/logo2.png"
                            width={500}
                            height={500}
                            alt="Route to Market Logo"
                            className='mx-auto mb-4'
                        />
                        <p className='py-4 text-white leading-[28px] font-[300] text-sm sm:text-base'>
                            Route to Market is Zimbabwes most experienced distribution and merchandising company for all your confectionery, groceries, beverages, and cosmetic ranges. We ensure your products are delivered on time and are on the shelf, in prime space, ready for the customer to purchase.
                        </p>
                    </div>
                    <div className='mx-auto text-white'>
                        <h3 className='text-[18px] font-[700] pb-4'>QUICK DOWNLOADS</h3>
                        <div className='grid pb-8'>
                            <div className='py-4'>
                                <Link href='' className='hover:underline'>COMPANY PROFILE</Link>
                            </div>
                            <div>
                                <Link href='' className='hover:underline'>VAITIVE TRADING ITF</Link>
                            </div>
                            <div className='py-4'>
                                <Link href='' className='hover:underline'>EXCLUSIVE BRANDS ITF</Link>
                            </div>
                            <div>
                                <Link href='' className='hover:underline'>STEPOVICH ITF</Link>
                            </div>
                            <div className='py-4'>
                                <Link href='' className='hover:underline'>WARPACK ITF</Link>
                            </div>
                        </div>
                        <Link href='' className='border px-8 py-3 inline-block hover:bg-[#0081c2]'>
                            SUPPLIERS INFO UPDATE
                        </Link>
                    </div>
                    <div className='mx-auto text-white'>
                        <h3 className='text-[18px] font-[700] pb-4'>CONTACT INFO</h3>
                        <div className='py-4 flex gap-4 items-center'>
                            <CiClock2 className='text-2xl' />
                            <p>Monday - Friday 09.00 - 18.00</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <CiMail className='text-2xl' />
                            <p>info@r2mzim.com</p>
                        </div>
                        <div className='py-4 flex gap-4 items-center'>
                            <MdOutlinePhoneInTalk className='text-2xl' />
                            <p>Tel : +263 (242) 446 431/2</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <IoLocationSharp className='text-2xl' />
                            <p>28 Anthony Avenue, Msasa, Harare, Zimbabwe</p>
                        </div>
                        <div className='py-8'>
                            <h3 className='text-[18px] font-[700] pb-4'>WE ARE SOCIAL</h3>
                            <div className='flex gap-4 items-center'>
                                <Link href='/facebook' className='bg-slate-700 px-4 py-4 rounded-full'>
                                    <FaFacebookF className='text-2xl text-white' />
                                </Link>
                                <Link href='/linkedin' className='bg-slate-700 px-4 py-4 rounded-full'>
                                    <FaLinkedinIn className='text-2xl text-white' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;
