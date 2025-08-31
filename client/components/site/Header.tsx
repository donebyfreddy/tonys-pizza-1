import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { useI18n } from "@/i18n";

const navItemsBase = [
  { to: "/", key: "nav.home" },
  { to: "/menu", key: "nav.menu" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { t, toggle, locale } = useI18n();
  const navItems = navItemsBase;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-primary/90 text-primary-foreground grid place-items-center shadow-sm">
            <span className="font-bold">RF</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl tracking-tight">{t("brand.name")}</div>
            <div className="text-xs text-muted-foreground -mt-0.5">{t("brand.tagline")}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-foreground/80 ${
                  isActive ? "text-foreground" : "text-foreground/60"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {t(item.key)}
            </NavLink>
          ))}
          <button
            aria-label="Toggle language"
            onClick={toggle}
            className="inline-flex h-9 items-center justify-center rounded-full border px-3 text-xs font-semibold text-foreground/80 hover:bg-secondary"
            title={locale === "es" ? "Cambiar a EN" : "Switch to ES"}
          >
            {locale === "es" ? t("lang.es") : t("lang.en")}
          </button>
          <Link
            to="/menu"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {t("nav.order")}
          </Link>
        </nav>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border hover:bg-secondary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container pb-4">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-secondary ${
                    isActive ? "text-foreground" : "text-foreground/70"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {t(item.key)}
              </NavLink>
            ))}
            <button
              onClick={() => {
                toggle();
                setOpen(false);
              }}
              className="mt-2 inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold text-foreground/80"
            >
              {locale === "es" ? t("lang.es") : t("lang.en")}
            </button>
            <Link
              to="/menu"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm"
              onClick={() => setOpen(false)}
            >
              {t("nav.order")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
