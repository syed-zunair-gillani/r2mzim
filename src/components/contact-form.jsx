"use client"
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 px-3 container w-full mx-auto justify-center items-center mb-20">
      {/* Contact Cards */}
      <div className="flex flex-col gap-4 w-full md:w-auto">
        <div className="bg-primary text-white p-6 rounded-2xl w-full md:w-80 shadow-lg">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-xl" />
            <p>Call Us Directly At</p>
          </div>
          <h2 className="text-2xl font-bold mt-2">+263 (242) 446 431</h2>
          <h2 className="text-2xl font-bold mt-2">+263 (242) 446 432</h2>
          <button className="mt-3 w-full bg-white/20 hover:bg-white/40 py-3 rounded-lg">Contact Us</button>
        </div>
        <div className="bg-white p-6 rounded-2xl w-full md:w-80 shadow-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <MdEmail className="text-xl" />
            <p>Chat With Our Team</p>
          </div>
          <h2 className="text-lg font-bold mt-2">email@r2mzim.com</h2>
          <button className="mt-3 w-full bg-gray-200 hover:bg-gray-300 py-3 rounded-lg">Contact Us</button>
        </div>
      </div>
      {/* Contact Form */}
      <div className="bg-white p-8 border rounded-2xl shadow-lg flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <IoPersonOutline className="text-gray-500" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full ml-2 p-2 outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <MdEmail className="text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full ml-2 p-2 outline-none bg-transparent"
            />
          </div>
          <div className="col-span-2 flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <FaPhoneAlt className="text-gray-500" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full ml-2 p-2 outline-none bg-transparent"
            />
          </div>
          <div className="col-span-2 flex items-start border border-gray-300 rounded-lg px-3 py-2">
            <BiMessageDetail className="text-gray-500 mt-3" />
            <textarea
              name="message"
              placeholder="Message Here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full ml-2 p-2 outline-none bg-transparent h-24 resize-none"
            ></textarea>
          </div>
        </div>
        <button className="mt-4 w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800">Send Message</button>
      </div>
    </div>
  );
}
