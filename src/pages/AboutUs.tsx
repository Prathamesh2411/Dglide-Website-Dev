import { FunctionComponent, useCallback } from "react";
import AboutUsHero from "../components/AboutUsHero";
import TeamOverview from "../components/TeamOverview";
import OurJobSection from "../components/OurJobSection";
import WhyWeDoItSection from "../components/WhyWeDoItSection";

import { useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import DiscoverDifferenceSection from "@/components/DiscoverDifferenceSection";

const AboutUs: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/solutions");
  }, [navigate]);

  return (
    <div className=" relative [background:linear-gradient(#fff,_#fff),_#fff] flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <NavBar />
      <AboutUsHero />
      <TeamOverview />
      <OurJobSection />
      <WhyWeDoItSection />
      <DiscoverDifferenceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
