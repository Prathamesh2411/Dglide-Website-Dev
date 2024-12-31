import { FunctionComponent } from "react";
import ChallengeSolutionSection from "./ChallengeSolutionSection";

export type SurveyMonitoringSectionType = {
  className?: string;
};

const SurveyMonitoringSection: FunctionComponent<
  SurveyMonitoringSectionType
> = () => {
  return (
    <div
      className={`self-stretch [background:linear-gradient(247.46deg,_#41df80,_#18af54)] flex flex-row items-start justify-start pt-[120px] pb-[171px] pl-[114px] pr-[120px] box-border gap-[108px] max-w-full text-left text-11xl text-white font-sf-pro mq450:pb-[72px] mq450:box-border mq900:gap-[27px] mq900:pl-7 mq900:pr-[30px] mq900:box-border mq1275:gap-[54px] mq1275:pt-[1940px] mq1275:pb-[111px] mq1275:pl-[57px] mq1275:pr-[60px] mq1275:box-border mq1600:flex-wrap}`}
    >
      <div className="h-[928px] w-[1920px] relative [background:linear-gradient(247.46deg,_#41df80,_#18af54)] hidden max-w-full" />
      <ChallengeSolutionSection
        streamliningOperationsAtMA="Revolutionizing Survey and Asset Monitoring"
        streamliningOperationsAtWidth="724px"
        frameDivAlignSelf="unset"
        frameDivWidth="724px"
        theAirportNeededAnAdvanced="Managing assets and conducting mobile-enabled surveys was a complex, time-consuming process for our client."
        builtAnIntuitiveEndUserApplica="Created a mobile application for seamless survey management and real-time asset
monitoring. Integrated workflows for unified oversight and control."
        exploreSolutionsColor="#1ab156"
      />
      <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[712px] max-w-full mq1275:min-w-full mq1600:flex-1">
        <div className="self-stretch rounded-xl bg-mediumseagreen-100 flex flex-col items-start justify-start pt-[72px] pb-28 pl-[72px] pr-5 box-border gap-10 max-w-full z-[1] mq900:gap-5 mq900:pl-9 mq900:pt-[1940px] mq900:pb-[73px] mq900:box-border">
          <div className="w-[712px] h-[543px] relative rounded-xl bg-mediumseagreen-100 hidden max-w-full" />
          <h2 className="m-0 h-[21px] relative text-inherit leading-[40px] font-semibold font-[inherit] inline-block shrink-0 z-[2] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
            Impact
          </h2>
          <h3 className="m-0 w-[568px] h-[298px] relative text-7xl leading-[40px] text-gray-1000 inline-block max-w-full z-[2] font-[inherit] mq450:text-2xl mq450:leading-[32px]">
            <p className="m-0">
              <span className="font-semibold font-sf-pro">{`Improved Management:
`}</span>
              <span className="font-sf-pro">{`Accurate tracking enhanced asset visibility

`}</span>
              <span className="font-semibold font-sf-pro">{`Operational Transparency:
`}</span>
              <span>{`Clear insights led to informed decision-making
`}</span>
            </p>
            <p className="m-0">
              <span className="font-semibold font-sf-pro">
                Business Growth:
              </span>
              <span>{` `}</span>
            </p>
            <p className="m-0">
              Increased efficiency boosted overall performance
            </p>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SurveyMonitoringSection;
