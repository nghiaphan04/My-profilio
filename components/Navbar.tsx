'use client';
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/ServicePage" },
    { name: "Resume", path: "/ResumePage" },
    { name: "Project", path: "/ProjectPage" },
    { name: "Contact", path: "/ContactPage" },
    { name: "Chill with me", path: "/ChillWithMe" },
  ];

  return (
    <div className="mx-4 md:mx-16 my-4 opacity-90 shadow-lg fixed top-0 left-0 right-0 rounded-2xl z-50">
      <nav className="flex justify-between items-center px-6 md:px-8 py-4 bg-[#0f0f0f] text-white rounded-2xl">
        <div className="text-2xl md:text-3xl font-bold">
          Dev<span className="text-green-400">.</span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map(({ name, path }) => (
            <li key={path}>
              <Link
                href={path}
                className={`pb-1 ${
                  pathname === path
                    ? "text-green-400 border-b-2 border-green-400"
                    : "hover:text-green-300"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop "Hire Me" button */}
        <Link
          href="/ContactPage"
          className="hidden md:inline-block ml-4 bg-green-400 text-black px-4 py-2 rounded-full font-medium hover:bg-green-300 transition shadow-md"
        >
          Hire me
        </Link>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-green-400" />
          ) : (
            <Menu className="w-6 h-6 text-green-400 " />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f0f0f] rounded-b-2xl px-6 py-4 space-y-4 text-sm font-medium text-white">
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`block ${
                pathname === path ? "text-green-400" : "hover:text-green-300"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
          <Link
            href="/ContactPage"
            className="block bg-green-400 text-black px-4 py-2 rounded-full font-medium hover:bg-green-300 transition shadow-md mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Hire me
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
