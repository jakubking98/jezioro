import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Slider from "@/components/Slider";
import AboutUs from "@/components/stodola/AboutUs";
import Galery from "@/components/stodola/Galery";
import Header from "@/components/stodola/Header";
import OurHouse from "@/components/stodola/OurHouse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeziorosfera - Stodoła na Mazurach",
  description:
    "Poznaj naszą wyjątkową stodołę Jeziorosfera na Mazurach. Idealne miejsce na wypoczynek blisko natury. Zobacz zdjęcia, opis i udogodnienia.",
  alternates: {
    canonical: "/stodola",
  },
};

interface ImageData {
  src: string;
  alt: string;
}
export default function StodolaPage() {
  // Zmieniamy strukturę tablicy na obiekty z src i alt
  const stodolaImages: ImageData[] = [
    {
      src: "/stodola/slider/1.jpg",
      alt: "Jeziorosfera - widok stodoły z zewnątrz o zachodzie słońca",
    },
    {
      src: "/stodola/slider/2.jpg",
      alt: "Przestronny salon w stodole Jeziorosfera z kominkiem",
    },
    {
      src: "/stodola/slider/3.jpg",
      alt: "Jadalnia i kuchnia w stodole Jeziorosfera",
    },
    {
      src: "/stodola/slider/4.jpg",
      alt: "Sypialnia na antresoli w Jeziorosferze",
    },
    {
      src: "/stodola/slider/5.jpg",
      alt: "Taras z widokiem na jezioro przy stodole Jeziorosfera",
    },
    {
      src: "/stodola/slider/6.jpg",
      alt: "Stodoła Jeziorosfera otoczona zielenią Mazur",
    },
    {
      src: "/stodola/slider/7.jpg",
      alt: "Wnętrze stodoły Jeziorosfera - detal dekoracyjny",
    },
    // Dodaj więcej opisów, jeśli masz więcej zdjęć
  ];

  return (
    <div className="relative min-h-screen max-w-screen ">
      <Nav isShort={true} />
      <Header />
      <div className="flex w-full flex-col  items-center  bg-BodyC">
        <div className="max-w-[1650px] flex flex-col items-center  w-full">
          <AboutUs />
          {/* Przekazujemy tablicę obiektów do Slidera */}
          <Slider images={stodolaImages} />
          <OurHouse />
          <Galery />
        </div>
        <div className="w-full h-px bg-Line mt-16"> </div>
        <Footer />
      </div>
    </div>
  );
}
