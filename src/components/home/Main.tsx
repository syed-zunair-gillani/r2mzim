"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Main() {
  return (
    <>
      <div
        className="relative text-white bg-cover bg-fixed bg-center h-[540px]"
        style={{ backgroundImage: 'url(/images/slider1.jpg)' }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text */}
        <div className="container mx-auto px-4 flex flex-col justify-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold max-w-[550px]"
            style={{
              background:
                '-webkit-linear-gradient(left, #9357cc 0%, #2989d8 50%, #2cc99d 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Deliver the Goods on time.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="z-10 font-[300] text-[26px] relative py-6 pb-10 w-72"
          >
            Over 100+ acre interior warehouse space
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link 
              href="" 
              className="relative border px-6 py-4 text-[16px] hover:bg-white hover:text-black font-[400]"
            >
              View Solutions
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Main;
