import React from "react";
import Slider from "../Slider";
import Image from "next/image";

// Definicja typu ImageData (można też zaimportować, jeśli jest w osobnym pliku)
interface ImageData {
  src: string;
  alt: string;
}

export default function TrocheDalej() {
  // Obrazy dla spływów kajakowych z opisowymi altami
  const KajakiImages: ImageData[] = [
    {
      src: "/stodola/okolica/kajaki/1.jpg",
      alt: "Spływ kajakowy rzeką Krutynią - kajaki na wodzie wśród zieleni",
    },
    {
      src: "/stodola/okolica/kajaki/2.jpg",
      alt: "Malownicza rzeka Krutynia - widok z kajaka na spokojną wodę i las",
    },
    {
      src: "/stodola/okolica/kajaki/3.jpg",
      alt: "Grupa kajakarzy płynąca rzeką Krutynią na Mazurach",
    },
    {
      src: "/stodola/okolica/kajaki/4.jpg",
      alt: "Kajak na brzegu rzeki Krutyni, gotowy do spływu",
    },
  ];

  // Obrazy dla Parku Dzikich Zwierząt z opisowymi altami
  const ParkImages: ImageData[] = [
    {
      src: "/stodola/okolica/park/1.jpg",
      alt: "Park Dzikich Zwierząt Kadzidłowo - Jeleń na terenie parku",
    },
    {
      src: "/stodola/okolica/park/2.jpg",
      alt: "Park Dzikich Zwierząt Kadzidłowo - Bociany w gnieździe",
    },
    {
      src: "/stodola/okolica/park/3.jpg",
      alt: "Park Dzikich Zwierząt Kadzidłowo - Dzikie ptactwo wodne na stawie",
    },
    {
      src: "/stodola/okolica/park/4.jpg",
      alt: "Park Dzikich Zwierząt Kadzidłowo - Osły na wybiegu",
    },
    {
      src: "/stodola/okolica/park/5.jpg",
      alt: "Park Dzikich Zwierząt Kadzidłowo - Tarpany (dzikie konie) na pastwisku",
    },
    {
      src: "/stodola/okolica/park/6.jpg",
      alt: "Park Dzikich Zwierząt Kadzidłowo - Zwiedzający obserwujący zwierzęta",
    },
    {
      src: "/stodola/okolica/park/7.jpg",
      alt: "Park Dzikich Zwierząt Kadzidłowo - Wilki w swojej zagrodzie",
    },
  ];

  return (
    <>
      <h4 className="text-TextN font-sora text-xl md:text-2xl pt-10 font-medium">
        TROSZKĘ DALEJ
      </h4>
      <h5 className="text-TextN font-sora text-xl md:text-xl pt-10 font-bold">
        Spływ rzeką Krutynią
      </h5>
      <p className="text-TextN font-sora px-5 md:px-0 text-sm md:text-lg text-center py-5 max-w-[1000px] tracking-wide ">
        W troszkę dalszej okolicy od naszego obiektu możesz wziąć udział w
        niezapomnianym spływie kajakowym rzeką Krutynią, jedną z
        najpiękniejszych rzek na Mazurach. Poniżej przedstawiamy kilka
        popularnych tras, które zadowolą zarówno początkujących, jak i
        doświadczonych kajakarzy. <br /> <br />
        <b>Krutyń - Ukta (13 km, ok. 4-5 godzin płynięcia)</b>
        <br />
        Najbardziej popularna trasa jednodniowego spływu. Startujemy w
        miejscowości Krutyń, gdzie wodujemy kajaki i płyniemy z nurtem rzeki
        Krutyni. Trasa prowadzi przez piękne, unikatowe lasy i przezroczystą
        wodę, obfitującą w roślinność. Na trasie znajduje się pięć mostów i
        młyn, przy którym przenosimy kajaki. Spływ kończymy w Ukcie. <br />
        <br />
        <b>Krutyń - Rosocha (6 km, ok. 2-3 godziny płynięcia)</b>
        <br />
        Idealna trasa dla osób mających mniej czasu. Spływ zaczyna się w Krutyni
        i kończy w Rosochy, mijając po drodze trzy mosty. Trasa jest łatwa i
        malownicza, doskonała na krótszy wypad. <br /> <br />
        <b>Krutyń - Nowy Most (21 km, ok. 6-7 godzin płynięcia)</b>
        <br />
        Dłuższa trasa, która prowadzi przez różnorodne krajobrazy. Na trasie
        znajduje się sześć mostów, w tym drewniany most w Wojnowie oraz resztki
        mostu kolejowego. Spływ kończy się w małej osadzie Nowy Most. <br />
        <br />
        <b>Krutyń - Iznota (30 km, ok. 8 godzin płynięcia)</b>
        <br />
        Dla bardziej zaawansowanych kajakarzy polecamy trasę prowadzącą aż do
        Iznocie. Na tej trasie mijamy siedem mostów i przepływamy przez kilka
        jezior, w tym Jezioro Gardyńskie i Jezioro Malinówko. Spływ kończymy w
        Iznocie. <br /> <br />
      </p>
      {/* Użycie Slidera z obiektami ImageData */}
      <Slider images={KajakiImages} />

      <h5 className="text-TextN font-sora text-xl md:text-xl pt-2 md:pt-10 font-bold">
        Mrągowo
      </h5>
      <p className="text-TextN font-sora px-5 md:px-0 text-sm md:text-lg text-center py-5 max-w-[1000px] tracking-wide ">
        Z naszego obiektu w zaledwie 12 minut samochodem można dotrzeć do
        Mrągowa &ndash; malowniczego miasteczka położonego w sercu Mazur.
        Mrągowo oferuje liczne atrakcje turystyczne, w tym urokliwe jeziora,
        zabytkowe budowle i bogatą ofertę kulturalną. To idealne miejsce na
        jednodniowy wypad, pełen wrażeń i pięknych widoków.
      </p>
      <div className="flex justify-center relative w-full md:w-[1000px] h-[500px]">
        <Image
          src="/stodola/okolica/mragowo.jpg"
          fill
          className="object-cover"
          alt="Mrągowo - Widok na jezioro Czos i amfiteatr" // Dodano opisowy alt
          loading="lazy" // Dodano lazy loading
        />
      </div>

      <h5 className="text-TextN font-sora text-xl md:text-xl pt-10 font-bold">
        Park Dzikich Zwierząt Kadzidłowo
      </h5>
      <p className="text-TextN font-sora px-5 md:px-0 text-sm md:text-lg text-center py-5 max-w-[1000px] tracking-wide ">
        Park Dzikich Zwierząt Kadzidłowo, położony w sercu Puszczy Piskiej, to
        miejsce, gdzie możesz spotkać różnorodne gatunki zwierząt w ich
        naturalnym środowisku.
        <br /> <br />
        Zwiedzanie odbywa się z przewodnikiem w formie edukacyjnej wycieczki,
        która trwa około 1,5 godziny i prowadzi przez zagrody ze zwierzętami.
        <br /> <br />
        Podczas wycieczki wchodzisz bezpośrednio na tereny zamieszkałe przez
        zwierzęta, co daje możliwość bliskiego kontaktu z nimi. Przewodnik
        opowie o zwyczajach zwierząt i konieczności ich ochrony.
        <br /> <br />
        Dowiesz się, które zwierzęta można karmić przygotowaną karmą, dostępną w
        kasie Parku za symboliczną złotówkę. Ta interakcja sprawia, że wizyta w
        Parku pozostaje na długo w pamięci.
      </p>
      {/* Użycie Slidera z obiektami ImageData */}
      <Slider images={ParkImages} />

      <h5 className="text-TextN font-sora text-xl md:text-xl pt-2 md:pt-10 font-bold">
        Mikołajki
      </h5>
      <p className="text-TextN font-sora px-5 md:px-0 text-sm md:text-lg text-center py-5 max-w-[1000px] tracking-wide ">
        Wystarczy tylko 23 minuty jazdy samochodem, aby dotrzeć do Mikołajek
        &ndash; tętniącego życiem miasteczka na Mazurach, znanego jako
        &quot;Perła Mazur&quot;. Mikołajki przyciągają turystów wspaniałymi
        widokami, licznymi atrakcjami wodnymi oraz wyjątkową atmosferą. To
        idealne miejsce na wypoczynek nad jeziorami, degustację lokalnych
        specjałów w urokliwych restauracjach i kawiarni oraz aktywne spędzenie
        czasu na świeżym powietrzu.
      </p>
      <div className="flex justify-center relative w-full md:w-[1000px] h-[500px]">
        <Image
          src="/stodola/okolica/mikolajki.jpg"
          fill
          className="object-cover"
          alt="Mikołajki - Port jachtowy i promenada nad Jeziorem Mikołajskim" // Dodano opisowy alt
          loading="lazy" // Dodano lazy loading
        />
      </div>
    </>
  );
}
