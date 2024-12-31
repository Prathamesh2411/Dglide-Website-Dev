import { FunctionComponent } from "react";
import ExpertsGrid from "./ExpertHighlightCard";

export type TeamOverviewType = {
  className?: string;
};

const TeamOverview: FunctionComponent<TeamOverviewType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[120px] box-border max-w-full text-left text-45xl text-white font-sf-pro mq900:pb-[51px] mq900:box-border mq1350:pb-[78px] mq1350:box-border ${className}`}
    >
      <div className="flex-1 [background:linear-gradient(247.46deg,_#5d9eff,_#3780ef)] flex flex-col items-start justify-start py-[120px] pl-[120px] pr-[119px] box-border gap-[100px] max-w-full mq900:gap-[25px] mq900:py-[51px] mq900:pl-[30px] mq900:pr-[29px] mq900:box-border mq1350:gap-[50px] mq1350:py-[78px] mq1350:pl-[60px] mq1350:pr-[59px] mq1350:box-border">
        <div className="w-[1920px] h-[1126px] relative [background:linear-gradient(247.46deg,_#5d9eff,_#3780ef)] hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[745px] pr-[744px] mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[186px] mq900:pr-[186px] mq900:box-border mq1350:pl-[372px] mq1350:pr-[372px] mq1350:box-border">
          <h1 className="m-0 h-[45px] relative text-inherit tracking-[-0.01em] leading-[45px] font-semibold font-[inherit] inline-block z-[1] mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
            We are
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-5 max-w-full text-center text-7xl text-gray-100">
          <ExpertsGrid
            teamGoalspana="/teamgoalspana.svg"
            provenExperts="Proven Experts"
            overTwoDecadesOfHandsOnExperi="Over two decades of hands-on experience in ITSM, CRM, FSM, and related domains."
          />
          <ExpertsGrid
            expertsGridAlignItems="flex-end"
            expertsRowJustifyContent="flex-end"
            teamGoalspana="/problemsolvingpana.svg"
            provenExperts="Industry-Specific"
            overTwoDecadesOfHandsOnExperi="Deeply rooted in understanding the unique challenges faced by businesses in specific industries."
          />
          <div className="flex-1 rounded-xl bg-white flex flex-col items-end justify-start pt-[120px] px-[60px] pb-[60px] box-border gap-[140px] min-w-[410px] max-w-full z-[1] mq450:gap-[35px] mq900:gap-[70px] mq900:pt-[78px] mq900:px-[30px] mq900:pb-[39px] mq900:box-border mq900:min-w-full">
            <div className="w-[547px] h-[741px] relative rounded-xl bg-white hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[55px] pr-[52px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <img
                className="h-[200px] flex-1 relative max-w-full overflow-hidden z-[2]"
                loading="lazy"
                alt=""
                src="/group-52.svg"
              />
            </div>
            <div className="self-stretch h-[221px] relative leading-[40px] inline-block z-[2] mq450:text-2xl mq450:leading-[32px]">
              <p className="m-0 text-11xl font-semibold">Here for You!</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                A commitment to making technology accessible to everyone,
                ensuring non-technical users can independently create, build,
                and innovate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamOverview;
