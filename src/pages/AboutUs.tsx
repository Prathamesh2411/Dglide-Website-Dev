import { FunctionComponent, useCallback } from "react";
import AboutUsHero from "../components/Home/AboutUsHero";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent11 from "../components/FrameComponent11";
import Newsletter from "../components/Newsletter";
import SubscriptionAgreement from "../components/SubscriptionAgreement";
import Component2 from "../components/Component2";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/Home/NavBar";
import Footer from "@/components/Home/Footer";
import { ContactSection } from "@/components/Home/ContactSection";

const AboutUs: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/solutions");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(#fff,_#fff),_#fff] overflow-y-auto flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <NavBar />
      <AboutUsHero />
      <FrameComponent8 />
      <FrameComponent9 />
      <FrameComponent10 />
      <FrameComponent11 />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
