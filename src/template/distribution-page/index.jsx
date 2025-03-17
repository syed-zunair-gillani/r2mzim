"use client"
import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, marginTop:40, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const DistributionTemplate = () => {
  return (
    <>
      {/* Heading Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-center max-w-[800px] mt-10 mx-auto my-16"
      >
        <h3 className="text-[24px] font-bold text-[#2a2a2a]">
          <span className="font-[300]">Distribu</span>tion
        </h3>
        <div className="flex justify-center items-center relative mt-4">
            <div className="h-[1px] bg-gray-200 w-full max-w-60" />
            <div className="h-1 w-12 bg-yellow-400 absolute top-[-1px]" />
          </div>
        <p className="text-[#777777] font-[400] py-3">
          Route to Market has two distribution brands - Vaitive Trading and Exclusive Brands.
        </p>
      </motion.div>

      {/* Image & Description Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-[800px] mx-auto px-3"
      >
        <figure className="flex justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/images/Distribution-R2M.jpg"
            alt=""
            width={800}
            height={400}
          />
        </figure>
        <p className="mt-4 text-lg mb-20">
          Route to Market has two distribution brands - Vaitive Distribution and Exclusive Brands.
          They provide countrywide distribution with a dedicated fleet of 8 trucks as well as an array of
          3rd-party transport contracts. Route to Market has a combined staff complement of 60 throughout
          the country. Both Vaitive Distribution and Exclusive Brands have lead times of 24 hours for deliveries
          in Harare and Bulawayo and 72 hours for surrounding towns.
          <br />
          <br />
          Route to Market delivers to all major formal retail and wholesale brands across the country - more than 400 outlets in total.
        </p>
      </motion.section>

      {/* Brand Logos Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="xl:pb-16 lg:pb-16 md:pb-16 sm:pb-16 flex flex-wrap container mx-auto px-3"
      >
        {[
          "https://cdn.tuk.dev/assets/adidas-dark.png",
          "https://cdn.tuk.dev/assets/channel-dark.png",
          "https://cdn.tuk.dev/assets/nike-dark.png",
          "https://cdn.tuk.dev/assets/toyota-dark.png",
          "https://cdn.tuk.dev/assets/gs1-dark.png",
          "https://cdn.tuk.dev/assets/berry-dark.png",
          "https://cdn.tuk.dev/assets/min-dark.png",
          "https://cdn.tuk.dev/assets/honda-dark.png",
        ].map((src, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center border-gray-200 pb-16 items-center"
          >
            <img className="focus:outline-none" src={src} alt="Brand Logo" role="img" />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default DistributionTemplate;
