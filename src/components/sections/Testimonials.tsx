import { Badge } from "@/components/ui/badge";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Marie-Claire Atangana",
        filiere: "Développement Web Fullstack",
        quote: "FuturCraft a totalement changé ma trajectoire professionnelle. En deux ans, je suis passée de zéro à développeuse fullstack. Les formateurs sont disponibles, passionnés et toujours là pour aider. Je recommande sans hésitation !",
        rating: 5,
        avatar: "/student-profile-1.jpeg",
        rotate: "rotate-[-1.5deg]",
    },
    {
        name: "Jean-Baptiste Mvondo",
        filiere: "Cybersécurité",
        quote: "La formation en cybersécurité est vraiment excellente. Contenu à jour, pratique, avec de vrais projets. J'ai décroché un poste d'analyste sécurité dès la fin de ma formation.",
        rating: 5,
        avatar: "/student-profile-2.jpeg",
        rotate: "rotate-[1deg]",
    },
    {
        name: "Sandra Mbouwe",
        filiere: "Audiovisuel",
        quote: "J'ai toujours rêvé de faire de la vidéo. Aujourd'hui je suis monteuse vidéo freelance et je collabore avec plusieurs entreprises de la place. Merci FCI pour cette opportunité incroyable !",
        rating: 5,
        avatar: "/student-profile-3.jpeg",
        rotate: "rotate-[-2deg]",
    },
    {
        name: "Emmanuel Tchaptchet",
        filiere: "Développement IA",
        quote: "Le cours de développement IA m'a ouvert des portes incroyables. La pédagogie est top, les projets sont concrets et les formateurs maîtrisent vraiment leur domaine. Je travaille désormais comme data scientist junior dans une startup tech.",
        rating: 5,
        avatar: "/student-profile-4.jpeg",
        rotate: "rotate-[2deg]",
    },
    {
        name: "Fatima Ndiaye",
        filiere: "Graphisme & Web Design",
        quote: "Super formation ! Les outils enseignés sont exactement ceux qu'on utilise en entreprise. Mon portfolio a directement impressionné mon premier recruteur. Je suis UI designer depuis 6 mois.",
        rating: 4,
        avatar: "/student-profile-5.jpeg",
        rotate: "rotate-[-0.5deg]",
    },
    {
        name: "Patrick Essomba",
        filiere: "Marketing Digital",
        quote: "En 9 mois, j'ai acquis plus de compétences pratiques qu'en 3 ans d'études classiques. Le suivi personnalisé fait vraiment la différence. Je gère maintenant la stratégie digitale d'une PME locale.",
        rating: 5,
        avatar: "/student-profile-1.jpeg",
        rotate: "rotate-[1.5deg]",
    },
    {
        name: "Aicha Traoré",
        filiere: "E-Commerce",
        quote: "J'ai lancé ma boutique en ligne deux mois après la fin de ma formation. Le contenu est pratique et directement applicable dès le premier jour. Je recommande à tous ceux qui veulent entreprendre en ligne !",
        rating: 5,
        avatar: "/student-profile-2.jpeg",
        rotate: "rotate-[-1deg]",
    },
    {
        name: "Rodrigue Ngono",
        filiere: "Développement Web Fullstack",
        quote: "Une formation sérieuse avec de vrais projets concrets. J'ai particulièrement apprécié l'ambiance entre apprenants — on s'entraide vraiment. FCI c'est bien plus qu'une école, c'est une communauté.",
        rating: 5,
        avatar: "/student-profile-3.jpeg",
        rotate: "rotate-[0.5deg]",
    },
];

export default function Testimonials() {
    return (
        <section className="relative overflow-hidden py-20 px-4 md:px-12">
            {/* ── Fond subtil ───────────────────────────────────────────── */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-secondary/2 to-transparent" />

            {/* ── SVG : Guillemets décoratifs géants ───────────────────── */}
            <svg
                className="pointer-events-none absolute top-8 left-4 w-28 h-28 text-primary opacity-[0.04]"
                viewBox="0 0 100 80"
                fill="currentColor"
                aria-hidden="true"
            >
                <path d="M0 80V48Q0 22 12 10T48 0v16Q32 16 24 26T16 52h16v28H0zm52 0V48q0-26 12-38t36-10v16q-16 0-24 10T68 52h16v28H52z" />
            </svg>

            <svg
                className="pointer-events-none absolute bottom-8 right-4 w-28 h-28 text-secondary opacity-[0.04] rotate-180"
                viewBox="0 0 100 80"
                fill="currentColor"
                aria-hidden="true"
            >
                <path d="M0 80V48Q0 22 12 10T48 0v16Q32 16 24 26T16 52h16v28H0zm52 0V48q0-26 12-38t36-10v16q-16 0-24 10T68 52h16v28H52z" />
            </svg>

            {/* ── SVG : Anneaux — coin haut-droite ─────────────────────── */}
            <svg
                className="pointer-events-none absolute -top-8 -right-8 w-64 h-64 text-secondary"
                aria-hidden="true"
                fill="none"
            >
                <circle
                    cx="256"
                    cy="0"
                    r="100"
                    stroke="currentColor"
                    strokeWidth="0.7"
                    strokeDasharray="5 4"
                    strokeOpacity="0.09"
                />
                <circle
                    cx="256"
                    cy="0"
                    r="155"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    strokeDasharray="3 5"
                    strokeOpacity="0.06"
                />
            </svg>

            {/* ── SVG : Anneaux — coin bas-gauche ──────────────────────── */}
            <svg
                className="pointer-events-none absolute -bottom-8 -left-8 w-64 h-64 text-primary"
                aria-hidden="true"
                fill="none"
            >
                <circle
                    cx="0"
                    cy="256"
                    r="100"
                    stroke="currentColor"
                    strokeWidth="0.7"
                    strokeDasharray="5 4"
                    strokeOpacity="0.09"
                />
                <circle
                    cx="0"
                    cy="256"
                    r="155"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    strokeDasharray="3 5"
                    strokeOpacity="0.06"
                />
            </svg>

            {/* ── SVG : Étoiles éparpillées ─────────────────────────────── */}
            <svg
                className="pointer-events-none absolute inset-0 w-full h-full text-yellow-400"
                aria-hidden="true"
                fill="currentColor"
            >
                <circle cx="12%" cy="18%" r="1.5" fillOpacity="0.12" />
                <circle cx="88%" cy="22%" r="1" fillOpacity="0.09" />
                <circle cx="5%" cy="55%" r="1" fillOpacity="0.08" />
                <circle cx="95%" cy="48%" r="1.5" fillOpacity="0.10" />
                <circle cx="22%" cy="90%" r="1" fillOpacity="0.09" />
                <circle cx="75%" cy="88%" r="1.5" fillOpacity="0.12" />
                <circle cx="50%" cy="6%" r="1" fillOpacity="0.08" />
            </svg>

            {/* ── SVG : Petites croix ───────────────────────────────────── */}
            <svg
                className="pointer-events-none absolute inset-0 w-full h-full text-primary"
                aria-hidden="true"
                fill="none"
            >
                <g
                    stroke="currentColor"
                    strokeOpacity="0.08"
                    strokeWidth="1"
                    strokeLinecap="round"
                >
                    <line x1="60" y1="40" x2="68" y2="48" />
                    <line x1="68" y1="40" x2="60" y2="48" />
                    <line x1="64" y1="200" x2="72" y2="208" />
                    <line x1="72" y1="200" x2="64" y2="208" />
                </g>
            </svg>

            {/* ── Contenu ───────────────────────────────────────────────── */}
            <div className="relative max-w-6xl mx-auto">
                {/* ── Header ────────────────────────────────────────────── */}
                <div className="text-center mb-14">
                    <Badge className="mb-4">Témoignages</Badge>
                    <h2 className="text-2xl lg:text-4xl font-techovier leading-tight mb-3">
                        Ce que disent nos apprenants
                    </h2>
                    <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
                        Ils ont choisi FuturCraft Institut pour changer de vie.
                        Découvrez leurs expériences en quelques mots.
                    </p>
                </div>

                {/* ── Masonry Grid ──────────────────────────────────────── */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`
                                group relative break-inside-avoid mb-5
                                bg-card border border-border rounded-2xl p-5
                                transition-all duration-300 cursor-default
                                ${t.rotate}
                                hover:rotate-0 hover:-translate-y-1.5 hover:shadow-xl hover:border-border/80 hover:z-10
                            `}
                        >
                            {/* Hover gradient wash */}
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Closing quote watermark */}
                            <span className="pointer-events-none select-none absolute bottom-3 right-4 text-7xl font-bold leading-none text-primary/4 group-hover:text-primary/7 transition-colors duration-500">
                                &ldquo;
                            </span>

                            <div className="relative">
                                {/* Opening quote icon */}
                                <div className="mb-3">
                                    <Quote className="w-6 h-6 text-primary/40 group-hover:text-primary/60 transition-colors duration-300 fill-primary/10 group-hover:fill-primary/20" />
                                </div>

                                {/* Quote text */}
                                <p className="text-sm leading-relaxed text-foreground/85 mb-4">
                                    {t.quote}
                                </p>

                                {/* Stars */}
                                <div className="flex gap-0.5 mb-4">
                                    {Array.from({ length: 5 }).map((_, s) => (
                                        <Star
                                            key={s}
                                            className={`w-3.5 h-3.5 transition-colors duration-300 ${
                                                s < t.rating
                                                    ? "text-yellow-400 fill-yellow-400"
                                                    : "text-muted-foreground/20"
                                            }`}
                                        />
                                    ))}
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-border/60 mb-4" />

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 ring-2 ring-border/40 group-hover:ring-primary/20 transition-all duration-300">
                                        <Image
                                            src={t.avatar}
                                            alt={t.name}
                                            fill
                                            sizes="36px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold leading-none">
                                            {t.name}
                                        </p>
                                        <p className="text-[10px] text-muted-foreground mt-1 leading-none">
                                            {t.filiere}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
