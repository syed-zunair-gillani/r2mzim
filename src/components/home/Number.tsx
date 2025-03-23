"use client";
import React from "react";
import { FaCarSide } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: 11000,
    suffix: "m²",
    title: "WAREHOUSE CAPACITY",
    description: "Route to Market has two dry goods warehouses totaling 11,000m² of floor space.",
  },
  {
    value: 400,
    suffix: "+",
    title: "STORES DELIVERED TO",
    description: "Established relationships with all major retail outlets across Zimbabwe.",
  },
  {
    value: 895000,
    suffix: "+",
    title: "KILOMETERS PER YEAR",
    description: "Distribution team boasts a 24-hour delivery time within Harare.",
  },
  {
    value: 500,
    title: "STAFF COUNTRYWIDE",
    description: "Experienced, well-trained staff in every corner of Zimbabwe.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideIn = (direction: "left" | "right") => ({
  hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
});

function Number() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="bg-[#f7f7f7] w-full h-auto py-10"
    >
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((item, index) => {
            const { ref, inView } = useInView({ triggerOnce: true });

            return (
              <motion.div
                key={index}
                variants={slideIn(index % 2 === 0 ? "left" : "right")}
                className="flex gap-4"
                ref={ref}
              >
                <FaCarSide className="text-[50px] mt-4" />
                <div>
                  <h4 className="text-2xl font-bold text-[#1874c1]">
                    {inView && <CountUp start={0} end={item.value} duration={2} separator="," />}
                    {item.suffix || ""}
                  </h4>
                  <div className="border-2 w-10 border-[#fcb900] my-3"></div>
                  <h3 className="text-lg font-bold text-[#2a2a2a]">{item.title}</h3>
                  <p className="text-sm text-[#777777] py-3 leading-6">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <motion.div variants={fadeIn} className="text-center py-14">
          <h2 className="text-2xl font-bold py-3">THE ULTIMATE TRANSPORT</h2>
          <p className="text-lg text-[#777777]">We deliver goods to the most complicated places on earth.</p>
          <Image
            src="/images/icon-car.webp"
            width={500}
            height={500}
            alt="Transport Icon"
            className="w-40 mx-auto mb-4 py-6"
          />
          <Link href="/" className="border px-8 py-4 bg-[#0081c2] hover:border-[#0081c2] hover:bg-transparent hover:text-[#0081c2] text-white text-lg font-medium">
            Book a Transport Now
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}

export default Number;
