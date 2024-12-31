import { FunctionComponent } from "react";

export type FeaturesSectionType = {
  className?: string;
};

const FeaturesSection: FunctionComponent<FeaturesSectionType> = ({
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
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-x-10 gap-y-[30px] max-w-full text-11xl mq900:gap-5">
          <div className="w-[533px] [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 flex flex-row items-start justify-start pt-[70px] px-[60px] pb-[89px] box-border gap-[40.4px] max-w-full z-[1] mq900:gap-5 mq900:flex-wrap mq900:justify-center mq900:pl-[30px] mq900:pr-[30px] mq900:box-border">
            <div className="h-[300px] w-[533px] relative [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 hidden max-w-full" />
            <div className="flex flex-col items-start justify-start pt-[10.3px] px-0 pb-0 mq900:flex-1">
              <img
                className="w-[119.4px] h-[119.4px] relative z-[2] mq900:self-stretch mq900:w-auto"
                loading="lazy"
                alt=""
                src="/form-builder.svg"
              />
            </div>
            <div className="h-[141px] flex-1 relative leading-[40px] inline-block min-w-[161px] z-[2] mq450:text-2xl mq450:leading-[32px]">
              <p className="m-0 font-semibold">Form Builder:</p>
              <p className="m-0 text-7xl">
                Effortlessly capture data with custom, intuitive forms
              </p>
            </div>
          </div>
          <div className="w-[534px] [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 flex flex-row items-start justify-between pt-[70px] pb-[89px] pl-[60px] pr-[45px] box-border gap-5 max-w-full z-[1] mq900:flex-wrap mq900:pl-[30px] mq900:pr-[22px] mq900:box-border">
            <div className="h-[300px] w-[534px] relative [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 hidden max-w-full" />
            <div className="flex flex-row items-start justify-start relative">
              <img
                className="h-[97.4px] w-[97.4px] relative z-[2]"
                alt=""
                src="/vector.svg"
              />
              <img
                className="h-[140px] w-[145.3px] absolute !m-[0] right-[-47.9px] bottom-[-52.6px] z-[3]"
                loading="lazy"
                alt=""
                src="/workflow-engine.svg"
              />
            </div>
            <div className="h-[141px] w-[249px] relative leading-[40px] inline-block shrink-0 z-[2] mq450:text-2xl mq450:leading-[32px] mq900:flex-1">
              <p className="m-0 font-semibold">Workflow Engine:</p>
              <p className="m-0 text-7xl">
                Automate complex processes with drag-and-drop tools.
              </p>
            </div>
          </div>
          <div className="w-[533px] [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 flex flex-row items-start justify-start pt-[70px] pb-[90px] pl-[70px] pr-[67px] box-border gap-[40.9px] max-w-full z-[1] mq900:gap-5 mq900:flex-wrap mq900:pl-[35px] mq900:pr-[33px] mq900:box-border">
            <div className="h-[300px] w-[533px] relative [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 hidden max-w-full" />
            <img
              className="h-[140px] w-[89.1px] relative z-[2]"
              loading="lazy"
              alt=""
              src="/integration-engine.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[173px]">
              <div className="self-stretch h-[101px] relative leading-[40px] inline-block z-[2] mq450:text-2xl mq450:leading-[32px]">
                <p className="m-0 font-semibold">Integration Engine:</p>
                <p className="m-0 text-7xl">
                  Seamlessly connect your favourite platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[533px] [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 flex flex-row items-start justify-start pt-[70px] px-[58px] pb-[89px] box-border gap-[40.9px] max-w-full z-[1] mq900:gap-5 mq900:flex-wrap mq900:pl-[29px] mq900:pr-[29px] mq900:box-border">
            <div className="h-[300px] w-[533px] relative [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 hidden max-w-full" />
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 mq900:flex-1">
              <img
                className="w-[121.1px] h-[120px] relative z-[2] mq900:self-stretch mq900:w-auto"
                loading="lazy"
                alt=""
                src="/built-in-ai.svg"
              />
            </div>
            <div className="h-[141px] flex-1 relative leading-[40px] inline-block min-w-[161px] z-[2] mq450:text-2xl mq450:leading-[32px]">
              <p className="m-0 font-semibold">Built-In AI:</p>
              <p className="m-0 text-7xl">
                Empower smarter decisions with predictive analytics
              </p>
            </div>
          </div>
          <div className="w-[534px] [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 flex flex-row items-start justify-start pt-10 pb-[39px] pl-[38px] pr-[7px] box-border gap-[42px] max-w-full z-[1] text-7xl mq900:gap-[21px] mq900:flex-wrap">
            <div className="h-[300px] w-[534px] relative [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 hidden max-w-full" />
            <div className="flex flex-col items-start justify-start pt-[30px] px-0 pb-0 mq900:flex-1">
              <img
                className="w-40 h-40 relative z-[2] mq900:self-stretch mq900:w-auto"
                loading="lazy"
                alt=""
                src="/sla--tat.svg"
              />
            </div>
            <div className="h-[221px] flex-1 relative leading-[40px] inline-block min-w-[167px] z-[2] mq450:text-2xl mq450:leading-[32px]">
              <p className="m-0 text-11xl font-semibold">{`SLA & TAT Management:`}</p>
              <p className="m-0">Track performance, deadlines, and</p>
              <p className="m-0">outcomes to drive efficiency</p>
            </div>
          </div>
          <div className="w-[533px] [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 flex flex-row items-start justify-start pt-[60px] pb-[59px] pl-[70px] pr-[43px] box-border gap-[53.6px] max-w-full z-[1] mq900:gap-[27px] mq900:flex-wrap mq900:pl-[35px] mq900:pr-[21px] mq900:box-border">
            <div className="h-[300px] w-[533px] relative [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 hidden max-w-full" />
            <div className="h-[130px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
                alt=""
                src="/knowledge-base.svg"
              />
            </div>
            <div className="h-[181px] flex-1 relative leading-[40px] inline-block min-w-[188px] z-[2] mq450:text-2xl mq450:leading-[32px]">
              <p className="m-0 font-semibold">Knowledge Base:</p>
              <p className="m-0 text-7xl">
                Centralize documentation empower users with self-service
                solutions and FAQs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
