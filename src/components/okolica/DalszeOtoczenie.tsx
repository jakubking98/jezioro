import React from "react";
import Slider from "../Slider";
import Image from "next/image";

export default function DalszeOtoczenie() {
  const StadlinaImages = [
    "/stodola/okolica/dalsze/1.png",
    "/stodola/okolica/dalsze/2.jpg",
    "/stodola/okolica/dalsze/3.jpg",
    "/stodola/okolica/dalsze/4.jpg",
    "/stodola/okolica/dalsze/5.jpg",
    "/stodola/okolica/dalsze/6.jpg",
    "/stodola/okolica/dalsze/7.jpg",
  ];
  const JezioroImages = [
    "/stodola/okolica/jezioro/1.jpg",
    "/stodola/okolica/jezioro/2.jpg",
    "/stodola/okolica/jezioro/3.jpg",
    "/stodola/okolica/jezioro/4.jpg",
    "/stodola/okolica/jezioro/5.jpg",
    "/stodola/okolica/jezioro/6.jpg",
    "/stodola/okolica/jezioro/7.jpg",
  ];

  return (
    <>
      <h4 className="text-TextN font-sora text-xl md:text-2xl pt-2 md:pt-10 font-medium">
        DALSZE OTOCZENIE
      </h4>
      <h5 className="text-TextN font-sora text-xl md:text-xl pt-10 font-bold text-center">
        Rancho Appaloosa - Stadnina koni Brejdyny
      </h5>
      <p className="text-TextN font-sora px-5 md:px-0 text-sm md:text-lg text-center py-5 max-w-[1000px] tracking-wide ">
        Kolejną atrakcją jest bliskość Rancha Appaloosa położonego pośród
        malowniczych łąk, lasów i jezior. <br />
        <br /> Bez względu na to, czy jesteś doświadczonym jeźdźcem, czy dopiero
        zaczynasz swoją przygodę z końmi, znajdziesz tu coś dla siebie. <br />
        <br /> Zajęcia z hipoterapii są doskonałym sposobem na stymulację
        równowagi i wyciszenie. <br />
        <br /> Natomiast jazda konna pośród mazurskich krajobrazów pozwala na
        bliskie obcowanie z naturą i odkrywanie uroków regionu z perspektywy
        końskiego grzbietu. <br />
        <br />
        Profesjonalni instruktorzy i wyszkolone konie zapewnią Ci bezpieczeństwo
        i komfort.
      </p>
      <Slider images={StadlinaImages} />
      <h5 className="text-TextN font-sora text-xl md:text-xl pt-2 md:pt-10 font-bold">
        Jezioro Wągiel i plaża
      </h5>
      <p className="text-TextN font-sora px-5 md:px-0 text-sm md:text-lg text-center py-5 max-w-[1000px] tracking-wide ">
        W okolicach miejscowości Brejdyny (1,5km) znajduje się położone w
        dolince Jezioro Wągiel w całości otoczone lasem Kameralna, piaszczysta
        plaża, pomost, wydzielone strefy do pływania i zazwyczaj obecny ratownik
        to udogodnienia oferowane przez to miejsce.
      </p>
      <Slider images={JezioroImages} />
      <div className="flex justify-center relative w-full h-[350px] md:h-[500px] md:px-0">
        <div className=" absolute z-10 flex items-center justify-center text-TextW font-sora text-xl font-bold bg-black bg-opacity-50 w-full  h-[80px] text-center">
          Jak dotrzeć do plaży nad jeziorem Wągiel
        </div>
        <Image
          src="/stodola/okolica/droga.png"
          fill
          className="object-cover w-[1000px] h-[500px]"
          alt={""}
        />
      </div>
      <iframe
        width="600"
        height="350"
        className="mt-5 w-full md:w-[600px] h-[350px] px-4 md:px-0"
        src="https://www.youtube.com/embed/-Qyk1ucgldI?si=H16IjISv2S-3OQdc"
        title="YouTube video player"
        allow=" autoplay; clipboard-write; gyroscope;"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h5 className="text-TextN font-sora text-xl md:text-xl pt-10 font-bold text-center">
        Łatwy Dostęp do Żółtego Szlaku Rowerowego &quot;Ernsta Wiecherta&quot;
      </h5>
      <p className="text-TextN font-sora px-5 md:px-0 text-sm md:text-lg text-center py-5 max-w-[1000px] tracking-wide ">
        Jednym z atutów JezioroSfery jest jej wyjątkowe położenie, które
        umożliwia łatwy dostęp do malowniczego szlaku rowerowego nazwanego na
        cześć słynnego pisarza - Ernsta Wiecherta. <br />
        <br /> Ten urokliwy szlak, będący tuż za progiem naszej stodoły,
        prowadzi przez meandry mazurskiej przyrody: lasy, brzegami jezior, wśród
        polan. Tu rozpoczyna się przygoda, która zadowoli zarówno doświadczonych
        rowerzystów, jak i rodziny z dziećmi. <br /> <br /> Szlak żółty Ernsta
        Wiecherta to szlak rowerowy o długości 44.9 km. Podczas trasy rowerzyści
        pokonają 1018 m podjazdów i 1010 m zjazdów. Najwyższy punkt szlaku jest
        na wysokości 214.0 m n.p.m.
      </p>
      <div className=" w-full md:w-[1000px] h-[500px] ">
        <iframe
          loading="lazy"
          width="100%"
          height="500"
          src="https://velomapa.pl/widzety/f86b1ccb-7308-4dde-b581-a792ef091d45"
        ></iframe>
      </div>
    </>
  );
}
