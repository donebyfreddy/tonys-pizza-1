import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Clock, MapPin, Phone } from "lucide-react";
import { useEffect } from "react";
import { useI18n } from "@/i18n";

const featured = [
  {
    name: "Margherita D.O.P.",
    desc: "San Marzano, fior di latte, fresh basil, extra virgin olive oil.",
    price: "$16",
    image:
      "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Diavola",
    desc: "Spicy calabrese salami, smoked provolone, oregano, hot honey.",
    price: "$19",
    image:
      "https://images.pexels.com/photos/166451/pexels-photo-166451.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop",
  },
  {
    name: "Burrata and Pesto",
    desc: "Creamy burrata, basil pesto, cherry tomatoes.",
    price: "$21",
    image:
      "https://images.pexels.com/photos/1527602/pexels-photo-1527602.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop",
  },
];

export default function Index() {
  const { t } = useI18n();
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#visit") {
      const el = document.getElementById("visit");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);
  return (
    <div className="">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <video
            className="h-[75svh] w-full object-cover pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1900&auto=format&fit=crop"
          >
            <source
              src="https://videos.pexels.com/video-files/3196001/3196001-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
            <source
              src="https://videos.pexels.com/video-files/3196001/3196001-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-background/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/90" />
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background/60 to-transparent" />
        </div>
        <div className="container flex min-h-[75svh] flex-col justify-end pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-extrabold tracking-tight text-foreground drop-shadow md:text-6xl"
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-base text-foreground/80 md:text-lg"
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/menu"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {t("hero.viewMenu")}
            </Link>
            <Link
              to="/#visit"
              className="inline-flex items-center rounded-full border border-foreground/20 bg-background/80 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-background"
            >
              {t("hero.bookTable")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Pizzas */}
      <section className="container py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              {t("featured.title")}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {t("featured.subtitle")}
            </p>
          </div>
          <Link
            to="/menu"
            className="hidden rounded-full border px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary md:inline-flex"
          >
            {t("featured.explore")}
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border bg-card shadow-sm"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold tracking-wide text-foreground/90 shadow">
                  {t("featured.chefsPick")}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{item.name}</h3>
                  <span className="font-semibold text-primary">
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Experience strip */}
      <section className="bg-secondary/60 py-12">
        <div className="container grid items-center gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl font-semibold">
              {t("features.dough.title")}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("features.dough.desc")}
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold">
              {t("features.sauce.title")}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("features.sauce.desc")}
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold">
              {t("features.oven.title")}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("features.oven.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <div className="overflow-hidden rounded-3xl border bg-gradient-to-tr from-primary to-accent p-8 text-primary-foreground shadow-lg md:p-12">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-display text-3xl font-bold md:text-4xl">
                {t("cta.title")}
              </h3>
              <p className="mt-2 text-sm opacity-90 md:text-base">
                {t("cta.desc")}
              </p>
              <div className="mt-6">
                <a
                  href="https://glovoapp.com/es/es/barcelona/tonys-from-new-york-barcelona/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-background/15 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-background/20"
                >
                  {t("cta.start")}
                </a>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop"
              alt="Pepperoni pizza"
              className="block h-40 w-full rounded-2xl object-cover shadow-md sm:h-48 md:h-52"
            />
          </div>
        </div>
      </section>

      {/* Visit & hours */}
      <section id="visit" className="container py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-display text-3xl font-bold md:text-4xl">
              {t("visit.title")}
            </h3>
            <p className="max-w-prose text-muted-foreground">
              {t("visit.intro")}
            </p>
            <div className="grid gap-4 rounded-2xl border bg-card p-6">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">{t("visit.hours")}</div>
                  <ul className="mt-1 text-sm text-muted-foreground">
                    <li>{t("visit.monThu")}</li>
                    <li>{t("visit.friSat")}</li>
                    <li>{t("visit.sun")}</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">
                    Av. de Vallvidrera, 77, Sarrià-Sant Gervasi, 08017 Barcelona
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t("visit.addressNote")}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">930 37 05 90</div>
                  <div className="text-sm text-muted-foreground">
                    {t("visit.phoneNote")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.398916328497!2d2.1082320747981536!3d41.40885839466508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a499ad15ac0e75%3A0x8250c5940237ade!2sTony%27s%20From%20New%20York!5e0!3m2!1sen!2ses!4v1756635063547!5m2!1sen!2ses"
              className="h-[360px] w-full md:h-[460px] lg:h-[520px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
