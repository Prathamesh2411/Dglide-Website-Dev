import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import { ContactSection } from "@/components/ContactSection";
import FutureReadySection from "@/components/FutureReadySection";
import CustomizeToolsSection from "@/components/CustomizeToolsSection";
import { BenefitsSection } from "@/components/BenefitsSection";

import Footer from "@/components/Footer";
import Solutions from "./Solutions";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="pt-8">
        <HeroSection />
        <SolutionsSection />

        <FutureReadySection />
        <CustomizeToolsSection />
        <FeaturesSection />
        <BenefitsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
