import Image from "next/image";
import React from "react";

export default function BookingPrize() {
  return (
    <>
      <div className="w-full max-w-[900px] px-5 md:px-0 py-10 border-t border-b border-Line my-10">
        <h3 className="text-TextN font-sora text-2xl md:text-3xl text-center font-semibold tracking-wider mb-6">
          Docenieni przez Gości - Nagroda Booking.com Traveller Review Award
          2025 i 2026 (10/10)
        </h3>
        <p className="text-TextN font-sora text-sm md:text-lg text-center mb-8 tracking-wide">
          Chcemy, aby nasi Goście wiedzieli, że staramy się zapewniać najwyższe
          standardy. Zawsze pytamy o dodatkowe potrzeby i podejmujemy się im
          sprostać, wiedząc, jak istotne jest spędzenie czasu z bliskimi, czy
          przyjaciółmi bez napotykania na jakiekolwiek niedogodności.
          <br />
          <br /> Dzięki pozytywnym wrażeniom naszych Gości, po raz drugi
          otrzymaliśmy od booking.com nagrodę
          <strong>Traveller Review Award 2025</strong> z najwyższą możliwą do
          zdobycia oceną - <strong>10</strong> <br />
          <br /> Ta forma doceniania gwarantuje Gościom wysoką jakość
          świadczonych usług. <br />
          Serdecznie dziękujemy za to wyróżnienie, szczególnie że otrzymujemy tą
          nagrodę za każdy rok naszej działaności. Do zobaczenia w
          Jeziorosferze.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <div className="relative w-[300px] h-[250px] md:w-[400px] md:h-[400px]">
            <Image
              src="/stodola/opinie/bookingPrize2026.png"
              alt="Nagroda Booking.com - Traveller Review Award 2026"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative w-[300px] h-[250px] md:w-[400px] md:h-[400px]">
            <Image
              src="/stodola/opinie/bookingPrize12026.png"
              alt="Nagroda Booking.com - Ocena 10/10"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <div className="relative w-[300px] h-[250px] md:w-[400px] md:h-[400px]">
            <Image
              src="/stodola/opinie/bookingPrize.png"
              alt="Nagroda Booking.com - Traveller Review Award 2025"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative w-[300px] h-[250px] md:w-[400px] md:h-[400px]">
            <Image
              src="/stodola/opinie/bookingPrize1.png"
              alt="Nagroda Booking.com - Ocena 10/10"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
