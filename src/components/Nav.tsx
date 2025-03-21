"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import JezioroSfera from "./JezioroSfera";
import { TbMenu } from "react-icons/tb";
import { MdOutlineClose } from "react-icons/md";

interface NavProps {
  isShort?: boolean;
}

export default function Nav({ isShort }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      let scrollThreshold = window.innerHeight;

      if (isShort === true) {
        scrollThreshold = 0.8 * window.innerHeight;
      }

      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isShort]);

  return (
    <nav
      className={`fixed top-0 z-20 w-full max-w-[100vw] px-4 lg:px-10 py-2 flex justify-center items-center transition-colors duration-300 ${
        isScrolled ? " bg-BodyC " : " bg-transparent "
      }`}
    >
      <div className="max-w-[1650px] w-full flex items-center justify-between">
        <div className="flex items-center md:w-auto">
          {/* Logo */}
          <JezioroSfera isScrolled={isScrolled} />
        </div>
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`  focus:outline-none md:hidden ${
              isScrolled ? " text-TextN " : " text-TextW "
            }`}
          >
            {isOpen ? <MdOutlineClose size={30} /> : <TbMenu size={30} />}
          </button>
          {/* Desktop Navigation Links */}
          <ul
            className={`hidden md:flex space-x-6 font-sora md:text-2xl ${
              isScrolled ? " text-TextN " : " text-TextW "
            } `}
          >
            <li>
              <Link
                href="/stodola"
                className="hover:text-MenuC2 transition-colors duration-200"
              >
                Stodoła
              </Link>
            </li>
            <li>
              <Link
                href="/pokoje"
                className="hover:text-MenuC2 transition-colors duration-200"
              >
                Pokoje
              </Link>
            </li>
            <li>
              <Link
                href="/okolica"
                className="hover:text-MenuC2 transition-colors duration-200"
              >
                Okolica
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                className="hover:text-MenuC2 transition-colors duration-200"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed z-50 top-0 right-0 w-64 h-full bg-MenuC  text-TextW p-5 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="text-TextN absolute top-6 right-4 focus:outline-none"
        >
          <MdOutlineClose size={30} />
        </button>

        <ul className="space-y-4 mt-2 font-sora text-TextN">
          <li>
            <Link href="/stodola" className="text-xl" onClick={toggleMenu}>
              Stodoła
            </Link>
          </li>
          <li>
            <Link href="/pokoje" className="text-xl" onClick={toggleMenu}>
              Pokoje
            </Link>
          </li>
          <li>
            <Link href="/okolica" className="text-xl" onClick={toggleMenu}>
              Okolica
            </Link>
          </li>
          <li>
            <Link href="/kontakt" className="text-xl" onClick={toggleMenu}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
