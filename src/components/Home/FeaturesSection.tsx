import { FunctionComponent } from "react";
import FeaturesGrid from "./FeatureGrid";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[140px] box-border max-w-full text-left text-61xl text-white font-sf-pro mq900:pb-[59px] mq900:box-border mq1350:pb-[91px] mq1350:box-border ${className}`}
    >
      <div className="flex-1 [background:linear-gradient(247.46deg,_#5d9eff,_#3780ef)] flex flex-col items-start justify-start pt-[140px] px-[120px] pb-[110px] box-border gap-[137px] max-w-full mq900:gap-[34px] mq900:pt-[59px] mq900:px-[30px] mq900:pb-[46px] mq900:box-border mq1350:gap-[68px] mq1350:pt-[91px] mq1350:px-[60px] mq1350:pb-[71px] mq1350:box-border">
        <div className="w-[1920px] h-[1154px] relative [background:linear-gradient(247.46deg,_#5d9eff,_#3780ef)] hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-center max-w-full">
          <div className="flex flex-col items-start justify-start gap-[60px] max-w-full mq900:gap-[30px]">
            <div className="flex flex-row items-start justify-start py-0 pl-[102px] pr-[101px] mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[51px] mq900:pr-[50px] mq900:box-border">
              <h1 className="m-0 h-14 relative text-inherit tracking-[-0.02em] leading-[56px] font-semibold font-[inherit] inline-block [text-shadow:0px_4px_15px_rgba(255,_255,_255,_0.15)] z-[1] mq450:text-5xl mq450:leading-[29px] mq900:text-21xl mq900:leading-[43px]">
                The Future is Here
              </h1>
            </div>
            <div className="h-[21px] relative text-11xl leading-[40px] font-medium text-gray-500 text-center inline-block shrink-0 z-[1] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
              User-friendly and innovative—like plug-and-play for businesses
            </div>
          </div>
        </div>
        <FeaturesGrid />
      </div>
    </section>
  );
};

export default FrameComponent5;
