import {
  createContext,
  useContext,
  useMemo,
  useState,
  PropsWithChildren,
  useEffect,
} from "react";

export type Locale = "es" | "en";

type Dict = Record<string, any>;

const dict: Record<Locale, Dict> = {
  es: {
    brand: {
      name: "Tony's Pizza New York",
      tagline: "Pizza al horno de leña",
    },
    nav: {
      home: "Inicio",
      menu: "Menú",
      about: "Nosotros",
      contact: "Contacto",
      order: "Pedir ahora",
    },
    hero: {
      title: "Sabor auténtico, pizza de calidad",
      subtitle:
        "Masa fermentada 72 horas. Tomates San Marzano. Fior di latte. Horneada a 480°C para una corteza aireada con manchas de leopardo.",
      viewMenu: "Ver menú",
      bookTable: "Reservar mesa",
    },
    featured: {
      title: "Pizzas destacadas",
      subtitle: "Selecciones de temporada de nuestro horno de leña.",
      chefsPick: "Recomendación del chef",
    },
    features: {
      dough: {
        title: "Masa de 72 horas",
        desc: "Fermentación en frío para más sabor y una cornisa aireada.",
      },
      sauce: {
        title: "San Marzano DOP",
        desc: "Salsa con tomates de suelo volcánico cerca del Vesubio.",
      },
      oven: {
        title: "Horno de 900°F",
        desc: "Corteza con manchas de leopardo en 90 segundos.",
      },
    },
    cta: {
      title: "Pide para llevar esta noche",
      desc: "Evita la fila. Tu pizza se horneará al llegar.",
      start: "Empezar pedido",
    },
    visit: {
      title: "Visítanos",
      intro:
        "Ven a comer o cenar. Siempre reservamos mesas para quienes vienen sin reserva.",
      hours: "Horario",
      monThu: "Lun–Jue: 13:00 – 22:00",
      friSat: "Vie–Sáb: 13:00 – 22:00",
      sun: "Dom: 19:00 – 22:00",
      addressNote: "Aparcamiento en la calle • Sin necesidad de reserva",
      phoneNote: "Llámanos para grupos grandes y catering",
    },
    footer: { navigate: "Navegación", hours: "Horario" },
    pages: {
      menu: {
        title: "Nuestro Menú",
        subtitle:
          "Hecho con ingredientes importados y horneado a la perfección en nuestro horno de leña.",
      },
      about: {
        title: "Sobre Tony's Pizza",
        body: "Somos una pizzería moderna inspirada en Nápoles. Nuestra masa fermenta durante 72 horas y cada pizza se hornea en un horno de leña a 900°F. Si quieres, puedo completar esta página con nuestra historia completa, equipo y fotos.",
      },
      contact: {
        title: "Contacto",
        body: "Llámanos al 930 37 05 90 o visítanos en Av. de Vallvidrera, 77, Sarrià-Sant Gervasi, 08017 Barcelona. ¿Quieres un formulario con mapa y reservas? Puedo añadirlo después.",
      },
    },
    lang: { es: "ES", en: "EN" },
  },
  en: {
    brand: { name: "Tony's Pizza", tagline: "Wood-fired Pizza" },
    nav: {
      home: "Home",
      menu: "Menu",
      about: "About",
      contact: "Contact",
      order: "Order now",
    },
    hero: {
      title: "Wood‑Fired Pizza, Made in Napoli Tradition",
      subtitle:
        "Dough fermented 72 hours. San Marzano tomatoes. Fior di latte. Baked in a 900°F oven for a blistered, airy crust.",
      viewMenu: "View menu",
      bookTable: "Book a table",
    },
    featured: {
      title: "Featured Pizzas",
      subtitle: "Seasonal highlights from our wood-fired oven.",
      chefsPick: "Chef's pick",
    },
    features: {
      dough: {
        title: "72‑Hour Dough",
        desc: "Cold-fermented for depth of flavor and an airy cornicione.",
      },
      sauce: {
        title: "San Marzano DOP",
        desc: "Our sauce uses tomatoes grown in volcanic soil near Vesuvius.",
      },
      oven: {
        title: "900°F Wood Fire",
        desc: "A blistered crust with leopard spots in 90 seconds flat.",
      },
    },
    cta: {
      title: "Order for pickup tonight",
      desc: "Skip the line. Your pie will be fired the moment you arrive.",
      start: "Start order",
    },
    visit: {
      title: "Visit us",
      intro:
        "Join us for lunch or dinner. We keep a portion of our dining room for walk‑ins every day.",
      hours: "Opening hours",
      monThu: "Mon–Thu: 1:00p – 10:00p",
      friSat: "Fri–Sat: 1:00p – 10:00p",
      sun: "Sun: 7:00p – 10:00p",
      addressNote: "Street parking available • Walk‑ins welcome",
      phoneNote: "Call for large parties and catering",
    },
    footer: { navigate: "Navigate", hours: "Hours" },
    pages: {
      menu: {
        title: "Our Menu",
        subtitle:
          "Crafted with imported ingredients and baked to perfection in our wood‑fired oven.",
      },
      about: {
        title: "About Rosso Forno",
        body: "We are a modern pizzeria inspired by Naples. Our dough ferments for 72 hours and every pie bakes in a 900°F wood‑fired oven. If you'd like, I can fill this page with our full story, team, and photos.",
      },
      contact: {
        title: "Contact",
        body: "Reach us at +34 930 37 05 90 or visit Av. de Vallvidrera, 77, Sarrià-Sant Gervasi, 08017 Barcelona. Want a contact form with maps and booking? I can add that next.",
      },
    },
    lang: { es: "ES", en: "EN" },
  },
};

function get(obj: Dict, path: string) {
  return path
    .split(".")
    .reduce((acc: any, key) => (acc ? acc[key] : undefined), obj);
}

interface I18nCtx {
  locale: Locale;
  t: (key: string) => string;
  setLocale: (l: Locale) => void;
  toggle: () => void;
}

const I18nContext = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale>(
    () => (localStorage.getItem("locale") as Locale) || "es",
  );

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const value = useMemo<I18nCtx>(
    () => ({
      locale,
      t: (key: string) => get(dict[locale], key) ?? key,
      setLocale,
      toggle: () => setLocale((l) => (l === "es" ? "en" : "es")),
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
