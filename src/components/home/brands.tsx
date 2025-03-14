"use client"
import React from "react";
import { motion } from "framer-motion";

const Brands = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[24px] font-bold text-center text-[#2a2a2a]">
            <span className='font-[300]'>Partnerships with</span> Coveted Brands
          </h1>
          <p className="text-[#777777] font-[400] text-center py-3">
            Our success has come from being committed to the property and
            investing in the development of the product to maximize sales. At
            the same time and maintaining the integrity.
          </p>
        </motion.div>
        
        <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 flex flex-wrap">
          {["https://cdn.tuk.dev/assets/adidas-dark.png", "https://cdn.tuk.dev/assets/channel-dark.png", "https://cdn.tuk.dev/assets/nike-dark.png", "https://cdn.tuk.dev/assets/toyota-dark.png", "https://cdn.tuk.dev/assets/gs1-dark.png", "https://cdn.tuk.dev/assets/berry-dark.png", "https://cdn.tuk.dev/assets/min-dark.png", "https://cdn.tuk.dev/assets/honda-dark.png"].map((src, index) => (
            <motion.div 
              key={index} 
              className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center border-gray-200 pb-16 items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img className="focus:outline-none" src={src} alt="Brand Logo" role="img" />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Brands;
