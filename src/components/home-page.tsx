
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Lightbulb,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Wrench,
  Zap,
  Building2,
  Mail,
  Clock3,
  X,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Zap,
    title: "Elektroinstallation",
    description:
      "Neuinstallationen, Modernisierung und Erweiterungen für Wohn- und Gewerbeobjekte.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Kundendienst",
    description:
      "Persönliche Unterstützung, Reparaturen und zuverlässige Hilfe bei technischen Problemen.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Beleuchtung",
    description:
      "Durchdachte Lichtlösungen für Wohnräume, Außenbereiche und gewerbliche Flächen.",
  },
  {
    number: "04",
    icon: Building2,
    title: "Hausgeräte",
    description:
      "Fachberatung rund um Haushaltsgeräte sowie Unterstützung bei Lieferung und Anschluss.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Prüfung & Sicherheit",
    description:
      "Prüfung und Wartung elektrischer Anlagen nach den jeweils geltenden Vorschriften.",
  },
  {
    number: "06",
    icon: Mail,
    title: "Kommunikationstechnik",
    description:
      "Sprechanlagen, Netzwerke und moderne Lösungen für eine zuverlässige Verbindung.",
  },
];

const partners = [
  "SIEMENS",
  "BOSCH",
  "CONSTRUCTA",
  "STIEBEL ELTRON",
  "SIEDLE",
  "RITTO",
  "SLV",
  "KOLARZ",
];

const navigation = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#unternehmen" },
  { label: "Partner", href: "#partner" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <div className="topline">
        <div className="container topline-inner">
          <span>Ihr Ansprechpartner für Elektrotechnik</span>
          <a href="tel:085418385">
            <Phone size={13} />
            08541 / 8385
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a
            href="#start"
            className="brand"
            aria-label="Elektro Dobler – Startseite"
            onClick={closeMenu}
          >
            <Image
              src="/logo/logo.png"
              alt="Elektro Dobler"
              width={190}
              height={66}
              priority
              className="brand-logo"
            />
          </a>

          <nav className="main-nav" aria-label="Hauptnavigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="tel:085418385" className="header-call">
            <Phone size={16} />
            <span>Jetzt anrufen</span>
          </a>

          <button
            className="mobile-menu"
            type="button"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-navigation" aria-label="Mobile Navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
                <ChevronRight size={17} />
              </a>
            ))}
            <a
              href="tel:085418385"
              className="mobile-navigation-call"
              onClick={closeMenu}
            >
              <Phone size={17} />
              Jetzt anrufen
            </a>
          </nav>
        )}
      </header>

      <section className="hero" id="start">
        <div className="hero-background" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Elektro-Fachbetrieb in Vilshofen
            </div>

            <h1>
              Gute Lösungen.
              <br />
              Sichere Technik.
              <br />
              <span>Persönlicher Service.</span>
            </h1>

            <p className="hero-description">
              Von Elektroinstallationen bis zu modernen Haushaltsgeräten:
              Wir unterstützen Sie mit durchdachten Lösungen und persönlicher
              Beratung rund um Elektrotechnik.
            </p>

            <div className="hero-actions">
              <a href="tel:085418385" className="button button-yellow">
                <Phone size={18} />
                Jetzt anrufen
              </a>
              <a href="#leistungen" className="button button-outline">
                Leistungen entdecken
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="hero-trust">
              <span>
                <CheckCircle2 size={16} />
                Persönliche Beratung
              </span>
              <span>
                <CheckCircle2 size={16} />
                Lösungen für Haus und Gewerbe
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo">
              <Image
                src="/images/elektro-dobler-techniker.png"
                alt="Elektrofachkraft bei der Arbeit an einer modernen Elektroinstallation"
                fill
                priority
                sizes="(max-width: 680px) 100vw, (max-width: 1100px) 48vw, 550px"
                className="hero-photo-image"
              />
              <div className="photo-overlay" />
              <div className="photo-label">
                <span className="photo-label-icon">
                  <Zap size={21} />
                </span>
                <span>
                  <strong>Elektrotechnik mit Anspruch</strong>
                  <small>Beratung · Installation · Service</small>
                </span>
              </div>
            </div>
            <div className="visual-accent" />
          </div>
        </div>
        <div className="hero-bottom-line" />
      </section>

      <section className="intro-strip" aria-label="Unsere Schwerpunkte">
        <div className="container intro-grid">
          <div className="intro-item">
            <span className="intro-icon">
              <Wrench size={22} />
            </span>
            <span>
              <strong>Fachgerechte Arbeit</strong>
              <small>Mit Blick fürs Detail</small>
            </span>
          </div>
          <div className="intro-item">
            <span className="intro-icon">
              <ShieldCheck size={22} />
            </span>
            <span>
              <strong>Verlässlicher Service</strong>
              <small>Persönlich und unkompliziert</small>
            </span>
          </div>
          <div className="intro-item">
            <span className="intro-icon">
              <MapPin size={22} />
            </span>
            <span>
              <strong>In Vilshofen</strong>
              <small>Für die Region und Umgebung</small>
            </span>
          </div>
        </div>
      </section>

      <section id="leistungen" className="section services-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">WAS WIR FÜR SIE TUN</span>
            <h2>
              Gute Technik beginnt
              <br />
              mit der richtigen Lösung.
            </h2>
            <p>
              Ob Neuinstallation, Modernisierung oder Haushaltsgerät – wir
              beraten Sie zu passenden Lösungen für Ihren Bedarf.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <a
                  href="#kontakt"
                  className="service-card"
                  key={service.number}
                >
                  <div className="service-card-top">
                    <span className="service-icon">
                      <Icon size={24} strokeWidth={1.8} />
                    </span>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-link">
                    Kontakt aufnehmen <ChevronRight size={16} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="unternehmen" className="section about-section">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-photo">
              <Image
                src="/images/poza.jpg"
                alt="Elektroarbeiten – Einblick in die Elektrotechnik"
                fill
                sizes="(max-width: 680px) 100vw, 45vw"
                className="about-photo-image"
              />
            </div>
            <div className="about-note">
              <span className="about-note-icon">
                <CheckCircle2 size={24} />
              </span>
              <span>
                <strong>Persönlich für Sie da</strong>
                <small>Beratung und Service</small>
              </span>
            </div>
          </div>

          <div className="about-copy">
            <span className="section-kicker">ELEKTRO DOBLER</span>
            <h2>Elektrotechnik, die zu Ihrem Alltag passt.</h2>
            <p>
              Gute Arbeit beginnt damit, zuzuhören. Wir möchten verstehen,
              was Sie benötigen, und Sie bei der Auswahl einer passenden
              technischen Lösung unterstützen.
            </p>
            <p>
              Ob im privaten Zuhause oder im gewerblichen Umfeld – eine
              zuverlässige Elektroinstallation und eine verständliche
              Beratung machen den Unterschied.
            </p>

            <ul className="about-list">
              <li>
                <CheckCircle2 size={18} />
                Individuelle Beratung zu Ihrem Vorhaben
              </li>
              <li>
                <CheckCircle2 size={18} />
                Lösungen für unterschiedliche Anforderungen
              </li>
              <li>
                <CheckCircle2 size={18} />
                Direkter Kontakt statt komplizierter Wege
              </li>
            </ul>

            <a href="#kontakt" className="text-link">
              Lernen Sie uns kennen <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section id="partner" className="section partners-section">
        <div className="container">
          <div className="section-heading section-heading-compact">
            <span className="section-kicker">MARKEN & HERSTELLER</span>
            <h2>Gute Lösungen mit starken Marken.</h2>
            <p>
              Eine Auswahl an Marken, die im bisherigen Website-Entwurf
              aufgeführt waren. Die tatsächliche Partnerschaft bitte vor
              Veröffentlichung bestätigen.
            </p>
          </div>
          <div className="partners-grid">
            {partners.map((partner) => (
              <div className="partner-card" key={partner}>
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container contact-cta-inner">
          <div>
            <span className="section-kicker">WIR SIND FÜR SIE DA</span>
            <h2>Sie haben eine Frage oder ein konkretes Projekt?</h2>
            <p>
              Rufen Sie uns an. Wir besprechen gerne, wie wir Ihnen helfen
              können.
            </p>
          </div>
          <a href="tel:085418385" className="button button-dark">
            <Phone size={18} />
            08541 / 8385
          </a>
        </div>
      </section>

      <footer id="kontakt" className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Image
              src="/logo/logo.png"
              alt="Elektro Dobler"
              width={190}
              height={66}
              className="footer-logo"
            />
            <p>
              Ihr Ansprechpartner für Elektrotechnik und persönliche
              Beratung in Vilshofen.
            </p>
          </div>

          <div className="footer-column">
            <h3>Kontakt</h3>
            <p>
              <MapPin size={17} />
              <span>
                Vilsvorstadt 18
                <br />
                94474 Vilshofen an der Donau
              </span>
            </p>
            <p>
              <Phone size={17} />
              <a href="tel:085418385">08541 / 8385</a>
            </p>
            <p>
              <Mail size={17} />
              <a href="mailto:elektrodobler@gmail.com">
                elektrodobler@gmail.com
              </a>
            </p>
          </div>

          <div className="footer-column">
            <h3>Der direkte Draht</h3>
            <p>
              <Clock3 size={17} />
              <span>Kontaktieren Sie uns telefonisch.</span>
            </p>
            <a href="tel:085418385" className="button button-yellow footer-button">
              <Phone size={17} />
              Jetzt anrufen
            </a>
            <a
              href="mailto:elektrodobler@gmail.com"
              className="footer-email-link"
            >
              E-Mail schreiben <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>© 2026 Elektro Dobler</span>
            <span>Vilshofen an der Donau</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
