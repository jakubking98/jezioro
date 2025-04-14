"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Galery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  const imageAlts = [
    "JezioroSfera - Widok na salon i antresolę w nowoczesnej stodole na Mazurach",
    "JezioroSfera - Przestronny salon z dużym stołem i widokiem na jezioro",
    "JezioroSfera - Przytulna sypialnia z podwójnym łóżkiem w stodole",
    "JezioroSfera - Nowoczesna łazienka z prysznicem w domu wakacyjnym",
    "JezioroSfera - Widok z antresoli na salon i jezioro, idealne miejsce na wypoczynek",
    "JezioroSfera - Elegancka kuchnia w pełni wyposażona, otwarta na salon",
  ];

  const imagePaths = [
    "/stodola/galery/1.jpg",
    "/stodola/galery/2.jpg",
    "/stodola/galery/3.jpg",
    "/stodola/galery/4.jpg",
    "/stodola/galery/5.jpg",
    "/stodola/galery/6.jpg",
  ];

  return (
    <div className="grid grid-cols-12 gap-4 mt-10">
      {/* Obraz 1 */}
      <div
        className="col-span-12 md:col-span-6 h-[350px]"
        onClick={() => openModal(imagePaths[0])}
      >
        <Image
          src={imagePaths[0]}
          alt={imageAlts[0]} // Zaktualizowany alt
          width={500}
          height={500}
          className="h-full w-full object-cover cursor-pointer"
          loading="lazy" // Dodano lazy loading dla optymalizacji
        />
      </div>
      {/* Obraz 2 */}
      <div
        className="col-span-12 md:col-span-6 h-[350px]"
        onClick={() => openModal(imagePaths[1])}
      >
        <Image
          src={imagePaths[1]}
          alt={imageAlts[1]} // Zaktualizowany alt
          width={500}
          height={500}
          className="h-full w-full object-cover cursor-pointer"
          loading="lazy"
        />
      </div>
      {/* Obraz 3 */}
      <div
        className="col-span-12 md:col-span-4 h-[350px]"
        onClick={() => openModal(imagePaths[2])}
      >
        <Image
          src={imagePaths[2]}
          alt={imageAlts[2]} // Zaktualizowany alt
          width={500}
          height={500}
          className="h-full w-full object-cover cursor-pointer"
          loading="lazy"
        />
      </div>
      {/* Obraz 4 */}
      <div
        className="col-span-12 md:col-span-4 h-[350px]"
        onClick={() => openModal(imagePaths[3])}
      >
        <Image
          src={imagePaths[3]}
          alt={imageAlts[3]} // Zaktualizowany alt
          width={500}
          height={500}
          className="h-full w-full object-cover cursor-pointer"
          loading="lazy"
        />
      </div>
      {/* Obraz 5 */}
      <div
        className="col-span-12 md:col-span-4 row-span-1 md:row-span-2 h-[350px] md:h-[716px]"
        onClick={() => openModal(imagePaths[4])}
      >
        <Image
          src={imagePaths[4]}
          alt={imageAlts[4]} // Zaktualizowany alt
          width={500}
          height={500}
          className="h-full w-full object-cover cursor-pointer"
          loading="lazy"
        />
      </div>
      {/* Obraz 6 */}
      <div
        className="col-span-12 md:col-span-8 h-[350px]"
        onClick={() => openModal(imagePaths[5])}
      >
        <Image
          src={imagePaths[5]}
          alt={imageAlts[5]}
          width={500}
          height={500}
          className="h-full w-full object-cover cursor-pointer"
          loading="lazy"
        />
      </div>

      {isModalOpen && currentImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="relative w-full h-full max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage}
              alt="JezioroSfera - Powiększone zdjęcie z galerii"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-50 border-2 border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200" // Poprawione stylowanie przycisku
              onClick={closeModal}
              aria-label="Zamknij modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
