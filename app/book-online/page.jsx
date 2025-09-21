"use client";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

export default function BookOnlinePage() {
  return (
    <div>
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative overflow-hidden">
        <Image
          src="/assets/pay_banner.jpg"
          alt="Banner"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-end pb-10 pl-4">
          <div className="container mx-auto px-4 max-w-7xl w-full">
           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              BOOK ONLINE
            </h1>
          </div>
        </div>
      </div>
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
