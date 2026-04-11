"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageSquare,
} from "lucide-react";
import {
    IconBrandFacebook,
    IconBrandWhatsapp,
    IconBrandTiktok,
} from "@tabler/icons-react";
import { useState } from "react";

const schema = z.object({
    nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.email("Adresse e-mail invalide"),
    sujet: z.string().min(3, "Veuillez indiquer un sujet"),
    message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactForm = z.infer<typeof schema>;

const contactInfos = [
    {
        icon: MapPin,
        color: "blue",
        label: "Adresse",
        value: "Godomey PK14, Route Ouidah",
        sub: "Immeuble Supermarché Ô Bénin",
    },
    {
        icon: Phone,
        color: "green",
        label: "Téléphone",
        value: "+229 01 4332 78 32",
        sub: "Lun – Sam, 08h – 18h",
    },
    {
        icon: Mail,
        color: "primary",
        label: "E-mail",
        value: "futurcraftinstitut@gmail.com",
        sub: "Réponse sous 24h",
    },
    {
        icon: Clock,
        color: "orange",
        label: "Horaires",
        value: "Lun – Sam",
        sub: "08h – 22h (jour & soir)",
    },
];

export default function FormulaireContact() {
    const [sent, setSent] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactForm>({
        resolver: zodResolver(schema),
    });

    function onSubmit(_data: ContactForm) {
        setSent(true);
        reset();
    }

    return (
        <section className="py-16 px-4 md:px-12 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8">
                {/* ── Colonne gauche : infos ─────────────────────────────── */}
                <div className="flex flex-col gap-4">
                    <div className="mb-2">
                        <Badge className="mb-3">Coordonnées</Badge>
                        <h2 className="text-2xl lg:text-3xl font-techovier leading-tight">
                            On est à votre<br />
                            <span className="text-primary">écoute</span>
                        </h2>
                        <p className="text-muted-foreground text-sm mt-2 leading-relaxed max-w-xs">
                            Notre équipe pédagogique répond à toutes vos questions sur nos formations, les inscriptions et les tarifs.
                        </p>
                    </div>

                    {contactInfos.map(({ icon: Icon, color, label, value, sub }) => (
                        <div
                            key={label}
                            className={`group relative bg-card border border-border rounded-2xl p-5 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-${color}-500/20`}
                        >
                            <div className={`absolute inset-0 bg-linear-to-br from-${color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                            <div className="relative flex items-start gap-4">
                                <div className={`w-10 h-10 rounded-xl bg-${color}-500/10 group-hover:bg-${color}-500/20 flex items-center justify-center transition-colors duration-300 shrink-0`}>
                                    <Icon className={`w-4 h-4 text-${color}-400`} />
                                </div>
                                <div>
                                    <p className={`text-[11px] font-semibold text-${color}-400 tracking-widest uppercase mb-0.5`}>{label}</p>
                                    <p className="text-sm font-semibold">{value}</p>
                                    <p className="text-xs text-muted-foreground">{sub}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Réseaux sociaux */}
                    <div className="bg-card border border-border rounded-2xl p-5">
                        <p className="text-[11px] font-semibold text-muted-foreground tracking-widest uppercase mb-3">Réseaux sociaux</p>
                        <div className="flex gap-3">
                            <a href="https://facebook.com/futurcraftinstitut" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center hover:bg-blue-500/20 transition-colors duration-200">
                                <IconBrandFacebook size={18} className="text-blue-400" />
                            </a>
                            <a href="https://wa.me/22943327832" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center hover:bg-green-500/20 transition-colors duration-200">
                                <IconBrandWhatsapp size={18} className="text-green-400" />
                            </a>
                            <a href="https://tiktok.com/@futurcraftinstitut" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-foreground/5 border border-border flex items-center justify-center hover:bg-foreground/10 transition-colors duration-200">
                                <IconBrandTiktok size={18} className="text-foreground/70" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── Colonne droite : formulaire ────────────────────────── */}
                <div className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary/0 via-primary/60 to-primary/0" />
                    <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <svg className="pointer-events-none absolute -bottom-6 -right-6 w-40 h-40 text-primary opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-500" viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.6" />
                        <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.5" />
                    </svg>

                    <div className="relative">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                            <MessageSquare className="w-6 h-6 text-primary" />
                        </div>
                        <Badge className="mb-4">Formulaire de contact</Badge>
                        <h3 className="font-semibold text-xl mb-6">Envoyez-nous un message</h3>

                        {sent ? (
                            <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                                    <Send className="w-7 h-7 text-green-400" />
                                </div>
                                <p className="font-semibold text-lg">Message envoyé !</p>
                                <p className="text-muted-foreground text-sm max-w-xs">
                                    Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                                </p>
                                <Button variant="outline" size="sm" onClick={() => setSent(false)}>
                                    Envoyer un autre message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">
                                            Nom complet
                                        </label>
                                        <input
                                            {...register("nom")}
                                            placeholder="Jean Kouassi"
                                            className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                                        />
                                        {errors.nom && <p className="text-xs text-red-400 mt-1">{errors.nom.message}</p>}
                                    </div>
                                    <div>
                                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">
                                            Adresse e-mail
                                        </label>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            placeholder="jean@exemple.com"
                                            className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                                        />
                                        {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">
                                        Sujet
                                    </label>
                                    <input
                                        {...register("sujet")}
                                        placeholder="Renseignements sur une formation"
                                        className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                                    />
                                    {errors.sujet && <p className="text-xs text-red-400 mt-1">{errors.sujet.message}</p>}
                                </div>

                                <div>
                                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">
                                        Message
                                    </label>
                                    <textarea
                                        {...register("message")}
                                        rows={5}
                                        placeholder="Décrivez votre demande..."
                                        className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none"
                                    />
                                    {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
                                </div>

                                <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                                    <Send className="w-4 h-4" />
                                    Envoyer le message
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
