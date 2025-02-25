"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Menu items array
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Merchandising", href: "/Merchandising" },
    { label: "Merchandising", href: "/Merchandising" },
    { label: "Warehousing", href: "/Warehousing" },
    { label: "Principals", href: "/Principals" },
    { label: "Contact", href: "/Contact" },
  ];

  return (
    <>

      {/* Top Bar */}
      <div className="bg-[#1c2e16] py-2 sm:block hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center text-white">
              <p>info@r2mzim.com</p>
            </div>
            <div className="flex gap-6 text-white items-center">
              <span className="flex gap-2 items-center">
                <FaPhoneAlt />
                <p>Tel : +263 (242) 446 431/2</p>
              </span>
              <Link href="/facebook">
                <FaFacebook className='text-xl hover:text-blue-700' />
              </Link>
              <Link href="/linkedinIn">
                <FaLinkedinIn className='text-xl hover:text-green-300' />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white sticky top-0 py-2 shadow-md z-[100]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/logonavbar.png"
                alt="Notify Logo"
                width={500}
                height={500}
                className="w-full"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 items-center uppercase">
              {menuItems.map((item, index) => (
                <Link key={index} href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              ))}

             
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-800"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t mt-3">
            <div className="flex flex-col items-center gap-4 py-4">
              {menuItems.map((item, index) => (
                <Link key={index} href={item.href} className="text-gray-800">
                  {item.label}
                </Link>
              ))}
              <Link href="/demo" className="bg-[#eb050e] text-white py-2 px-6 rounded-md">
                DEMO
              </Link>
            </div>
          </div>
        )}
      </div>

    </>
  );
}

export default Navbar;