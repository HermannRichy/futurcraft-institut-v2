import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import FilieresGrid from "@/components/sections/FilieresGrid";
import { Badge } from "@/components/ui/badge";
import data from "@/data/filieres.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nos filières — FuturCraft Institut",
    description:
        "Découvrez toutes nos formations professionnelles : développement web, cybersécurité, IA, audiovisuel, marketing digital et bien plus.",
};

export default function FilieresPage() {
    return (
        <main>
            <Header />

            {/* ── Hero ──────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden py-20 px-4 md:px-12">
                {/* Décos SVG */}
                <svg
                    className="pointer-events-none absolute -top-8 -right-8 w-64 h-64 text-secondary opacity-[0.06]"
                    aria-hidden="true"
                    fill="none"
                >
                    <circle
                        cx="256"
                        cy="0"
                        r="110"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeDasharray="5 4"
                    />
                    <circle
                        cx="256"
                        cy="0"
                        r="165"
                        stroke="currentColor"
                        strokeWidth="0.4"
                        strokeDasharray="3 5"
                    />
                </svg>
                <svg
                    className="pointer-events-none absolute -bottom-8 -left-8 w-64 h-64 text-primary opacity-[0.05]"
                    aria-hidden="true"
                    fill="none"
                >
                    <circle
                        cx="0"
                        cy="256"
                        r="110"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeDasharray="5 4"
                    />
                    <circle
                        cx="0"
                        cy="256"
                        r="165"
                        stroke="currentColor"
                        strokeWidth="0.4"
                        strokeDasharray="3 5"
                    />
                </svg>

                <div className="relative max-w-6xl mx-auto text-center">
                    <Badge className="mb-4">Catalogue complet</Badge>
                    <h1 className="text-3xl lg:text-5xl font-techovier leading-tight mb-4">
                        Toutes nos filières
                    </h1>
                    <p className="text-muted-foreground text-sm lg:text-base max-w-xl mx-auto leading-relaxed mb-10">
                        {data.filieres.length} formations disponibles dans 4
                        domaines. Des parcours courts d&apos;un mois aux
                        diplômes de deux ans — trouve celle qui correspond à tes
                        ambitions.
                    </p>

                    {/* Stats rapides */}
                    <div className="flex flex-wrap justify-center gap-4 mb-2">
                        {[
                            {
                                value: `${data.filieres.length}`,
                                label: "filières",
                            },
                            { value: "4", label: "domaines" },
                            { value: "1 mois", label: "durée min." },
                            { value: "2 ans", label: "durée max." },
                        ].map((s) => (
                            <div
                                key={s.label}
                                className="bg-card border border-border rounded-2xl px-5 py-3 flex flex-col items-center gap-0.5"
                            >
                                <span className="text-xl font-techovier font-bold text-primary leading-none">
                                    {s.value}
                                </span>
                                <span className="text-[11px] text-muted-foreground">
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Grille filtrée ─────────────────────────────────────────── */}
            <section className="px-4 md:px-12 pb-24 max-w-6xl mx-auto">
                <FilieresGrid filieres={data.filieres} />
            </section>

            <Footer />
        </main>
    );
}
