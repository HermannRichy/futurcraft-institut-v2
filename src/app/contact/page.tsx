import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import HeroPage from "@/components/sections/HeroPage";
import FormulaireContact from "@/components/sections/FormulaireContact";

export const metadata = {
    title: "Contact — FuturCraft Institut",
    description: "Contactez l'équipe de FuturCraft Institut pour toute question sur nos formations.",
};

export default function Contact() {
    return (
        <main>
            <Header />
            <HeroPage
                badge="Nous contacter"
                title={
                    <>
                        Une question ?{" "}
                        <span className="text-primary">On est là.</span>
                    </>
                }
                description="Notre équipe pédagogique est disponible pour répondre à toutes vos questions — formations, inscriptions, tarifs ou partenariats."
            />
            <FormulaireContact />
            <Footer />
        </main>
    );
}
