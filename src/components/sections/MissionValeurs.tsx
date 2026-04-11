import { Badge } from "@/components/ui/badge";
import {
    Target,
    Eye,
    Heart,
    Lightbulb,
    Users,
    Award,
    CalendarCheck,
    GraduationCap,
    Handshake,
    TrendingUp,
    CheckCircle,
} from "lucide-react";

export default function MissionValeurs() {
    return (
        <section className="py-16 px-4 md:px-12 max-w-6xl mx-auto space-y-20">
            {/* ── Notre Histoire ─────────────────────────────────────────── */}
            <div>
                <div className="mb-10">
                    <Badge className="mb-3">Notre histoire</Badge>
                    <h2 className="text-2xl lg:text-4xl font-techovier leading-tight">
                        Nés d'une passion pour le{" "}
                        <span className="text-primary">numérique</span>
                    </h2>
                    <p className="text-muted-foreground text-sm mt-1.5 max-w-lg">
                        FuturCraft Institut, c'est l'histoire d'une conviction
                        simple : chaque jeune mérite d'accéder aux métiers du
                        futur.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Card — Fondation */}
                    <div className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-500/20">
                        <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <CalendarCheck className="absolute -right-4 -bottom-4 w-28 h-28 text-blue-400 opacity-[0.05] group-hover:opacity-[0.09] transition-opacity duration-500 pointer-events-none" />
                        <div className="relative flex flex-col h-full min-h-36">
                            <div className="w-11 h-11 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 flex items-center justify-center transition-colors duration-300 mb-5">
                                <CalendarCheck className="w-5 h-5 text-blue-400" />
                            </div>
                            <span className="text-5xl font-techovier font-bold text-blue-400 leading-none">2022</span>
                            <span className="text-sm font-semibold mt-1.5">Année de fondation</span>
                            <span className="text-xs text-muted-foreground mt-0.5">
                                Lancé à Godomey, Bénin, avec une poignée de formateurs passionnés et une ambition claire.
                            </span>
                        </div>
                    </div>

                    {/* Card — Apprenants */}
                    <div className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <GraduationCap className="absolute -right-4 -bottom-4 w-28 h-28 text-primary opacity-[0.05] group-hover:opacity-[0.09] transition-opacity duration-500 pointer-events-none" />
                        <div className="relative flex flex-col h-full min-h-36">
                            <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300 mb-5">
                                <GraduationCap className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-5xl font-techovier font-bold text-primary leading-none">+50</span>
                            <span className="text-sm font-semibold mt-1.5">Apprenants formés</span>
                            <span className="text-xs text-muted-foreground mt-0.5">
                                Des diplômés et professionnels qui travaillent aujourd'hui dans le numérique.
                            </span>
                        </div>
                    </div>

                    {/* Card — Filières */}
                    <div className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-secondary/20">
                        <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <Award className="absolute -right-4 -bottom-4 w-28 h-28 text-secondary opacity-[0.05] group-hover:opacity-[0.09] transition-opacity duration-500 pointer-events-none" />
                        <div className="relative flex flex-col h-full min-h-36">
                            <div className="w-11 h-11 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 flex items-center justify-center transition-colors duration-300 mb-5">
                                <Award className="w-5 h-5 text-secondary-foreground" />
                            </div>
                            <span className="text-5xl font-techovier font-bold text-secondary-foreground leading-none">+10</span>
                            <span className="text-sm font-semibold mt-1.5">Filières disponibles</span>
                            <span className="text-xs text-muted-foreground mt-0.5">
                                Tech, créatif et business — une offre complète pour tous les profils.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Mission & Vision ───────────────────────────────────────── */}
            <div>
                <div className="mb-10">
                    <Badge className="mb-3">Mission & Vision</Badge>
                    <h2 className="text-2xl lg:text-4xl font-techovier leading-tight">
                        Ce qui nous anime
                        <span className="text-primary"> chaque jour</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Mission */}
                    <div className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30">
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary/0 via-primary/60 to-primary/0" />
                        <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <svg className="pointer-events-none absolute -bottom-6 -right-6 w-40 h-40 text-primary opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-500" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.6" />
                            <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="0.4" />
                        </svg>
                        <div className="relative">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-primary/15">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                            <p className="text-[11px] font-semibold text-primary tracking-widest uppercase mb-2">Notre mission</p>
                            <h3 className="font-semibold text-lg leading-snug mb-3">Démocratiser l'accès aux métiers du numérique</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Offrir à chaque apprenant, quelle que soit son origine, une formation
                                de qualité, pratique et orientée emploi. Nous croyons que le talent ne
                                manque pas — c'est l'opportunité qui fait défaut.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-5">
                                {["Accessibilité", "Qualité", "Pratique", "Emploi"].map((tag) => (
                                    <span key={tag} className="text-[11px] bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium border border-primary/15">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-secondary/30">
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-secondary/0 via-secondary/60 to-secondary/0" />
                        <div className="absolute inset-0 bg-linear-to-b from-secondary/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <svg className="pointer-events-none absolute -bottom-6 -right-6 w-40 h-40 text-secondary opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-500" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 3" />
                            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 4" />
                        </svg>
                        <div className="relative">
                            <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/25 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-secondary/20">
                                <Eye className="w-6 h-6 text-secondary-foreground" />
                            </div>
                            <p className="text-[11px] font-semibold text-secondary-foreground tracking-widest uppercase mb-2">Notre vision</p>
                            <h3 className="font-semibold text-lg leading-snug mb-3">Devenir le premier hub de formation numérique d'Afrique de l'Ouest</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Construire un écosystème apprenant où les jeunes africains deviennent
                                les bâtisseurs du futur numérique. Former les talents qui feront rayonner
                                le continent à l'échelle internationale.
                            </p>
                            <div className="space-y-2.5 mt-5">
                                {["Former 500+ apprenants d'ici 2026", "Ouvrir 3 campus dans la région", "Partnerships avec 50+ entreprises"].map((item) => (
                                    <div key={item} className="flex items-center gap-2.5 text-sm">
                                        <CheckCircle className="w-4 h-4 text-secondary-foreground shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Nos Valeurs ─────────────────────────────────────────────── */}
            <div>
                <div className="mb-10">
                    <Badge className="mb-3">Nos valeurs</Badge>
                    <h2 className="text-2xl lg:text-4xl font-techovier leading-tight">
                        Les principes qui nous{" "}
                        <span className="text-primary">guident</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        {
                            icon: Heart,
                            color: "pink",
                            title: "Bienveillance",
                            desc: "Un cadre d'apprentissage sûr, inclusif et chaleureux pour chaque apprenant.",
                        },
                        {
                            icon: Lightbulb,
                            color: "yellow",
                            title: "Innovation",
                            desc: "Des formations en constante évolution, alignées avec les réalités du marché.",
                        },
                        {
                            icon: Users,
                            color: "blue",
                            title: "Communauté",
                            desc: "Apprendre ensemble, grandir ensemble. Un réseau d'anciens qui s'entraident.",
                        },
                        {
                            icon: TrendingUp,
                            color: "green",
                            title: "Excellence",
                            desc: "Exiger le meilleur de chaque formateur et accompagner chaque apprenant vers la réussite.",
                        },
                    ].map(({ icon: Icon, color, title, desc }) => (
                        <div
                            key={title}
                            className={`group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-${color}-500/20`}
                        >
                            <div className={`absolute inset-0 bg-linear-to-br from-${color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                            <div className="relative">
                                <div className={`w-11 h-11 rounded-xl bg-${color}-500/10 group-hover:bg-${color}-500/20 flex items-center justify-center transition-colors duration-300 mb-4`}>
                                    <Icon className={`w-5 h-5 text-${color}-400`} />
                                </div>
                                <h3 className="font-semibold text-base mb-2">{title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Partenaires / Atouts ─────────────────────────────────── */}
            <div className="group relative bg-card border border-border rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <svg className="pointer-events-none absolute -right-8 -bottom-8 w-48 h-48 text-primary opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.6" />
                    <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.5" />
                </svg>
                <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300 mb-5">
                        <Handshake className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Réseau de partenaires entreprises</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mb-5">
                        Nous travaillons en étroite collaboration avec des entreprises locales et internationales
                        pour garantir des stages, des opportunités d'emploi et des formations ancrées dans la réalité du marché.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["Stages garantis", "Mise en relation directe", "Prépa aux entretiens", "Réseau d'anciens", "Offres d'emploi exclusives"].map((tag) => (
                            <span key={tag} className="text-[11px] bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium border border-primary/15">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
