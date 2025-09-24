"use client";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Banner from "../components/Banner";
import SectionHeader from "../components/SectionHeader";
import Link from "next/link";

export default function ContactUS() {
  return (
    <div>
      <div>
        <Banner
          imageSrc="/assets/contact_us_banner.jpg"
          alt="contact_us_banner"
          heading="Contact Us"
        />
      </div>
      <SectionHeader title={"Our offices"} />

      <div className="w-full h-[300px] relative overflow-hidden">
        <Image
          src="/assets/contact_us_short_banner.jpg"
          alt="contact_us_short_banner"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 top-1/4">
          <div className="container mx-auto px-4  w-full flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              INTERESTED IN WORKING WITH US?
            </h1>
            <p className="text-white font-light text-center">
              We believe our culture makes our organization a great place to
              work. We are constantly on the lookout for individuals who are
              driven by a passion to excel. Click the button below to explore
              different career opportunities and current openings.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center px-5 py-2 bg-white border border-gray-400 rounded-md hover:bg-green-600 transition"
            >
              Join Our Team <span className="ml-2">&gt;</span>
            </Link>
          </div>
        </div>
      </div>
      <div
              className="py-10 bg-repeat flex flex-col md:flex-row justify-center gap-8"
              style={{
                backgroundImage:
                  "url('https://tridentrealty.co.in/home/images/bg_happy_customer.webp')",
              }}
            >
              <div className="mx-auto w-full px-6 max-w-7xl flex flex-col md:flex-row gap-8">
      
                <div className="w-full px-5">
                  <SectionHeader title={"CUSTOMER SUPPORT"} />
                  <p className="text-center mb-4">Have a query for us? Leave us a message and we’ll get in touch.</p>
                  
                  <div className="mx-auto  max-w-3xl">
                    <form  className="space-y-4 ">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name *"
                      required
                      className="w-full border border-gray-300 bg-white rounded-md p-4 outline-0"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      required
                      className="w-full border border-gray-300 bg-white rounded-md p-4 outline-0"
                    />
                    <input
                      type="text"
                      name="location"
                      placeholder="Location *"
                      required
                      className="w-full border border-gray-300 bg-white rounded-md p-4 outline-0"
                    />
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Mobile Number *"
                      required
                      className="w-full border border-gray-300 bg-white rounded-md p-4 outline-0"
                    />
                    <label htmlFor="property-type">Property Type</label>
                    <select name="Select Projects" id="Select Projects" className="w-full border border-gray-300 bg-white rounded-md p-4 outline-0">
                        <option value="">project1</option>
                        <option value="">project2</option>
                        <option value="">project3</option>
                      </select>
      
                    <div className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        name="terms"
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
            </div>

    </div>
  );
}
