"use client"
import React from "react";
import { motion } from "framer-motion";
import Brands from "@/components/brands";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, marginTop:40, transition: { duration: 0.6 } },
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

const OurPrincipalsTemplate = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-[800px] mt-10 mx-auto my-16"
      >
        <motion.h3 className="text-[24px] font-bold text-[#2a2a2a]" >
          <span className="font-[300]">OUR</span> PRINCIPALS
        </motion.h3>
        <div className="flex justify-center items-center relative mt-4">
            <div className="h-[1px] bg-gray-200 w-full max-w-60" />
            <div className="h-1 w-12 bg-yellow-400 absolute top-[-1px]" />
          </div>
        <motion.p className="text-[#777777] font-[400] py-3">
          Route to Market is very pleased to be in partnership with Zimbabwe's
          most loved and leading FMCG and pharmaceutical brands. Some of our
          valued clients include:
        </motion.p>
      </motion.div>

      <Brands/>
    </>
  );
};

export default OurPrincipalsTemplate;
