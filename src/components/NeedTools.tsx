import { FunctionComponent } from "react";

export type NeedToolsType = {
  className?: string;
};

const NeedTools: FunctionComponent<NeedToolsType> = () => {
  return (
    <section
      className={`self-stretch bg-aliceblue overflow-hidden shrink-0 flex flex-row items-end justify-start pt-[48.8px] px-[190px] pb-0 box-border gap-[217px] max-w-full text-left text-45xl text-gray-100 font-sf-pro mq450:gap-[27px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1275:gap-[108px] mq1275:pl-[95px] mq1275:pr-[95px] mq1275:box-border mq825:gap-[54px] mq825:pl-[47px] mq825:pt-8 mq825:pr-[47px] mq825:box-border mq1575:flex-wrap mq1575:justify-center}`}
    >
      <img
        className="h-[551.2px] w-[327px] relative max-w-full mq1575:flex-1"
        loading="lazy"
        alt=""
        src="/group-55.svg"
      />
      <div className="w-[453px] flex flex-col items-start justify-start pt-0 px-0 pb-20 box-border max-w-full mq450:pb-[52px] mq450:box-border mq1275:min-w-full mq1575:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[178px] mq450:gap-[89px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[60px] mq450:gap-[30px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[78px] pr-[76px] mq450:pl-[39px] mq450:pr-[38px] mq450:box-border">
              <h1 className="m-0 h-[45px] relative text-inherit tracking-[-0.01em] leading-[45px] font-semibold font-[inherit] inline-block mq450:text-19xl mq450:leading-[43px] mq825:text-32xl mq825:leading-[58px]">
                Need tools
              </h1>
            </div>
            <h2 className="m-0 h-[21px] relative text-11xl leading-[40px] font-medium font-[inherit] inline-block shrink-0 mq450:text-lg mq450:leading-[24px] mq825:text-5xl mq825:leading-[32px]">
              for your ITSM, CRM, or FSM needs?
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px]">
            <img
              className="h-4 w-[88px] relative"
              loading="lazy"
              alt=""
              src="/group-21.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedTools;
