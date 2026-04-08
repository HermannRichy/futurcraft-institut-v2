import Image from "next/image";
import Link from "next/link";
import {
    IconBrandFacebook,
    IconBrandWhatsapp,
    IconBrandTiktok,
    IconPhone,
    IconMail,
    IconMapPin,
} from "@tabler/icons-react";

// ── Données ────────────────────────────────────────────────────────────────

const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/a-propos" },
    { label: "Nos filières", href: "/filieres" },
    { label: "Contact", href: "/contact" },
    { label: "Inscription", href: "/inscription" },
];

const legalLinks = [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
    { label: "Conditions générales", href: "/cgu" },
];

const contact = {
    phone: "+229 01 4332 78 32",
    email: "futurcraftinstitut@gmail.com",
    address: ["Godomey PK14, Route Ouidah", "Immeuble Supermaché Ô Bénin"],
};

const socials = [
    {
        name: "Facebook",
        icon: IconBrandFacebook,
        href: "https://facebook.com/futurcraftinstitut",
        hover: "hover:text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/20",
    },
    /*{
        name: "Instagram",
        icon: IconBrandInstagram,
        href: "https://instagram.com/futurcraftinstitut",
        hover: "hover:text-pink-500 hover:bg-pink-500/10 hover:border-pink-500/20",
    },*/
    {
        name: "WhatsApp",
        icon: IconBrandWhatsapp,
        href: "https://wa.me/22943327832",
        hover: "hover:text-green-500 hover:bg-green-500/10 hover:border-green-500/20",
    },
    /*{
        name: "LinkedIn",
        icon: IconBrandLinkedin,
        href: "https://linkedin.com/company/futurcraftinstitut",
        hover: "hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/20",
    },*/
    {
        name: "TikTok",
        icon: IconBrandTiktok,
        href: "https://tiktok.com/@futurcraftinstitut",
        hover: "hover:text-foreground hover:bg-foreground/8 hover:border-foreground/15",
    },
    /*{
        name: "YouTube",
        icon: IconBrandYoutube,
        href: "https://youtube.com/@futurcraftinstitut",
        hover: "hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/20",
    },*/
];

// ── Composant ─────────────────────────────────────────────────────────────

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative border-t border-border/60">
            {/* Accent gradient top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent pointer-events-none" />

            {/* SVG : anneaux décoratifs bas-droite */}
            <svg
                className="pointer-events-none absolute bottom-0 right-0 w-64 h-64 text-secondary opacity-[0.04]"
                aria-hidden="true"
                fill="none"
            >
                <circle
                    cx="256"
                    cy="256"
                    r="120"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeDasharray="5 4"
                />
                <circle
                    cx="256"
                    cy="256"
                    r="180"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    strokeDasharray="3 5"
                />
            </svg>

            {/* SVG : guillemet décoratif haut-gauche */}
            <svg
                className="pointer-events-none absolute top-6 left-6 w-16 h-16 text-primary opacity-[0.04]"
                viewBox="0 0 100 80"
                fill="currentColor"
                aria-hidden="true"
            >
                <path d="M0 80V48Q0 22 12 10T48 0v16Q32 16 24 26T16 52h16v28H0zm52 0V48q0-26 12-38t36-10v16q-16 0-24 10T68 52h16v28H52z" />
            </svg>

            <div className="relative max-w-6xl mx-auto px-4 md:px-12">
                {/* ── Corps du footer ─────────────────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1.4fr_1.3fr] gap-12 py-14">
                    {/* ══ SECTION 1 — Logo & description ══ */}
                    <div className="flex flex-col gap-5">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-2.5 w-fit"
                        >
                            <Image
                                src="/logo-fci.png"
                                alt="FuturCraft Institut"
                                width={32}
                                height={32}
                                className="w-7 h-7 object-contain"
                            />
                            <span className="font-techovier text-base leading-none">
                                FuturCraft Institut
                            </span>
                        </Link>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            Former la nouvelle génération des professionnels du
                            numérique en Afrique, avec passion, rigueur et
                            pragmatisme. Rejoins l&apos;aventure FCI.
                        </p>

                        {/* Badge filières */}
                        <div className="flex flex-wrap gap-1.5 mt-1">
                            {["Tech", "Créatif", "Business", "Sécurité"].map(
                                (cat) => (
                                    <span
                                        key={cat}
                                        className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/8 text-primary border border-primary/15"
                                    >
                                        {cat}
                                    </span>
                                ),
                            )}
                        </div>
                    </div>

                    {/* ══ SECTION 2 — Navigation & Légal ══ */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                        {/* Navigation */}
                        <div>
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                                Navigation
                            </p>
                            <ul className="space-y-2.5">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1.5 group"
                                        >
                                            <span className="w-0 h-px bg-primary transition-all duration-200 group-hover:w-3 shrink-0" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Légal */}
                        <div>
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                                Légal
                            </p>
                            <ul className="space-y-2.5">
                                {legalLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1.5 group"
                                        >
                                            <span className="w-0 h-px bg-primary transition-all duration-200 group-hover:w-3 shrink-0" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ══ SECTION 3 — Contact & Réseaux sociaux ══ */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                                Contact
                            </p>
                            <ul className="space-y-3">
                                {/* Téléphone */}
                                <li>
                                    <a
                                        href={`tel:${contact.phone.replace(/\s/g, "")}`}
                                        className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                                    >
                                        <span className="w-7 h-7 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-200">
                                            <IconPhone
                                                size={14}
                                                className="text-primary"
                                            />
                                        </span>
                                        {contact.phone}
                                    </a>
                                </li>

                                {/* Email */}
                                <li>
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                                    >
                                        <span className="w-7 h-7 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-200">
                                            <IconMail
                                                size={14}
                                                className="text-primary"
                                            />
                                        </span>
                                        {contact.email}
                                    </a>
                                </li>

                                {/* Adresse */}
                                <li className="flex items-start gap-2.5">
                                    <span className="w-7 h-7 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                                        <IconMapPin
                                            size={14}
                                            className="text-primary"
                                        />
                                    </span>
                                    <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                                        {contact.address.map((line, i) => (
                                            <span key={i} className="block">
                                                {line}
                                            </span>
                                        ))}
                                    </address>
                                </li>
                            </ul>
                        </div>

                        {/* Réseaux sociaux */}
                        <div>
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                                Réseaux sociaux
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {socials.map((s) => (
                                    <Link
                                        key={s.name}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.name}
                                        className={`w-8 h-8 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground transition-all duration-200 ${s.hover}`}
                                    >
                                        <s.icon size={15} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Barre copyright ─────────────────────────────────── */}
                <div className="border-t border-border/60 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
                    <span>
                        © {year} FuturCraft Institut · Tous droits réservés
                    </span>

                    <Link
                        href="https://digitalinnovation.bj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 hover:text-foreground transition-colors duration-200 group"
                    >
                        Développé par
                        <span className="font-semibold text-primary group-hover:text-primary/80 transition-colors">
                            Digital Innovation
                        </span>
                        <svg
                            className="w-3 h-3 text-primary/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                            viewBox="0 0 12 12"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
