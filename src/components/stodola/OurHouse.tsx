import React from "react";

export default function OurHouse() {
  return (
    <>
      <h2 className="text-TextN font-sora text-xl py-10">NASZ DOM</h2>
      <h3 className="text-TextN font-sora text-3xl md:text-4xl font-semibold tracking-widest">
        ODPOCZNIJ
      </h3>
      <h3 className="text-TextN font-ogg text-3xl md:text-4xl text-center font-thin tracking-widest">
        KOJĄC ZMYSŁY NATURĄ
      </h3>
      <p className="text-TextN font-sora px-5 md:px-0 text-sm md:text-lg text-center py-10 max-w-[900px] tracking-wide ">
        Zamieniliśmy starą, drewnianą stodołę na dom wykonany z naturalnych
        materiałów. Jest przestronny, z wieloma oknami zorientowanymi na
        jezioro, pozwalającymi obcować z przyrodą. <br /> <br />
        Na dolnym poziomie otwarta przestrzeń ze strefą kuchenną zapewnia
        możliwość wspólnego gotowania i pobycia ze sobą. U góry antresola z
        wodnym klimatem sprawi, że poczujesz się, jak na łódce a pokoje zapewnią
        ucieczkę w przytulny świat snu. <br />
        <br /> Pozostawiamy dla Ciebie Jeziorosferę, czyli 190m2 stodoły, która
        oferuje cztery, komfortowe sypialnie, z których trzy wyposażone są w
        duże, podwójne łóżka, a jedna w dwa pojedyncze łóżka. Domek może
        wygodnie pomieścić 8 gości.
        <br /> <br /> Trzy nowoczesne łazienki to wygoda i prywatność wszystkich
        mieszkańców oraz zapewnienie komfortu porannej toalety. <br /> <br />
        Przestronny salon jest sercem domu, idealnym miejscem do wspólnego
        spędzania czasu, relaksu i podziwiania widoków za oknem. W salonie
        znajduje się również duży drewniany stół, przy którym wygodnie może
        spożywać posiłki 8-osobowa grupa.
      </p>
      <h3 className="text-TextN font-sora text-lg md:text-xl py-2 font-semibold">
        STODOŁA WEWNĄTRZ
      </h3>
      <h4 className="text-TextN font-sora px-5 md:px-0 text-lg md:text-xl py-4 text-center">
        60m2 otwartej przestrzeni z 12 metrową zabudową kuchenną oraz antresolą
        o powierzchni 30m2.
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[900px]">
        <div className=" w-full md:w-[400px] col-span-1 text-gray-200 text-center">
          <h4 className="text-TextN font-sora text-lg md:text-xl py-4">
            A do spania:
          </h4>
          <ul className="list-inside text-TextN space-y-4 text-base md:text-lg">
            <li>Sypialnia 1: 1 duże łóżko podwójne</li>
            <li>Sypialnia 2: 1 duże łóżko podwójne</li>
            <li>Sypialnia 3: 2 łóżka pojedyncze</li>
            <li>Sypialnia 4: 1 łóżko podwójne</li>
          </ul>
        </div>
        <div className="w-full md:w-[400px] col-span-1 text-gray-200 text-center mt-4 md:mt-0">
          <h4 className="text-TextN font-sora text-lg md:text-xl py-4">
            A co z toaletą:
          </h4>
          <ul className="list-inside text-TextN space-y-3 text-base md:text-lg">
            <li>3 łazienki wyposażone w:</li>
            <ul className="list-disc list-inside pl-4">
              <li>Prysznic</li>
              <li>Umywalkę</li>
              <li>WC</li>
            </ul>
            <li>Dodatkowa toaleta bez prysznica</li>
          </ul>
        </div>
      </div>
    </>
  );
}
