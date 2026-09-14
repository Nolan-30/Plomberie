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

// Composant
import GradientWaves from "./GradientWaves";
import ScrollExpand from "./ScrollExpand";
import AnimatedContent from "./AnimatedContent";
import MessageCircle from "./MessageCircle";
import CheckIcon from "./CheckIcon";

/* ------------------------------------------------------------------ */
/*  Données                                                           */
/* ------------------------------------------------------------------ */

const PHONE_DISPLAY = "06 20 35 18 26";
const PHONE_TEL = "tel:0620351826";

const REVIEWS = [
  {
    id: 1,
    name: "Yassine B.",
    comment:
      "Très professionnel et ponctuel. Explications claires avant les travaux et tarifs très raisonnables. Je recommande MBS Plomberie a 100%.",
    service: "Dépannage général",
  },
  {
    id: 2,
    name: "Julliot P.",
    comment:
      "Excellent travail de MBS Plomberie. Ponctuel, explications claires avant intervention et tarifs très abordables.",
    service: "Intervention plomberie",
  },
  {
    id: 3,
    name: "Milah D.",
    comment:
      "Plombier extrêmement professionnel et sérieux. Il a refait toute notre salle de bain et retiré des WC avec un délai rapide et des prix très corrects.",
    service: "Rénovation salle de bain",
  },
  {
    id: 4,
    name: "Yasmina O.",
    comment:
      "Plombier très professionnel et à l'écoute. Il est venu le jour même réparer ma fuite en urgence alors que je n'avais plus d'eau",
    service: "Réparation de fuite",
  },
  {
    id: 5,
    name: "Amina R.",
    comment:
      "Très professionnel et hyper réactif intervention en urgence ! Très satisfaite je recommande fortement. Pratique des prix raisonnables.",
    service: "Intervention d'urgence",
  },
  {
    id: 6,
    name: "Fabienne S.",
    comment:
      "Sofian est un grand professionnel passionné. Il a géré le remplacement du ballon d'eau chaude de ma locataire de A à Z avec un travail très soigné.",
    service: "Remplacement ballon d'eau chaude",
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
          <span className="font-['Manrope',sans-serif] text-lg font-bold tracking-tight text-white-900">
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
      className="relative flex items-center overflow-hidden bg-[#0a1128] pb-16 pt-32 sm:pb-24 sm:pt-40"
    >
      {/* Background Gradient Waves */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GradientWaves
          horizonColor="#0051ff"
          waveColor="#2563eb"
          waveSpeed={1}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h1
          className="mt-7 animate-[fadeInUp_0.7s_ease-out_forwards] font-['Manrope',sans-serif] text-4xl font-extrabold leading-[1.1] tracking-tight text-white opacity-0 sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "120ms" }}
        >
          Votre plombier-chauffagiste de confiance à Mantes-la-Jolie
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl animate-[fadeInUp_0.7s_ease-out_forwards] text-lg leading-relaxed text-slate-300 opacity-0"
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
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-blue-500/30 bg-blue-600 px-7 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 ease-out hover:bg-blue-500 sm:w-auto"
          >
            Demander un devis gratuit
            <ChevronRight className="h-4 w-4 text-blue-200 group-hover:text-white transition-colors" />
          </a>
        </div>

        <div
          className="mt-12 flex animate-[fadeInUp_0.7s_ease-out_forwards] flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white-800 pt-8 text-sm font-medium text-slate-300 opacity-0"
          style={{ animationDelay: "480ms" }}
        >
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-blue-400" />
            Garantie décennale
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-blue-400" />
            Dispo 24/7
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue-400" />6 Sq. Chantecoq, 78200
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
        {/* Titre de la section */}
        <AnimatedContent distance={40} direction="vertical" duration={0.6}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-1.5 text-xs text-blue-600 font-medium mb-4 ">
              <CheckIcon size={30} className="text-blue-600" />
              <span className="text-2xl">Avis vérifié</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-['Manrope',sans-serif]">
              Ce que disent nos clients
            </h2>
            <div className="overflow-hidden rounded-2xl"></div>
            <p className="mt-3 text-slate-600">
              Découvrez les retours de nos clients à Mantes-la-Jolie et ses
              alentours.
            </p>
            <img
              src="avis.png"
              alt="avis clients"
              className="w-full h-auto rounded-2xl shadow-xl border border-slate-100 transition-transform duration-300 ease-in-out hover:scale-110 mt-[5%]"
            />
          </div>
        </AnimatedContent>

        {/* Grille forcée en 3 colonnes côte à côte */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-100/80">
                    {rev.service}
                  </span>
                  <MessageCircle size={22} className="text-blue-500" />
                </div>
                <p className="text-sm leading-relaxed text-slate-700 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="font-semibold text-sm text-slate-900">
                  {rev.name}
                </span>
              </div>
            </div>
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
    <footer className="w-full bg-[#0b1329] text-slate-300 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-4 gap-8 pb-16">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                <Droplet className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              <span className="font-['Manrope',sans-serif] text-xl font-bold tracking-tight text-white">
                MBS Plomberie
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Votre artisan plombier-chauffagiste de confiance à
              Mantes-la-Jolie. Intervention rapide, travail soigné et tarifs
              transparents.
            </p>
          </div>

          {/* Services & Navigation */}
          <div>
            <h3 className="mb-4 font-['Manrope',sans-serif] text-base font-semibold text-white">
              Services & Navigation
            </h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li>
                <a href="#top" className="transition-colors hover:text-white">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#top" className="transition-colors hover:text-white">
                  Dépannage d'urgence
                </a>
              </li>
              <li>
                <a href="#top" className="transition-colors hover:text-white">
                  Rénovation de salle de bain
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="transition-colors hover:text-white"
                >
                  Avis clients
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-['Manrope',sans-serif] text-base font-semibold text-white">
              Contact
            </h3>
            <ul className="space-y-4 text-xs text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                <span>6 Sq. Chantecoq, 78200 Mantes-la-Jolie</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-blue-500" />
                <a
                  href={PHONE_TEL}
                  className="transition-colors hover:text-white"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>

          {/* Disponibilité */}
          <div>
            <h3 className="mb-4 font-['Manrope',sans-serif] text-base font-semibold text-white">
              Disponibilité
            </h3>
            <div className="flex items-center gap-2.5 text-xs font-medium text-emerald-400">
              <Clock className="h-4 w-4 shrink-0" />
              <span>Urgence : 24h/24 et 7j/7</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-8">
          <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
            <p>© MBS Plomberie. Tous droits réservés.</p>
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
          {/* <a
            href={PHONE_TEL}
            className="w-fit inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(37,99,235,0.35)] transition-transform hover:scale-105 hover:bg-blue-700"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            Appeler le {PHONE_DISPLAY}
          </a> */}
        </ScrollExpand>

        <ReviewsSection />
      </main>

      <Footer />
    </div>
  );
}
