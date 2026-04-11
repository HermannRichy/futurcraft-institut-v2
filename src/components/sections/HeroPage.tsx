import { Badge } from "@/components/ui/badge";
import type { ReactNode } from "react";

interface HeroPageProps {
    badge: string;
    title: ReactNode;
    description: string;
}

export default function HeroPage({ badge, title, description }: HeroPageProps) {
    return (
        <section className="relative overflow-hidden py-20 px-4 md:px-12 text-center">
            <div className="pointer-events-none absolute -top-32 -left-32 size-120 rounded-full bg-primary opacity-10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 size-120 rounded-full bg-secondary opacity-8 blur-3xl" />

            <svg className="pointer-events-none absolute -top-6 -left-6 w-64 h-64 text-primary" aria-hidden="true" fill="none">
                <circle cx="0" cy="0" r="100" stroke="currentColor" strokeWidth="0.7" strokeDasharray="5 4" strokeOpacity="0.09" />
                <circle cx="0" cy="0" r="155" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 5" strokeOpacity="0.06" />
            </svg>
            <svg className="pointer-events-none absolute -bottom-6 -right-6 w-64 h-64 text-secondary" aria-hidden="true" fill="none">
                <circle cx="256" cy="256" r="100" stroke="currentColor" strokeWidth="0.7" strokeDasharray="5 4" strokeOpacity="0.09" />
                <circle cx="256" cy="256" r="155" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 5" strokeOpacity="0.06" />
            </svg>
            <svg className="pointer-events-none absolute inset-0 w-full h-full text-primary" aria-hidden="true" fill="currentColor">
                <circle cx="8%" cy="20%" r="1.5" fillOpacity="0.07" />
                <circle cx="92%" cy="15%" r="1" fillOpacity="0.06" />
                <circle cx="95%" cy="70%" r="1.5" fillOpacity="0.07" />
                <circle cx="4%" cy="75%" r="1" fillOpacity="0.06" />
            </svg>

            <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-4">
                <Badge>{badge}</Badge>
                <h1 className="text-3xl lg:text-5xl font-techovier leading-tight">{title}</h1>
                <p className="text-muted-foreground text-sm lg:text-base max-w-xl leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    );
}
