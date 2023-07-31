import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="z-50 ">
      <div className="flex items-center justify-between  mx-auto max-w-7xl">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800">
            <Link href="/" className="w-14 md:w-52">
              <Image
                src="/logo.png"
                width={1000}
                height={1000}
                alt="nguyen-minh-huy"
              />
            </Link>
          </div>
          <div className="flex items-center justify-center antialiased lg:ml-20 pt-1">
            <Link
              href="/"
              className="flex items-center justify-center mr-10 text-base text-light-white-100 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/profile"
              className="flex items-center justify-center mr-10 text-base text-light-white-100 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
            >
              Profile
            </Link>
            <Link
              href="/project"
              className="flex items-center justify-center mr-10 text-base text-light-white-100 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
            >
              Project
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center mr-10 text-base text-light-white-100 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
            >
              Contact
            </Link>
            <Link
              href="/blogs"
              className="flex items-center justify-center mr-10 text-base text-light-white-100 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
            >
              Blog
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <Link
            href="/login"
            className="mr-5 text-lg font-medium text-white hover:scale-105 duration-300  transition ease-in-out  px-3 py-2 rounded-md bg-cyan-500 "
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
