import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import HeroPage from "@/components/sections/HeroPage";
import FormulaireInscription from "@/components/sections/FormulaireInscription";

export const metadata = {
    title: "Inscription — FuturCraft Institut",
    description: "Inscrivez-vous à une formation FuturCraft Institut et démarrez votre carrière dans le numérique.",
};

export default function Inscription() {
    return (
        <main>
            <Header />
            <HeroPage
                badge="Rejoindre FCI"
                title={
                    <>
                        Lance ta carrière dans le{" "}
                        <span className="text-primary">numérique</span>
                    </>
                }
                description="Remplis ta demande d'inscription en quelques minutes. Notre équipe te contactera sous 48h pour confirmer ton dossier et répondre à tes questions."
            />
            <FormulaireInscription />
            <Footer />
        </main>
    );
}
