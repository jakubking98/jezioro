import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Slider from "@/components/Slider";
import AboutUs from "@/components/stodola/AboutUs";
import DisplayGoogleReviews from "@/components/stodola/FormatGoogleReview ";
import DisplayBookingReviews from "@/components/stodola/formatReview";
import Galery from "@/components/stodola/Galery";
import Header from "@/components/stodola/Header";
import OurHouse from "@/components/stodola/OurHouse";
import reviewsData from "@/data/Booking.json" assert { type: "json" };
import googleReviewsData from "@/data/GoogleMap.json" assert { type: "json" };
import { GoogleReviewData, ReviewData } from "@/type/type";

export default function StodolaPage() {
  const stodolaImages = [
    "/stodola/slider/1.jpg",
    "/stodola/slider/2.jpg",
    "/stodola/slider/3.jpg",
    "/stodola/slider/4.jpg",
    "/stodola/slider/5.jpg",
    "/stodola/slider/6.jpg",
    "/stodola/slider/7.jpg",
  ];

  return (
    <div className="relative min-h-screen max-w-screen ">
      <Nav />
      <Header />
      <div className="flex w-full flex-col  items-center  bg-BodyC">
        <div className="max-w-[1650px] flex flex-col items-center  w-full">
          <AboutUs />
          <Slider images={stodolaImages} />
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

          <OurHouse />
          <Galery />
        </div>
        <div className="w-full h-px bg-Line mt-16"> </div>
        <Footer />
      </div>
    </div>
  );
}
