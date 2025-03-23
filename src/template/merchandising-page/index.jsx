"use client"
import React from "react";
import { motion } from "framer-motion";
import TransportTabs from "@/components/TransportTabs"

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const MerchandisingTemplate = () => {
  return (
    <>
      {/* Heading Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-center max-w-[800px] mt-10 mb-5 mx-auto"
      >
        <h3 className="text-[24px] font-bold text-[#2a2a2a]">
          <span className="font-[300]">SALES AND </span>MERCHANDISING
        </h3>
        <div className="flex justify-center items-center relative mt-4">
            <div className="h-[1px] bg-gray-200 w-full max-w-60" />
            <div className="h-1 w-12 bg-yellow-400 absolute top-[-1px]" />
          </div>
        <p className="text-[#777777] font-[400] py-3">
          The bottom line for a successful retail business is that your brands
          are in stock, on shelf and sold correctly and confidently by in-store
          staff. Route to Market has two divisions - Warpack and Dpack - that
          can achieve this for your products.
        </p>
      </motion.div>

      <TransportTabs/>
    </>
  );
};

export default MerchandisingTemplate;
