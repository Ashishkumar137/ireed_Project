"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaLock } from "react-icons/fa";
import { PiUserCircleFill } from "react-icons/pi";

const AssociateLogin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    mobile: "",
    terms: false,
  });

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
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative overflow-hidden">
        <Image
          src="/assets/associte_login.webp"
          alt="Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end pb-10 pl-4">
          <div className="container mx-auto px-4 max-w-7xl w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              ASSOCIATE ZONE
            </h1>
            <p className="text-white font-light">
              Your business queries just a click away.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-3xl text-gray-500 uppercase mt-8 ">
        <h2 className="p-2 cursor-pointer border-b-4 inline border-transparent hover:border-blue-950 transition duration-500">
          Associate Login
        </h2>
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
            <h2 className="text-3xl mb-2">ASSOCIATE LOGIN</h2>
            <p className="text-gray-600 text-sm my-8">
              A symbol of trust and transparency, Trident Realty - Associate
              Zone is designed to virtually update & assist you with your
              business transactions with us.
            </p>

            <div className="flex flex-col lg:flex-row gap-5 mb-6 justify-between">
              <div className="w-full px-1">
                <h2 className="text-lg uppercase text-blue-950 mb-2">
                  First Time User
                </h2>
                <button className="bg-blue-950 text-white px-6 py-4 rounded-md hover:bg-green-700 transition w-full flex justify-center cursor-pointer">
                  <PiUserCircleFill className="text-2xl mr-2" />
                  REGISTER HERE
                </button>
              </div>
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
    </>
  );
};

export default AssociateLogin;
