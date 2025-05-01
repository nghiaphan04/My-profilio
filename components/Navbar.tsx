'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/ServicePage" },
    { name: "Resume", path: "/ResumePage" },
    { name: "Project", path: "/ProjectPage" },
    { name: "Contact", path: "/ContactPage" },
    { name: "Chill with me", path: "/ChillWithMe" },
  ];

  return (
    <div className="mx-16 my-4 opacity-90 shadow-lg fixed top-0 left-0 right-0 rounded-2xl z-50">
      <nav className="flex justify-between items-center px-8 py-4 bg-[#0f0f0f] text-white rounded-2xl">
        <div className="text-3xl font-bold">
          Dev<span className="text-green-400">.</span>
        </div>

        <ul className="flex space-x-6 text-sm font-medium">
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

        <Link
          href="/ContactPage"
          className="ml-4 bg-green-400 text-black px-4 py-2 rounded-full font-medium hover:bg-green-300 transition shadow-md"
        >
          Hire me
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
