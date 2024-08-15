import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-16 bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        <div className="flex items-center">
          <img
            src="/logo.png"
            width="40"
            height="40"
            alt="Logo"
            className="rounded-full"
          />
          <div className="ml-2 text-[15px] font-bold text-blue-500">
            DocBot Helper
          </div>
        </div>

        <ul className="hidden md:flex text-[15px] items-center space-x-8 font-bold text-blue-500">
          <Link href="/">
            <li className="hover:text-blue-700 cursor-pointer">Home</li>
          </Link>
          <Link href="/help">
            <li className="hover:text-blue-700 cursor-pointer">Help</li>
          </Link>
          <Link href="/about">
            <li className="hover:text-blue-700 cursor-pointer">About</li>
          </Link>
          <Link href="/settings">
            <li className="hover:text-blue-700 cursor-pointer">Settings</li>
          </Link>
          <Link href="/login">
            <li className="p-2 text-center text-white bg-blue-500 hover:bg-blue-700 rounded-full">
              User
            </li>
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="mobile-menu-button">
            <svg
              className="w-6 h-6 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className="mobile-menu hidden md:hidden text-[15px] space-y-4 font-bold text-blue-500 p-4">
        <Link href="/">
          <li className="hover:text-blue-700">Home</li>
        </Link>
        <Link href="/help">
          <li className="hover:text-blue-700">Help</li>
        </Link>
        <Link href="/about">
          <li className="hover:text-blue-700">About</li>
        </Link>
        <Link href="/settings">
          <li className="hover:text-blue-700">Settings</li>
        </Link>
        <Link href="/login">
          <li className="p-2 text-center text-white bg-blue-500 hover:bg-blue-700 rounded-full">
            User
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
