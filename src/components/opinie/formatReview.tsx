"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ReviewData } from "@/type/type";

interface DisplayBookingReviewsProps {
  reviewsData: ReviewData[];
}

const FormatReview = ({ review }: { review: ReviewData }) => {
  const reviewRef = useRef<HTMLDivElement>(null);

  const formattedDate = new Date(review.reviewDate).toLocaleDateString(
    "pl-PL",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const ratingStars =
    typeof review.rating === "number"
      ? "★".repeat(Math.round(review.rating)) +
        "☆".repeat(Math.max(0, 5 - Math.round(review.rating)))
      : "";

  const displayRating =
    typeof review.rating === "number" ? (
      <span className="ml-2 font-semibold text-lg">{review.rating}/10</span>
    ) : null;

  const displayReviewTitle = review.reviewTitle ? (
    <h4 className="font-semibold mb-2 text-lg">{review.reviewTitle}</h4>
  ) : null;

  const displayLikedText = review.likedText ? (
    <div className="flex-grow min-h-[100px]">
      <p className="mb-6 text-sm sm:text-base">
        <b className="text-green-600">Co się podobało:</b> {review.likedText}
      </p>
    </div>
  ) : null;

  const displayDislikedText = review.dislikedText ? (
    <div className="flex-grow min-h-[100px]">
      <p className="mb-6 text-sm sm:text-base">
        <b className="text-red-600">Co się nie podobało:</b>{" "}
        {review.dislikedText}
      </p>
    </div>
  ) : null;

  // const displayPropertyResponse = review.propertyResponse ? (
  //   <div className="bg-gray-100 p-4 rounded-md mb-4 flex-grow">
  //     <p className="font-semibold text-sm sm:text-base">Odpowiedź obiektu:</p>
  //     <p className="text-sm sm:text-base">
  //       {review.propertyResponse}
  //     </p>
  //   </div>
  // ) : null;

  const displayImages =
    review.images.length > 0 ? (
      <div className="mt-4">
        <p className="font-semibold text-sm sm:text-base">Zdjęcia:</p>
        <div className="flex flex-wrap gap-2">
          {review.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Zdjęcie z opinii ${review.userName}`}
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
      key={review.id}
      ref={reviewRef}
      className=" border border-gray-300 h-auto p-4 px-12 sm:p-6 sm:px-12  rounded-lg shadow-md bg-white flex flex-col"
    >
      <div className="flex items-center mb-4">
        {review.userAvatar ? (
          <Image
            src={review.userAvatar}
            alt={`${review.userName}'s avatar`}
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
          <h3 className="font-bold text-base sm:text-lg">{review.userName}</h3>
          <p className="text-gray-600 text-xs sm:text-sm">
            {review.userLocation}
          </p>
        </div>
      </div>

      <div className="mb-2 flex items-center">
        <span className="text-yellow-500 text-base sm:text-lg">
          {ratingStars}
        </span>
        {displayRating}
      </div>

      {displayReviewTitle}
      {displayLikedText}
      {displayDislikedText}

      <p className="text-gray-700 mb-4 text-xs sm:text-sm">
        Pobyt: {review.checkInDate} - {review.checkOutDate} (
        {review.numberOfNights} noce)
      </p>

      <p className="text-gray-500 text-xs sm:text-sm">
        Dodano: {formattedDate}
      </p>
      {displayImages}
    </div>
  );
};

const DisplayBookingReviews = ({ reviewsData }: DisplayBookingReviewsProps) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Opinie z Booking.com
      </h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
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
          <SwiperSlide key={review.id} className="grid grid-rows-[auto]">
            <FormatReview review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DisplayBookingReviews;
