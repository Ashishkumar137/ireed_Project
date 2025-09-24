"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiYoutube } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import SectionHeader from "../components/SectionHeader";

const Footer = () => {
  return (
    <>
      {/* Follow Us Section */}
      <section className="py-10 text-center px-8">
        <SectionHeader title="FOLLOW US"/>
        <div className="flex justify-center items-center gap-10 text-2xl text-gray-700">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-blue-600 font-bold"
          >
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="X (Twitter)" className="hover:text-black">
            <FaXTwitter />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-red-600">
            <SiYoutube />
          </a>
        </div>
      </section>
      <div className="w-full h-[8px] bg-gradient-to-r from-[#0a2d6e] to-green-600 mt-6"></div>
      {/* Get In Touch Section */}
      <div className="bg-gray-50 py-10 px-8 shadow-md ">
        <div className="mx-auto flex flex-col max-w-7xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            GET IN TOUCH
          </h2>
          <form className="w-full max-w-7xl flex flex-col md:flex-row md:flex-wrap gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full md:flex-1 border border-gray-300 bg-white rounded px-4 py-2 outline-0"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full md:flex-1 border border-gray-300 bg-white rounded px-4 py-2 outline-0"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full md:flex-1 border border-gray-300 bg-white rounded px-4 py-2 outline-0"
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-900 text-white font-semibold px-12 py-3 rounded hover:bg-green-800 transition hover:cursor-pointer"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      {/* Other Info section*/}
      <section className="bg-[url('https://tridentrealty.co.in/home/images/bg_happy_customer.webp')] bg-repeat bg-center py-10 px-6 shadow-[inset_0_4px_6px_rgba(0,0,0,0.2)]">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-md text-center md:text-left max-w-7xl ">
          <div>
            <h3 className="text-blue-900 font-semibold mb-3 text-xl">
              WHO WE ARE
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Brand Philosophy</li>
              <li>The Logo Story</li>
              <li>The Trident Approach</li>
              <li>Vision & Mission</li>
              <li>Group Chairman</li>
              <li>Leadership Team</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-900 font-semibold mb-3 text-xl">
              PROJECTS
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Residential</li>
              <li>Commercial</li>
            </ul>

            <h3 className="text-blue-900 font-semibold mt-5 mb-3">
              NEW PROJECTS
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Windsong Residences</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-900 font-semibold mb-3 text-xl">
              LOCATIONS
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Delhi NCR</li>
              <li>Mumbai</li>
              <li>Chandigarh</li>
              <li>
                <span className="bg-blue-900 text-white px-2 py-0.5 font-semibold animate-pulse">
                  Coming Soon
                </span>
              </li>
              <li>Gurugram & Panipat</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-900 font-semibold mb-3 text-xl">
              MEDIA CENTER
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>News</li>
              <li>Press Release</li>
              <li>Blogs</li>
              <li>Videos</li>
              <li>Media Centre</li>
              <li>Gallery</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-900 font-semibold mb-3 text-xl">
              OTHER LINKS
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Construction Update</li>
              <li>Testimonials</li>
              <li>Customer Zone</li>
              <li>Associate Zone</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Contact Info Section */}
      <section className="bg-[url('https://tridentrealty.co.in/home/images/bg_happy_customer.webp')] bg-repeat bg-center py-6 shadow-[0_-2px_4px_rgba(0,0,0,0.15)] ">
        <div className="mx-auto w-[80%] flex flex-col md:flex-row items-center md:items-start justify-between gap-8 px-4 text-gray-800 text-center md:text-left max-w-7xl">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <MdOutlinePhoneInTalk size={34} />
            <p>
              <span className="font-medium">Tel:</span>{" "}
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                +91 90906 04013
              </a>
            </p>
          </div>

          <div className="flex items-start gap-3 justify-center md:justify-start">
            <IoLocationOutline size={34} />
            <p>
              <span className="font-bold">Office Suite</span>
              <br />
              8 & 9, 3rd Floor, Ninex City Mart,
              <br />
              Sohna Road, Near Radisson Hotel, Sector 49,
              <br />
              Gurugram - 122018 Haryana (India).
            </p>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <TfiEmail size={34} />
            <a
              href="mailto:info@ireedindia.com"
              className="text-blue-600 font-semibold hover:underline"
            >
              info@ireedindia.com
            </a>
          </div>
        </div>
      </section>
      {/* Footer Bottom Section */}
      <footer className="bg-[#0a2d6e] text-white py-8 text-sm">
        <div className="mx-auto w-[80%] flex flex-col md:flex-row items-center justify-between gap-2 px-4 max-w-7xl">
          <div className="text-center md:text-left">
            <p>©  IREED Academy (India) Private Limited All Rights Reserved</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-white/90 mt-1">
              <a href="#" className="hover:underline font-semibold">
                Terms of Use
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Disclaimer
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                RERA Disclaimer
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Social Media Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Online Application Facility
              </a>
            </div>
          </div>

          <div className="text-center md:text-right text-white/90 mt-2 md:mt-0">
            Designed By: <span className="font-semibold">CSIPL</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
