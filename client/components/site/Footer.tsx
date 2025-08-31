import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t bg-background">
      <div className="container py-10 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-primary/90 text-primary-foreground grid place-items-center shadow-sm">
              <span className="font-bold">RF</span>
            </div>
            <span className="font-display text-xl">{t("brand.name")}</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            {t("brand.tagline")}
          </p>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Av. de Vallvidrera, 77, Sarrià-Sant
            Gervasi, 08017 Barcelona
          </div>
          <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" /> 930 37 05 90
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">{t("footer.navigate")}</h4>
          <nav className="mt-3 grid gap-2 text-sm text-muted-foreground">
            <Link to="/">{t("nav.home")}</Link>
            <Link to="/menu">{t("nav.menu")}</Link>
            <Link to="/about">{t("nav.about")}</Link>
            <Link to="/contact">{t("nav.contact")}</Link>
          </nav>
        </div>
        <div>
          <h4 className="text-sm font-semibold">{t("footer.hours")}</h4>
          <div className="mt-3 text-sm text-muted-foreground">
            <p>{t("visit.monThu")}</p>
            <p>{t("visit.friSat")}</p>
            <p>{t("visit.sun")}</p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground"
          >
            <Instagram className="h-4 w-4" /> {t("footer.instagram")}
          </a>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {t("brand.name")}.
      </div>
    </footer>
  );
}

export default Footer;
