import { createContext, useContext, useMemo, useState, PropsWithChildren, useEffect } from "react";

export type Locale = "es" | "en";

type Dict = Record<string, any>;

const dict: Record<Locale, Dict> = {
  es: {
    brand: {
      name: "Tony's Pizza",
      tagline: "Pizzas muy buenas",
    },
    nav: { home: "Inicio", menu: "Menú", about: "Nosotros", contact: "Contacto", order: "Pedir ahora" },
    hero: {
      title: "Sabor auténtico, pizza de calidad.",
      subtitle:
        "Masa fermentada 72 horas. Tomates San Marzano. Fior di latte. Horneada a alta temperatura para una corteza aireada deliciosa.",
      viewMenu: "Ver menú",
      bookTable: "Reservar mesa",
    },
    featured: { title: "Pizzas destacadas", subtitle: "Selecciones de temporada de nuestra cocina.", chefsPick: "Recomendación del chef" },
    features: {
      dough: { title: "Masa de 72 horas", desc: "Fermentación en frío para más sabor y una cornisa aireada." },
      sauce: { title: "San Marzano DOP", desc: "Salsa con tomates de suelo volcánico cerca del Vesubio." },
      oven: { title: "Horno de alta temperatura", desc: "Corteza dorada y crujiente en segundos." },
    },
    cta: { title: "Pide para llevar esta noche", desc: "Evita la fila. Tu pizza se horneará al llegar.", start: "Empezar pedido" },
    visit: {
      title: "Visítanos",
      intro: "Ven a comer o cenar. Siempre reservamos mesas para quienes vienen sin reserva.",
      hours: "Horario",
      monThu: "Lun–Jue: 13:00 – 22:00",
      friSat: "Vie–Sáb: 13:00 – 22:00",
      sun: "Dom: 19:00 – 22:00",
      addressNote: "Aparcamiento en la calle • Sin necesidad de reserva",
      phoneNote: "Llámanos para grupos grandes y catering",
    },
    footer: { navigate: "Navegación", hours: "Horario" },
    pages: {
      menu: { title: "Nuestro Menú", subtitle: "Hecho con ingredientes importados y horneado a la perfección en nuestro horno de alta temperatura." },
      about: { title: "Sobre Tony's Pizza", body: "Somos una pizzería moderna inspirada en Nápoles. Nuestra masa fermenta durante 72 horas y cada pizza se hornea en un horno de alta temperatura. Si quieres, puedo completar esta página con nuestra historia completa, equipo y fotos." },
      contact: { title: "Contacto", body: "Llámanos al (415) 555‑0123 o visítanos en 21 Via Napoli, San Francisco. ¿Quieres un formulario con mapa y reservas? Puedo añadirlo después." },
    },
    lang: { es: "ES", en: "EN" },
  },
  en: {
    brand: { name: "Tony's Pizza", tagline: "Really good pizza" },
    nav: { home: "Home", menu: "Menu", about: "About", contact: "Contact", order: "Order now" },
    hero: {
      title: "Authentic flavor, quality pizza.",
      subtitle:
        "72‑hour fermented dough. San Marzano tomatoes. Fior di latte. Baked in a high‑heat oven for an airy, delicious crust.",
      viewMenu: "View menu",
      bookTable: "Book a table",
    },
    featured: { title: "Featured Pizzas", subtitle: "Seasonal highlights from our kitchen.", chefsPick: "Chef's pick" },
    features: {
      dough: { title: "72‑Hour Dough", desc: "Cold-fermented for depth of flavor and an airy cornicione." },
      sauce: { title: "San Marzano DOP", desc: "Our sauce uses tomatoes grown in volcanic soil near Vesuvius." },
      oven: { title: "High‑heat oven", desc: "Beautifully blistered crust in seconds." },
    },
    cta: { title: "Order for pickup tonight", desc: "Skip the line. Your pie will be fired the moment you arrive.", start: "Start order" },
    visit: {
      title: "Visit us",
      intro: "Join us for lunch or dinner. We keep a portion of our dining room for walk‑ins every day.",
      hours: "Opening hours",
      monThu: "Mon–Thu: 1:00p – 10:00p",
      friSat: "Fri–Sat: 1:00p – 10:00p",
      sun: "Sun: 7:00p – 10:00p",
      addressNote: "Street parking available • Walk‑ins welcome",
      phoneNote: "Call for large parties and catering",
    },
    footer: { navigate: "Navigate", hours: "Hours" },
    pages: {
      menu: { title: "Our Menu", subtitle: "Crafted with imported ingredients and baked to perfection in our high‑heat oven." },
      about: { title: "About Tony's Pizza", body: "We are a modern pizzeria inspired by Naples. Our dough ferments for 72 hours and every pie bakes in a high‑heat oven. If you'd like, I can fill this page with our full story, team, and photos." },
      contact: { title: "Contact", body: "Reach us at (415) 555‑0123 or visit 21 Via Napoli, San Francisco. Want a contact form with maps and booking? I can add that next." },
    },
    lang: { es: "ES", en: "EN" },
  },
};

function get(obj: Dict, path: string) {
  return path.split(".").reduce((acc: any, key) => (acc ? acc[key] : undefined), obj);
}

interface I18nCtx {
  locale: Locale;
  t: (key: string) => string;
  setLocale: (l: Locale) => void;
  toggle: () => void;
}

const I18nContext = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale>(() => (localStorage.getItem("locale") as Locale) || "es");

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const value = useMemo<I18nCtx>(() => ({
    locale,
    t: (key: string) => get(dict[locale], key) ?? key,
    setLocale,
    toggle: () => setLocale((l) => (l === "es" ? "en" : "es")),
  }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
