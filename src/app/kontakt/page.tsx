import CalendarComponent from "@/components/Calendar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/kontakt/Header";
import Nav from "@/components/Nav";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Kontakt i Rezerwacja",
  description:
    "Skontaktuj się z nami w sprawie rezerwacji pobytu w Jeziorosferze. Sprawdź dostępność w kalendarzu i wyślij zapytanie.",
  alternates: { canonical: "/kontakt" },
};
const KontaktPage: React.FC = () => {
  return (
    <div className="relative min-h-screen max-w-screen">
      <Nav isShort={true} />
      <Header />
      <div className="flex w-full flex-col items-center bg-BodyC">
        <div className="max-w-[1650px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-8 md:mt-16 h-full justify-between px-4 md:px-0">
          <CalendarComponent />
          <ContactForm />
        </div>
        <div className="w-full h-px bg-Line mt-16"> </div>
        <Footer />
      </div>
    </div>
  );
};

export default KontaktPage;
