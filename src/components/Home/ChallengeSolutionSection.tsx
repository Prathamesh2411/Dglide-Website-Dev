import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ChallengeSolutionSectionType = {
  className?: string;
  streamliningOperationsAtMA?: string;
  theAirportNeededAnAdvanced?: string;
  builtAnIntuitiveEndUserApplica?: string;

  /** Style props */
  streamliningOperationsAtWidth?: CSSProperties["width"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivWidth?: CSSProperties["width"];
  exploreSolutionsColor?: CSSProperties["color"];
};

const ChallengeSolutionSection: FunctionComponent<
  ChallengeSolutionSectionType
> = ({
  className = "",
  streamliningOperationsAtMA,
  streamliningOperationsAtWidth,
  frameDivAlignSelf,
  frameDivWidth,
  theAirportNeededAnAdvanced,
  builtAnIntuitiveEndUserApplica,
  exploreSolutionsColor,
}) => {
  const streamliningOperationsAtStyle: CSSProperties = useMemo(() => {
    return {
      width: streamliningOperationsAtWidth,
    };
  }, [streamliningOperationsAtWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      width: frameDivWidth,
    };
  }, [frameDivAlignSelf, frameDivWidth]);

  const exploreSolutionsStyle: CSSProperties = useMemo(() => {
    return {
      color: exploreSolutionsColor,
    };
  }, [exploreSolutionsColor]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-20 text-left text-45xl text-white font-sf-pro mq450:gap-5 mq900:min-w-full mq1275:gap-10 ${className}`}
    >
      <h1
        className="m-0 w-[724px] h-[117px] relative text-inherit tracking-[-0.01em] leading-[72px] font-semibold font-[inherit] inline-block shrink-0 max-w-full z-[1] mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]"
        style={streamliningOperationsAtStyle}
      >
        {streamliningOperationsAtMA}
      </h1>
      <div className="self-stretch flex flex-col items-start justify-start gap-[60px] text-11xl mq1275:gap-[30px]">
        <div
          className="self-stretch flex flex-col items-start justify-start gap-10 mq450:gap-5"
          style={frameDivStyle}
        >
          <h2 className="m-0 h-[21px] relative text-inherit leading-[40px] font-semibold font-[inherit] inline-block shrink-0 z-[1] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
            Challenge
          </h2>
          <h3 className="m-0 self-stretch h-[58px] relative text-7xl leading-[40px] font-normal font-[inherit] text-gray-900 inline-block shrink-0 z-[1] mq450:text-2xl mq450:leading-[32px]">
            {theAirportNeededAnAdvanced}
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-10 mq450:gap-5">
          <h2 className="m-0 h-[21px] relative text-inherit leading-[40px] font-semibold font-[inherit] inline-block shrink-0 min-w-[111px] z-[1] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
            Solution
          </h2>
          <h3 className="m-0 self-stretch h-[58px] relative text-7xl leading-[40px] font-normal font-[inherit] text-gray-900 inline-block shrink-0 z-[1] mq450:text-2xl mq450:leading-[32px]">
            {builtAnIntuitiveEndUserApplica}
          </h3>
        </div>
      </div>
      <div className="w-[451px] flex flex-row items-start justify-start gap-5 max-w-full mq450:flex-wrap">
        <button className="cursor-pointer [border:none] py-6 pl-10 pr-[39px] bg-white flex-1 rounded-61xl flex flex-row items-start justify-start box-border min-w-[159px] z-[1] hover:bg-gainsboro-100">
          <div
            className="h-3.5 flex-1 relative text-xl leading-[14px] font-medium font-sf-pro text-dodgerblue-300 text-left inline-block"
            style={exploreSolutionsStyle}
          >
            Explore Solutions
          </div>
        </button>
        <button className="cursor-pointer border-white border-[2px] border-solid py-[21px] pl-10 pr-[35px] bg-[transparent] rounded-61xl flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-300 hover:border-gainsboro-100 hover:border-[2px] hover:border-solid hover:box-border">
          <div className="h-3.5 relative text-xl leading-[14px] font-medium font-sf-pro text-white text-left inline-block min-w-[108px] mq450:text-base mq450:leading-[32px]">
            Learn More
          </div>
        </button>
      </div>
    </div>
  );
};

export default ChallengeSolutionSection;
