import { FunctionComponent } from "react";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[120px] box-border max-w-full text-left text-45xl text-gray-100 font-sf-pro mq900:pb-[78px] mq900:box-border ${className}`}
    >
      <div className="w-[1680px] flex flex-col items-start justify-start gap-[100px] max-w-full mq450:gap-[25px] mq900:gap-[50px]">
        <div className="flex flex-row items-start justify-start py-0 pl-[667px] pr-[665px] mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[166px] mq900:pr-[166px] mq900:box-border mq1350:pl-[333px] mq1350:pr-[332px] mq1350:box-border">
          <h1 className="m-0 h-[45px] relative text-inherit tracking-[-0.01em] leading-[45px] font-semibold font-[inherit] inline-block mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
            Our Job is to
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[40.5px] max-w-full text-center text-7xl mq900:gap-5 mq1750:flex-wrap">
          <div className="flex-1 rounded-xl bg-aliceblue flex flex-row items-start justify-start py-[60px] px-[70px] box-border min-w-[400px] min-h-[401px] max-w-full mq450:pt-[39px] mq450:pb-[39px] mq450:box-border mq900:pl-[35px] mq900:pr-[35px] mq900:box-border mq900:min-w-full mq1750:min-h-[auto]">
            <div className="h-[401px] w-[533px] relative rounded-xl bg-aliceblue hidden max-w-full" />
            <div className="h-[261px] flex-1 relative leading-[40px] inline-block max-w-full z-[1] mq450:text-2xl mq450:leading-[32px]">
              <p className="m-0 text-11xl font-semibold">Simplify</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Allowing non-technical users to create workflows and
                applications independently, without coding knowledge.
              </p>
            </div>
          </div>
          <div className="flex-[0.9084] rounded-xl bg-aliceblue flex flex-row items-start justify-start pt-[60px] px-[88px] pb-20 box-border min-w-[400px] max-w-full mq450:pt-[39px] mq450:px-5 mq450:pb-[52px] mq450:box-border mq450:flex-1 mq900:pl-11 mq900:pr-11 mq900:box-border mq900:min-w-full">
            <div className="h-[401px] w-[533px] relative rounded-xl bg-aliceblue hidden max-w-full" />
            <div className="h-[261px] flex-1 relative leading-[40px] inline-block max-w-full z-[1] mq450:text-2xl mq450:leading-[32px]">
              <p className="m-0">
                <span className="text-11xl font-semibold font-sf-pro">{`Empower Every User
`}</span>
                <span>&nbsp;</span>
              </p>
              <p className="m-0">
                We make application development simple and intuitive. So smooth,
                you can build as you please!
              </p>
            </div>
          </div>
          <div className="flex-[0.9796] rounded-xl bg-aliceblue flex flex-row items-start justify-start py-[60px] px-[74px] box-border min-w-[400px] min-h-[401px] max-w-full text-11xl mq450:pt-[39px] mq450:pb-[39px] mq450:box-border mq450:flex-1 mq900:pl-[37px] mq900:pr-[37px] mq900:box-border mq900:min-w-full mq1750:min-h-[auto]">
            <div className="h-[401px] w-[533px] relative rounded-xl bg-aliceblue hidden max-w-full" />
            <div className="h-[261px] flex-1 relative leading-[40px] inline-block max-w-full z-[1] mq450:text-2xl mq450:leading-[32px]">
              <p className="m-0 font-semibold">{`To Ease AI-Integration and Cloud-Native Approach
`}</p>
              <p className="m-0 text-7xl">
                Providing modern, cost-effective solutions with AI integration
                to enhance flexibility and ease of use for today’s businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent9;
