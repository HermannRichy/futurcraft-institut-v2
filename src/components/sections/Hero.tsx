import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { User } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="py-10 px-4 md:px-12 min-h-screen max-w-6xl mx-auto">
            <article className="flex flex-col items-center justify-center text-center gap-y-4">
                <Badge>Ton avenir commence ici</Badge>
                <h2 className="text-lg font-techovier">
                    Acquiers des compétences digitales pour booster ta carrière
                    !
                </h2>
                <p className="text-sm text-muted-foreground">
                    Nous formons en Cyber Sécurité, Développement web, UI/UX
                    Design... et plein d'autres métiers dans le numérique.
                </p>
                <Button asChild>
                    <Link href="/inscription">
                        <User className="w-4 h-4" />
                        Inscription
                    </Link>
                </Button>
            </article>
            <article className="relative min-h-60">
                <div className="w-48 h-28 shadow-2xl z-20 absolute left-1/5 top-1/5"></div>
                <div className="w-48 h-28 shadow-2xl z-10 absolute"></div>
                <div className="w-48 h-28 shadow-2xl z-15 absolute right-0"></div>
                <div className="w-48 h-28 shadow-2xl z-5 absolute bottom-0 left-0"></div>
                <div className="w-48 h-28 shadow-2xl z-0 absolute bottom-0 right-0"></div>
            </article>
        </section>
    );
}
