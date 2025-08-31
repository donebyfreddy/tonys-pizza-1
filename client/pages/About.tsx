import { useI18n } from "@/i18n";

export default function About() {
  const { t } = useI18n();
  return (
    <section className="container py-20">
      <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
        {t("pages.about.title")}
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        {t("pages.about.body")}
      </p>
    </section>
  );
}
