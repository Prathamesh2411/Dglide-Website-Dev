import { FunctionComponent } from "react";
import FrameComponent18 from "../components/FrameComponent18";
import FrameComponent19 from "../components/FrameComponent19";
import FrameComponent17 from "../components/FrameComponent17";
import FrameComponent20 from "../components/FrameComponent20";
import LostStoryContent from "../components/LostStoryContent";
import LoveStoryContent from "../components/LoveStoryContent";
import GroupComponent2 from "../components/GroupComponent2";
import Footer1 from "../components/Home/Footer";

const CustomerStories: FunctionComponent = () => {
  return (
    <div className="w-full relative [background:linear-gradient(#fff,_#fff),_#fff] overflow-y-auto flex flex-col items-start justify-start gap-[0.1px] leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-end justify-start gap-[120px] max-w-full mq900:gap-[30px] mq1275:gap-[60px]">
        <FrameComponent18 />
        <FrameComponent19 />
      </section>
      <section className="self-stretch h-[120px] relative [backdrop-filter:blur(200px)] bg-gray-800 shrink-0" />
      <section className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div className="h-[1048px] flex-1 flex flex-col items-start justify-start pt-[928px] px-0 pb-0 box-border max-w-full mq900:pt-[392px] mq900:box-border mq1275:pt-[603px] mq1275:box-border">
          <div className="self-stretch flex-1 relative [backdrop-filter:blur(200px)] bg-gray-800 z-[1]" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[120px] max-w-full ml-[-1920px] mq900:gap-[30px] mq1275:gap-[60px]">
          <FrameComponent17 />
          <FrameComponent20 />
        </div>
      </section>
      <section className="self-stretch h-[120px] relative [backdrop-filter:blur(200px)] bg-gray-800 shrink-0 z-[1]" />
      <LostStoryContent />
      <LoveStoryContent />
      <GroupComponent2 />
      <Footer1 />
    </div>
  );
};

export default CustomerStories;
