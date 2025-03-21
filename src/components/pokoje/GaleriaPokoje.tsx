"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function GaleriaPokoje() {
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

  return (
    <div className="grid grid-cols-12 gap-4 mt-10">
      <div className="col-span-12 md:col-span-6 flex flex-col">
        <div
          className="w-full h-[350px] md:h-[500px]"
          onClick={() => openModal("/stodola/pokoje/1.jpg")}
        >
          <Image
            src="/stodola/pokoje/1.jpg"
            alt="Image 3"
            width={500}
            height={500}
            className="h-full w-full object-cover cursor-pointer"
          />
        </div>
        <div
          className="w-full h-[350px] mt-3"
          onClick={() => openModal("/stodola/pokoje/3.jpg")}
        >
          <Image
            src="/stodola/pokoje/3.jpg"
            alt="Image 3"
            width={500}
            height={500}
            className="h-full w-full object-cover cursor-pointer"
          />
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 flex flex-col">
        <div
          className="w-full h-[350px]"
          onClick={() => openModal("/stodola/pokoje/2.jpg")}
        >
          <Image
            src="/stodola/pokoje/2.jpg"
            alt="Image 2"
            width={500}
            height={500}
            className="h-full w-full object-cover cursor-pointer"
          />
        </div>
        <div
          className="w-full h-[350px] md:h-[500px] mt-3"
          onClick={() => openModal("/stodola/pokoje/4.jpg")}
        >
          <Image
            src="/stodola/pokoje/4.jpg"
            alt="Image 4"
            width={500}
            height={500}
            className="h-full w-full object-cover cursor-pointer"
          />
        </div>
      </div>

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
