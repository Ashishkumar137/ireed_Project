"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-2 md:px-4">
        <div className="flex items-center mr-2">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="object-contain"
            priority
          />
        </div>

        <div className="flex space-x-4 md:hidden">
          <Link
            href="/book-online"
            className="bg-blue-600 text-white mr-3 px-2 animate-pulse border-r cursor-pointer hover:text-green-700"
          >
            BOOK ONLINE
          </Link>

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
          className="md:hidden p-5 mx-4 w-10 text-3xl"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <div className="hidden md:flex flex-col items-end w-full">
          <ul className="flex w-full justify-end items-center text-[13px] uppercase">
            <li>
              <Link href="/book-online" className="bg-blue-600 text-white mr-3 px-4 py-1 animate-pulse border-r cursor-pointer hover:text-green-700">
                BOOK ONLINE
              </Link>
            </li>
            <li className="mr-3 pr-3 border-r cursor-pointer hover:text-green-700">
              <Link href="/associate-zone">ASSOCIATE ZONE</Link>
            </li>
            <li className="mr-3 pr-3 border-r cursor-pointer hover:text-green-700">
              <Link href="/careers">CAREER ZONE</Link>
            </li>
            <li className="mr-3 pr-3 border-r cursor-pointer hover:text-green-700">
              <Link href="/employee-login">EMPLOYEE LOGIN</Link>
            </li>
            <li className="mr-3 pr-3 cursor-pointer hover:text-green-700 flex space-x-4">
              <Image src="/assets/icon_phone.png" alt="phone" width={40} height={40} className="object-contain border-r pr-4" />
              <div className="w-[1px] h-5 bg-gray-600 "></div>
              <Image src="/assets/icon_email.png" alt="email" width={25} height={25} className="object-contain" />
            </li>
          </ul>

          <ul className="flex justify-center items-top gap-6 text-[13px] uppercase mt-3">
            <li className="cursor-pointer hover:text-green-700">
              <Link href="/who-we-are">Who We Are</Link>
            </li>
            <li className="cursor-pointer hover:text-green-700">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="cursor-pointer hover:text-green-700">
              <Link href="/customer-zone">Customer Zone</Link>
            </li>
            <li className="cursor-pointer hover:text-green-700">
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li className="cursor-pointer text-green-600 hover:text-green-700">
              <Link href="/privilege-passport">Privilege Passport</Link>
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <ul className="flex flex-col space-y-4 py-4 text-center uppercase text-sm">
            <li className="cursor-pointer hover:text-green-700"><Link href="/who-we-are">Who We Are</Link></li>
            <li className="cursor-pointer hover:text-green-700"><Link href="/projects">Projects</Link></li>
            <li className="cursor-pointer hover:text-green-700"><Link href="/customer-zone">Customer Zone</Link></li>
            <li className="cursor-pointer hover:text-green-700"><Link href="/contact-us">Contact Us</Link></li>
            <li className="cursor-pointer text-green-600 hover:text-green-700"><Link href="/privilege-passport">Privilege Passport</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
