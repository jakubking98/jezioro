import Footer from "@/components/Footer";
import { GoogleReviewData, ReviewData } from "@/type/type";
import React from "react";
import reviewsData from "@/data/Booking.json" assert { type: "json" };
import googleReviewsData from "@/data/GoogleMap.json" assert { type: "json" };
import DisplayBookingReviews from "@/components/opinie/formatReview";
import DisplayGoogleReviews from "@/components/opinie/FormatGoogleReview ";
import Nav from "@/components/Nav";
import Header from "@/components/opinie/Header";
import BookingPrize from "@/components/opinie/BookingPrize";
import Opinie from "@/components/opinie/Opinie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opinie Gości i Nagrody",
  description:
    "Przeczytaj opinie naszych Gości o pobycie w Jeziorosferze. Zobacz nagrodę Booking.com Traveller Review Award. Twoje zadowolenie jest dla nas najważniejsze.",
  alternates: { canonical: "/opinie-nagrody" },
};

export default function page() {
  return (
    <div className="relative min-h-screen max-w-screen ">
      <Nav isShort={true} />
      <Header />
      <div className="flex w-full flex-col  items-center  bg-BodyC">
        <div className="max-w-[1650px] flex flex-col items-center  w-full">
          <Opinie />
          <div className="flex flex-col md:flex-row w-full gap-8 p-4">
            <div className="w-full md:w-1/2">
              <DisplayBookingReviews
                reviewsData={reviewsData as ReviewData[]}
              />
            </div>
            <div className="w-full md:w-1/2">
              <DisplayGoogleReviews
                reviewsData={googleReviewsData as GoogleReviewData[]}
              />
            </div>
          </div>
          <BookingPrize />
        </div>
        <div className="w-full h-px bg-Line mt-16"> </div>
        <Footer />
      </div>
    </div>
  );
}
