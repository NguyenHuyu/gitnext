import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="z-50">
      <div className="flex items-center justify-between  mx-auto max-w-7xl">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800">
            <Link href="/" className="w-10 md:w-52">
              <Image
                src="/logo.png"
                width={1000}
                height={1000}
                alt="nguyen-minh-huy"
              />
            </Link>
          </div>
          <div className="flex items-center justify-center antialiased lg:ml-20 pt-1 gap-3 transition-all duration-500">
            <Link
              href="/"
              className="flex hover:text-white hover:scale-110 font-medium md:font-bold items-center justify-center md:mr-10 text-xs md:text-base text-light-white-100 text-opacity-90  tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/profile"
              className="flex hover:text-white hover:scale-110 font-medium md:font-bold items-center justify-center md:mr-10 text-xs md:text-base text-light-white-100 text-opacity-90 tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
            >
              Profile
            </Link>
            <Link
              href="/project"
              className="flex hover:text-white hover:scale-110 font-medium md:font-bold items-center justify-center md:mr-10 text-xs md:text-base text-light-white-100 text-opacity-90 tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
            >
              Project
            </Link>
            <Link
              href="/contact"
              className="flex hover:text-white hover:scale-110 font-medium md:font-bold items-center justify-center md:mr-10 text-xs md:text-base text-light-white-100 text-opacity-90 tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
            >
              Contact
            </Link>
            <Link
              href="/blogs"
              className="flex hover:text-white hover:scale-110 font-medium md:font-bold items-center justify-center md:mr-10 text-xs md:text-base text-light-white-100 text-opacity-90 tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
            >
              Blog
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center z-50">
          <Link
            href="/login"
            className="text-xs md:text-base font-medium block w-full bg-red-500 p-1 md:py-3 md:px-4 text-white shadow rounded-md border-2 border-transparent hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
