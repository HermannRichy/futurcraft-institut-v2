"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import FiliereCard, { type FiliereData } from "@/components/FiliereCard";

const filters = [
    { key: "all",      label: "Toutes" },
    { key: "tech",     label: "Tech" },
    { key: "securite", label: "Sécurité" },
    { key: "creatif",  label: "Créatif" },
    { key: "business", label: "Business" },
];

export default function FilieresGrid({ filieres }: { filieres: FiliereData[] }) {
    const [active, setActive] = useState("all");

    const filtered =
        active === "all"
            ? filieres
            : filieres.filter((f) => f.categorie === active);

    return (
        <div>
            {/* Filtres */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
                {filters.map((f) => {
                    const count =
                        f.key === "all"
                            ? filieres.length
                            : filieres.filter((fi) => fi.categorie === f.key).length;
                    return (
                        <button
                            key={f.key}
                            onClick={() => setActive(f.key)}
                            className={cn(
                                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border",
                                active === f.key
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "bg-card border-border text-muted-foreground hover:text-foreground hover:bg-muted",
                            )}
                        >
                            {f.label}
                            <span className={cn(
                                "ml-2 text-[11px] rounded-full px-1.5 py-0.5 font-semibold",
                                active === f.key
                                    ? "bg-primary-foreground/20 text-primary-foreground"
                                    : "bg-muted text-muted-foreground",
                            )}>
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Compteur */}
            <p className="text-sm text-muted-foreground mb-6">
                <span className="font-semibold text-foreground">{filtered.length}</span>
                {" "}formation{filtered.length > 1 ? "s" : ""} trouvée{filtered.length > 1 ? "s" : ""}
            </p>

            {/* Grille */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((filiere) => (
                    <FiliereCard key={filiere.id} filiere={filiere} />
                ))}
            </div>
        </div>
    );
}
