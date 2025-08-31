import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, MapPin, Phone } from "lucide-react";

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
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Funghi Truffle",
    desc: "Roasted mushrooms, taleggio, thyme, white truffle oil.",
    price: "$21",
    image:
      "https://images.unsplash.com/photo-1600628421055-4d35cf04f615?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function Index() {
  return (
    <div className="">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <video
            className="h-[90svh] w-full object-cover pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1900&auto=format&fit=crop"
          >
            <source src="https://videos.pexels.com/video-files/3196001/3196001-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/3196001/3196001-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/90" />
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background/60 to-transparent" />
        </div>
        <div className="container flex min-h-[85svh] flex-col justify-end pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-extrabold tracking-tight text-foreground drop-shadow md:text-6xl"
          >
            Wood‑Fired Pizza, Made in Napoli Tradition
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-base text-foreground/80 md:text-lg"
          >
            Dough fermented 72 hours. San Marzano tomatoes. Fior di latte. Baked in a 900°F oven for a blistered, airy crust.
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
              View menu
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-foreground/20 bg-background/80 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-background"
            >
              Book a table
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Pizzas */}
      <section className="container py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Featured Pizzas</h2>
            <p className="mt-2 text-muted-foreground">Seasonal highlights from our wood-fired oven.</p>
          </div>
          <Link
            to="/menu"
            className="hidden rounded-full border px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary md:inline-flex"
          >
            Explore full menu
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
                <img src={item.image} alt={item.name} className="h-56 w-full object-cover transition duration-300 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold tracking-wide text-foreground/90 shadow">Chef's pick</span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{item.name}</h3>
                  <span className="font-semibold text-primary">{item.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Experience strip */}
      <section className="bg-secondary/60 py-12">
        <div className="container grid items-center gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl font-semibold">72‑Hour Dough</h3>
            <p className="mt-2 text-sm text-muted-foreground">Cold-fermented for depth of flavor and an airy cornicione.</p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold">San Marzano DOP</h3>
            <p className="mt-2 text-sm text-muted-foreground">Our sauce uses tomatoes grown in volcanic soil near Vesuvius.</p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold">900°F Wood Fire</h3>
            <p className="mt-2 text-sm text-muted-foreground">A blistered crust with leopard spots in 90 seconds flat.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <div className="overflow-hidden rounded-3xl border bg-gradient-to-tr from-primary to-accent p-8 text-primary-foreground shadow-lg md:p-12">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-display text-3xl font-bold md:text-4xl">Order for pickup tonight</h3>
              <p className="mt-2 text-sm opacity-90 md:text-base">Skip the line. Your pie will be fired the moment you arrive.</p>
              <div className="mt-6">
                <Link
                  to="/menu"
                  className="inline-flex items-center rounded-full bg-background/15 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-background/20"
                >
                  Start order
                </Link>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop"
              alt="Pepperoni pizza"
              className="hidden h-52 w-full rounded-2xl object-cover shadow-md md:block"
            />
          </div>
        </div>
      </section>

      {/* Visit & hours */}
      <section className="container py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-display text-3xl font-bold md:text-4xl">Visit us</h3>
            <p className="max-w-prose text-muted-foreground">
              Join us for lunch or dinner. We keep a portion of our dining room for walk‑ins every day.
            </p>
            <div className="grid gap-4 rounded-2xl border bg-card p-6">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">Opening hours</div>
                  <ul className="mt-1 text-sm text-muted-foreground">
                    <li>Mon–Thu: 11:30a – 10:00p</li>
                    <li>Fri–Sat: 11:30a – 11:30p</li>
                    <li>Sun: 11:30a – 9:30p</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">21 Via Napoli, San Francisco, CA</div>
                  <div className="text-sm text-muted-foreground">Street parking available • Walk‑ins welcome</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">(415) 555‑0123</div>
                  <div className="text-sm text-muted-foreground">Call for large parties and catering</div>
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
