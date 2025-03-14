"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageFade = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const WarehousingTemplate = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-[800px] mx-auto my-16"
      >
        <motion.h3 className="text-[24px] font-bold text-[#2a2a2a]" variants={fadeInUp}>
          <span className="font-[300]">WAR</span>EHOUSING
        </motion.h3>
        <motion.p className="text-[#777777] font-[400] py-3" variants={fadeInUp}>
          Route to Market has two warehouses totaling 12,900sq/m of storage space.
        </motion.p>
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-[800px] mx-auto px-3"
      >
        <motion.figure variants={imageFade}>
          <Image
            src="/images/Loading-Route-to-Market-1.jpg"
            alt="Warehouse Image"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.figure>

        <motion.p className="mt-4 text-lg mb-16" variants={fadeInUp}>
          Route to Market has two dry goods warehouses totaling 11,000sq/m of floor space with the
          recent addition of one cold chain warehouse totaling 1,900sq/m. Our head office as well as
          our cold storage facility warehouse are based in the capital city of Harare. This
          warehouse distributes to all towns north of central Zimbabwe. Our second warehouse is
          based in Bulawayo which is the second largest city in Zimbabwe, this warehouse distributes
          to all towns south of central Zimbabwe.
          <br />
          <br />
          All our warehouses use racking to maximize storage area. There is a batch tracking
          process for stock rotation. Numerous forklifts are used in the warehouse for efficient
          packing. Dedicated receiving and dispatch areas ensure smooth movement of stocks in and
          out of the warehouses.
          <br />
          <br />
          Route to Market offers an approved MCAZ pharmaceutical stock area. Hazardous stocks are
          cordoned off into fenced areas to avoid any contamination of stocks. Our warehouses are
          monitored 24/7 with cameras, and there are stringent entry and exit policies in place to
          ensure the safety of your stock.
        </motion.p>
      </motion.section>
    </>
  );
};

export default WarehousingTemplate;
