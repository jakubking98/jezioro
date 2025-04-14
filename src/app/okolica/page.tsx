import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import DalszeOtoczenie from "@/components/okolica/DalszeOtoczenie";
import Header from "@/components/okolica/Header";
import OtoczenieOpis from "@/components/okolica/OtoczenieOpis";
import TrocheDalej from "@/components/okolica/TrocheDalej";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Atrakcje w Okolicy Jeziorosfery",
  description:
    "Odkryj atrakcje Mazur w pobliżu Jeziorosfery. Szlaki rowerowe, jeziora, stadnina koni, Mrągowo, Mikołajki. Zaplanuj aktywny wypoczynek.",
  alternates: { canonical: "/okolica" },
};

export default function OkolicaPage() {
  return (
    <div className="relative min-h-screen max-w-screen ">
      <Nav isShort={true} />
      <Header />
      <div className="flex w-full flex-col  items-center  bg-BodyC">
        <div className="max-w-[1650px] flex flex-col items-center  w-full">
          <OtoczenieOpis />
          <DalszeOtoczenie />
          <TrocheDalej />
        </div>
        <div className="w-full h-px bg-Line mt-16"> </div>
        <Footer />
      </div>
    </div>
  );
}
