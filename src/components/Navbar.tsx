"use client";
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
    { label: "About", href: "/about-us" },
    { label: "Merchandising", href: "/Merchandising" },
    { label: "Merchandising", href: "/Merchandising" },
    { label: "Warehousing", href: "/warehousing" },
    { label: "Principals", href: "/our-principals" },
    { label: "Contact", href: "/contact-us" },
  ];

  return (
    <>
      {/* Top Bar */}
      <section className="container hidden md:flex justify-between gap-5 items-center mx-auto px-4">
        <Link href="/">
          <Image src="/images/logonavbar.png" alt="" width={100} height={100} />
        </Link>
        <div className="flex items-center gap-10">
          <div className="flex gap-3 items-center">
            <FaPhoneAlt className="text-2xl text-primary" />
            <p className="leading-[18px]">
              Want a transport? <br />
              call us now
            </p>
          </div>
          <div className="w-[1px] h-8 bg-gray-400" />
          <div>
            <Link href="#" className="font-bold text-gray-700 text-4xl">
              +263 (242) 446 431
            </Link>
          </div>
        </div>
      </section>

      {/* Navbar */}
      <div className="bg-primary sticky top-0 py-2 md:py-6 shadow-md z-[100]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="md:hidden">
              <Image
                src="/images/logonavbar.png"
                alt=""
                width={40}
                height={30}
                className="grayscale invert"
              />
            </Link>
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center text-white capitalize text-lg">
              {menuItems.map((item, index) => (
                <Link key={index} href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="md:flex gap-6 items-center hidden">
              <Link href="#">
                <FaFacebook className="text-2xl text-white" />
              </Link>
              <Link href="#">
                <FaLinkedinIn className="text-3xl text-white" />
              </Link>
              <Link href="#">
                <FaPhoneAlt className="text-2xl text-white" />
              </Link>
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
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
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
              <Link
                href="/demo"
                className="bg-[#eb050e] text-white py-2 px-6 rounded-md"
              >
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
