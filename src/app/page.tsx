import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
      >
        <source src="/Jezioro_Strefa.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 to-black/50 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-[3rem] mb-8 lg:mb-4 font-sora sm:text-[5rem] md:text-[7rem]">
          Jeziorosfera
        </h1>
        <nav className="menu flex flex-wrap justify-center gap-4 font-sora">
          <Link
            key="stodola"
            href="/stodola"
            className="text-white no-underline mx-2 text-[1rem] hover:underline font-sora sm:text-[1.5rem] md:text-[2.5rem] lg:text-[3rem]"
          >
            Stodoła
          </Link>
          <Link
            key="pokoje"
            href="/pokoje"
            className="text-white no-underline mx-2 text-[1rem] hover:underline font-sora sm:text-[1.5rem] md:text-[2.5rem] lg:text-[3rem]"
          >
            Pokoje
          </Link>
          <Link
            key="okolica"
            href="/okolica"
            className="text-white no-underline mx-2 text-[1rem] hover:underline font-sora sm:text-[1.5rem] md:text-[2.5rem] lg:text-[3rem]"
          >
            Okolica
          </Link>
          <Link
            key="kontakt"
            href="/kontakt"
            className="text-white no-underline mx-2 text-[1rem] hover:underline font-sora sm:text-[1.5rem] md:text-[2.5rem] lg:text-[3rem]"
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </div>
  );
}
