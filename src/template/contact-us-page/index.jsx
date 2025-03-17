"use client"
import React from "react";
import ContactForm from "@/components/contact-form";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, marginTop: 40, transition: { duration: 0.8 } },
};

const ContactUsTemplate = () => {
  return (
    <>
      {/* Heading Section with Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-center max-w-[800px] mt-10 mx-auto my-16"
      >
        <h3 className="text-[24px] font-bold text-[#2a2a2a]">
          <span className="font-[300]">Contact</span> Us
        </h3>
        <div className="flex justify-center items-center relative mt-4">
            <div className="h-[1px] bg-gray-200 w-full max-w-60" />
            <div className="h-1 w-12 bg-yellow-400 absolute top-[-1px]" />
          </div>
        <p className="text-[#777777] font-[400] py-3">
          Please do call us or send us a message on the form below.
          <br /> We look forward to hearing from you.
        </p>
      </motion.div>

      {/* Contact Form Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <ContactForm />
      </motion.div>
    </>
  );
};

export default ContactUsTemplate;
