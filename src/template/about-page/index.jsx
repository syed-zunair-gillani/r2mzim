"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Reviews from "@/components/reviews";

const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0,marginTop: 40, transition: { duration: 0.8 } },
};

const imageZoom = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const AboutTemplate = () => {
  return (
    <>
      {/* Heading Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-center max-w-[800px] mx-auto mt-10 "
      >
        <h3 className="text-[24px] font-bold text-[#2a2a2a]">
          <span className="font-[300]">ABOUT </span>US
        </h3>
        <div className="flex justify-center items-center relative mt-4">
            <div className="h-[1px] bg-gray-200 w-full max-w-60" />
            <div className="h-1 w-12 bg-yellow-400 absolute top-[-1px]" />
          </div>
        <p className="text-[#777777] font-[400] py-3">
          Route to Market provides a fully resourced, end-to-end retail solution
          of world-class distribution and merchandising throughout Zimbabwe.
        </p>
      </motion.div>

      {/* Image + Content Section */}
      <section className="max-w-[1200px] mx-auto mt-10 items-start grid md:grid-cols-2 gap-10 px-3">
        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageZoom}
          className="border flex justify-center py-4"
        >
          <Image src="/images/about.jpg" alt="" width={600} height={300} className="h-auto"/>
        </motion.figure>

        {/* Content Animation */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="-mt-2 text-lg leading-7"
        >
          Route to Market aspires to be the preferred choice for manufacturers
          in Zimbabwe and the region. Route to Market encompasses some of
          Zimbabwe’s most experienced distribution and merchandising companies
          for all your confectionery, groceries, beverages, perishables and
          cosmetic ranges. We are committed to a culture of integrity and
          professionalism whilst managing a motivated, effective and efficient
          team.
          <br />
          <br />
          In 1995, the first of the Route to Market's brands, Warpack, opened
          its doors on 1st of September by John de Wet, offering sales and
          merchandising to Zimbabwean brands. In 2002, Vaitive Distribution was
          launched to provide distribution to Warpack's principal brands.
          <br />
          <br />
          With our personal and reliable service, we guarantee that your
          products will be picked up, packed, stored and delivered. We are
          well-known in the industry for providing the best service and can be
          found in all major cities and towns in the country.
        </motion.p>
      </section>

      {/* Executive Team Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h3 className="text-[24px] font-bold text-[#2a2a2a] text-center max-w-[800px] mx-auto mt-12 mb-10">
          <span className="font-[300]">
            Our Executive Management Team brings proven expertise and experience
            in{" "}
          </span>
          Zimbabwe's FMCG industry to lead our growing business.
        </h3>
      </motion.section>

      {/* Reviews Section */}
      <Reviews />
    </>
  );
};

export default AboutTemplate;
