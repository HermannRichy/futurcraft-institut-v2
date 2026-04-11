import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import HeroPage from "@/components/sections/HeroPage";
import MissionValeurs from "@/components/sections/MissionValeurs";
import CTA from "@/components/sections/CTA";

export const metadata = {
    title: "À propos — FuturCraft Institut",
    description: "Découvrez l'histoire, la mission et les valeurs de FuturCraft Institut.",
};

export default function About() {
    return (
        <main>
            <Header />
            <HeroPage
                badge="Notre histoire"
                title={
                    <>
                        À propos de{" "}
                        <span className="text-primary">FuturCraft Institut</span>
                    </>
                }
                description="Nous formons la nouvelle génération du numérique depuis 2022. Découvrez qui nous sommes, ce qui nous anime et les valeurs qui guident chacune de nos actions."
            />
            <MissionValeurs />
            <CTA />
            <Footer />
        </main>
    );
}
