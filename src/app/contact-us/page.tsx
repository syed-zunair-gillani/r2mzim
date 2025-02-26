import ContactForm from "@/components/contact-form";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="text-center max-w-[800px] mx-auto my-16">
        <h3 className="text-[24px] font-bold text-[#2a2a2a]">
          <span className="font-[300]">Contact</span> Us
        </h3>
        <p className="text-[#777777] font-[400] py-3">
          Please do call us or send us on a message on the form below.<br/> We look forward to hearing from you.
        </p>
      </div>
      <ContactForm/>
    </>
  );
};

export default Page;
