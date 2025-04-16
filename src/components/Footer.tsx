import React from "react";
import JezioroSfera from "./JezioroSfera";

export default function Footer() {
  return (
    <div className="flex w-full px-4 md:px-10 flex-col items-center bg-MenuC2">
      <div className="max-w-[1650px] flex flex-col bg-MenuC2 w-full mt-5 mb-5 md:mb-10 md:mt-10">
        <JezioroSfera dark={true} />
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 text-lg text-TextN font-semibold font-sora">
            Adres:
            <br />
            Brejdyny 32c <br /> 11-710 Brejdyny
          </div>
          <div className="col-span-12 md:col-span-6 text-lg text-TextN font-semibold  font-sora">
            Kontakt:
            <br />
            +48 510 068 191 <br /> recepcja@jeziorosfera.pl
          </div>
        </div>
      </div>
    </div>
  );
}
