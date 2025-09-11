"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiYoutube } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
const scrollableImage = [
  "https://tridentrealty.co.in/uploads/banner/17087007654384.webp",
  "https://tridentrealty.co.in/uploads/banner/17087008185632.webp",
  "https://tridentrealty.co.in/uploads/banner/17087006552469.webp",
  "https://tridentrealty.co.in/uploads/banner/17087006907349.webp",
];

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-white text-black w-full h-full">
        <header className="w-full border-b">
          <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 md:px-8">
            <div className="w-[120px] h-[60px] flex items-center">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={200}
                height={100}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex space-x-4 md:hidden">
              <button className="bg-blue-600 text-white mr-[10px] px-4 py-1 animate-pulse border-r cursor-pointer hover:text-green-700">
                BOOK ONLINE
              </button>

              <Image
                src="/assets/icon_phone.png"
                alt="phone"
                width={30}
                height={30}
                className="object-contain"
              />
              <Image
                src="/assets/icon_email.png"
                alt="email"
                width={25}
                height={25}
                className="object-contain"
              />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 border rounded"
            >
              {isOpen ? "✖" : "☰"}
            </button>

            <div className="hidden md:flex flex-col items-end w-full">
              <ul className="flex w-full justify-end items-center text-[13px] uppercase">
                <li>
                  <button className="bg-blue-600 text-white mr-[10px] px-4 py-1 animate-pulse border-r cursor-pointer hover:text-green-700">
                    BOOK ONLINE
                  </button>
                </li>
                <li className="mr-[15px] pr-[15px] border-r cursor-pointer hover:text-green-700">
                  ASSOCIATE ZONE
                </li>
                <li className="mr-[15px] pr-[15px] border-r cursor-pointer hover:text-green-700">
                  CAREER ZONE
                </li>
                <li className="mr-[15px] pr-[15px] border-r cursor-pointer hover:text-green-700">
                  EMPLOYEE LOGIN
                </li>
                <li className="mr-[15px] pr-[15px] cursor-pointer hover:text-green-700 flex space-x-4">
                  <Image
                    src="/assets/icon_phone.png"
                    alt="phone"
                    width={40}
                    height={40}
                    className="object-contain border-r pr-4"
                  />
                  <Image
                    src="/assets/icon_email.png"
                    alt="email"
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </li>
              </ul>

              <ul className="flex justify-end items-top text-[14px] uppercase mt-3">
                <li className="mr-[27px] cursor-pointer hover:text-green-700">
                  Who We Are
                </li>
                <li className="mr-[27px] cursor-pointer hover:text-green-700">
                  Projects
                </li>
                <li className="mr-[27px] cursor-pointer hover:text-green-700">
                  Customer Zone
                </li>
                <li className="mr-[27px] cursor-pointer hover:text-green-700">
                  Contact Us
                </li>
                <li className="mr-[27px] cursor-pointer text-green-600 hover:text-green-700">
                  Privilege Passport
                </li>
              </ul>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden bg-gray-50 border-t">
              <ul className="flex flex-col space-y-4 py-4 text-center uppercase text-sm">
                <li className="cursor-pointer hover:text-green-700">
                  Who We Are
                </li>
                <li className="cursor-pointer hover:text-green-700">
                  Projects
                </li>
                <li className="cursor-pointer hover:text-green-700">
                  Customer Zone
                </li>
                <li className="cursor-pointer hover:text-green-700">
                  Contact Us
                </li>
                <li className="cursor-pointer text-green-600 hover:text-green-700">
                  Privilege Passport
                </li>
              </ul>
            </div>
          )}
        </header>

        {/*Video Section*/}
        <section className="w-full h-[300px] sm:h-[400px] md:h-[650px] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            poster="/assets/myposter.webp"
            className="object-cover w-full h-full"
          >
            <source src="/assets/video1.mp4" type="video/mp4" />
          </video>
        </section>
        {/* About Section */}
        <section className="py-12 px-4 md:px-12">
          <div className="mx-auto w-[80%] max-w-7xl">
            <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8">
              <div className="md:w-5/12 flex items-start flex-col">
                <p className="text-2xl leading-relaxed py-5 font-optima">
                  Creating exceptional living spaces with robust engineering
                  &amp; an unparalleled delivery without compromising the ethos
                  of Customer Centricity, Sustainability, and Well-being.
                </p>
              </div>

              <div className="hidden md:block w-[6px] bg-gradient-to-b from-[#0a2d6e] to-green-600 mx-6"></div>

              <div className="md:w-7/12">
                <h1 className="text-2xl md:text-3xl font-semibold text-green-700 mb-6">
                  BUILDING THE NATION
                </h1>
                <p className="text-base md:text-md text-gray-600 leading-relaxed mb-6">
                  Established in 2008, Trident Realty is an innovation-led,
                  future-focused real estate developer. The company has been a
                  pioneering force behind the rapidly changing skylines of NCR,
                  MMR &amp; Tri-City (Chandigarh), with its footprints across
                  residential, retail, commercial and hospitality sectors. With
                  the spirit of innovation and modern technology at its core,
                  Trident Realty has carved a niche for itself within a decade,
                  setting industry benchmarks for quality, robust engineering,
                  and in-house research.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-5 py-2 border border-gray-400 rounded-md hover:bg-green-600 transition"
                >
                  Read More
                  <span className="ml-2">&gt;</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Statistics Section */}
        <section className="py-10 bg-[url('https://tridentrealty.co.in/home/images/bg_happy_customer.webp')] bg-repeat bg-center">
          <div className="mx-auto w-[80%] flex flex-col md:flex-row md:flex-wrap justify-center gap-6 max-w-7xl">
            <div
              className="flex-1 min-w-[250px] bg-white rounded-lg shadow p-6 relative 
                border border-transparent hover:border-green-700
                hover:scale-105 cursor-pointer transition-all duration-500"
            >
              <div className="flex items-center justify-between pb-2">
                <h2 className="text-5xl font-bold text-blue-900">16</h2>
                <Image
                  src="/assets/happy_icon1.webp"
                  alt="Happy Icon 1"
                  width={70}
                  height={70}
                  className="hover:scale-120 transition duration-500"
                />
              </div>
              <p className="mt-5 text-sm text-gray-600">
                YEARS OF EXPERTISE IN RESIDENTIAL & COMMERCIAL
              </p>
            </div>

            <div
              className="flex-1 min-w-[250px] bg-white rounded-lg shadow p-6 relative 
                border border-transparent hover:border-green-700
                hover:scale-105 cursor-pointer transition-all duration-500"
            >
              <div className="flex items-center justify-between pb-2">
                <h2 className="text-5xl font-bold text-blue-900">1.89</h2>
                <Image
                  src="/assets/happy_icon2.webp"
                  alt="Happy Icon 2"
                  width={70}
                  height={70}
                  className="hover:scale-120 transition duration-500"
                />
              </div>
              <p className="mt-5 text-sm text-gray-600">
                MILLION SQ. M. DELIVERED
              </p>
            </div>

            <div
              className="flex-1 min-w-[250px] bg-white rounded-lg shadow p-6 relative 
                border border-transparent hover:border-green-700
                hover:scale-105 cursor-pointer transition-all duration-500"
            >
              <div className="flex items-center justify-between pb-2">
                <h2 className="text-5xl font-bold text-blue-900">20k+</h2>
                <Image
                  src="/assets/happy_icon3.webp"
                  alt="Happy Icon 3"
                  width={70}
                  height={70}
                  className="hover:scale-120 transition duration-500"
                />
              </div>
              <p className="mt-5 text-sm text-gray-600">HAPPY CUSTOMERS</p>
            </div>

            <div
              className="flex-1 min-w-[250px] bg-white rounded-lg shadow p-6 relative 
                border border-transparent hover:border-green-700 
                hover:scale-105 cursor-pointer transition-all duration-500"
            >
              <div className="flex items-center justify-between pb-2">
                <h2 className="text-5xl font-bold text-blue-900">1.02</h2>
                <Image
                  src="/assets/happy_icon4.webp"
                  alt="Happy Icon 4"
                  width={70}
                  height={70}
                  className="hover:scale-120 transition duration-500"
                />
              </div>
              <p className="mt-5 text-sm text-gray-600">
                MILLION SQ. M. UNDER DEVELOPMENT
              </p>
            </div>
          </div>
        </section>
        {/*Swipe Image */}
        <section className="w-full max-w-7xl mx-auto my-10">
          <div className="relative mx-auto px-6">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="rounded-lg"
            >
              {scrollableImage.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-auto relative">
                    <Image
                      src={image}
                      alt={`Slide ${index + 1}`}
                      width={1200}
                      height={600}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev absolute top-1/2 left-0 -translate-y-1/2  z-10 bg-white p-4 rounded-full shadow-md cursor-pointer hover:bg-green-700">
              <GoArrowLeft />
            </div>
            <div className="swiper-button-next absolute top-1/2 right-0 -translate-y-1/2  z-10 bg-white p-4 rounded-full shadow-md cursor-pointer hover:bg-green-700">
              <GoArrowRight />
            </div>
          </div>
        </section>
        {/* Project Section */}
        <section className="w-full flex flex-col items-center py-6">
          <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl font-semibold mb-10">PROJECTS</h2>

            <div className="w-full px-6">
              <div className="flex border border-gray-300 overflow-hidden w-full max-w-7xl mx-auto">
                <div className="flex-1 border-r border-gray-300 px-3 py-2">
                  <label className="text-gray-500">PROPERTY TYPE</label>
                  <select className="w-full outline-none">
                    <option hidden>Any</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Office</option>
                  </select>
                </div>

                <div className="flex-1 border-r border-gray-300 px-3 py-2">
                  <label className="text-gray-500">LOCATIONS</label>
                  <select className="w-full outline-none">
                    <option hidden>Any</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Bangalore</option>
                  </select>
                </div>

                <div className="flex-1 border-r border-gray-300 px-3 py-2">
                  <label className="text-gray-500">STATUS</label>
                  <select className="w-full outline-none">
                    <option hidden>Any</option>
                    <option>Ongoing</option>
                    <option>Completed</option>
                    <option>Upcoming</option>
                  </select>
                </div>

                <div className="px-3 py-2">
                  <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-green-700 hover:cursor-pointer">
                    Search Properties
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Section */}
        <section className="w-full py-6">
          <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-6">
            <div className="min-w-[200px] sm:w-[300px] md:w-[400px] border-b border-green-600 hover:border-gray-400 transition cursor-pointer">
              <div className="overflow-hidden transition-transform duration-500 hover:scale-105">
                <Image
                  src="/assets/villa1.webp"
                  alt="villa1"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="py-3">
                <p className="font-bold text-lg mb-3 sm:mb-3 uppercase">
                  Trident Hills
                </p>
                <p className="text-gray-500 text-sm sm:text-base">
                  Residential - Chandigarh
                </p>
              </div>
            </div>

            <div className="min-w-[200px] sm:w-[300px] md:w-[400px] border-b border-green-600 hover:border-gray-400 transition cursor-pointer">
              <div className="overflow-hidden transition-transform duration-500 hover:scale-105">
                <Image
                  src="/assets/villa2.webp"
                  alt="villa2"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="py-3">
                <p className="font-bold text-lg mb-3 sm:mb-3 uppercase">
                  Windsong Residences
                </p>
                <p className="text-gray-500 text-sm sm:text-base">
                  Residential - Panchkula
                </p>
              </div>
            </div>

            <div className="min-w-[200px] sm:w-[300px] md:w-[400px] border-b border-green-600 hover:border-gray-400 transition cursor-pointer">
              <div className="overflow-hidden transition-transform duration-500 hover:scale-105">
                <Image
                  src="/assets/villa3.webp"
                  alt="villa3"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="py-3">
                <p className="font-bold text-lg mb-3 sm:mb-3 uppercase">
                  The Westpark
                </p>
                <p className="text-gray-500 text-sm sm:text-base">
                  Residential - Maharashtra
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Presence Section */}

        <section
          className="py-10 mt-10 bg-repeat"
          style={{
            backgroundImage:
              "url('https://tridentrealty.co.in/home/images/bg_happy_customer.webp')",
          }}
        >
          <div className=" mx-auto w-full px-6 max-w-7xl">
            <h2 className="text-center text-3xl font-semibold text-gray-700 mb-8">
              OUR PRESENCE
            </h2>

            <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6">
              <div
                className="flex-1 w-full md:w-auto h-40 bg-white rounded-md shadow p-6 
                border border-transparent hover:border-green-700 
                hover:scale-105 cursor-pointer transition-all duration-500"
              >
                <div className="p-[15px] flex flex-row items-center justify-center">
                  <Image
                    src="/assets/delhi.webp"
                    alt="Delhi NCR"
                    width={70}
                    height={70}
                    className="opacity-70 mr-[30px]"
                  />
                  <p className="text-xl font-medium text-gray-700">DELHI NCR</p>
                </div>
              </div>

              <div
                className="flex-1 w-full md:w-auto h-40 bg-white rounded-md shadow p-6 
                border border-transparent hover:border-green-700 
                hover:scale-105 cursor-pointer transition-all duration-500"
              >
                <div className="p-[15px] flex flex-row items-center justify-center">
                  <Image
                    src="/assets/mumbai.webp"
                    alt="Mumbai"
                    width={100}
                    height={100}
                    className="opacity-70 mr-[30px]"
                  />
                  <p className="text-xl font-medium text-gray-700">MUMBAI</p>
                </div>
              </div>

              <div
                className="flex-1 w-full md:w-auto h-40 bg-white rounded-md shadow p-6 
                border border-transparent hover:border-green-700 
                hover:scale-105 cursor-pointer transition-all duration-500"
              >
                <div className="p-[15px] flex flex-row items-center justify-center">
                  <Image
                    src="/assets/chandigarh.webp"
                    alt="Chandigarh"
                    width={70}
                    height={70}
                    className="opacity-70 mr-[30px]"
                  />
                  <p className="text-xl font-medium text-gray-700">
                    CHANDIGARH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*gallery, social media, media center*/}
        <section className="flex flex-col w-full sm:flex-row justify-center items-center gap-10 px-6 flex-wrap pt-10">
          <div className="shadow-lg overflow-hidden w-full sm:w-[400px] bg-white border-b-gray-600  hover:border-b-1 hover:border-green-600">
            <Image
              src="/assets/image1.webp"
              alt="Gallery"
              width={500}
              height={250}
              className="object-cover hover:scale-105 transition duration-500 hover:cursor-pointer w-full h-[250px]"
            />
            <div className="p-7 w-full ">
              <h2 className="text-xl mb-3">GALLERY</h2>
              <p className="text-gray-600 text-sm mb-3">
                Go through our selection of images and videos to know more about
                Trident Realty
              </p>
              <button className="border px-2 py-1 mt-5 rounded-sm border-gray-500 hover:bg-green-600 transition duration-500 hover:text-white hover:cursor-pointer">
                Read More &gt;
              </button>
            </div>
          </div>

          <div className="shadow-lg overflow-hidden w-full sm:w-[400px] bg-white border-b-gray-600 hover:border-b-1 hover:border-green-600">
            <Image
              src="/assets/image2.webp"
              alt="Social Media"
              width={400}
              height={250}
              className="object-cover hover:scale-105 transition duration-500 hover:cursor-pointer w-full h-[250px]"
            />
            <div className="p-7 w-full">
              <h2 className="text-xl mb-3">SOCIAL MEDIA</h2>
              <p className="text-gray-500 text-sm mb-3">
                Join the social media family of Trident Realty and get updates
                on the latest developments and happenings.
              </p>
              <button className="border px-2 py-1 mt-5 rounded-sm border-gray-500 hover:bg-green-600 transition duration-500 hover:text-white hover:cursor-pointer">
                Read More &gt;
              </button>
            </div>
          </div>

          <div className="shadow-lg overflow-hidden w-full sm:w-[400px] bg-white border-b-gray-600 border-transparent hover:border-b-1 hover:border-green-600">
            <Image
              src="/assets/image3.webp"
              alt="Media Center"
              width={400}
              height={250}
              className="object-cover hover:scale-105 transition duration-500 hover:cursor-pointer w-full h-[250px]"
            />
            <div className="p-7 w-full">
              <h2 className="text-xl mb-3">MEDIA CENTER</h2>
              <p className="text-gray-500 text-sm mb-3">
                Take a look at what we&apos;ve been up to in the media and other
                coverages related to the brand.
              </p>
              <button className="border px-2 py-1 mt-5 rounded-sm border-gray-500 hover:bg-green-600 transition duration-500 hover:text-white hover:cursor-pointer">
                Read More &gt;
              </button>
            </div>
          </div>
        </section>
        {/* Follow Us Section */}
        <section className="py-10 text-center px-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10">
            FOLLOW US
          </h2>

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
          <div className="w-[80%] mx-auto flex flex-col max-w-7xl">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              GET IN TOUCH
            </h2>
            <form className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full md:flex-1 border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full md:flex-1 border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full md:flex-1 border border-gray-300 rounded px-4 py-2"
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
        {/* Footer Section */}
        <section className="bg-[url('https://tridentrealty.co.in/home/images/bg_happy_customer.webp')] bg-repeat bg-center py-10 px-6">
          <div className="mx-auto w-[80%] grid grid-cols-2 md:grid-cols-5 gap-8 text-md text-center md:text-left max-w-7xl">
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
        <section className="bg-[url('https://tridentrealty.co.in/home/images/bg_happy_customer.webp')] bg-repeat bg-center py-6 shadow-sm border-gray-400 border-t">
          <div className="mx-auto w-[80%] flex flex-col md:flex-row items-center md:items-start justify-between gap-8 px-4 text-gray-800 text-center md:text-left max-w-7xl">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <MdOutlinePhoneInTalk size={34} />
              <p>
                <span className="font-medium">Tel:</span>{" "}
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  +91 702 603 5000
                </a>
              </p>
            </div>

            <div className="flex items-start gap-3 justify-center md:justify-start">
              <IoLocationOutline size={34} />
              <p>
                <span className="font-bold">Corporate Office</span>
                <br />
                Trident Realty, 16th Floor, DLF Square,
                <br />
                DLF Phase-II, Jacaranda Marg,
                <br />
                Gurugram - 122002, Haryana (India).
              </p>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <TfiEmail size={34} />
              <a
                href="mailto:care@tridentrealty.co.in"
                className="text-blue-600 font-semibold hover:underline"
              >
                care@tridentrealty.co.in
              </a>
            </div>
          </div>
        </section>
        {/* Footer Bottom Section */}
        <footer className="bg-[#0a2d6e] text-white py-8 text-sm">
          <div className="mx-auto w-[80%] flex flex-col md:flex-row items-center justify-between gap-2 px-4 max-w-7xl">
            <div className="text-center md:text-left">
              <p>© Trident Realty, 2025 All Rights Reserved</p>
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
      </div>
    </>
  );
};

export default Page;
