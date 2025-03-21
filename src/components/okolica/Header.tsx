"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [arrowOffset, setArrowOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setArrowOffset((prevOffset) => (prevOffset === 0 ? 5 : 0));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative h-[80vh] overflow-hidden">
      <Image
        src="/okolica.jpg"
        alt="okolica"
        className="object-cover w-full h-full filter brightness-50"
        fill
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-TextW font-sora">
        <h1 className="text-2xl text-center md:text-7xl font-medium mb-4">
          Nasza Okolica
        </h1>
      </div>
      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-10 w-10 text-white ${
            isHovered ? "" : "animate-bounce"
          }`}
          style={{ transform: `translateY(${arrowOffset}px)` }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </header>
  );
}
