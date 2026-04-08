import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import FilieresMisesEnAvant from "@/components/sections/FilieresMisesEnAvant";
import StatsAvantages from "@/components/sections/StatsAvantages";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <FilieresMisesEnAvant />
            <StatsAvantages />
            <Testimonials />
            <CTA />
            <Footer />
        </main>
    );
}
