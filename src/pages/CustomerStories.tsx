import { FunctionComponent } from "react";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import ImpactSection from "@/components/ImpactSection";
import SurveyMonitoringSection from "@/components/SurveyMonitoringSection";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import CustomerTestimonialsSection from "@/components/CustomerTestimonialsSection";
import ConsultationCTASection from "@/components/ConsultationCTASection";
import LostStoryContent from "@/components/LostStoryContent";

const CustomerStories: FunctionComponent = () => {
  return (
    <div className="w-full relative [background:linear-gradient(#fff,_#fff),_#fff] flex flex-col items-start justify-start gap-[0.1px] leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-end justify-start gap-[120px] max-w-full mq900:gap-[30px] mq1275:gap-[60px]">
        <NavBar />
        <SuccessStoriesSection />
      </section>

      <ImpactSection />
      <SurveyMonitoringSection />
      <LostStoryContent />
      <CustomerTestimonialsSection />
      <ConsultationCTASection />
      <Footer />
    </div>
  );
};

export default CustomerStories;
