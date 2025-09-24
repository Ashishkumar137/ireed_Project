"use client";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Banner from "../components/Banner";
import SectionHeader from "../components/SectionHeader";

export default function BookOnlinePage() {
  return (
    <div>
      <Banner
        imageSrc="/assets/pay_banner.jpg"
        alt="Book Online Banner"
        heading="BOOK ONLINE"
      />
      <div className="mx-auto max-w-7xl py-10 px-6">
        <div className="w-[50%] bg-white flex flex-row justify-start items-start">
          <div className="bg-green-900 py-6 flex flex-col items-center px-8 w-full max-w-md">
            <Image
              src="/assets/navbar-logo.svg"
              width={250}
              height={150}
              alt="Logo"
              className="py-2"
            />
            <button className="mt-8 mx-3 px-10 py-3 border-1 shadow-xl text-white text-sm rounded-full flex items-center gap-2 hover:bg-blue-950 hover:cursor-pointer transition-all duration-300">
              BOOK ONLINE<GoArrowRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
