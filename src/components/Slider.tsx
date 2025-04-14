"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

// Definicja typu dla danych obrazu
interface ImageData {
  src: string;
  alt: string;
}

interface SliderProps {
  images: ImageData[]; // Zmieniono typ na tablicę obiektów ImageData
}

export default function Slider({ images }: SliderProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<ImageData | null>(null); // Przechowujemy cały obiekt ImageData

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openModal = (image: ImageData) => {
    // Oczekujemy obiektu ImageData
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  if (!isMounted) {
    return null; // Zwracamy null po stronie serwera, aby uniknąć błędów hydratacji
  }

  return (
    <div className="w-full py-10">
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-[400px] md:h-[500px]"
        breakpoints={{
          // Breakpointy bez zmian
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="relative cursor-pointer" // Dodano cursor-pointer bezpośrednio do slajdu
            onClick={() => openModal(image)} // Przekazujemy cały obiekt image
          >
            <Image
              src={image.src} // Używamy image.src
              alt={image.alt} // Używamy image.alt
              fill
              className="object-cover"
              loading="lazy" // Dodano lazy loading dla optymalizacji
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {isModalOpen && currentImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="relative w-full h-full max-w-4xl max-h-[90vh]" // Ograniczenie rozmiaru modala
            onClick={(e) => e.stopPropagation()} // Zapobiega zamknięciu modala po kliknięciu na obraz
          >
            <Image
              src={currentImage.src} // Używamy currentImage.src
              alt={currentImage.alt} // Używamy alt z powiększanego obrazu
              fill
              className="object-contain" // object-contain aby cały obraz był widoczny
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-50 border-2 border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200" // Poprawione stylowanie przycisku
              onClick={closeModal}
              aria-label="Zamknij modal" // Dodano aria-label
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
