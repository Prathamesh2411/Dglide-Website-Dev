import { FunctionComponent } from "react";

export type FeatureContentType = {
  className?: string;
};

const FeatureContent: FunctionComponent<FeatureContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch [background:linear-gradient(247.46deg,_#5d9eff,_#3780ef)] flex flex-col items-start justify-start pt-[90px] px-[114px] pb-[309px] box-border gap-[110px] max-w-full text-left text-45xl text-white font-sf-pro mq900:gap-[27px] mq900:pl-7 mq900:pr-7 mq900:box-border mq1350:gap-[55px] mq1350:pl-[57px] mq1350:pr-[57px] mq1350:box-border ${className}`}
    >
      <div className="w-[1920px] h-[1126px] relative [background:linear-gradient(247.46deg,_#5d9eff,_#3780ef)] hidden max-w-full" />
      <header className="w-[1337px] flex flex-row items-start justify-between top-[0] z-[99] sticky gap-5 max-w-full text-left text-xl text-white font-sf-pro mq1350:hidden">
        <div className="rounded-8xs bg-white flex flex-row items-start justify-start py-2.5 pl-2.5 pr-[9px] z-[1] text-dodgerblue-300">
          <div className="h-3.5 relative leading-[14px] font-medium inline-block min-w-[121px]">
            Form Builder
          </div>
        </div>
        <div className="w-[168px] flex flex-col items-start justify-start pt-2.5 pb-0 pl-0 pr-[9px] box-border">
          <div className="self-stretch h-3.5 relative leading-[40px] font-medium inline-block shrink-0 z-[1]">
            Workflow Engine
          </div>
        </div>
        <div className="w-[182px] flex flex-col items-start justify-start pt-2.5 pb-0 pl-0 pr-[9px] box-border">
          <div className="self-stretch h-3.5 relative leading-[40px] font-medium inline-block shrink-0 z-[1]">
            Integration Engine
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-2.5 pb-0 pl-0 pr-[9px]">
          <div className="h-3.5 relative leading-[40px] font-medium inline-block shrink-0 min-w-[95px] z-[1]">
            Built-In AI
          </div>
        </div>
        <div className="w-[237px] flex flex-col items-start justify-start pt-2.5 pb-0 pl-0 pr-[9px] box-border">
          <div className="self-stretch h-3.5 relative leading-[40px] font-medium inline-block shrink-0 z-[1]">{`SLA & TAT Management`}</div>
        </div>
        <div className="w-[156px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
          <div className="self-stretch h-3.5 relative leading-[40px] font-medium inline-block shrink-0 z-[1]">
            Knowledge Base
          </div>
        </div>
      </header>
      <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
        <h1 className="m-0 h-[45px] relative text-inherit tracking-[-0.01em] leading-[72px] capitalize font-semibold font-[inherit] inline-block shrink-0 max-w-full z-[1] mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
          Form Builder
        </h1>
        <div className="self-stretch flex flex-row items-end justify-start gap-[142px] max-w-full text-11xl mq450:gap-[18px] mq900:gap-[35px] mq1350:gap-[71px]">
          <div className="w-[724px] flex flex-col items-start justify-start gap-[60px] max-w-full mq900:gap-[30px] mq1350:min-w-full mq1750:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-10 mq900:gap-5">
              <h2 className="m-0 self-stretch h-[101px] relative text-inherit leading-[40px] font-semibold font-[inherit] inline-block z-[1] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
                Say goodbye to clunky forms and endless back-and-forths. Our
                Form Builder lets you capture the right data, the first time,
                every time!
              </h2>
              <h3 className="m-0 self-stretch h-[98px] relative text-7xl leading-[40px] inline-block z-[1] text-gray-900 font-[inherit] mq450:text-2xl mq450:leading-[32px]">
                <span>{`Simplify the way you collect and manage data with our intuitive `}</span>
                <span className="font-semibold text-white">Form Builder</span>
                <span>
                  . Perfect for businesses seeking precise, actionable insights
                  without technical complexity.
                </span>
              </h3>
            </div>
            <div className="w-[683px] flex flex-col items-start justify-start gap-10 max-w-full mq900:gap-5">
              <h2 className="m-0 h-[21px] relative text-inherit leading-[40px] font-semibold font-[inherit] inline-block shrink-0 z-[1] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
                Why You’ll Love It
              </h2>
              <h3 className="m-0 self-stretch h-[98px] relative text-7xl leading-[40px] font-normal font-[inherit] text-gray-900 inline-block z-[1] mq450:text-2xl mq450:leading-[32px]">
                Because spending hours on forms is so last decade. Empower your
                team to collect and act on data effortlessly. There is no need
                for an IT team to help you out.
              </h3>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[47px] box-border min-w-[533px] max-w-full mq900:min-w-full">
            <div className="self-stretch rounded-xl bg-dodgerblue-400 flex flex-col items-start justify-start py-[72px] pl-[72px] pr-5 box-border gap-[60px] max-w-full z-[1] mq450:gap-[15px] mq900:gap-[30px] mq900:pl-9 mq900:box-border">
              <div className="w-[820px] h-[483px] relative rounded-xl bg-dodgerblue-400 hidden max-w-full" />
              <h2 className="m-0 h-[21px] relative text-inherit leading-[40px] font-semibold font-[inherit] inline-block shrink-0 z-[2] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
                What makes it so good?
              </h2>
              <h3 className="m-0 w-[687px] h-[258px] relative text-7xl leading-[40px] font-normal font-[inherit] text-gray-1000 inline-block max-w-full z-[2] mq450:text-2xl mq450:leading-[32px]">
                <p className="m-0">
                  Drag. Drop. Done. Create forms in minutes—no coding needed.
                </p>
                <p className="m-0">{`
Pre-built templates for when you need quick wins.`}</p>
                <p className="m-0">{`
Smarter forms that adapt to your users with conditional logic.`}</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Real-time validation because accuracy is everything.
                </p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureContent;
