import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-10 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-primary/90 text-primary-foreground grid place-items-center shadow-sm">
              <span className="font-bold">RF</span>
            </div>
            <span className="font-display text-xl">Tony's Pizza</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Neapolitan-style pizzas baked in a 900°F wood-fired oven. Simple ingredients. Big flavor.
          </p>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> 21 Via Napoli, San Francisco, CA
          </div>
          <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" /> (415) 555-0123
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Navigate</h4>
          <nav className="mt-3 grid gap-2 text-sm text-muted-foreground">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Hours</h4>
          <div className="mt-3 text-sm text-muted-foreground">
            <p>Mon–Thu: 11:30a – 10:00p</p>
            <p>Fri–Sat: 11:30a – 11:30p</p>
            <p>Sun: 11:30a – 9:30p</p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground"
          >
            <Instagram className="h-4 w-4" /> Follow on Instagram
          </a>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Tony's Pizza. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
