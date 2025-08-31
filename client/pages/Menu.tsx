import { motion } from "framer-motion";

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  image?: string;
};

const categories: { title: string; items: MenuItem[] }[] = [
  {
    title: "Classics",
    items: [
      {
        name: "Margherita D.O.P.",
        desc: "San Marzano, fior di latte, basil, EVOO.",
        price: "$16",
        image:
          "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Pepperoni",
        desc: "Cup-and-char pepperoni, mozzarella, oregano.",
        price: "$18",
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Bianca",
        desc: "Garlic ricotta, mozzarella, pecorino, arugula.",
        price: "$17",
        image:
          "https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "Signatures",
    items: [
      {
        name: "Diavola",
        desc: "Calabrese salami, smoked provolone, hot honey.",
        price: "$19",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Funghi Truffle",
        desc: "Roasted mushrooms, taleggio, thyme, white truffle oil.",
        price: "$21",
        image:
          "https://images.unsplash.com/photo-1600628421055-4d35cf04f615?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Prosciutto e Rucola",
        desc: "Prosciutto di Parma, arugula, shaved grana.",
        price: "$20",
        image:
          "https://images.unsplash.com/photo-1510688602199-4f2629a27496?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "Sides & Salads",
    items: [
      { name: "Wood‑Roasted Olives", desc: "Citrus, rosemary, chili.", price: "$8" },
      { name: "Caesar", desc: "Little gem, parm, sourdough croutons.", price: "$12" },
      { name: "Burrata", desc: "Tomatoes, basil, Sicilian olive oil.", price: "$14" },
    ],
  },
  {
    title: "Drinks",
    items: [
      { name: "Italian Soda", desc: "Blood orange, chinotto, lemon.", price: "$6" },
      { name: "House Red/White", desc: "By the glass.", price: "$10" },
      { name: "Birra Moretti", desc: "Lager, 12oz.", price: "$7" },
    ],
  },
];

export default function Menu() {
  return (
    <div className="">
      <section className="border-b bg-secondary/60 py-14">
        <div className="container">
          <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">Our Menu</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">Crafted with imported ingredients and baked to perfection in our wood‑fired oven.</p>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-12">
          {categories.map((cat, i) => (
            <div key={cat.title}>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="font-display text-2xl font-semibold"
              >
                {cat.title}
              </motion.h2>
              <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((item, j) => (
                  <motion.article
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: j * 0.03 }}
                    className="overflow-hidden rounded-2xl border bg-card shadow-sm"
                  >
                    {item.image && (
                      <img src={item.image} alt="" className="h-44 w-full object-cover" />
                    )}
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <span className="font-semibold text-primary">{item.price}</span>
                      </div>
                      {item.desc && (
                        <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
