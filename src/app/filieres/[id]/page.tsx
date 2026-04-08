import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowLeft,
    ArrowRight,
    Clock,
    BookOpen,
    GraduationCap,
    CheckCircle,
    Briefcase,
    Wrench,
    Mail,
} from "lucide-react";
import data from "@/data/filieres.json";

type FiliereData = (typeof data.filieres)[number];
type Props = { params: Promise<{ id: string }> };

// ── Config ────────────────────────────────────────────────────────────────

const categoryColors: Record<string, string> = {
    tech: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    securite: "bg-red-500/15 text-red-400 border-red-500/20",
    creatif: "bg-purple-500/15 text-purple-400 border-purple-500/20",
    business: "bg-green-500/15 text-green-400 border-green-500/20",
};
const categoryLabels: Record<string, string> = {
    tech: "Tech",
    securite: "Sécurité",
    creatif: "Créatif",
    business: "Business",
};
const niveauLabels: Record<string, string> = {
    diplome: "Formation diplômante",
    professionnel: "Formation professionnelle",
    initiation: "Formation courte",
};
const niveauColors: Record<string, string> = {
    diplome: "bg-primary/10 text-primary border-primary/20",
    professionnel:
        "bg-secondary/15 text-secondary-foreground border-secondary/20",
    initiation: "bg-orange-500/15 text-orange-400 border-orange-500/20",
};

// ── Static params & metadata ──────────────────────────────────────────────

export function generateStaticParams() {
    return data.filieres.map((f) => ({ id: f.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const filiere = data.filieres.find((f) => f.id === id);
    if (!filiere) return { title: "Formation introuvable" };
    return {
        title: `${filiere.nom} — FuturCraft Institut`,
        description: filiere.description,
    };
}

// ── Page ─────────────────────────────────────────────────────────────────

export default async function FiliereDetailPage({ params }: Props) {
    const { id } = await params;
    const filiere = data.filieres.find((f) => f.id === id) as
        | FiliereData
        | undefined;
    if (!filiere) notFound();

    const otherFilieres = data.filieres
        .filter((f) => f.id !== filiere.id && f.categorie === filiere.categorie)
        .slice(0, 3);

    return (
        <main>
            <Header />

            {/* ══ HERO ════════════════════════════════════════════════════ */}
            <section className="relative h-72 md:h-96 overflow-hidden">
                <Image
                    src={filiere.image}
                    alt={filiere.nom}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-black/10" />
                <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />

                {/* Anneaux décoratifs */}
                <svg
                    className="pointer-events-none absolute top-0 right-0 w-72 h-72 text-white opacity-[0.05]"
                    aria-hidden="true"
                    fill="none"
                >
                    <circle
                        cx="288"
                        cy="0"
                        r="110"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeDasharray="6 4"
                    />
                    <circle
                        cx="288"
                        cy="0"
                        r="180"
                        stroke="currentColor"
                        strokeWidth="0.4"
                        strokeDasharray="4 5"
                    />
                </svg>
                <svg
                    className="pointer-events-none absolute bottom-0 left-0 w-48 h-48 text-white opacity-[0.04]"
                    aria-hidden="true"
                    fill="none"
                >
                    <path
                        d="M 0 192 A 140 140 0 0 1 140 52"
                        stroke="currentColor"
                        strokeWidth="0.7"
                        strokeDasharray="5 4"
                        strokeLinecap="round"
                    />
                </svg>

                {/* Contenu */}
                <div className="absolute inset-x-0 bottom-0 px-4 md:px-12 pb-8 pt-16 max-w-6xl mx-auto">
                    {/* Retour */}
                    <Link
                        href="/filieres"
                        className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs mb-4 transition-colors"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Toutes les filières
                    </Link>

                    <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span
                            className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm ${categoryColors[filiere.categorie]}`}
                        >
                            {categoryLabels[filiere.categorie]}
                        </span>
                        <span
                            className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm ${niveauColors[filiere.niveau]}`}
                        >
                            {niveauLabels[filiere.niveau]}
                        </span>
                    </div>

                    <h1 className="text-2xl md:text-4xl font-techovier text-white leading-tight max-w-2xl">
                        {filiere.nom}
                    </h1>
                </div>
            </section>

            {/* ══ BARRE INFO RAPIDE ════════════════════════════════════════ */}
            <div className="bg-card border-b border-border">
                <div className="max-w-6xl mx-auto px-4 md:px-12 py-3.5 flex flex-wrap gap-x-8 gap-y-2">
                    {[
                        { icon: Clock, label: filiere.duree },
                        {
                            icon: BookOpen,
                            label: `${filiere.modules.length} modules`,
                        },
                        { icon: GraduationCap, label: filiere.diplome_requis },
                    ].map(({ icon: Icon, label }) => (
                        <div
                            key={label}
                            className="flex items-center gap-2 text-sm"
                        >
                            <Icon className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-muted-foreground">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ══ CONTENU PRINCIPAL ════════════════════════════════════════ */}
            <div className="relative max-w-6xl mx-auto px-4 md:px-12 py-12">
                {/* Déco fond */}
                <svg
                    className="pointer-events-none absolute -top-4 right-0 w-56 h-56 text-primary opacity-[0.03]"
                    aria-hidden="true"
                    fill="none"
                >
                    <circle
                        cx="224"
                        cy="0"
                        r="90"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeDasharray="5 4"
                    />
                    <circle
                        cx="224"
                        cy="0"
                        r="140"
                        stroke="currentColor"
                        strokeWidth="0.4"
                        strokeDasharray="3 5"
                    />
                </svg>

                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-start">
                    {/* ── Colonne gauche ─────────────────────────────────── */}
                    <div className="space-y-10">
                        {/* Description */}
                        <div className="bg-card border border-border rounded-2xl p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-1 h-5 rounded-full bg-primary" />
                                <h2 className="font-semibold text-lg">
                                    À propos de cette formation
                                </h2>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {filiere.description}
                            </p>
                        </div>

                        {/* Contenu de la formation */}
                        <div>
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-1 h-5 rounded-full bg-primary" />
                                <h2 className="font-semibold text-lg">
                                    Contenu de la formation
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {filiere.contenu_formation.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-3 bg-card border border-border rounded-xl p-3.5 hover:border-primary/20 transition-colors"
                                    >
                                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        <span className="text-sm text-muted-foreground leading-snug">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Modules */}
                        <div>
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-1 h-5 rounded-full bg-primary" />
                                <h2 className="font-semibold text-lg">
                                    Programme détaillé
                                </h2>
                                <span className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                                    {filiere.modules.length} modules
                                </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {filiere.modules.map((mod, i) => (
                                    <div
                                        key={i}
                                        className="group relative bg-card border border-border rounded-xl p-4 overflow-hidden hover:border-primary/20 hover:shadow-md transition-all duration-300"
                                    >
                                        {/* Numéro watermark */}
                                        <span className="pointer-events-none select-none absolute top-2 right-3 text-4xl font-techovier font-bold text-primary/6 leading-none">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <div className="relative">
                                            <p className="font-semibold text-sm mb-1.5 leading-snug pr-8">
                                                {mod.titre}
                                            </p>
                                            <p className="text-xs text-muted-foreground leading-relaxed">
                                                {mod.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Compétences */}
                        <div>
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-1 h-5 rounded-full bg-primary" />
                                <h2 className="font-semibold text-lg">
                                    Compétences acquises
                                </h2>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {filiere.competences.map((comp, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-1.5 bg-primary/8 border border-primary/15 text-primary rounded-xl px-3 py-1.5"
                                    >
                                        <Wrench className="w-3 h-3 shrink-0" />
                                        <span className="text-xs font-medium">
                                            {comp}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Sidebar ────────────────────────────────────────── */}
                    <div className="lg:sticky lg:top-28">
                        <div className="bg-card border border-border rounded-2xl overflow-hidden">
                            {/* Accent top */}
                            <div className="h-1 bg-linear-to-r from-primary/60 via-primary to-secondary/60" />

                            <div className="p-5 space-y-5">
                                {/* Prix */}
                                <div>
                                    <p className="text-xs text-muted-foreground mb-1">
                                        Scolarité
                                    </p>
                                    <p className="text-2xl font-techovier font-bold text-primary leading-none">
                                        {filiere.scolarite_label}
                                    </p>
                                </div>

                                {/* Infos clés */}
                                <div className="space-y-3 py-4 border-y border-border/60">
                                    {[
                                        {
                                            icon: Clock,
                                            label: "Durée",
                                            value: filiere.duree,
                                        },
                                        {
                                            icon: BookOpen,
                                            label: "Modules",
                                            value: `${filiere.modules.length} modules`,
                                        },
                                        {
                                            icon: GraduationCap,
                                            label: "Diplôme requis",
                                            value: filiere.diplome_requis,
                                        },
                                    ].map(({ icon: Icon, label, value }) => (
                                        <div
                                            key={label}
                                            className="flex items-center gap-3 text-sm"
                                        >
                                            <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                                                <Icon className="w-3.5 h-3.5 text-primary" />
                                            </div>
                                            <div className="flex-1 flex items-center justify-between">
                                                <span className="text-muted-foreground">
                                                    {label}
                                                </span>
                                                <span className="font-medium text-xs text-right max-w-30 leading-snug">
                                                    {value}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Niveau badge */}
                                <div>
                                    <span
                                        className={`text-[11px] font-semibold px-3 py-1.5 rounded-full border ${niveauColors[filiere.niveau]}`}
                                    >
                                        {niveauLabels[filiere.niveau]}
                                    </span>
                                </div>

                                {/* CTAs */}
                                <div className="space-y-2.5 pt-1">
                                    <Button
                                        asChild
                                        className="w-full"
                                        size="lg"
                                    >
                                        <Link
                                            href="/inscription"
                                            className="flex items-center justify-center gap-2"
                                        >
                                            S&apos;inscrire à cette formation
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="w-full"
                                        size="sm"
                                    >
                                        <Link
                                            href="/contact"
                                            className="flex items-center justify-center gap-2"
                                        >
                                            <Mail className="w-4 h-4" />
                                            Poser une question
                                        </Link>
                                    </Button>
                                </div>

                                <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
                                    Notre équipe répond sous 24h à toutes vos
                                    questions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ══ DÉBOUCHÉS ════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden py-14 px-4 md:px-12 border-t border-border/60">
                <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-primary/2 to-transparent" />

                <div className="relative max-w-6xl mx-auto">
                    <div className="flex items-center gap-2 mb-8">
                        <Badge>Après la formation</Badge>
                        <h2 className="text-xl lg:text-2xl font-techovier ml-1">
                            Vos débouchés professionnels
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filiere.debouches.map((job, i) => (
                            <div
                                key={i}
                                className="group flex items-center gap-3.5 bg-card border border-border rounded-xl p-4 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-9 h-9 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                                    <Briefcase className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-sm font-medium leading-snug">
                                    {job}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ AUTRES FILIÈRES (même catégorie) ════════════════════════ */}
            {otherFilieres.length > 0 && (
                <section className="py-14 px-4 md:px-12 border-t border-border/60">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-techovier">
                                Dans la même catégorie
                            </h2>
                            <Button asChild variant="ghost" size="sm">
                                <Link
                                    href="/filieres"
                                    className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                                >
                                    Voir tout
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {otherFilieres.map((f) => (
                                <Link
                                    key={f.id}
                                    href={`/filieres/${f.id}`}
                                    className="group flex items-center gap-4 bg-card border border-border rounded-2xl p-4 hover:border-primary/20 hover:shadow-lg transition-all duration-300 overflow-hidden"
                                >
                                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                                        <Image
                                            src={f.image}
                                            alt={f.nom}
                                            fill
                                            sizes="64px"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold leading-snug truncate">
                                            {f.nom}
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            {f.duree}
                                        </p>
                                        <p className="text-xs font-bold text-primary mt-0.5">
                                            {f.scolarite_label}
                                        </p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ══ CTA BOTTOM ══════════════════════════════════════════════ */}
            <section className="relative overflow-hidden py-14 px-4 md:px-12 border-t border-border/60">
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5" />
                <svg
                    className="pointer-events-none absolute -bottom-6 -right-6 w-48 h-48 text-secondary opacity-[0.06]"
                    aria-hidden="true"
                    fill="none"
                >
                    <circle
                        cx="192"
                        cy="192"
                        r="80"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeDasharray="5 4"
                    />
                    <circle
                        cx="192"
                        cy="192"
                        r="130"
                        stroke="currentColor"
                        strokeWidth="0.4"
                        strokeDasharray="3 5"
                    />
                </svg>

                <div className="relative max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl lg:text-3xl font-techovier mb-3">
                        Prêt à rejoindre cette formation ?
                    </h2>
                    <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                        Inscris-toi dès maintenant ou contacte notre équipe pour
                        toute question sur la formation{" "}
                        <span className="text-foreground font-medium">
                            {filiere.nom}
                        </span>
                        .
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Button asChild size="lg">
                            <Link
                                href="/inscription"
                                className="flex items-center gap-2"
                            >
                                S&apos;inscrire maintenant
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link
                                href="/contact"
                                className="flex items-center gap-2"
                            >
                                <Mail className="w-4 h-4" />
                                Nous contacter
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
