"use client"
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2 
    } 
  },
};

const Brands = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="xl:pb-16 lg:pb-16 md:pb-16 sm:pb-16 mb-8 flex flex-wrap container mx-auto px-3"
      >
        {[
          { src: "https://cdn.tuk.dev/assets/adidas-dark.png", alt: "Adidas" },
          { src: "https://cdn.tuk.dev/assets/channel-dark.png", alt: "Chanel" },
          { src: "https://cdn.tuk.dev/assets/nike-dark.png", alt: "Nike" },
          { src: "https://cdn.tuk.dev/assets/toyota-dark.png", alt: "Toyota" },
          { src: "https://cdn.tuk.dev/assets/gs1-dark.png", alt: "GS1" },
          { src: "https://cdn.tuk.dev/assets/berry-dark.png", alt: "BlackBerry" },
          { src: "https://cdn.tuk.dev/assets/min-dark.png", alt: "Mini" },
          { src: "https://cdn.tuk.dev/assets/honda-dark.png", alt: "Honda" },
        ].map((brand, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            style={{ paddingTop: '3rem' }}
            className={`w-6/12 !pt-10 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center items-center ${
              index < 4 ? "xl:border-b lg:border-b border-gray-200" : ""
            } ${
              index % 4 !== 3 ? "xl:border-r lg:border-r border-gray-200" : ""
            } xl:pb-10 pb-16`}
          >
            <img className="focus:outline-none" src={brand.src} alt={brand.alt} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Brands;
