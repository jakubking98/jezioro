import { MetadataRoute } from "next";

const BASE_URL = "https://www.jeziorosfera.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/stodola",
    "/pokoje",
    "/okolica",
    "/opinie-nagrody",
    "/kontakt",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(), // Data ostatniej modyfikacji (możesz ustawić konkretną)
    changeFrequency: "monthly" as const, // Jak często strona się zmienia (np. 'always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never')
    priority: route === "/" ? 1.0 : 0.8, // Priorytet strony (0.0 do 1.0)
  }));

  return staticRoutes;
}
