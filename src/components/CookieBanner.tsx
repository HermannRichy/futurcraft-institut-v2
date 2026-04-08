"use client";

import { useEffect, useState } from "react";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
    Cookie,
    ShieldCheck,
    BarChart2,
    Megaphone,
    ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ── Types & constantes ─────────────────────────────────────────────────────

const COOKIE_KEY = "fci-cookie-consent";

type ConsentState = {
    necessary: true;
    analytics: boolean;
    marketing: boolean;
    preferences: boolean;
    savedAt: string;
};

type Category = {
    key: keyof Omit<ConsentState, "necessary" | "savedAt">;
    label: string;
    description: string;
    icon: React.ElementType;
    color: string;
    required?: boolean;
};

const categories: Category[] = [
    {
        key: "necessary" as never,
        label: "Cookies nécessaires",
        description:
            "Indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés.",
        icon: ShieldCheck,
        color: "text-green-400",
        required: true,
    },
    {
        key: "analytics",
        label: "Analytique",
        description:
            "Nous aident à comprendre comment vous utilisez le site afin de l'améliorer.",
        icon: BarChart2,
        color: "text-blue-400",
    },
    {
        key: "marketing",
        label: "Marketing",
        description:
            "Utilisés pour vous proposer des contenus et publicités personnalisés.",
        icon: Megaphone,
        color: "text-purple-400",
    },
];

// ── Toggle switch ──────────────────────────────────────────────────────────

function Toggle({
    checked,
    onChange,
    disabled,
}: {
    checked: boolean;
    onChange: (v: boolean) => void;
    disabled?: boolean;
}) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            onClick={() => !disabled && onChange(!checked)}
            className={cn(
                "relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                checked
                    ? "bg-primary border-primary"
                    : "bg-muted border-muted-foreground/30",
                disabled && "opacity-60 cursor-not-allowed",
            )}
        >
            <span
                className={cn(
                    "pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform duration-200",
                    checked ? "translate-x-3.5" : "translate-x-px",
                )}
            />
        </button>
    );
}

// ── Composant principal ────────────────────────────────────────────────────

export default function CookieBanner() {
    const [open, setOpen] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [consent, setConsent] = useState({
        analytics: true,
        marketing: false,
        preferences: true,
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            try {
                const stored = localStorage.getItem(COOKIE_KEY);
                if (!stored) setOpen(true);
            } catch {
                setOpen(true);
            }
        }, 400);
        return () => clearTimeout(timer);
    }, []);

    const save = (data: Omit<ConsentState, "necessary" | "savedAt">) => {
        const payload: ConsentState = {
            necessary: true,
            ...data,
            savedAt: new Date().toISOString(),
        };
        try {
            localStorage.setItem(COOKIE_KEY, JSON.stringify(payload));
        } catch {
            /* silently ignore */
        }
        setOpen(false);
    };

    const acceptAll = () =>
        save({ analytics: true, marketing: true, preferences: true });

    const rejectAll = () =>
        save({ analytics: false, marketing: false, preferences: false });

    const saveCustom = () => save(consent);

    return (
        <AlertDialog open={open}>
            <AlertDialogContent className="max-w-md p-0 overflow-hidden border-border/80 gap-0">
                {/* ── Décorations ───────────────────────────────────────── */}

                {/* Gradient haut */}
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent pointer-events-none" />

                {/* Anneaux haut-droite */}
                <svg
                    className="pointer-events-none absolute -top-6 -right-6 w-36 h-36 text-secondary opacity-[0.07]"
                    aria-hidden="true"
                    fill="none"
                >
                    <circle
                        cx="144"
                        cy="0"
                        r="60"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeDasharray="5 4"
                    />
                    <circle
                        cx="144"
                        cy="0"
                        r="95"
                        stroke="currentColor"
                        strokeWidth="0.4"
                        strokeDasharray="3 5"
                    />
                </svg>

                {/* Anneaux bas-gauche */}
                <svg
                    className="pointer-events-none absolute -bottom-6 -left-6 w-36 h-36 text-primary opacity-[0.06]"
                    aria-hidden="true"
                    fill="none"
                >
                    <circle
                        cx="0"
                        cy="144"
                        r="60"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeDasharray="5 4"
                    />
                    <circle
                        cx="0"
                        cy="144"
                        r="95"
                        stroke="currentColor"
                        strokeWidth="0.4"
                        strokeDasharray="3 5"
                    />
                </svg>

                {/* Points éparpillés */}
                <svg
                    className="pointer-events-none absolute inset-0 w-full h-full text-primary"
                    aria-hidden="true"
                    fill="currentColor"
                >
                    <circle cx="92%" cy="80%" r="1.5" fillOpacity="0.07" />
                    <circle cx="8%" cy="25%" r="1" fillOpacity="0.06" />
                    <circle cx="85%" cy="55%" r="1" fillOpacity="0.05" />
                </svg>

                {/* ── En-tête coloré ────────────────────────────────────── */}
                <div className="relative px-6 pt-6 pb-5">
                    {/* Lueur de fond */}
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/6 to-transparent" />

                    <AlertDialogHeader className="relative gap-3">
                        <div className="flex items-center gap-3">
                            {/* Icône cookie */}
                            <div className="relative w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                <Cookie className="w-5 h-5 text-primary" />
                                {/* Petit point animé */}
                                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                            </div>
                            <div>
                                <AlertDialogTitle className="text-base leading-snug">
                                    Votre vie privée
                                </AlertDialogTitle>
                                <p className="text-[11px] text-muted-foreground mt-0.5">
                                    FuturCraft Institut · Gestion des cookies
                                </p>
                            </div>
                        </div>

                        <AlertDialogDescription className="text-sm leading-relaxed">
                            Nous utilisons des cookies pour améliorer votre
                            expérience, analyser notre trafic et personnaliser
                            nos contenus. Vous pouvez choisir quels cookies
                            autoriser.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                </div>

                {/* ── Détails par catégorie (accordéon) ─────────────────── */}
                <div className="px-6">
                    <button
                        type="button"
                        onClick={() => setShowDetails((v) => !v)}
                        className="flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors mb-3 group"
                    >
                        <ChevronDown
                            className={cn(
                                "w-3.5 h-3.5 transition-transform duration-200",
                                showDetails && "rotate-180",
                            )}
                        />
                        {showDetails
                            ? "Masquer les détails"
                            : "Personnaliser mes préférences"}
                    </button>

                    {/* Catégories */}
                    <div
                        className={cn(
                            "overflow-hidden transition-all duration-300",
                            showDetails
                                ? "max-h-96 opacity-100 mb-4"
                                : "max-h-0 opacity-0",
                        )}
                    >
                        <div className="space-y-2.5 border border-border/60 rounded-xl p-3 bg-muted/20">
                            {categories.map((cat) => {
                                const isOn =
                                    cat.required ||
                                    consent[cat.key as keyof typeof consent];
                                return (
                                    <div
                                        key={cat.key}
                                        className="flex items-start gap-3 group/cat"
                                    >
                                        {/* Icône catégorie */}
                                        <div
                                            className={cn(
                                                "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border transition-colors duration-200",
                                                isOn
                                                    ? "bg-primary/10 border-primary/20"
                                                    : "bg-muted border-border/50",
                                            )}
                                        >
                                            <cat.icon
                                                className={cn(
                                                    "w-3.5 h-3.5 transition-colors duration-200",
                                                    isOn
                                                        ? cat.color
                                                        : "text-muted-foreground/50",
                                                )}
                                            />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-semibold leading-none mb-1">
                                                {cat.label}
                                                {cat.required && (
                                                    <span className="ml-1.5 text-[9px] text-green-400 font-normal">
                                                        Requis
                                                    </span>
                                                )}
                                            </p>
                                            <p className="text-[11px] text-muted-foreground leading-relaxed">
                                                {cat.description}
                                            </p>
                                        </div>

                                        <Toggle
                                            checked={!!isOn}
                                            onChange={(v) => {
                                                if (cat.required) return;
                                                setConsent((prev) => ({
                                                    ...prev,
                                                    [cat.key]: v,
                                                }));
                                            }}
                                            disabled={cat.required}
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Bouton enregistrer la sélection */}
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full mt-2.5 text-xs"
                            onClick={saveCustom}
                        >
                            Enregistrer ma sélection
                        </Button>
                    </div>
                </div>

                {/* ── Footer : CTA principaux ────────────────────────────── */}
                <div className="px-6 pb-6">
                    {/* Séparateur */}
                    <div className="h-px bg-border/60 mb-4" />

                    <AlertDialogFooter className="flex-col-reverse sm:flex-row gap-2 sm:gap-2">
                        {/* Tout refuser */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-foreground flex-1"
                            onClick={rejectAll}
                        >
                            Tout refuser
                        </Button>

                        {/* Tout accepter */}
                        <Button
                            size="sm"
                            className="flex-1"
                            onClick={acceptAll}
                        >
                            Tout accepter
                        </Button>
                    </AlertDialogFooter>

                    {/* Lien politique */}
                    <p className="text-center text-[10px] text-muted-foreground mt-3 leading-relaxed">
                        En continuant, vous acceptez notre{" "}
                        <a
                            href="/confidentialite"
                            className="underline underline-offset-2 hover:text-foreground transition-colors"
                        >
                            politique de confidentialité
                        </a>
                        .
                    </p>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
}
