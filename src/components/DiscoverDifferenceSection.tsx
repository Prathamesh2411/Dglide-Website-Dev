import { FunctionComponent } from "react";
import ActionButtonsGroup from "./ActionButtonsGroup";

export type DiscoverDifferenceSectionType = {
  className?: string;
};

const DiscoverDifferenceSection: FunctionComponent<
  DiscoverDifferenceSectionType
> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[120px] box-border max-w-full text-left text-45xl text-gray-100 font-sf-pro mq450:pb-[51px] mq450:box-border mq1350:pb-[78px] mq1350:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[600px] w-[174.6px] absolute !m-[0] right-[180.4px] bottom-[-25px] z-[2]"
          loading="lazy"
          alt=""
          src="/character22.svg"
        />
        <div className="flex-1 rounded-11xl border-lightskyblue border-[4px] border-dashed box-border flex flex-col items-end justify-start pt-[195px] px-[332px] pb-[166px] gap-[100px] max-w-full mq450:gap-[25px] mq450:pt-[83px] mq450:px-5 mq450:pb-[70px] mq450:box-border mq900:gap-[50px] mq900:pt-[127px] mq900:px-[83px] mq900:pb-[108px] mq900:box-border mq1350:pl-[166px] mq1350:pr-[166px] mq1350:box-border">
          <div className="w-[1680px] h-[800px] relative rounded-11xl border-lightskyblue border-[4px] border-dashed box-border hidden max-w-full" />
          <div className="self-stretch flex flex-col items-start justify-start gap-20 max-w-full mq900:gap-5 mq1350:gap-10">
            <h1 className="m-0 h-[45px] relative text-inherit tracking-[-0.01em] leading-[72px] font-semibold font-[inherit] inline-block shrink-0 z-[1] mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
              <span>{`Discover the `}</span>
              <span className="text-dodgerblue-300">
                Digital Glide Difference!
              </span>
            </h1>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-11xl">
              <div className="w-[775px] flex flex-col items-end justify-start gap-[60px] max-w-full mq900:gap-[30px]">
                <h2 className="m-0 self-stretch h-[61px] relative text-inherit leading-[40px] font-medium font-[inherit] inline-block shrink-0 z-[1] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
                  Transform and build your workflows, enhance productivity, and
                  empower your team with tools that truly work for you
                </h2>
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-[122px] text-dodgerblue-300 mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[61px] mq900:pr-[61px] mq900:box-border">
                  <h2 className="m-0 h-[21px] flex-1 relative text-inherit leading-[21px] font-medium font-[inherit] inline-block z-[1] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
                    Ready to tech up your business success?
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <ActionButtonsGroup />
        </div>
      </div>
    </section>
  );
};

export default DiscoverDifferenceSection;
