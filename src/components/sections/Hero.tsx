import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
    ArrowRight,
    Code2,
    Shield,
    Video,
    Palette,
    Users,
    Star,
    Award,
    BrainCircuit,
    Camera,
    Sparkles,
    TrendingUp,
    GraduationCap,
    ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-10 px-4 md:px-12 min-h-screen">
            {/* ── Lueurs de fond ─────────────────────────────────────────── */}
            <div className="pointer-events-none absolute -top-40 -left-40 size-137.5 rounded-full bg-primary opacity-15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -right-40 size-137.5 rounded-full bg-secondary opacity-10 blur-3xl" />
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-175 rounded-full bg-primary opacity-5 blur-3xl" />

            {/* ══════════════════════════════════════════════════════════════
                ÉLÉMENTS DÉCORATIFS
            ══════════════════════════════════════════════════════════════ */}

            {/* ── SVG : Anneaux concentriques — coin haut-droite ── */}
            <svg
                className="pointer-events-none absolute -top-8 -right-8 w-80 h-80 text-secondary"
                aria-hidden="true"
                fill="none"
            >
                <circle
                    cx="320"
                    cy="0"
                    r="120"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeDasharray="6 4"
                    strokeOpacity="0.12"
                />
                <circle
                    cx="320"
                    cy="0"
                    r="175"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="4 5"
                    strokeOpacity="0.08"
                />
                <circle
                    cx="320"
                    cy="0"
                    r="230"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    strokeDasharray="3 6"
                    strokeOpacity="0.05"
                />
                {/* Petit point central */}
                <circle
                    cx="320"
                    cy="0"
                    r="4"
                    fill="currentColor"
                    fillOpacity="0.1"
                />
            </svg>

            {/* ── SVG : Arc brisé — coin haut-gauche ── */}
            <svg
                className="pointer-events-none absolute -top-6 -left-6 w-72 h-72 text-primary"
                aria-hidden="true"
                fill="none"
            >
                <circle
                    cx="0"
                    cy="0"
                    r="110"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeDasharray="5 4"
                    strokeOpacity="0.11"
                />
                <circle
                    cx="0"
                    cy="0"
                    r="165"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="3 5"
                    strokeOpacity="0.07"
                />
                <circle
                    cx="0"
                    cy="0"
                    r="220"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    strokeDasharray="2 6"
                    strokeOpacity="0.05"
                />
            </svg>

            {/* ── SVG : Ligne pointillée horizontale — sous le texte ── */}
            <svg
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[30%] w-125 h-6 text-primary"
                aria-hidden="true"
                fill="none"
            >
                <line
                    x1="0"
                    y1="12"
                    x2="500"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="0.6"
                    strokeDasharray="4 8"
                    strokeOpacity="0.12"
                />
                {/* Dots on the line */}
                <circle
                    cx="50"
                    cy="12"
                    r="1.5"
                    fill="currentColor"
                    fillOpacity="0.18"
                />
                <circle
                    cx="150"
                    cy="12"
                    r="1"
                    fill="currentColor"
                    fillOpacity="0.12"
                />
                <circle
                    cx="250"
                    cy="12"
                    r="2"
                    fill="currentColor"
                    fillOpacity="0.2"
                />
                <circle
                    cx="350"
                    cy="12"
                    r="1"
                    fill="currentColor"
                    fillOpacity="0.12"
                />
                <circle
                    cx="450"
                    cy="12"
                    r="1.5"
                    fill="currentColor"
                    fillOpacity="0.18"
                />
            </svg>

            {/* ── SVG : Croix / plus décoratifs éparpillés ── */}
            <svg
                className="pointer-events-none absolute inset-0 w-full h-full text-primary"
                aria-hidden="true"
                fill="none"
            >
                {/* Petites croix */}
                <g
                    stroke="currentColor"
                    strokeOpacity="0.1"
                    strokeWidth="1"
                    strokeLinecap="round"
                >
                    {/* Top area */}
                    <line x1="88" y1="56" x2="96" y2="64" />
                    <line x1="96" y1="56" x2="88" y2="64" />
                    <line x1="88" y1="180" x2="96" y2="188" />
                    <line x1="96" y1="180" x2="88" y2="188" />
                    {/* Right side */}
                    <line
                        x1="calc(100% - 72px)"
                        y1="80"
                        x2="calc(100% - 64px)"
                        y2="88"
                    />
                    <line
                        x1="calc(100% - 64px)"
                        y1="80"
                        x2="calc(100% - 72px)"
                        y2="88"
                    />
                    <line
                        x1="calc(100% - 48px)"
                        y1="200"
                        x2="calc(100% - 40px)"
                        y2="208"
                    />
                    <line
                        x1="calc(100% - 40px)"
                        y1="200"
                        x2="calc(100% - 48px)"
                        y2="208"
                    />
                </g>
                {/* Petits points supplémentaires */}
                <circle
                    cx="5%"
                    cy="20%"
                    r="1.5"
                    fill="currentColor"
                    fillOpacity="0.08"
                />
                <circle
                    cx="8%"
                    cy="75%"
                    r="1"
                    fill="currentColor"
                    fillOpacity="0.06"
                />
                <circle
                    cx="93%"
                    cy="30%"
                    r="1.5"
                    fill="currentColor"
                    fillOpacity="0.08"
                />
                <circle
                    cx="96%"
                    cy="70%"
                    r="1"
                    fill="currentColor"
                    fillOpacity="0.06"
                />
            </svg>

            {/* ── SVG : Arcs dans la zone collage — bas gauche ── */}
            <svg
                className="pointer-events-none absolute bottom-0 left-0 w-56 h-56 text-primary"
                aria-hidden="true"
                fill="none"
            >
                <path
                    d="M 0 224 A 160 160 0 0 1 160 64"
                    stroke="currentColor"
                    strokeWidth="0.6"
                    strokeDasharray="5 4"
                    strokeOpacity="0.09"
                    strokeLinecap="round"
                />
                <path
                    d="M 0 180 A 120 120 0 0 1 120 60"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    strokeDasharray="3 5"
                    strokeOpacity="0.06"
                    strokeLinecap="round"
                />
            </svg>

            {/* ── SVG : Arcs — bas droite ── */}
            <svg
                className="pointer-events-none absolute bottom-0 right-0 w-56 h-56 text-secondary"
                aria-hidden="true"
                fill="none"
            >
                <path
                    d="M 224 224 A 160 160 0 0 0 64 64"
                    stroke="currentColor"
                    strokeWidth="0.6"
                    strokeDasharray="5 4"
                    strokeOpacity="0.09"
                    strokeLinecap="round"
                />
                <path
                    d="M 224 180 A 120 120 0 0 0 104 60"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    strokeDasharray="3 5"
                    strokeOpacity="0.06"
                    strokeLinecap="round"
                />
            </svg>

            {/* ── Icône Bubble : Code2 — Dév. Web (haut-gauche) ── */}
            <div
                className="pointer-events-none absolute top-20 left-6 w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-sm backdrop-blur-sm"
                style={{ transform: "rotate(-8deg)", opacity: 0.8 }}
            >
                <Code2 className="w-5 h-5 text-blue-400" />
            </div>

            {/* ── Icône Bubble : Shield — Cyber Sécurité (haut-droite) ── */}
            <div
                className="pointer-events-none absolute top-16 right-10 w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shadow-sm backdrop-blur-sm"
                style={{ transform: "rotate(6deg)", opacity: 0.8 }}
            >
                <Shield className="w-5 h-5 text-red-400" />
            </div>

            {/* ── Icône Bubble : Camera — Audiovisuel (milieu-gauche haut) ── */}
            <div
                className="pointer-events-none absolute top-40 left-3 w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shadow-sm backdrop-blur-sm"
                style={{ transform: "rotate(12deg)", opacity: 0.65 }}
            >
                <Camera className="w-4 h-4 text-amber-400" />
            </div>

            {/* ── Icône Bubble : Sparkles — Graphisme (milieu-droite haut) ── */}
            <div
                className="pointer-events-none absolute top-36 right-6 w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shadow-sm backdrop-blur-sm"
                style={{ transform: "rotate(-10deg)", opacity: 0.65 }}
            >
                <Sparkles className="w-4 h-4 text-purple-400" />
            </div>

            {/* ── Icône Bubble : GraduationCap — Formation (entre les deux articles, gauche) ── */}
            <div
                className="pointer-events-none absolute top-[36%] left-4 w-9 h-9 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shadow-sm backdrop-blur-sm"
                style={{ transform: "rotate(5deg)", opacity: 0.6 }}
            >
                <GraduationCap className="w-4 h-4 text-secondary-foreground" />
            </div>

            {/* ── Icône Bubble : BrainCircuit — IA (entre les deux articles, droite) ── */}
            <div
                className="pointer-events-none absolute top-[38%] right-4 w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-sm backdrop-blur-sm"
                style={{ transform: "rotate(-7deg)", opacity: 0.6 }}
            >
                <BrainCircuit className="w-4 h-4 text-emerald-400" />
            </div>

            {/* ── Icône Bubble : Video — Audiovisuel (collage, gauche) ── */}
            <div
                className="pointer-events-none absolute top-[57%] left-3 w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shadow-sm backdrop-blur-sm"
                style={{ transform: "rotate(9deg)", opacity: 0.55 }}
            >
                <Video className="w-5 h-5 text-orange-400" />
            </div>

            {/* ── Icône Bubble : Palette — Design (collage, droite) ── */}
            <div
                className="pointer-events-none absolute top-[60%] right-3 w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shadow-sm backdrop-blur-sm"
                style={{ transform: "rotate(-9deg)", opacity: 0.55 }}
            >
                <Palette className="w-5 h-5 text-pink-400" />
            </div>

            {/* ── Icône Bubble : TrendingUp — Trading/Marketing (bas-gauche) ── */}
            <div
                className="pointer-events-none absolute bottom-36 left-6 w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shadow-sm backdrop-blur-sm"
                style={{ transform: "rotate(7deg)", opacity: 0.6 }}
            >
                <TrendingUp className="w-5 h-5 text-teal-400" />
            </div>

            {/* ── Icône Bubble : ShoppingBag — E-commerce (bas-droite) ── */}
            <div
                className="pointer-events-none absolute bottom-32 right-8 w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shadow-sm backdrop-blur-sm"
                style={{ transform: "rotate(-6deg)", opacity: 0.6 }}
            >
                <ShoppingBag className="w-5 h-5 text-green-400" />
            </div>

            {/* ── Text content ───────────────────────────────────────────── */}
            <article className="relative flex flex-col items-center justify-center text-center gap-y-4 max-w-4xl mx-auto">
                <Badge>Ton avenir commence ici</Badge>
                <h2 className="text-3xl lg:text-5xl font-techovier leading-tight">
                    Acquiers des compétences pratiques dans le{" "}
                    <span className="text-primary">numérique!</span>
                </h2>
                <p className="text-muted-foreground text-sm lg:text-base max-w-xl mx-auto leading-relaxed">
                    Nous formons en Cyber Sécurité, Développement web, UI/UX
                    Design... et plein d&apos;autres métiers du numérique.
                </p>
                <Button asChild>
                    <Link href="#formations">
                        Voir nos formations
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </Button>
            </article>

            {/* ── Image Collage ───────────────────────────────────────────── */}
            <article className="relative min-h-130 mt-12 select-none max-w-5xl mx-auto">
                {/* ── MAIN CARD — Salle de classe (center, z-10) ── */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-72 h-48 rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                    <Image
                        src="/fci-classroom.jpeg"
                        alt="Salle de classe FuturCraft Institut"
                        fill
                        sizes="288px"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-1.5">
                            <Users className="w-3.5 h-3.5" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold leading-none">
                                50+ Étudiants
                            </p>
                            <p className="text-[10px] opacity-75 mt-0.5">
                                formés avec succès
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── TOP LEFT — Développement Web (z-20) ── */}
                <div
                    className="absolute top-[5%] left-[4%] z-20 w-44 h-32 rounded-xl overflow-hidden shadow-xl border border-border/40 cursor-pointer transition-transform duration-300 hover:transform-[rotate(0deg)]"
                    style={{ transform: "rotate(-5deg)" }}
                >
                    <Image
                        src="/fci-loic-dev.jpeg"
                        alt="Développement Web"
                        fill
                        sizes="176px"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-2 left-2 flex items-center gap-1.5 text-white">
                        <div className="bg-blue-500/80 backdrop-blur-sm rounded-md p-1">
                            <Code2 className="w-3 h-3" />
                        </div>
                        <span className="text-xs font-semibold drop-shadow">
                            Dév. Web
                        </span>
                    </div>
                </div>

                {/* ── TOP RIGHT — Cyber Sécurité (z-20) ── */}
                <div
                    className="absolute top-[4%] right-[4%] z-20 w-44 h-32 rounded-xl overflow-hidden shadow-xl border border-border/40 cursor-pointer transition-transform duration-300 hover:transform-[rotate(0deg)]"
                    style={{ transform: "rotate(5deg)" }}
                >
                    <Image
                        src="/fci-ceo-2.jpeg"
                        alt="Cyber Sécurité"
                        fill
                        sizes="176px"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-2 left-2 flex items-center gap-1.5 text-white">
                        <div className="bg-red-500/80 backdrop-blur-sm rounded-md p-1">
                            <Shield className="w-3 h-3" />
                        </div>
                        <span className="text-xs font-semibold drop-shadow">
                            Cyber Sécurité
                        </span>
                    </div>
                </div>

                {/* ── BOTTOM LEFT — Audiovisuel (z-20) ── */}
                <div
                    className="absolute bottom-[7%] left-[5%] z-20 w-40 h-28 rounded-xl overflow-hidden shadow-xl border border-border/40 cursor-pointer transition-transform duration-300 hover:transform-[rotate(0deg)]"
                    style={{ transform: "rotate(4deg)" }}
                >
                    <Image
                        src="/fci-audiovisuel.jpeg"
                        alt="Audiovisuel"
                        fill
                        sizes="160px"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-2 left-2 flex items-center gap-1.5 text-white">
                        <div className="bg-orange-500/80 backdrop-blur-sm rounded-md p-1">
                            <Video className="w-3 h-3" />
                        </div>
                        <span className="text-xs font-semibold drop-shadow">
                            Audiovisuel
                        </span>
                    </div>
                </div>

                {/* ── BOTTOM RIGHT — UI/UX Design (z-20) ── */}
                <div
                    className="absolute bottom-[6%] right-[4%] z-20 w-44 h-28 rounded-xl overflow-hidden shadow-xl border border-border/40 cursor-pointer transition-transform duration-300 hover:transform-[rotate(0deg)]"
                    style={{ transform: "rotate(-4deg)" }}
                >
                    <Image
                        src="/fci-dolores-dev.jpeg"
                        alt="UI/UX Design"
                        fill
                        sizes="176px"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-2 left-2 flex items-center gap-1.5 text-white">
                        <div className="bg-purple-500/80 backdrop-blur-sm rounded-md p-1">
                            <Palette className="w-3 h-3" />
                        </div>
                        <span className="text-xs font-semibold drop-shadow">
                            UI/UX Design
                        </span>
                    </div>
                </div>

                {/* ── FLOATING BADGE — Certifié (left, z-30) ── */}
                <div className="absolute top-1/2 -translate-y-1/2 left-[1%] z-30 bg-card border border-border/80 rounded-2xl px-3 py-2.5 shadow-xl flex items-center gap-2.5">
                    <div className="bg-primary/10 rounded-xl p-2 shrink-0">
                        <Award className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                        <p className="text-xs font-bold leading-none">
                            Certifié
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">
                            Formation reconnue
                        </p>
                    </div>
                </div>

                {/* ── FLOATING BADGE — Note moyenne (right, z-30) ── */}
                <div className="absolute top-1/2 -translate-y-1/2 right-[1%] z-30 bg-card border border-border/80 rounded-2xl px-3 py-2.5 shadow-xl flex items-center gap-2.5">
                    <div className="bg-yellow-400/15 rounded-xl p-2 shrink-0">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                    </div>
                    <div>
                        <p className="text-xs font-bold leading-none">
                            4.9 / 5
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">
                            Note moyenne
                        </p>
                    </div>
                </div>

                {/* ── FLOATING CLUSTER — Student profiles (top-center, z-30) ── */}
                <div className="absolute top-[25%] left-1/2 -translate-x-1/2 z-30 bg-card border border-border/80 rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2.5 whitespace-nowrap">
                    <div className="flex -space-x-2 shrink-0">
                        {[
                            "/student-profile-1.jpeg",
                            "/student-profile-2.jpeg",
                            "/student-profile-3.jpeg",
                        ].map((src, i) => (
                            <div
                                key={i}
                                className="w-6 h-6 rounded-full overflow-hidden border-2 border-card relative shrink-0"
                            >
                                <Image
                                    src={src}
                                    alt={`Étudiant ${i + 1}`}
                                    fill
                                    sizes="24px"
                                    className="object-cover"
                                />
                            </div>
                        ))}
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center border-2 border-card text-primary-foreground text-[9px] font-bold shrink-0">
                            +50
                        </div>
                    </div>
                    <div>
                        <p className="text-xs font-bold leading-none">
                            Nos étudiants
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">
                            rejoins la communauté
                        </p>
                    </div>
                </div>
            </article>
        </section>
    );
}
