import {
    UserCheck,
    CalendarCheck,
    GraduationCap,
    BookOpen,
    Sparkles,
    Star,
    Sun,
    Moon,
    CheckCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function StatsAvantages() {
    return (
        <section className="py-16 px-4 md:px-12 max-w-6xl mx-auto">
            {/* ── Header ───────────────────────────────────────────────── */}
            <div className="mb-10">
                <Badge className="mb-3">Pourquoi nous choisir</Badge>
                <h2 className="text-2xl lg:text-4xl font-techovier leading-tight">
                    Ce qui nous distingue
                </h2>
                <p className="text-muted-foreground text-sm mt-1.5 max-w-lg">
                    Depuis 2022, FuturCraft Institut forme la nouvelle
                    génération du numérique avec passion et rigueur.
                </p>
            </div>

            {/* ── Bento Grid ───────────────────────────────────────────── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* ══ CARD 1 — Suivi & insertion (lg: 2 cols) ══ */}
                <div className="lg:col-span-2 group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                    {/* Hover gradient wash */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Decorative rings */}
                    <svg
                        className="absolute -right-8 -bottom-8 w-48 h-48 text-primary opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none"
                        viewBox="0 0 100 100"
                        fill="none"
                    >
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            stroke="currentColor"
                            strokeWidth="0.6"
                        />
                        <circle
                            cx="50"
                            cy="50"
                            r="32"
                            stroke="currentColor"
                            strokeWidth="0.5"
                        />
                        <circle
                            cx="50"
                            cy="50"
                            r="19"
                            stroke="currentColor"
                            strokeWidth="0.4"
                        />
                    </svg>

                    <div className="relative">
                        {/* Icon */}
                        <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300 mb-5">
                            <UserCheck className="w-5 h-5 text-primary" />
                        </div>

                        <h3 className="font-semibold text-lg mb-2">
                            Suivi personnalisé & insertion professionnelle
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                            Chaque apprenant bénéficie d&apos;un accompagnement
                            individuel tout au long de sa formation et
                            d&apos;une aide active à l&apos;insertion via notre
                            réseau de partenaires entreprises.
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-5">
                            {[
                                "Mentorat individuel",
                                "Réseau de partenaires",
                                "Prépa aux entretiens",
                                "Mise en relation directe",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[11px] bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium border border-primary/15"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ══ CARD 2 — 3 ans d'existence ══ */}
                <div className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-500/20">
                    <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Watermark icon */}
                    <CalendarCheck className="absolute -right-4 -bottom-4 w-32 h-32 text-blue-400 opacity-[0.05] group-hover:opacity-[0.09] transition-opacity duration-500 pointer-events-none" />

                    {/* Decorative dashed arc */}
                    <svg
                        className="absolute top-3 right-3 w-16 h-16 text-blue-400 opacity-[0.12] group-hover:opacity-[0.2] transition-opacity duration-500 pointer-events-none"
                        viewBox="0 0 64 64"
                        fill="none"
                    >
                        <path
                            d="M 56 8 A 48 48 0 0 1 8 56"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeDasharray="4 3"
                            strokeLinecap="round"
                        />
                    </svg>

                    <div className="relative flex flex-col h-full min-h-36">
                        <div className="w-11 h-11 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 flex items-center justify-center transition-colors duration-300 mb-5">
                            <CalendarCheck className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="text-5xl font-techovier font-bold text-blue-400 leading-none">
                            03
                        </span>
                        <span className="text-sm font-semibold mt-1.5">
                            ans d&apos;existence
                        </span>
                        <span className="text-xs text-muted-foreground mt-0.5">
                            Fondé en 2022
                        </span>
                    </div>
                </div>

                {/* ══ CARD 3 — +50 apprenants ══ */}
                <div className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-secondary/20">
                    <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <GraduationCap className="absolute -right-4 -bottom-4 w-32 h-32 text-secondary opacity-[0.05] group-hover:opacity-[0.09] transition-opacity duration-500 pointer-events-none" />

                    <svg
                        className="absolute top-3 right-3 w-16 h-16 text-secondary opacity-[0.1] group-hover:opacity-[0.18] transition-opacity duration-500 pointer-events-none"
                        viewBox="0 0 64 64"
                        fill="none"
                    >
                        <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="currentColor"
                            strokeWidth="0.7"
                            strokeDasharray="3 4"
                        />
                    </svg>

                    <div className="relative flex flex-col h-full min-h-36">
                        <div className="w-11 h-11 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 flex items-center justify-center transition-colors duration-300 mb-5">
                            <GraduationCap className="w-5 h-5 text-secondary-foreground" />
                        </div>
                        <span className="text-5xl font-techovier font-bold text-secondary-foreground leading-none">
                            +50
                        </span>
                        <span className="text-sm font-semibold mt-1.5">
                            apprenants formés
                        </span>
                        <span className="text-xs text-muted-foreground mt-0.5">
                            Et ça continue de croître
                        </span>
                    </div>
                </div>

                {/* ══ CARD 4 — Cours du jour & du soir ══ */}
                <div className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-orange-500/20">
                    <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Decorative gradient orb */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-linear-to-br from-orange-400/10 to-indigo-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative flex flex-col h-full min-h-36">
                        {/* Dual icons */}
                        <div className="flex gap-2 mb-5">
                            <div className="w-11 h-11 rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 flex items-center justify-center transition-colors duration-300">
                                <Sun className="w-5 h-5 text-orange-400" />
                            </div>
                            <div className="w-11 h-11 rounded-xl bg-indigo-500/10 group-hover:bg-indigo-500/20 flex items-center justify-center transition-colors duration-300">
                                <Moon className="w-5 h-5 text-indigo-400" />
                            </div>
                        </div>

                        <h3 className="font-semibold text-base mb-2">
                            Cours du jour & du soir
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                            Des horaires flexibles adaptés à ta vie — que tu
                            sois étudiant ou déjà en activité.
                        </p>

                        <div className="flex gap-2 mt-4">
                            <span className="text-[11px] bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2.5 py-1 rounded-full font-medium">
                                08h – 16h
                            </span>
                            <span className="text-[11px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-1 rounded-full font-medium">
                                18h – 22h
                            </span>
                        </div>
                    </div>
                </div>

                {/* ══ CARD 5 — +10 filières ══ */}
                <div className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-green-500/20">
                    <div className="absolute inset-0 bg-linear-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <BookOpen className="absolute -right-4 -bottom-4 w-32 h-32 text-green-400 opacity-[0.05] group-hover:opacity-[0.09] transition-opacity duration-500 pointer-events-none" />

                    <svg
                        className="absolute top-3 right-3 w-14 h-14 text-green-400 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity duration-500 pointer-events-none"
                        viewBox="0 0 56 56"
                        fill="none"
                    >
                        <rect
                            x="4"
                            y="4"
                            width="48"
                            height="48"
                            rx="10"
                            stroke="currentColor"
                            strokeWidth="0.7"
                            strokeDasharray="4 3"
                        />
                    </svg>

                    <div className="relative flex flex-col h-full min-h-36">
                        <div className="w-11 h-11 rounded-xl bg-green-500/10 group-hover:bg-green-500/20 flex items-center justify-center transition-colors duration-300 mb-5">
                            <BookOpen className="w-5 h-5 text-green-400" />
                        </div>
                        <span className="text-5xl font-techovier font-bold text-green-400 leading-none">
                            +10
                        </span>
                        <span className="text-sm font-semibold mt-1.5">
                            filières disponibles
                        </span>
                        <span className="text-xs text-muted-foreground mt-0.5">
                            Tech · Créatif · Business
                        </span>
                    </div>
                </div>

                {/* ══ CARD 6 — Formateurs jeunes & qualifiés ══ */}
                <div className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-purple-500/20">
                    <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <Sparkles className="absolute -right-4 -bottom-4 w-32 h-32 text-purple-400 opacity-[0.05] group-hover:opacity-[0.09] transition-opacity duration-500 pointer-events-none" />

                    {/* Scattered sparkle dots */}
                    <svg
                        className="absolute inset-0 w-full h-full text-purple-400 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none"
                        viewBox="0 0 200 200"
                        fill="currentColor"
                    >
                        <circle cx="170" cy="20" r="2" />
                        <circle cx="150" cy="50" r="1.5" />
                        <circle cx="185" cy="65" r="1" />
                        <circle cx="160" cy="80" r="2.5" />
                        <circle cx="140" cy="35" r="1" />
                    </svg>

                    <div className="relative flex flex-col h-full min-h-36">
                        <div className="w-11 h-11 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 flex items-center justify-center transition-colors duration-300 mb-5">
                            <Sparkles className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="font-semibold text-base mb-2">
                            Formateurs jeunes & qualifiés
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Des experts passionnés, proches du terrain, qui
                            transmettent des compétences directement applicables
                            en entreprise.
                        </p>
                    </div>
                </div>

                {/* ══ CARD 7 — 90% de satisfaction (lg: 2 cols) ══ */}
                <div className="sm:col-span-2 lg:col-span-2 group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-yellow-500/20">
                    <div className="absolute inset-0 bg-linear-to-br from-yellow-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Large watermark */}
                    <Star className="absolute -right-6 -bottom-6 w-44 h-44 text-yellow-400 opacity-[0.04] group-hover:opacity-[0.07] fill-yellow-400 transition-opacity duration-500 pointer-events-none" />

                    {/* Decorative arc */}
                    <svg
                        className="absolute top-0 right-0 w-32 h-32 text-yellow-400 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none"
                        viewBox="0 0 128 128"
                        fill="none"
                    >
                        <path
                            d="M 120 8 A 112 112 0 0 1 8 120"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeDasharray="5 4"
                            strokeLinecap="round"
                        />
                        <path
                            d="M 100 8 A 92 92 0 0 1 8 100"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            strokeDasharray="3 4"
                            strokeLinecap="round"
                        />
                    </svg>

                    <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
                        {/* Left: big stat */}
                        <div className="shrink-0">
                            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 group-hover:bg-yellow-500/20 flex items-center justify-center transition-colors duration-300 mb-4">
                                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                            </div>
                            <span className="text-6xl font-techovier font-bold text-yellow-400 leading-none">
                                90%
                            </span>
                            <p className="text-sm font-semibold mt-1.5">
                                de satisfaction
                            </p>
                            {/* Star rating */}
                            <div className="flex gap-0.5 mt-2">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star
                                        key={s}
                                        className={`w-4 h-4 ${
                                            s <= 4
                                                ? "text-yellow-400 fill-yellow-400"
                                                : "text-yellow-400/30"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden sm:block w-px self-stretch bg-border/60" />

                        {/* Right: details */}
                        <div className="flex-1">
                            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                                Nos apprenants nous recommandent. Leur réussite
                                est notre priorité, et leurs retours positifs
                                nous poussent à nous améliorer continuellement.
                            </p>
                            <div className="space-y-2.5">
                                {[
                                    "Pédagogie pratique et orientée métier",
                                    "Encadrement attentif et bienveillant",
                                    "Projets concrets dès le premier mois",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-2.5 text-sm"
                                    >
                                        <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
