"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaLock, FaMinus, FaPlus } from "react-icons/fa";
import { PiUserCircleFill } from "react-icons/pi";
import Banner from "../components/Banner";
import SectionHeader from "../components/SectionHeader";

const faqs = [
  {
    question: "WHO IS NON-RESIDENT INDIAN (NRI)?",
    answer:
      "A Non-Resident Indian (NRI) is an Indian citizen who resides outside India for employment, business, or any other purpose that indicates an indefinite stay abroad.",
  },
  {
    question: "WHO IS A POI?",
    answer:
      "A Person of Indian Origin (PIO) is a foreign citizen (except Pakistan, Bangladesh, Sri Lanka, Afghanistan, China, Iran, Nepal, and Bhutan) who at any time held an Indian passport or whose ancestors were Indian nationals.",
  },
  {
    question: "CAN NRI'S BUY REAL ESTATE PROPERTIES IN INDIA?",
    answer:
      "Yes, NRIs are allowed to buy residential and commercial properties in India, but they cannot purchase agricultural land, plantation property, or farmhouses.",
  },
];

const CustomerZone = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    mobile: "",
    terms: false,
  });

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.terms) {
      alert("Please accept Terms & Conditions");
      return;
    }
    setFormData({
      name: "",
      email: "",
      location: "",
      mobile: "",
      terms: false,
    });
  };

  return (
    <>
      <Banner
        imageSrc="/assets/banner_customer_zone.jpg"
        alt="banner_customer_zone"
        heading="Customer zone"
        paragraph="All your queries are just a login away."
      />
       <div className="mx-auto w-full px-6 max-w-7xl flex justify-center">
      <div className="text-center text-3xl text-gray-500 uppercase mt-8 flex justify-between gap-5">
        <h2 className="p-2 cursor-pointer border-b-3 inline border-transparent hover:border-blue-950 transition duration-500">
          Customer Login
        </h2>
        <h2 className="p-2 cursor-pointer border-b-3 inline border-transparent hover:border-blue-950 transition duration-500">
          NRI Zone
        </h2>
        <h2 className="p-2 cursor-pointer border-b-3 inline border-transparent hover:border-blue-950 transition duration-500">
          Testimonial
        </h2>
      </div>
      </div>
      <div
        className="py-10 mt-10 bg-repeat flex flex-col md:flex-row justify-center gap-8"
        style={{
          backgroundImage:
            "url('https://tridentrealty.co.in/home/images/bg_happy_customer.webp')",
        }}
      >
        <div className="mx-auto w-full px-6 max-w-7xl flex flex-col md:flex-row gap-8">
          <div className="w-full border-gray-300 border rounded p-8 text-center flex-1">
            <div className="w-full flex justify-center mb-5">
              <Image
                src="/assets/user-profile.jpg"
                width={130}
                height={130}
                alt="user"
                className="object-cover rounded-full border-5 border-green-600"
              />
            </div>
            <h2 className="text-3xl mb-2">CUSTOMER LOGIN</h2>
            <p className="text-gray-600 text-sm my-8">
              Created with you in mind, Welcome to Trident Realty - Customer
              Zone aimed to provide you with seamless updates on your
              transactions with the company.
            </p>

            <div className="flex flex-col lg:flex-row gap-5 mb-6 justify-between">
              <div className="w-full px-1">
                <h2 className="text-lg uppercase text-blue-950 mb-2">
                  Registered User
                </h2>
                <button className="bg-blue-950 text-white px-6 py-4 rounded-md hover:bg-green-700 transition w-full flex justify-center cursor-pointer">
                  <FaLock className="text-xl mr-2" />
                  CLICK HERE TO LOGIN
                </button>
              </div>
            </div>

            <div className="flex items-center justify-left gap-2 text-sm">
              <input type="checkbox" className="w-4 h-4" />
              <label>
                <span className="text-green-600 cursor-pointer">
                  Terms & Conditions
                </span>
              </label>
            </div>
          </div>

          <div className="w-full px-5 flex-1">
            <h2 className="text-3xl mb-6 text-center md:text-left">
              CONTACT OUR REPRESENTATIVE
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 bg-white rounded-md p-4 outline-0"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 bg-white rounded-md p-4 outline-0"
              />
              <input
                type="text"
                name="location"
                placeholder="Location *"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 bg-white rounded-md p-4 outline-0"
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number *"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 bg-white rounded-md p-4 outline-0"
              />

              <div className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <label>
                  Accept{" "}
                  <span className="text-green-600 cursor-pointer">
                    Terms & Conditions
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className=" bg-blue-950 text-white text-sm px-8 py-2 rounded hover:bg-green-700 cursor-pointer transition"
              >
                SEND A MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center my-8  ">
        <SectionHeader title="NRI Zone" />
        <div className="container max-w-7xl justify-center align-center mx-auto w-full px-4 grid md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-300 shadow-sm w-full flex flex-col justify-between mx-auto"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800"
              >
                {faq.question}
                {openIndex === i ? (
                  <FaMinus className="text-gray-600" />
                ) : (
                  <FaPlus className="text-gray-600" />
                )}
              </button>

              {openIndex === i && (
                <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default CustomerZone;
