import { FunctionComponent } from "react";

export type FrameComponent19Type = {
  className?: string;
};

const FrameComponent19: FunctionComponent<FrameComponent19Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1876px] flex flex-row items-start justify-end py-0 px-20 box-border max-w-full text-left text-45xl text-gray-100 font-sf-pro mq1275:pl-10 mq1275:pr-10 mq1275:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1600:flex-wrap">
        <div className="w-[569px] flex flex-col items-start justify-start gap-20 max-w-full mq450:gap-5 mq900:gap-10 mq900:min-w-full mq1600:flex-1">
          <h1 className="m-0 self-stretch h-[117px] relative text-inherit tracking-[-0.01em] leading-[72px] capitalize font-semibold font-[inherit] inline-block shrink-0 mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
            Real-World Results with Digital Glide
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-10 max-w-full text-11xl mq900:gap-5">
            <h2 className="m-0 h-[61px] relative text-inherit leading-[40px] font-semibold font-[inherit] inline-block shrink-0 max-w-full mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
              <p className="m-0">{`The stories that make us proud! `}</p>
              <p className="m-0">Realtime growth = Our Promise</p>
            </h2>
            <h3 className="m-0 self-stretch h-[178px] relative text-7xl leading-[40px] font-normal font-[inherit] inline-block mq450:text-2xl mq450:leading-[32px]">
              Our mission is to simplify, automate, and transform operations for
              businesses across industries. The success of our clients is the
              true measure of our impact. Here are a few stories showcasing how
              our solutions have made a difference.
            </h3>
          </div>
        </div>
        <div className="flex flex-row items-end justify-start gap-[92px] max-w-full mq450:gap-[23px] mq900:gap-[46px] mq900:flex-wrap mq1275:min-w-full mq1600:flex-1">
          <img
            className="h-[706.2px] flex-1 relative max-w-full overflow-hidden min-w-[422px] mq900:min-w-full"
            loading="lazy"
            alt=""
            src="/successfactorspana.svg"
          />
          <div className="h-[198.2px] flex flex-col items-start justify-start">
            <div className="w-[100px] h-[100px] relative rounded-341xl bg-dodgerblue-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent19;
