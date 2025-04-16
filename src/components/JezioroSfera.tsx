interface JezioroSferaProps {
  isScrolled?: boolean;
  dark?: boolean;
}

export default function JezioroSfera({ isScrolled, dark }: JezioroSferaProps) {
  return (
    <svg
      viewBox="0 0 620 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[250px]"
    >
      <defs>
        <filter id="shadow">
          <feDropShadow
            dx="1"
            dy="1"
            stdDeviation="2"
            floodColor="rgba(0,0,0,0.1)"
          />
        </filter>
      </defs>

      <text
        x="0"
        y="130"
        fontSize="80"
        fontWeight="600"
        className={`font-sora text-6xl sm:text-7xl md:text-8xl font-semibold ${
          isScrolled || dark ? "fill-TextN" : "fill-white"
        }`}
        style={{ filter: "url(#shadow)" }}
      >
        Jeziorosfera
      </text>
    </svg>
  );
}
