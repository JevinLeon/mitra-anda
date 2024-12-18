"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className="flexBetween max-container padding-container relative z-30 py-8">
        <Link href="/">
          <label className="bold-20 cursor-pointer">
            <span className="text-red-500">Mitra</span> Anda
          </label>
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                href={link.href}
                key={link.key}
                className={`text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ${
                  isActive && "font-bold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </ul>

        <div className="lg:hidden flex items-center">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toggleNavbar}
          >
            {isClick ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {isClick && (
        <div className="lg:hidden">
          <div>
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
