"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

interface SliderProps {
  images: string[]; // Array of image paths
}

export default function Slider({ images }: SliderProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openModal = (image: string) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  if (!isMounted) {
    return null;
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
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="relative"
            onClick={() => openModal(image)}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover cursor-pointer"
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
            className="relative w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage}
              alt="Full screen image"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-50 border-2 border-white rounded-full px-2 hover:bg-white hover:text-black"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
