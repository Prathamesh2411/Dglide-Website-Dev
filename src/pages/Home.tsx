// Import icons from Lucide React
import {
  Database,
  Globe,
  Mail,
  Phone,
  Users,
  Shield,
  Cloud,
  Rocket,
  Link as LinkIcon,
  Code,
  Layout,
} from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import NavBar from "@/components/Home/NavBar";
import HeroSection from "@/components/Home/HeroSection";
import SolutionsSection from "@/components/Home/SolutionSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import { ContactSection } from "@/components/Home/ContactSection";
import FutureReadySection from "@/components/Home/FutureReadySection";
import CustomizeToolsSection from "@/components/Home/CustomizeToolsSection";
import { BenefitsSection } from "@/components/Home/BenefitsSection";

import Footer from "@/components/Home/Footer";
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
