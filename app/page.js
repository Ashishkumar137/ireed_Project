"use client";
import React from "react";
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
const scrollableImage = [
  "https://tridentrealty.co.in/uploads/banner/17087007654384.webp",
  "https://tridentrealty.co.in/uploads/banner/17087008185632.webp",
  "https://tridentrealty.co.in/uploads/banner/17087006552469.webp",
  "https://tridentrealty.co.in/uploads/banner/17087006907349.webp",
];
const Page = () => {
  return (
    <>
      <div className="bg-white text-black width-full h-full">
        {/*Header Section*/}
        <header className="flex flex-col md:flex-row justify-center items-center px-4">
          <div className="px-[15px] w-50 h-20">
            <img src="/assets/logo.png" alt="logo" />
          </div>

          <div className="px-[15px] w-250 h-25 flex flex-col justify-center items-end">
            <div className="width-full">
              <ul className="flex width-full justify-end items-center">
                <li>
                  <button className="bg-blue-600 text-white mr-[10px] px-4 animate-pulse border-r">
                    Book Online
                  </button>
                </li>
                <li>
                  <div className="mr-[15px] pr-[15px] border-r">
                    ASSOCIATE ZONE
                  </div>
                </li>
                <li>
                  <div className="mr-[15px] pr-[15px] border-r">
                    CAREER ZONE
                  </div>
                </li>
                <li>
                  <div className="mr-[15px] pr-[15px] border-r">
                    EMPLOYEE LOGIN
                  </div>
                </li>
                <li className="mr-[15px] pr-[15px]">
                  <div className="flex space-x-4">
                    <img
                      className="border-r pr-4"
                      src="/assets/icon_phone.png"
                      alt="phone"
                    />
                    <img src="/assets/icon_email.png" alt="email" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="width-full mt-3">
              <ul className="flex justify-end items-top text-[18px]">
                <li className="mr-[27px]">Who We Are</li>
                <li className="mr-[27px]">Projects</li>
                <li className="mr-[27px]">Customer Zone</li>
                <li className="mr-[27px]">Contact Us</li>
                <li className="mr-[27px] text-green-600">Privilege Passport</li>
              </ul>
            </div>
          </div>
        </header>
        {/*Video Section*/}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[650px] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            poster="/assets/myposter.webp"
            className="object-cover w-full h-full"
          >
            <source src="/assets/video1.mp4" type="video/mp4" />
          </video>
        </div>
        {/*About Us Section*/}
        <div className="py-12 px-4 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8">
              <div className="md:w-5/12 flex items-center">
                <p className="text-2xl leading-relaxed  py-5 font-optima">
                  Creating exceptional living spaces with robust engineering
                  &amp; an unparalleled delivery without compromising the ethos
                  of Customer Centricity, Sustainability, and Well-being.
                </p>
              </div>

              <div className="hidden md:block w-[6px] bg-gradient-to-b from-[#0a2d6e] to-green-600 mx-6"></div>

              <div className="md:w-7/12">
                <h1 className="text-2xl md:text-3xl font-semibold text-green-700 mb-4">
                  BULDING THE NATION
                </h1>
                <p className="text-base md:text-sm text-gray-600 leading-relaxed mb-6">
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
                  className="inline-flex items-center px-5 py-2 border border-gray-400 rounded-md  hover:bg-green-600 transition"
                >
                  Read More
                  <span className="ml-2">&gt;</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*Statistics Section*/}
        <div className="py-10 bg-[url(https://tridentrealty.co.in/home/images/bg_happy_customer.webp)] bg-repeat p-10">
          <div className="container mx-auto flex flex-col md:flex-row md:flex-wrap justify-center gap-6 px-6">
            <div className="flex-1 min-w-[250px] bg-white rounded-lg shadow p-6 relative hover:scale-105 transition hover:cursor-pointer">
              <div className="flex flex-row items-center justify-between">
              <h2 className="text-3xl font-bold text-blue-900">16</h2>
              <img src="\assets\happy_icon1.webp"/>
              </div>
              <p className="mt-2 text-sm text-gray-600">  
                YEARS OF EXPERTISE IN RESIDENTIAL & COMMERCIAL
              </p>
            </div>

            <div className="flex-1 min-w-[250px] bg-white rounded-lg shadow p-6 relative hover:scale-105 transition hover:cursor-pointer">
              <div className="flex flex-row items-center justify-between">
              <h2 className="text-3xl font-bold text-blue-900">1.89</h2>
              <img src="\assets\happy_icon2.webp"/>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                MILLION SQ. M. DELIVERED
              </p>
            </div>

            <div className="flex-1 min-w-[250px] bg-white rounded-lg shadow p-6 relative hover:scale-105 transition hover:cursor-pointer">
              <div className="flex flex-row items-center justify-between">
              <h2 className="text-3xl font-bold text-blue-900">20k+</h2>
              <img src="\assets\happy_icon3.webp"/>
              </div>
              <p className="mt-2 text-sm text-gray-600">HAPPY CUSTOMERS</p>
            </div>

            <div className="flex-1 min-w-[250px] bg-white rounded-lg shadow p-6 relative hover:scale-105 transition hover:cursor-pointer">
              <div className="flex flex-row items-center justify-between">
              <h2 className="text-3xl font-bold text-blue-900">1.02</h2>
              <img src="\assets\happy_icon4.webp"/>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                MILLION SQ. M. UNDER DEVELOPMENT
              </p>
              <span className="absolute right-4 top-4"></span>
            </div>
          </div>
        </div>

        {/*Swipe Image */}
        <div className="w-full sm:w-[80%] md:w-[80%] mx-auto pt-6 relative">
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
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto"
                />
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 z-10 bg-white p-4 rounded-full shadow-md cursor-pointer hover:bg-green-700">
               <GoArrowLeft/>
            </div>
            <div className="swiper-button-next absolute top-1/2 right-0 z-10 -translate-y-1/2 translate-x-1/2 bg-white p-4 rounded-full shadow-md cursor-pointer hover:bg-green-700">
              <GoArrowRight/>
            </div>
          </Swiper>
        </div>
        {/*Project Section*/}
        <div className="w-full flex flex-col items-center py-8">
          <h2 className="text-2xl font-semibold mb-6">PROJECTS</h2>

          <div className="flex border border-gray-300 overflow-hidden w-4/5 max-w-7xl">
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
              <button className="bg-blue-900 text-white px-6 py-3 rounded-1 hover:bg-blue-800">
                Search Properties
              </button>
            </div>
          </div>
        </div>
        {/*Media Section*/}
        <div className="flex flex-row width-full justify-center items-center gap-8 py-10 flex-wrap">
          <div className="w-full sm:w-[250px] md:w-[350px] border-b-1 border-green-600 hover:cursor-pointer hover:border-gray-400">
            <div className=" transition overflow-hidden  object-contain content-center duration-500 hover:cursor-pointer ">
              <img
                src="/assets/villa1.webp"
                alt="villa1"
                className="w-[400px] h-[400px] hover:scale-105 ease-in-out duration-300"
              />
            </div>
            <div className="py-3">
              <p className="font-bold text-lg mb-3">Media Centre</p>
              <div className="flex items-center mb-3">
                <p className="text-gray-500 text-sm">
                  Take a look at what we've been up to in the media and other
                  coverages related to the brand.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[400px] border-b-1 border-green-600 hover:cursor-pointer hover:border-gray-400">
            <div className=" transition overflow-hidden  object-contain content-center duration-500 hover:cursor-pointer ">
              <img
                src="/assets/villa2.webp"
                alt="villa2"
                className="w-[400px] h-[400px] hover:scale-105 ease-in-out duration-300"
              />
            </div>
            <div className="py-3">
              <p className="font-bold text-lg mb-3">Media Centre</p>
              <div className="flex items-center mb-3">
                <p className="text-gray-500 text-sm">
                  Take a look at what we've been up to in the media and other
                  coverages related to the brand.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[400px] border-b-1 border-green-600 hover:cursor-pointer hover:border-gray-400">
            <div className=" transition overflow-hidden  object-contain content-center duration-500 hover:cursor-pointer ">
              <img
                src="/assets/villa3.webp"
                alt="villa3"
                className="w-[400px] h-[400px] hover:scale-105 ease-in-out duration-300"
              />
            </div>
            <div className="py-3">
              <p className="font-bold text-lg mb-3">Media Centre</p>
              <div className="flex items-center mb-3">
                <p className="text-gray-500 text-sm">
                  Take a look at what we've been up to in the media and other
                  coverages related to the brand.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*Our Presence Section*/}
        <div className="py-10 bg-[url(https://tridentrealty.co.in/home/images/bg_happy_customer.webp)] p-10 bg-repeat">
          <h2 className="text-center text-2xl font-semibold text-gray-700 mb-8">
            OUR PRESENCE
          </h2>
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-8 ">
            <div className="flex-1 h-40 bg-white rounded-lg shadow p-6 hover:scale-105 transition hover:cursor-pointer">
              <div className="p-[15px] flex flex-row items-center justify-center">
                <img
                  src="/assets/delhi.webp"
                  alt="Delhi NCR"
                  className="opacity-70 mr-[30px]"
                />
                <p className="text-lg font-medium text-gray-700">DELHI NCR</p>
              </div>
            </div>

            <div className="flex-1 h-40 bg-white rounded-lg shadow p-6 hover:scale-105 transition hover:cursor-pointer">
              <div className="p-[15px] flex flex-row items-center justify-center">
                <img
                  src="/assets/mumbai.webp"
                  alt="Mumbai"
                  className="opacity-70 mr-[30px]"
                />
                <p className="text-lg font-medium text-gray-700">MUMBAI</p>
              </div>
            </div>

            <div className="flex-1 h-40 bg-white rounded-lg shadow p-6 hover:scale-105 transition hover:cursor-pointer">
              <div className="p-[15px] flex flex-row items-center justify-center">
                <img
                  src="/assets/chandigarh.webp"
                  alt="Chandigarh"
                  className="opacity-70 mr-[30px]"
                />
                <p className="text-lg font-medium text-gray-700">CHANDIGHAR</p>
              </div>
            </div>
          </div>
        </div>
        {/*Connect With Us Section*/}
        <div className="flex flex-row width-full justify-center items-center gap-8 py-10 flex-wrap">
          <div className="shadow-lg overflow-hidden w-[350px]">
            <img
              src="/assets/image1.webp"
              alt="img1"
              className="w-[400px] h-[250px] object-cover hover:scale-105 transition duration-500 hover:cursor-pointer"
            />
            <div className="p-3">
              <h2 className="text-lg mb-3">GALLERY</h2>
              <div className="flex items-center mb-3">
                <p className="text-gray-500 text-sm">
                  Go through our selection of images and videos to know more
                  about Trident Realty
                </p>
              </div>
              <button className="border-1 px-2 py-1 rounded-sm hover:bg-green-600 transition hover:cursor-pointer">
                Read More &gt;
              </button>
            </div>
          </div>

          <div className="shadow-lg overflow-hidden w-[400px]">
            <img
              src="/assets/image2.webp"
              alt="img2"
              className="w-[400px] h-[250px] object-cover hover:scale-105 transition duration-500 hover:cursor-pointer"
            />
            <div className="p-3">
              <h2 className="text-lg mb-3">SOCIAL MEDIA</h2>
              <div className="flex items-center mb-3">
                <p className="text-gray-500 text-sm">
                  Join the social media family of Trident Realty and get the
                  updates on the latest developments and happenings.
                </p>
              </div>
              <button className="border-1 px-2 py-1 rounded-sm hover:bg-green-600 transition hover:cursor-pointer">
                Read More &gt;
              </button>
            </div>
          </div>

          <div className="shadow-lg overflow-hidden w-[400px]">
            <img
              src="/assets/image3.webp"
              alt="img3"
              className="w-[400px] h-[250px] object-cover hover:scale-105 transition duration-500 hover:cursor-pointer"
            />
            <div className="p-3">
              <h2 className="text-lg mb-3">MEDIA CENTER</h2>
              <div className="flex items-center mb-3">
                <p className="text-gray-500 text-sm">
                  Take a look at what we've been up to in the media and other
                  coverages related to the brand.
                </p>
              </div>
              <button className="border-1 px-2 py-1 rounded-sm hover:bg-green-600 transition hover:cursor-pointer">
                Read More &gt;
              </button>
            </div>
          </div>
        </div>
        {/*Follow Us Section*/}
        <div className="py-10 text-center px-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 ">
            FOLLOW US
          </h2>
          <div className="flex justify-center gap-8 text-2xl text-gray-700">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600 font-bold font-weight-bold">
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
          <div className="hidden md:block w-[6px] bg-gradient-to-b from-[#0a2d6e] to-green-600 mx-6"></div>
        </div>
        {/*Get In Touch Section*/}
        <div className="bg-gray-50 py-10 px-8 shadow-md]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">
              GET IN TOUCH
            </h2>
            <form className=" w-full flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="flex-1 border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 border border-gray-300 rounded px-4 py-2 "
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="flex-1 border border-gray-300 rounded px-4 py-2 "
              />
              <button
                type="submit"
                className="bg-blue-900 text-white font-semibold px-6 py-2 rounded hover:bg-blue-800 transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/*Footer Section*/}
        <div className="bg-[url(https://tridentrealty.co.in/home/images/bg_happy_customer.webp)] bg-repeat py-10 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-center md:text-left">
            <div>
              <h3 className="text-blue-900 font-semibold mb-3">WHO WE ARE</h3>
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
              <h3 className="text-blue-900 font-semibold mb-3">PROJECTS</h3>
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
              <h3 className="text-blue-900 font-semibold mb-3">LOCATIONS</h3>
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
              <h3 className="text-blue-900 font-semibold mb-3">MEDIA CENTER</h3>
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
              <h3 className="text-blue-900 font-semibold mb-3">OTHER LINKS</h3>
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
        </div>
        {/*Contact Info Section*/}
        <div className="bg-[url(https://tridentrealty.co.in/home/images/bg_happy_customer.webp)] bg-repeat py-6 shadow-sm border-gray-400 border-t">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 px-6 text-gray-800 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img
                src="https://tridentrealty.co.in/home/images/footer_phone_icon.png"
                alt="Phone Icon"
                className="h-6 w-6 object-contain"
              />
              <p>
                <span className="font-medium">Tel:</span>{" "}
                <a
                  href="tel:+917026035000"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  +91 702 603 5000
                </a>
              </p>
            </div>
            <div className="flex items-start gap-3 justify-center md:justify-start">
              <img
                src="https://tridentrealty.co.in/home/images/footer_location_icon.png"
                alt="Location Icon"
                className="h-6 w-6 object-contain mt-1"
              />
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
              <img
                src="https://tridentrealty.co.in/home/images/footer_mail_icon.png"
                alt="Email Icon"
                className="h-6 w-6 object-contain"
              />
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                care@tridentrealty.co.in
              </a>
            </div>
          </div>
        </div>

        <footer className="bg-[#0a2d6e] text-white py-4 text-sm">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-4">
            <div className="text-center md:text-left">
              <p>© Trident Realty , 2025 All Rights Reserved</p>
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

            <div className="text-center md:text-right text-white/90">
              Designed By: <span className="font-semibold">CSIPL</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Page;
