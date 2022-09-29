import Image from "next/image";
import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b border-1 border-gray-300 top-0 sticky">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={"/NAV.png"} width="50" height={50} alt="logo" />
          <Link href="/">
            <span className="ml-3 text-xl hover:cursor-pointer">
              Grayankit.codes
            </span>
          </Link>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href="/courses">
            <a className="mr-5 hover:text-purple-900 cursor-pointer">Courses</a>
          </Link>
          <Link href="/programming">
            <a className="mr-5 hover:text-purple-900 cursor-pointer">
              Programming
            </a>
          </Link>
          <Link href="/blogs">
            <a className="mr-5 hover:text-purple-900 cursor-pointer">Blogs</a>
          </Link>
          <Link href="/contact">
            <a className="mr-5 hover:text-purple-900 cursor-pointer">Contact</a>
          </Link>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-400 rounded text-base mt-4 md:mt-0">
          Login
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
