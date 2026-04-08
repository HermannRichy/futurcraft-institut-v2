import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Compass, UserPlus, Rocket, ArrowRight, Mail } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative overflow-hidden py-20 px-4 md:px-12">
            {/* ── Fond subtil ─────────────────────────────────────────────── */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-primary/3 to-transparent" />

            {/* ── SVG : Anneaux — haut gauche ─────────────────────────────── */}
            <svg
                className="pointer-events-none absolute -top-10 -left-10 w-72 h-72 text-primary"
                aria-hidden="true"
                fill="none"
            >
                <circle
                    cx="0"
                    cy="0"
                    r="100"
                    stroke="currentColor"
                    strokeWidth="0.7"
                    strokeDasharray="5 4"
                    strokeOpacity="0.08"
                />
                <circle
                    cx="0"
                    cy="0"
                    r="155"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    strokeDasharray="3 5"
                    strokeOpacity="0.05"
                />
            </svg>

            {/* ── SVG : Anneaux — bas droite ──────────────────────────────── */}
            <svg
                className="pointer-events-none absolute -bottom-10 -right-10 w-72 h-72 text-secondary"
                aria-hidden="true"
                fill="none"
            >
                <circle
                    cx="288"
                    cy="288"
                    r="100"
                    stroke="currentColor"
                    strokeWidth="0.7"
                    strokeDasharray="5 4"
                    strokeOpacity="0.08"
                />
                <circle
                    cx="288"
                    cy="288"
                    r="155"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    strokeDasharray="3 5"
                    strokeOpacity="0.05"
                />
            </svg>

            {/* ── SVG : Points décoratifs ─────────────────────────────────── */}
            <svg
                className="pointer-events-none absolute inset-0 w-full h-full text-primary"
                aria-hidden="true"
                fill="currentColor"
            >
                <circle cx="15%" cy="15%" r="1.5" fillOpacity="0.07" />
                <circle cx="85%" cy="12%" r="1" fillOpacity="0.06" />
                <circle cx="92%" cy="50%" r="1.5" fillOpacity="0.07" />
                <circle cx="6%" cy="60%" r="1" fillOpacity="0.06" />
                <circle cx="20%" cy="88%" r="1.5" fillOpacity="0.07" />
                <circle cx="78%" cy="85%" r="1" fillOpacity="0.06" />
            </svg>

            <div className="relative max-w-6xl mx-auto">
                {/* ── Header ──────────────────────────────────────────────── */}
                <div className="text-center mb-14">
                    <Badge className="mb-4">Rejoindre FCI</Badge>
                    <h2 className="text-3xl lg:text-5xl font-techovier leading-tight mb-4">
                        Prêt à façonner
                        <br />
                        <span className="text-primary">
                            ton avenir numérique ?
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-sm lg:text-base max-w-xl mx-auto leading-relaxed">
                        Le chemin vers ta nouvelle carrière commence ici. Trois
                        étapes simples pour rejoindre notre communauté et
                        transformer ta vie.
                    </p>
                </div>

                {/* ── Steps ───────────────────────────────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-start gap-4">
                    {/* ══ CARD 1 — Explorer les filières ══ */}
                    <div className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-500/30">
                        {/* Top accent line */}
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-500/0 via-blue-500/60 to-blue-500/0" />
                        {/* Hover gradient wash */}
                        <div className="absolute inset-0 bg-linear-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        {/* Watermark number */}
                        <span className="pointer-events-none select-none absolute -top-1 right-4 text-8xl font-techovier leading-none text-blue-400/5">
                            01
                        </span>

                        <div className="relative">
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-blue-500/15">
                                <Compass className="w-6 h-6 text-blue-400" />
                            </div>

                            <p className="text-[11px] font-semibold text-blue-400 tracking-widest uppercase mb-2">
                                Étape 01
                            </p>
                            <h3 className="font-semibold text-lg leading-snug mb-2.5">
                                Explorer les filières
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                Parcours notre catalogue de +10 formations et
                                trouve celle qui correspond à ton profil, tes
                                ambitions et ta disponibilité.
                            </p>

                            <Button
                                asChild
                                size="sm"
                                variant="outline"
                                className="border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/5 text-blue-400 hover:text-blue-400"
                            >
                                <Link
                                    href="/formations"
                                    className="flex items-center gap-1.5"
                                >
                                    Voir les formations
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* ── Connector 1 → 2 ── */}
                    <div className="hidden md:flex flex-col items-center justify-start pt-16 px-1">
                        <svg
                            width="36"
                            height="16"
                            viewBox="0 0 36 16"
                            fill="none"
                            aria-hidden="true"
                        >
                            <line
                                x1="0"
                                y1="8"
                                x2="28"
                                y2="8"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeDasharray="3 3"
                                className="text-border"
                            />
                            <path
                                d="M 24 4 L 32 8 L 24 12"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-muted-foreground/40"
                                fill="none"
                            />
                        </svg>
                    </div>

                    {/* ══ CARD 2 — S'inscrire ou nous contacter ══ */}
                    <div className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30">
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary/0 via-primary/60 to-primary/0" />
                        <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <span className="pointer-events-none select-none absolute -top-1 right-4 text-8xl font-techovier leading-none text-primary/5">
                            02
                        </span>

                        <div className="relative">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-primary/15">
                                <UserPlus className="w-6 h-6 text-primary" />
                            </div>

                            <p className="text-[11px] font-semibold text-primary tracking-widest uppercase mb-2">
                                Étape 02
                            </p>
                            <h3 className="font-semibold text-lg leading-snug mb-2.5">
                                S&apos;inscrire ou nous contacter
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                Remplis le formulaire d&apos;inscription ou
                                échange directement avec notre équipe
                                pédagogique pour toute question.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                <Button asChild size="sm">
                                    <Link
                                        href="/inscription"
                                        className="flex items-center gap-1.5"
                                    >
                                        S&apos;inscrire
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </Button>
                                <Button asChild size="sm" variant="ghost">
                                    <Link
                                        href="/contact"
                                        className="flex items-center gap-1.5"
                                    >
                                        <Mail className="w-3.5 h-3.5" />
                                        Nous contacter
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* ── Connector 2 → 3 ── */}
                    <div className="hidden md:flex flex-col items-center justify-start pt-16 px-1">
                        <svg
                            width="36"
                            height="16"
                            viewBox="0 0 36 16"
                            fill="none"
                            aria-hidden="true"
                        >
                            <line
                                x1="0"
                                y1="8"
                                x2="28"
                                y2="8"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeDasharray="3 3"
                                className="text-border"
                            />
                            <path
                                d="M 24 4 L 32 8 L 24 12"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-muted-foreground/40"
                                fill="none"
                            />
                        </svg>
                    </div>

                    {/* ══ CARD 3 — Commencer l'aventure ══ */}
                    <div className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-secondary/30">
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-secondary/0 via-secondary/60 to-secondary/0" />
                        <div className="absolute inset-0 bg-linear-to-b from-secondary/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <span className="pointer-events-none select-none absolute -top-1 right-4 text-8xl font-techovier leading-none text-secondary/8">
                            03
                        </span>

                        {/* Decorative rocket trail */}
                        <svg
                            className="pointer-events-none absolute bottom-4 right-4 w-20 h-20 text-secondary opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-500"
                            viewBox="0 0 80 80"
                            fill="none"
                            aria-hidden="true"
                        >
                            <circle
                                cx="60"
                                cy="20"
                                r="18"
                                stroke="currentColor"
                                strokeWidth="0.6"
                                strokeDasharray="4 3"
                            />
                            <circle
                                cx="60"
                                cy="20"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="0.4"
                                strokeDasharray="3 4"
                            />
                            <circle
                                cx="60"
                                cy="20"
                                r="3"
                                fill="currentColor"
                                fillOpacity="0.4"
                            />
                        </svg>

                        <div className="relative">
                            <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/25 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-secondary/20">
                                <Rocket className="w-6 h-6 text-secondary-foreground" />
                            </div>

                            <p className="text-[11px] font-semibold text-secondary-foreground tracking-widest uppercase mb-2">
                                Étape 03
                            </p>
                            <h3 className="font-semibold text-lg leading-snug mb-2.5">
                                Commencer l&apos;aventure
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                Rejoins notre communauté d&apos;apprenants
                                passionnés et démarre ta transformation vers les
                                métiers du numérique dès aujourd&apos;hui.
                            </p>

                            <Button asChild size="sm" variant="secondary">
                                <Link
                                    href="/inscription"
                                    className="flex items-center gap-1.5"
                                >
                                    Commencer maintenant
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* ── Bottom note ─────────────────────────────────────────── */}
                <p className="text-center text-xs text-muted-foreground mt-10">
                    Des questions ?{" "}
                    <Link
                        href="/contact"
                        className="text-primary underline-offset-4 hover:underline"
                    >
                        Contacte-nous directement
                    </Link>{" "}
                    — notre équipe répond sous 24h.
                </p>
            </div>
        </section>
    );
}
