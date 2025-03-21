import React from "react";
import Slider from "../Slider";

export default function OtoczenieOpis() {
  const OkolicaImages = [
    "/stodola/okolica/blisko/1.jpg",
    "/stodola/okolica/blisko/2.jpg",
    "/stodola/okolica/blisko/3.jpg",
    "/stodola/okolica/blisko/4.jpg",
    "/stodola/okolica/blisko/5.jpg",
  ];
  return (
    <>
      <h2 className="text-TextN font-sora text-xl py-10 ">OTOCZENIE</h2>
      <h3 className="text-TextN font-sora text-3xl md:text-4xl font-semibold tracking-widest text-center">
        RELAKS CZY AKTYWNOŚĆ
      </h3>
      <h3 className="text-TextN font-ogg text-3xl md:text-4xl font-thin tracking-widest text-center mt-4">
        TY WYBIERASZ
      </h3>
      <h4 className="text-TextN font-sora text-xl md:text-2xl pt-10 font-medium">
        NAJBLIŻSZE OTOCZENIE
      </h4>
      <p className="text-TextN font-sora px-5 md:px-0 text-sm md:text-lg text-center py-5 max-w-[900px] tracking-wide ">
        Delektuj się śniadaniem i kawą na tarasie w towarzystwie przyrody.
        Skorzystaj z paleniska lub chaty grillowej, jeśli poczujesz większy głód
        i pomyślisz o gotowaniu na powietrzu. <br /> <br /> Zregeneruj się.
        Usiądź na leżaku , zanurz się w bujanych siedziskach. Oddajemy Ci do
        dyspozycji 1800m2 ogrodu. <br />
        <br /> Wypłyń łódką na spokojne wody jeziora. Spróbuj swoich sił w
        wędkarstwie i złap świeżą rybę. Żeby Ci ułatwić połów linów, szczupaków
        i karasi zapewniliśmy łódkę i drewniany pomost. <br />
        <br /> Dla miłośników rowerów jest gotowy parking, z którego można
        rozpocząć jazdę do Żółtego Szlaku oddalonego o 800 m od JezioroSfery.
        Dla wytrwałych, dojazd do Mrągowa zapewnia włączenie się do Mazurskiej
        Pętli Rowerowej.
      </p>
      <Slider images={OkolicaImages} />
    </>
  );
}
