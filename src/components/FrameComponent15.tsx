import { FunctionComponent } from "react";

export type FrameComponent15Type = {
  className?: string;
};

const FrameComponent15: FunctionComponent<FrameComponent15Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[150px] pl-[143px] pr-5 box-border max-w-full text-left text-45xl text-gray-100 font-sf-pro mq1275:pl-[71px] mq1275:pb-[97px] mq1275:box-border mq825:pl-[35px] mq825:pb-[63px] mq825:box-border ${className}`}
    >
      <div className="w-[1477px] flex flex-col items-start justify-start gap-[120px] max-w-full mq450:gap-[30px] mq825:gap-[60px]">
        <div className="w-[1383.3px] flex flex-row items-start justify-start py-0 px-[60px] box-border max-w-full mq1275:pl-[30px] mq1275:pr-[30px] mq1275:box-border">
          <div className="flex-1 flex flex-row items-end justify-start gap-[140px] max-w-full mq450:gap-[17px] mq1275:gap-[70px] mq1275:flex-wrap mq825:gap-[35px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-36 box-border min-w-[404px] max-w-full mq825:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full mq825:gap-[30px]">
                <h1 className="m-0 h-[45px] relative text-inherit tracking-[-0.01em] leading-[72px] font-semibold font-[inherit] inline-block shrink-0 mq450:text-19xl mq450:leading-[43px] mq825:text-32xl mq825:leading-[58px]">
                  How Big is Your Team?
                </h1>
                <h2 className="m-0 w-[544px] h-[101px] relative text-11xl leading-[40px] font-medium font-[inherit] inline-block max-w-full mq450:text-lg mq450:leading-[24px] mq825:text-5xl mq825:leading-[32px]">
                  From startups to large enterprises, we’ve got you covered.
                  Flexible pricing scales with your team size and requirements
                </h2>
              </div>
            </div>
            <img
              className="w-[501.3px] relative max-h-full max-w-full mq1275:flex-1"
              loading="lazy"
              alt=""
              src="/grouppana.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[131.2px] max-w-full mq450:gap-4 mq1275:gap-[66px] mq825:gap-[33px] mq1575:flex-wrap">
          <img
            className="w-[580.8px] relative max-h-full max-w-full mq1575:flex-1"
            loading="lazy"
            alt=""
            src="/group-57.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border min-w-[497px] max-w-full mq450:pt-8 mq450:box-border mq825:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full mq825:gap-[30px]">
              <h1 className="m-0 self-stretch h-[189px] relative text-inherit tracking-[-0.01em] leading-[72px] font-semibold font-[inherit] inline-block mq450:text-19xl mq450:leading-[43px] mq825:text-32xl mq825:leading-[58px]">
                <p className="m-0">{`Starting Fresh or `}</p>
                <p className="m-0">Enhancing an</p>
                <p className="m-0">Existing Setup?</p>
              </h1>
              <h2 className="m-0 w-[518px] h-[101px] relative text-11xl leading-[40px] font-medium font-[inherit] inline-block max-w-full mq450:text-lg mq450:leading-[24px] mq825:text-5xl mq825:leading-[32px]">
                Whether you’re building workflows from scratch or improving
                current systems, our plans adapt to your needs.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent15;
