"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function GaleriaPokoje() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/stodola/pokoje/1.jpg",
      alt: "Jasny pokój w Jeziorosferze z dużym łóżkiem i drewnianymi belkami",
    },
    {
      src: "/stodola/pokoje/3.jpg",
      alt: "Przytulna sypialnia na poddaszu Jeziorosfery z widokiem na zewnątrz",
    },
    {
      src: "/stodola/pokoje/2.jpg",
      alt: "Minimalistycznie urządzony pokój gościnny w Jeziorosferze z naturalnym światłem",
    },
    {
      src: "/stodola/pokoje/4.jpg",
      alt: "Drewniane detale i komfortowe łóżko w pokoju Jeziorosfery",
    },
  ];

  const openModal = (image: string) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  const getModalAltText = (src: string | null): string => {
    if (!src) return "Powiększone zdjęcie";
    const image = galleryImages.find((img) => img.src === src);
    return image
      ? `${image.alt} - widok pełnoekranowy`
      : "Powiększone zdjęcie pokoju w Jeziorosferze";
  };

  return (
    <div className="grid grid-cols-12 gap-4 mt-10">
      <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
        <div
          className="w-full h-[350px] md:h-[500px] cursor-pointer"
          onClick={() => openModal(galleryImages[0].src)}
        >
          <Image
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className="w-full h-[350px] cursor-pointer"
          onClick={() => openModal(galleryImages[1].src)}
        >
          <Image
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
        <div
          className="w-full h-[350px] cursor-pointer"
          onClick={() => openModal(galleryImages[2].src)}
        >
          <Image
            src={galleryImages[2].src}
            alt={galleryImages[2].alt}
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className="w-full h-[350px] md:h-[500px] cursor-pointer"
          onClick={() => openModal(galleryImages[3].src)}
        >
          <Image
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {isModalOpen && currentImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Powiększony widok zdjęcia"
        >
          <div
            className="relative w-11/12 h-5/6 md:w-4/5 md:h-4/5"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage}
              alt={getModalAltText(currentImage)}
              fill
              className="object-contain"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl bg-black bg-opacity-50 border border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200"
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
