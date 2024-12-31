import { FunctionComponent } from "react";
import FrameComponent19 from "../components/FrameComponent19";
import FrameComponent17 from "../components/Home/ImpactSection";
import FrameComponent20 from "../components/Home/SurveyMonitoringSection";
import LostStoryContent from "../components/Home/LostStoryContent";
import LoveStoryContent from "../components/LoveStoryContent";
import GroupComponent2 from "../components/GroupComponent2";
import Footer1 from "../components/Home/Footer";
import NavBar from "@/components/Home/NavBar";

const CustomerStories: FunctionComponent = () => {
  return (
    <div className="w-full relative [background:linear-gradient(#fff,_#fff),_#fff] overflow-y-auto flex flex-col items-start justify-start gap-[0.1px] leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-end justify-start gap-[120px] max-w-full mq900:gap-[30px] mq1275:gap-[60px]">
        <NavBar />
        <FrameComponent19 />
      </section>

      <FrameComponent17 />
      <FrameComponent20 />
      <LostStoryContent />
      <LoveStoryContent />
      <GroupComponent2 />
      <Footer1 />
    </div>
  );
};

export default CustomerStories;
