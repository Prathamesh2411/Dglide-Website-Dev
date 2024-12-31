import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type IndustryCardsType = {
  className?: string;
  cMS?: string;
  customManagementSuite?: string;
  achieveUnmatchedEfficiency?: string;

  /** Style props */
  industryCardsPadding?: CSSProperties["padding"];
  industryCardsGap?: CSSProperties["gap"];
  cMSIconHeight?: CSSProperties["height"];
  frameDivGap?: CSSProperties["gap"];
};

const IndustryCards: FunctionComponent<IndustryCardsType> = ({
  className = "",
  industryCardsPadding,
  industryCardsGap,
  cMS,
  cMSIconHeight,
  frameDivGap,
  customManagementSuite,
  achieveUnmatchedEfficiency,
}) => {
  const industryCardsStyle: CSSProperties = useMemo(() => {
    return {
      padding: industryCardsPadding,
      gap: industryCardsGap,
    };
  }, [industryCardsPadding, industryCardsGap]);

  const cMSIconStyle: CSSProperties = useMemo(() => {
    return {
      height: cMSIconHeight,
    };
  }, [cMSIconHeight]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  return (
    <div
      className={`w-[547px] rounded-xl bg-white flex flex-col items-end justify-start pt-[58px] px-[60px] pb-[50px] box-border gap-24 max-w-full z-[3] text-center text-11xl text-gray-100 font-sf-pro mq450:gap-6 mq900:gap-12 mq900:pt-[38px] mq900:px-[30px] mq900:pb-8 mq900:box-border ${className}`}
      style={industryCardsStyle}
    >
      <div className="w-[547px] h-[753px] relative rounded-xl bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[54px] pr-[52px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <img
          className="h-[300px] flex-1 relative max-w-full overflow-hidden z-[4]"
          loading="lazy"
          alt=""
          src={cMS}
          style={cMSIconStyle}
        />
      </div>
      <div
        className="self-stretch flex flex-col items-start justify-start gap-[91px] mq450:gap-[45px]"
        style={frameDiv1Style}
      >
        <div className="self-stretch h-[141px] relative leading-[40px] inline-block z-[4] mq450:text-2xl mq450:leading-[32px]">
          <p className="m-0 font-semibold">{customManagementSuite}</p>
          <p className="m-0 text-7xl">{achieveUnmatchedEfficiency}</p>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-24 text-5xl text-dodgerblue-300 mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[17px] flex-1 relative tracking-[-0.02em] leading-[17px] font-semibold inline-block z-[4] mq450:text-lgi mq450:leading-[64px]">
            Contact Us for a Demo
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryCards;
