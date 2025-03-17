"use client"
import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, marginTop: 40, transition: { duration: 0.8 } },
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
        className="text-center max-w-[800px] mt-10 mx-auto my-16"
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

      {/* Image & Description Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-[800px] flex flex-col bg-gray-50 lg:flex-row-reverse mx-auto gap-10 mb-10 px-3"
      >
        <figure className="flex justify-center flex-1">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/images/Merchandising-R2M-Zimbabwe.jpg"
            alt=""
            width={800}
            height={400}
            className="object-cover object-right"
          />
        </figure>
        <motion.div variants={fadeIn} className="text-lg flex-1 p-5">
          <p>
            Warpack and Dpack are market leaders in the sales and merchandising
            industry in Zimbabwe, providing you with hassle-free nationwide
            coverage 365 days a year. Our main objective is to help you increase
            your presence in the marketplace and drive sales to grow your
            business.
          </p>
          <h4 className="font-semibold my-4">Services include:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>National-based account management</li>
            <li>Assist with product launches</li>
            <li>High-speed delivery of products to the shelf</li>
            <li>In-store sales and merchandising</li>
            <li>Display activity</li>
            <li>Marketing assistance</li>
            <li>Market intelligence</li>
            <li>Planogram execution</li>
          </ul>
        </motion.div>
      </motion.section>

      {/* Another Image & Description Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-[800px] flex flex-col bg-gray-50 lg:flex-row mx-auto gap-10 mb-20 px-3"
      >
        <figure className="flex justify-center flex-1">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/images/Merchandising-R2M.jpg"
            alt=""
            width={800}
            height={400}
            className="object-cover object-left"
          />
        </figure>
        <motion.div variants={fadeIn} className="text-lg flex-1 p-5">
          <p>
            Whether you’re looking for short-term tactical merchandising support
            or wish to develop a long-term relationship, Warpack and Dpack will
            work with you to find a prompt, efficient and cost-effective
            solution to suit your requirements.
          </p>
          <p className="mt-3">
            Our strength lies in our numbers, with over 450 fully trained and
            experienced merchandising staff across all major towns and cities
            across Zimbabwe. Our sales and merchandising team services all
            formal retail and wholesale outlets in Zimbabwe, including SPAR,
            OK, TM PnP Zimbabwe, Greens, N Richards, Metro Peech and Browne
            Wholesalers, Choppies, and many other retailers.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-6 grid !grid-cols-2 flex-wrap container mx-auto"
          >
            {["https://cdn.tuk.dev/assets/adidas-dark.png", "https://cdn.tuk.dev/assets/channel-dark.png"].map(
              (src, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex justify-center border border-gray-200 py-10 items-center"
                >
                  <img className="focus:outline-none" src={src} alt="Brand Logo" role="img" />
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default MerchandisingTemplate;
