import React, { useEffect, useState } from "react";
import {
  Droplet,
  Phone,
  Star,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  Menu,
  X,
  Quote,
  Mail,
} from "lucide-react";
import ScrollExpand from "./ScrollExpand";
import AnimatedContent from "./AnimatedContent";

/* ------------------------------------------------------------------ */
/*  Données                                                           */
/* ------------------------------------------------------------------ */

const PHONE_DISPLAY = "06 20 35 18 26";
const PHONE_TEL = "tel:0620351826";

const REVIEWS = [
  {
    id: 1,
    name: "Thomas L.",
    date: "Il y a 2 semaines",
    comment:
      "Intervention ultra rapide pour une fuite d'eau importante un dimanche soir. Travail propre, soigné et tarif très raisonnable. Je recommande les yeux fermés !",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah M.",
    date: "Il y a 1 mois",
    comment:
      "Rénovation complète de notre salle de bain. Le résultat est magnifique ! L'équipe est très professionnelle, ponctuelle et de bon conseil.",
    rating: 5,
  },
  {
    id: 3,
    name: "Marc D.",
    date: "Il y a 1 mois",
    comment:
      "Changement de chauffe-eau effectué dans la journée. Artisan réactif, transparent sur ses prix et très sympathique. Merci encore !",
    rating: 5,
  },
  {
    id: 4,
    name: "Camille B.",
    date: "Il y a 2 mois",
    comment:
      "Débouchement de canalisation rapide et efficace. Il a pris le temps d'expliquer le problème et de tout nettoyer après son passage.",
    rating: 5,
  },
  {
    id: 5,
    name: "Karim H.",
    date: "Il y a 3 mois",
    comment:
      "Plombier de confiance à Mantes-la-Jolie. Devis clair et respecté à l'euro près. Très bon suivi de chantier.",
    rating: 5,
  },
];

/* ------------------------------------------------------------------ */
/*  Navbar                                                             */
/* ------------------------------------------------------------------ */

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.25)]">
            <Droplet className="h-5 w-5 text-white" strokeWidth={2.5} />
          </span>
          <span className="font-['Manrope',sans-serif] text-lg font-bold tracking-tight text-slate-900">
            MBS Plomberie
          </span>
        </a>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_TEL}
            className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(37,99,235,0.25)] transition-transform hover:scale-105 hover:bg-blue-700 sm:flex"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            {PHONE_DISPLAY}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-slate-200 p-2 text-slate-700 sm:hidden"
            aria-label="Ouvrir le menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white/95 px-6 py-5 backdrop-blur-md sm:hidden">
          <a
            href={PHONE_TEL}
            className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section
      id="top"
      className="relative flex items-center overflow-hidden bg-slate-50/50 pb-16 pt-32 sm:pb-24 sm:pt-40"
    >
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-blue-200/40 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[26rem] w-[26rem] rounded-full bg-sky-200/50 blur-3xl opacity-60" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0284c7 1px, transparent 1px), linear-gradient(to bottom, #0284c7 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <a
          href="#reviews"
          className="inline-flex animate-[fadeInUp_0.7s_ease-out_forwards] items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-2 text-sm text-blue-950 backdrop-blur-md opacity-0 shadow-sm transition-transform hover:scale-105"
          style={{ animationDelay: "0ms" }}
        >
          <span className="flex items-center gap-0.5 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
            ))}
          </span>
          <span className="font-medium">
            Note 5/5 sur Google Maps · Mantes-la-Jolie
          </span>
        </a>

        <h1
          className="mt-7 animate-[fadeInUp_0.7s_ease-out_forwards] font-['Manrope',sans-serif] text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 opacity-0 sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "120ms" }}
        >
          Votre plombier-chauffagiste de confiance à Mantes-la-Jolie
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl animate-[fadeInUp_0.7s_ease-out_forwards] text-lg leading-relaxed text-slate-600 opacity-0"
          style={{ animationDelay: "240ms" }}
        >
          Intervention rapide 24h/24 et 7j/7 pour vos dépannages, recherches de
          fuites et rénovations de salle de bain, partout à Mantes-la-Jolie et
          ses environs.
        </p>

        <div
          className="mt-9 flex animate-[fadeInUp_0.7s_ease-out_forwards] flex-col items-center justify-center gap-4 opacity-0 sm:flex-row"
          style={{ animationDelay: "360ms" }}
        >
          <a
            href={PHONE_TEL}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-slate-800 shadow-sm transition-all duration-300 ease-out hover:border-blue-300 hover:bg-slate-50 sm:w-auto"
          >
            Demander un devis gratuit
            <ChevronRight className="h-4 w-4 text-slate-400" />
          </a>
        </div>

        <div
          className="mt-12 flex animate-[fadeInUp_0.7s_ease-out_forwards] flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-slate-200/80 pt-8 text-sm font-medium text-slate-600 opacity-0"
          style={{ animationDelay: "480ms" }}
        >
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-blue-600" />
            Garantie décennale
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-blue-600" />
            Dispo 24/7
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue-600" />6 Sq. Chantecoq, 78200
            Mantes-la-Jolie
          </span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section Avis Clients                                               */
/* ------------------------------------------------------------------ */

function ReviewsSection() {
  return (
    <section id="reviews" className="bg-white py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        {/* Titre animé */}
        <AnimatedContent distance={40} direction="vertical" duration={0.6}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700 mb-4">
              <Star className="h-3.5 w-3.5 fill-blue-600 text-blue-600" />
              Avis vérifiés
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-['Manrope',sans-serif]">
              Ce que disent nos clients
            </h2>
            <p className="mt-3 text-slate-600">
              Découvrez les retours de nos clients à Mantes-la-Jolie et ses
              alentours.
            </p>
          </div>
        </AnimatedContent>

        {/* Grille d'avis animée avec effet en cascade (delay) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev, index) => (
            <AnimatedContent
              key={rev.id}
              distance={50}
              direction="vertical"
              delay={index * 0.12}
              duration={0.7}
              className="h-full"
            >
              <div className="flex flex-col justify-between h-full rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-blue-200" />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700 italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="font-semibold text-sm text-slate-900">
                    {rev.name}
                  </span>
                  <span className="text-xs text-slate-400">{rev.date}</span>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
                <Droplet className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              <span className="font-['Manrope',sans-serif] text-lg font-bold tracking-tight text-white">
                MBS Plomberie
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Votre artisan plombier-chauffagiste de confiance à
              Mantes-la-Jolie. Intervention rapide, travail soigné et tarifs
              transparents.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm font-['Manrope',sans-serif]">
              Services & Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href="#top"
                  className="hover:text-blue-400 transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#top"
                  className="hover:text-blue-400 transition-colors"
                >
                  Dépannage d'urgence
                </a>
              </li>
              <li>
                <a
                  href="#top"
                  className="hover:text-blue-400 transition-colors"
                >
                  Rénovation de salle de bain
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="hover:text-blue-400 transition-colors"
                >
                  Avis clients
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm font-['Manrope',sans-serif]">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                <span>6 Sq. Chantecoq, 78200 Mantes-la-Jolie</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-500 shrink-0" />
                <a
                  href={PHONE_TEL}
                  className="hover:text-white transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm font-['Manrope',sans-serif]">
              Disponibilité
            </h3>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <Clock className="h-4 w-4" />
                <span>Urgence : 24h/24 et 7j/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} MBS Plomberie. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-slate-400 transition-colors">
              Mentions légales
            </a>
            <a href="#top" className="hover:text-slate-400 transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  App Main                                                           */
/* ------------------------------------------------------------------ */

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50/50 font-['Inter',sans-serif] antialiased">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Navbar />

      <main>
        <Hero />

        <ScrollExpand
          useWindowScroll={true}
          startWidth={28}
          startHeight={40}
          mediaZoom={1.1}
          title="Interventions rapides & Rénovations de qualité"
          subtitle="MBS Plomberie — Mantes-la-Jolie"
          src="plomberie.png"
        >
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(37,99,235,0.35)] transition-transform hover:scale-105 hover:bg-blue-700"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            Appeler le {PHONE_DISPLAY}
          </a>
        </ScrollExpand>

        <ReviewsSection />
      </main>

      <Footer />
    </div>
  );
}
