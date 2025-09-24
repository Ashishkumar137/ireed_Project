"use client";
import Image from "next/image";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Banner from "../components/Banner";
import SectionHeader from "../components/SectionHeader";

export default function careerPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Banner
        imageSrc="/assets/career_banner.jpg"
        alt="career"
        heading="CAREERS"
        paragraph="Become a part of the culture that is motivated to create a change. Explore possibilities in the organisation committed to building the nation."
      />

      <div
        className="py-10 bg-repeat flex justify-center gap-8"
        style={{
          backgroundImage:
            "url('https://tridentrealty.co.in/home/images/bg_happy_customer.webp')",
        }}
      >
        <div className="mx-auto w-full px-6 max-w-4xl align-center flex flex-col justify-center  gap-5">
          <SectionHeader title="Life at Trident Realty" />

          <p className="text-center">
            We are a leading real estate company in India. We believe that our
            success is due to the people associated with us. At Trident, we
            support innovative ideas, teamwork, and the personal development of
            our team members. Be a part of the growing fraternity to know more.
          </p>
        </div>
      </div>

      <div className="w-full h-[300px] relative overflow-hidden">
        <Image
          src="/assets/contact_us_short_banner.jpg"
          alt="contact_us_short_banner"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 top-1/2">
          <div className="container mx-auto px-4  w-full flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              INTERESTED IN WORKING WITH US?
            </h1>
            <p className="text-white font-light">
              Send us your CV on{" "}
              <a href="hr@tridentrealty.co.in" className="">
                hr@tridentrealty.co.in
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
      <div className="text-center my-8  ">
          <SectionHeader title="Current opening" />
        <div className="container mx-auto px-8 max-w-7xl w-full">
          <div className="border-b border-gray-300 py-4 flex justify-between max-w-7xl items-center">
            <span className="text-gray-700">
              EXECUTIVE / SR. EXECUTIVE / ASST. MANAGER (FRONT OFFICE)
            </span>
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-600 hover:text-green-700 transition"
            >
              {open ? <FaMinus /> : <FaPlus />}
            </button>
          </div>

          {open && (
            <div className="p-4 bg-gray-50 border border-t-0 border-gray-300 text-sm text-gray-600"></div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
