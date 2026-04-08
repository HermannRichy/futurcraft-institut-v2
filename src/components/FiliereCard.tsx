import Image from "next/image";
import Link from "next/link";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import data from "@/data/filieres.json";

export type FiliereData = (typeof data.filieres)[number];

export const categoryColors: Record<string, string> = {
    tech: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    securite: "bg-red-500/15 text-red-400 border-red-500/20",
    creatif: "bg-purple-500/15 text-purple-400 border-purple-500/20",
    business: "bg-green-500/15 text-green-400 border-green-500/20",
};

export const categoryLabels: Record<string, string> = {
    tech: "Tech",
    securite: "Sécurité",
    creatif: "Créatif",
    business: "Business",
};

export default function FiliereCard({ filiere }: { filiere: FiliereData }) {
    return (
        <div className="h-full flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/20 hover:shadow-lg transition-all duration-300 group">
            {/* Image */}
            <div className="relative h-44 shrink-0 overflow-hidden">
                <Image
                    src={filiere.image}
                    alt={filiere.nom}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-semibold px-2 py-1 rounded-full border backdrop-blur-sm ${categoryColors[filiere.categorie]}`}>
                        {categoryLabels[filiere.categorie]}
                    </span>
                </div>

                <div className="absolute bottom-3 left-3 flex gap-1.5">
                    <span className="bg-black/55 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3 shrink-0" />
                        {filiere.duree}
                    </span>
                    <span className="bg-black/55 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-1 rounded-full flex items-center gap-1">
                        <BookOpen className="w-3 h-3 shrink-0" />
                        {filiere.modules.length} modules
                    </span>
                </div>
            </div>

            {/* Contenu */}
            <div className="p-4 flex flex-col gap-2.5 flex-1">
                <h3 className="font-semibold text-base leading-snug">{filiere.nom}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed flex-1">
                    {filiere.description}
                </p>

                <div className="flex items-center justify-between pt-3 mt-1 border-t border-border/60">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground leading-none mb-0.5">
                            À partir de
                        </span>
                        <span className="text-sm font-bold text-primary leading-none">
                            {filiere.scolarite_label}
                        </span>
                    </div>
                    <Button asChild size="sm" variant="secondary">
                        <Link href={`/filieres/${filiere.id}`} className="flex items-center gap-1.5">
                            Voir la formation
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
