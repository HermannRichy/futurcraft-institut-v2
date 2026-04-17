"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    UserPlus,
    CheckCircle,
    GraduationCap,
    Sun,
    Moon,
    ChevronRight,
    FileText,
    Banknote,
} from "lucide-react";
import { useState } from "react";
import filieres from "@/data/filieres.json";

const schema = z.object({
    prenom: z.string().min(2, "Prénom requis (min. 2 caractères)"),
    nom: z.string().min(2, "Nom requis (min. 2 caractères)"),
    email: z.email("Adresse e-mail invalide"),
    telephone: z.string().min(8, "Numéro de téléphone invalide"),
    filiere: z.string().min(1, "Veuillez choisir une filière"),
    horaire: z.enum(["jour", "soir"], { error: "Veuillez choisir un horaire" }),
    diplome: z.string().min(1, "Veuillez indiquer votre dernier diplôme"),
    motivation: z.string().min(20, "Décrivez votre motivation (min. 20 caractères)"),
});

type InscriptionForm = z.infer<typeof schema>;

export default function FormulaireInscription() {
    const [done, setDone] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch,
    } = useForm<InscriptionForm>({
        resolver: zodResolver(schema),
    });

    const selectedFiliere = watch("filiere");
    const filiereInfo = filieres.filieres.find((f) => f.id === selectedFiliere);

    function onSubmit(_data: InscriptionForm) {
        setDone(true);
        reset();
    }

    return (
        <section className="py-16 px-4 md:px-12 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8">
                {/* ── Formulaire ──────────────────────────────────────────── */}
                <div className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary/0 via-primary/60 to-primary/0" />
                    <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <svg className="pointer-events-none absolute -bottom-6 -right-6 w-40 h-40 text-primary opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-500" viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.6" />
                        <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.5" />
                    </svg>

                    <div className="relative">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                            <UserPlus className="w-6 h-6 text-primary" />
                        </div>
                        <Badge className="mb-4">Formulaire d'inscription</Badge>
                        <h3 className="font-semibold text-xl mb-6">Remplis ta demande d'inscription</h3>

                        {done ? (
                            <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                                    <CheckCircle className="w-7 h-7 text-green-400" />
                                </div>
                                <p className="font-semibold text-lg">Demande reçue !</p>
                                <p className="text-muted-foreground text-sm max-w-xs">
                                    Ton dossier est bien enregistré. Notre équipe te contactera sous 48h pour confirmer ton inscription.
                                </p>
                                <Button variant="outline" size="sm" onClick={() => setDone(false)}>
                                    Nouvelle inscription
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                {/* Identité */}
                                <div>
                                    <p className="text-[11px] font-semibold text-primary tracking-widest uppercase mb-3">Informations personnelles</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">Prénom</label>
                                            <input {...register("prenom")} placeholder="Aminata" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all" />
                                            {errors.prenom && <p className="text-xs text-red-400 mt-1">{errors.prenom.message}</p>}
                                        </div>
                                        <div>
                                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">Nom</label>
                                            <input {...register("nom")} placeholder="Koné" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all" />
                                            {errors.nom && <p className="text-xs text-red-400 mt-1">{errors.nom.message}</p>}
                                        </div>
                                        <div>
                                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">E-mail</label>
                                            <input {...register("email")} type="email" placeholder="aminata@exemple.com" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all" />
                                            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
                                        </div>
                                        <div>
                                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">Téléphone</label>
                                            <input {...register("telephone")} placeholder="+225 07 00 00 00 00" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all" />
                                            {errors.telephone && <p className="text-xs text-red-400 mt-1">{errors.telephone.message}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Formation */}
                                <div>
                                    <p className="text-[11px] font-semibold text-primary tracking-widest uppercase mb-3">Choix de la formation</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">Filière souhaitée</label>
                                            <select {...register("filiere")} className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all">
                                                <option value="">Choisir une filière…</option>
                                                {filieres.filieres.map((f) => (
                                                    <option key={f.id} value={f.id}>{f.nom}</option>
                                                ))}
                                            </select>
                                            {errors.filiere && <p className="text-xs text-red-400 mt-1">{errors.filiere.message}</p>}
                                        </div>
                                        <div>
                                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">Horaire préféré</label>
                                            <div className="flex gap-3">
                                                <label className="flex-1 flex items-center gap-2 bg-background border border-border rounded-xl px-4 py-2.5 cursor-pointer has-[:checked]:border-orange-500/50 has-[:checked]:bg-orange-500/5 transition-all">
                                                    <input {...register("horaire")} type="radio" value="jour" className="accent-orange-400" />
                                                    <Sun className="w-4 h-4 text-orange-400" />
                                                    <span className="text-sm">Jour</span>
                                                </label>
                                                <label className="flex-1 flex items-center gap-2 bg-background border border-border rounded-xl px-4 py-2.5 cursor-pointer has-[:checked]:border-indigo-500/50 has-[:checked]:bg-indigo-500/5 transition-all">
                                                    <input {...register("horaire")} type="radio" value="soir" className="accent-indigo-400" />
                                                    <Moon className="w-4 h-4 text-indigo-400" />
                                                    <span className="text-sm">Soir</span>
                                                </label>
                                            </div>
                                            {errors.horaire && <p className="text-xs text-red-400 mt-1">{errors.horaire.message}</p>}
                                        </div>
                                        <div>
                                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">Dernier diplôme obtenu</label>
                                            <input {...register("diplome")} placeholder="Ex : Baccalauréat, BTS…" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all" />
                                            {errors.diplome && <p className="text-xs text-red-400 mt-1">{errors.diplome.message}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Motivation */}
                                <div>
                                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">Lettre de motivation</label>
                                    <textarea {...register("motivation")} rows={4} placeholder="Pourquoi souhaitez-vous rejoindre FuturCraft Institut ? Quels sont vos objectifs professionnels ?" className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none" />
                                    {errors.motivation && <p className="text-xs text-red-400 mt-1">{errors.motivation.message}</p>}
                                </div>

                                <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                                    <ChevronRight className="w-4 h-4" />
                                    Soumettre ma candidature
                                </Button>
                                <p className="text-xs text-muted-foreground text-center">
                                    Notre équipe vous contactera sous 48h pour confirmer votre dossier.
                                </p>
                            </form>
                        )}
                    </div>
                </div>

                {/* ── Colonne droite : récap filière + infos ──────────────── */}
                <div className="flex flex-col gap-4">
                    {/* Aperçu filière sélectionnée */}
                    {filiereInfo ? (
                        <div className="group relative bg-card border border-primary/30 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-lg">
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary/0 via-primary/60 to-primary/0" />
                            <div className="relative">
                                <p className="text-[11px] font-semibold text-primary tracking-widest uppercase mb-3">Filière sélectionnée</p>
                                <h3 className="font-semibold text-base mb-1">{filiereInfo.nom}</h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span className="text-[11px] bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium border border-primary/15">{filiereInfo.duree}</span>
                                    <span className="text-[11px] bg-secondary/10 text-secondary-foreground px-2.5 py-1 rounded-full font-medium border border-secondary/15">{filiereInfo.scolarite_label}</span>
                                </div>
                                <p className="text-muted-foreground text-xs leading-relaxed">{filiereInfo.description.slice(0, 150)}…</p>
                                <div className="mt-4 space-y-1.5">
                                    {filiereInfo.contenu_formation.slice(0, 4).map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-xs">
                                            <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden">
                            <div className="relative flex flex-col items-center text-center gap-3 py-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                    <GraduationCap className="w-6 h-6 text-primary" />
                                </div>
                                <p className="text-sm font-semibold">Choisissez une filière</p>
                                <p className="text-xs text-muted-foreground">Un aperçu de la formation apparaîtra ici après votre sélection.</p>
                            </div>
                        </div>
                    )}

                    {/* Processus */}
                    <div className="bg-card border border-border rounded-2xl p-6">
                        <p className="text-[11px] font-semibold text-muted-foreground tracking-widest uppercase mb-6">Processus d'admission</p>
                        <div className="relative flex flex-col gap-0">
                            {[
                                { step: "01", label: "Soumission du dossier", desc: "Remplis ce formulaire en ligne" },
                                { step: "02", label: "Entretien pédagogique", desc: "Appel ou visite sous 48h" },
                                { step: "03", label: "Confirmation", desc: "Validation et paiement des frais" },
                                { step: "04", label: "Bienvenue à FCI !", desc: "Tu rejoins la communauté" },
                            ].map(({ step, label, desc }, i, arr) => (
                                <div key={step} className="relative flex items-start gap-4">
                                    {/* Ligne verticale de connexion */}
                                    {i < arr.length - 1 && (
                                        <div className="absolute left-[17px] top-9 bottom-0 w-px bg-border" />
                                    )}
                                    {/* Numéro bulle */}
                                    <div className="w-9 h-9 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center shrink-0 z-10">
                                        <span className="text-xs font-bold text-primary">{step}</span>
                                    </div>
                                    {/* Texte */}
                                    <div className="pb-7">
                                        <p className="text-sm font-semibold leading-snug">{label}</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Frais d'inscription */}
                    <div className="bg-card border border-border rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                <Banknote className="w-4 h-4 text-primary" />
                            </div>
                            <p className="text-[11px] font-semibold text-muted-foreground tracking-widest uppercase">Frais d'inscription</p>
                        </div>
                        <div className="space-y-2">
                            {[
                                { label: "Uniforme (complet)", montant: "15 000 F" },
                                { label: "Badge & Documents", montant: "10 000 F" },
                                { label: "Inscription", montant: "15 000 F" },
                            ].map(({ label, montant }) => (
                                <div key={label} className="flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground">{label}</span>
                                    <span className="font-medium tabular-nums">{montant}</span>
                                </div>
                            ))}
                            <div className="border-t border-border mt-3 pt-3 flex items-center justify-between">
                                <span className="text-sm font-semibold">Total</span>
                                <span className="text-primary font-bold text-base tabular-nums">40 000 F</span>
                            </div>
                        </div>
                    </div>

                    {/* Documents requis */}
                    <div className="bg-card border border-border rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                <FileText className="w-4 h-4 text-primary" />
                            </div>
                            <p className="text-[11px] font-semibold text-muted-foreground tracking-widest uppercase">Documents requis</p>
                        </div>
                        <div className="space-y-2">
                            {[
                                "Copie de pièce d'identité",
                                "2 photos d'identité",
                                "Copie du dernier diplôme ou du Bac",
                                "Contrat de formation (à retirer à l'institut)",
                            ].map((doc) => (
                                <div key={doc} className="flex items-start gap-2 text-sm">
                                    <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                                    <span className="text-muted-foreground leading-snug">{doc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Note */}
                    <div className="bg-card border border-border rounded-2xl p-5">
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Une question avant de postuler ?{" "}
                            <a href="/contact" className="text-primary underline-offset-4 hover:underline font-medium">
                                Contacte-nous
                            </a>{" "}
                            — notre équipe te répond sous 24h.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
