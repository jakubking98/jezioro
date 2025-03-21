"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoogleReviewData } from "@/type/type";

interface DisplayGoogleReviewsProps {
  reviewsData: GoogleReviewData[];
}

const FormatGoogleReview = ({ review }: { review: GoogleReviewData }) => {
  const [showFullText, setShowFullText] = useState(false);

  const formattedDate = new Date(review.publishedAtDate).toLocaleDateString(
    "pl-PL",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const ratingStars =
    typeof review.stars === "number"
      ? "★".repeat(Math.round(review.stars)) +
        "☆".repeat(Math.max(0, 5 - Math.round(review.stars)))
      : "";

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const displayText = review.text ? (
    <div className="flex-grow min-h-[100px]">
      <p className="mb-6 text-sm sm:text-base">
        {showFullText
          ? review.text
          : review.text.length > 200
          ? review.text.substring(0, 200) + "..."
          : review.text}
      </p>
      {review.text.length > 200 && (
        <div className="mt-2">
          <button
            onClick={toggleText}
            className="text-blue-500 ml-2 hover:underline"
          >
            {showFullText ? "Zwiń" : "Czytaj więcej"}
          </button>
        </div>
      )}
    </div>
  ) : null;

  const displayImages =
    review.reviewImageUrls.length > 0 ? (
      <div className="mt-4">
        <p className="font-semibold text-sm sm:text-base">Zdjęcia:</p>
        <div className="flex flex-wrap gap-2">
          {review.reviewImageUrls.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Zdjęcie z opinii ${review.name}`}
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
              width={96}
              height={96}
            />
          ))}
        </div>
      </div>
    ) : null;

  return (
    <div
      key={review.reviewId}
      className="mb-8 border border-gray-300 p-4 sm:p-6 rounded-lg shadow-md bg-white flex flex-col"
    >
      <div className="flex items-center mb-4">
        {review.reviewerPhotoUrl ? (
          <Image
            src={review.reviewerPhotoUrl}
            alt={`${review.name}'s avatar`}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4"
            width={48}
            height={48}
          />
        ) : (
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 mr-4 flex items-center justify-center">
            <span className="text-gray-500 text-lg sm:text-xl">👤</span>
          </div>
        )}
        <div>
          <h3 className="font-bold text-base sm:text-lg">{review.name}</h3>
          {review.isLocalGuide && (
            <p className="text-green-600 text-xs sm:text-sm">
              Lokalny przewodnik
            </p>
          )}
        </div>
      </div>

      <div className="mb-2 flex items-center">
        <span className="text-yellow-500 text-base sm:text-lg">
          {ratingStars}
        </span>
      </div>

      {displayText}

      <p className="text-gray-500 text-xs sm:text-sm">
        Dodano: {formattedDate}
      </p>
      {displayImages}
    </div>
  );
};

const DisplayGoogleReviews = ({ reviewsData }: DisplayGoogleReviewsProps) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Opinie z Google Maps
      </h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoHeight={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
      >
        {reviewsData.map((review) => (
          <SwiperSlide key={review.reviewId} className="grid grid-rows-[auto]">
            <FormatGoogleReview review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DisplayGoogleReviews;
