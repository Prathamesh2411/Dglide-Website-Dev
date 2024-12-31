import { FunctionComponent } from "react";
import FrameComponent1 from "./ChallengeSolutionSection";

export type LostStoryContentType = {
  className?: string;
};

const LostStoryContent: FunctionComponent<LostStoryContentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch [background:linear-gradient(247.46deg,_#ed8c32,_#d56700)] flex flex-row items-end justify-start py-[120px] pl-[114px] pr-[120px] box-border gap-[108px] min-h-[928px] max-w-full text-left text-11xl text-white font-sf-pro mq450:pt-[51px] mq450:pb-[51px] mq450:box-border mq900:gap-[27px] mq900:pl-7 mq900:pr-[30px] mq900:box-border mq1275:gap-[54px] mq1275:py-[78px] mq1275:pl-[57px] mq1275:pr-[60px] mq1275:box-border mq1600:flex-wrap ${className}`}
    >
      <div className="h-[928px] w-[1920px] relative [background:linear-gradient(247.46deg,_#ed8c32,_#d56700)] hidden max-w-full" />
      <FrameComponent1
        streamliningOperationsAtMA="Lost and Found Made Simple"
        streamliningOperationsAtWidth="540px"
        frameDivAlignSelf="unset"
        frameDivWidth="579px"
        theAirportNeededAnAdvanced="The client required a cost-effective, no-code solution to manage lost and found items at an
airport."
        builtAnIntuitiveEndUserApplica="Empowered the client to build their own lost and found module using our no-code platform. Provided tools to independently create additional applications."
        exploreSolutionsColor="#d96b05"
      />
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border min-w-[712px] max-w-full mq1275:min-w-full mq1600:flex-1">
        <div className="self-stretch rounded-xl bg-chocolate-200 flex flex-col items-start justify-start py-[72px] pl-[72px] pr-5 box-border gap-10 max-w-full z-[1] mq900:gap-5 mq900:pl-9 mq900:pt-[47px] mq900:pb-[47px] mq900:box-border">
          <div className="w-[712px] h-[623px] relative rounded-xl bg-chocolate-200 hidden max-w-full" />
          <h2 className="m-0 h-[21px] relative text-inherit leading-[40px] font-semibold font-[inherit] inline-block shrink-0 z-[2] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
            Impact
          </h2>
          <h3 className="m-0 w-[568px] h-[418px] relative text-7xl leading-[40px] text-gray-1000 inline-block max-w-full z-[2] font-[inherit] mq450:text-2xl mq450:leading-[32px]">
            <p className="m-0">
              <span className="font-semibold font-sf-pro">{`Enhanced Satisfaction:
`}</span>
              <span>{`Passengers experienced a hassle-free process for retrieving lost
items.

`}</span>
              <span className="font-semibold font-sf-pro">{`Cost Savings:
`}</span>
              <span className="font-sf-pro">
                Eliminated the need for expensive custom development.
              </span>
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 font-semibold">Empowerment:</p>
            <p className="m-0">
              The client realized the full potential of no-code tools to handle
              operations efficiently.
            </p>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default LostStoryContent;
