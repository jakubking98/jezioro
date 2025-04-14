import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import GaleriaPokoje from "@/components/pokoje/GaleriaPokoje";
import Header from "@/components/pokoje/Header";
import PokojeOpis from "@/components/pokoje/PokojeOpis";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokoje Gościnne na Mazurach",
  description:
    "Komfortowe pokoje w Jeziorosferze. Zobacz zdjęcia i opisy naszych sypialni. Idealne noclegi na Mazurach.",
  alternates: { canonical: "/pokoje" },
};
export default function PokojePage() {
  return (
    <div className="relative min-h-screen max-w-screen ">
      <Nav isShort={true} />
      <Header />
      <div className="flex w-full flex-col  items-center  bg-BodyC">
        <div className="max-w-[1650px] flex flex-col items-center  w-full">
          <PokojeOpis />
          <GaleriaPokoje />
        </div>
        <div className="w-full h-px bg-Line mt-16"> </div>
        <Footer />
      </div>
    </div>
  );
}
