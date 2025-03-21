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

  return (
    <div className="grid grid-cols-12 gap-4 mt-10">
      <div
        className="col-span-12 md:col-span-6 h-[350px]"
        onClick={() => openModal("/stodola/galery/1.jpg")}
      >
        <Image
          src="/stodola/galery/1.jpg"
          alt="Image 1"
          width={500}
          height={500}
          className="h-full w-full object-cover cursor-pointer"
        />
      </div>
      <div
        className="col-span-12 md:col-span-6 h-[350px]"
        onClick={() => openModal("/stodola/galery/2.jpg")}
      >
        <Image
          src="/stodola/galery/2.jpg"
          alt="Image 2"
          width={500}
          height={500}
          className="h-full w-full object-cover cursor-pointer"
        />
      </div>
      <div
        className="col-span-12 md:col-span-4 h-[350px]"
        onClick={() => openModal("/stodola/galery/3.jpg")}
      >
        <Image
          src="/stodola/galery/3.jpg"
          alt="Image 3"
          width={500}
          height={500}
          className="h-full w-full object-cover cursor-pointer"
        />
      </div>
      <div
        className="col-span-12 md:col-span-4 h-[350px]"
        onClick={() => openModal("/stodola/galery/4.jpg")}
      >
        <Image
          src="/stodola/galery/4.jpg"
          alt="Image 4"
          width={500}
          height={500}
          className="h-full w-full object-cover cursor-pointer"
        />
      </div>
      <div
        className="col-span-12 md:col-span-4 row-span-1 md:row-span-2 h-[350px] md:h-[716px]"
        onClick={() => openModal("/stodola/galery/5.jpg")}
      >
        <Image
          src="/stodola/galery/5.jpg"
          alt="Image 5"
          width={500}
          height={500}
          className="h-full w-full object-cover cursor-pointer"
        />
      </div>
      <div
        className="col-span-12 md:col-span-8 h-[350px]"
        onClick={() => openModal("/stodola/galery/6.jpg")}
      >
        <Image
          src="/stodola/galery/6.jpg"
          alt="Image 6"
          width={500}
          height={500}
          className="h-full w-full object-cover cursor-pointer"
        />
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
