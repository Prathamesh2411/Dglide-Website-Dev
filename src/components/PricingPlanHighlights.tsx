import { FunctionComponent } from "react";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch rounded-11xl border-lightskyblue border-[4px] border-dashed box-border flex flex-col items-end justify-start pt-[95px] px-[145px] pb-0 gap-[110px] max-w-full text-left text-45xl text-gray-100 font-sf-pro mq450:gap-[27px] mq900:gap-[55px] mq900:pl-9 mq900:pt-10 mq900:pr-9 mq900:box-border mq1350:pl-[72px] mq1350:pt-[62px] mq1350:pr-[72px] mq1350:box-border ${className}`}
    >
      <div className="w-[1680px] h-[1000px] relative rounded-11xl border-lightskyblue border-[4px] border-dashed box-border hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-px pr-0 box-border max-w-full">
        <div className="flex flex-col items-start justify-start gap-[60px] max-w-full mq1350:gap-[30px]">
          <h1 className="m-0 h-[45px] relative text-inherit tracking-[-0.01em] leading-[72px] font-semibold font-[inherit] inline-block shrink-0 z-[1] mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
            <span>{`Find the `}</span>
            <span className="text-dodgerblue-300">{`Perfect Plan `}</span>
            <span>for Your Business</span>
          </h1>
          <div className="flex flex-row items-start justify-start py-0 px-[291px] text-11xl mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[72px] mq900:pr-[72px] mq900:box-border mq1350:pl-[145px] mq1350:pr-[145px] mq1350:box-border">
            <div className="h-[21px] relative leading-[21px] font-medium inline-block z-[1] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
              Transparent. Flexible. Tailored to you!
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[116px] max-w-full text-11xl mq450:gap-[29px] mq900:gap-[58px]">
        <div className="self-stretch flex flex-row items-start justify-center gap-[60px] max-w-full mq900:gap-[30px] mq1750:flex-wrap">
          <div className="w-[405px] flex flex-row items-start justify-start gap-5 max-w-full mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-[60px] h-[60px] relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/pricing-character.svg"
              />
            </div>
            <div className="h-[61px] flex-1 relative leading-[40px] font-medium inline-block min-w-[212px] max-w-full z-[1] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
              Pricing customized to fit your business goals
            </div>
          </div>
          <div className="w-[441px] flex flex-row items-start justify-start gap-5 max-w-full mq900:flex-wrap">
            <img
              className="h-[60px] w-[60px] relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/pricing-character.svg"
            />
            <div className="h-[61px] flex-1 relative leading-[40px] font-medium inline-block min-w-[235px] max-w-full z-[1] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
              Plans that evolve as your team and operations grow
            </div>
          </div>
          <div className="w-[416px] flex flex-row items-start justify-start gap-5 max-w-full mq450:flex-wrap">
            <img
              className="h-[60px] w-[60px] relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/pricing-character.svg"
            />
            <div className="h-[61px] flex-1 relative leading-[40px] font-medium inline-block min-w-[219px] max-w-full z-[1] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
              Clear, no-surprise pricing for you.
            </div>
          </div>
        </div>
        <div className="w-[1358.5px] flex flex-row items-start justify-center max-w-full text-xl text-white">
          <div className="w-[764.5px] flex flex-col items-start justify-end pt-[271px] pb-[137.9px] pl-[185px] pr-40 box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pt-44 mq900:pb-[90px] mq900:pl-[92px] mq900:pr-20 mq900:box-border">
            <div className="self-stretch rounded-61xl bg-dodgerblue-300 flex flex-row items-start justify-start py-[30px] pl-[102px] pr-[101px] relative z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="h-3.5 flex-1 relative leading-[14px] font-medium inline-block mq450:text-base mq450:leading-[32px]">
                Let’s talk about pricing
              </div>
              <div className="h-[482.8px] w-[276px] absolute !m-[0] top-[-271px] left-[-185px]">
                <img
                  className="absolute top-[0px] left-[0px] w-[250.9px] h-[482.8px] z-[1]"
                  alt=""
                  src="/character5.svg"
                />
                <img
                  className="absolute top-[246px] left-[222px] w-[54px] h-10 z-[3]"
                  loading="lazy"
                  alt=""
                  src="/group-25.svg"
                />
              </div>
              <div className="h-[453.8px] w-[236px] absolute !m-[0] top-[-241.9px] right-[-160.5px]">
                <img
                  className="absolute top-[0px] left-[1.1px] w-full h-full z-[1]"
                  loading="lazy"
                  alt=""
                  src="/character6.svg"
                />
                <img
                  className="absolute top-[297.8px] left-[0px] w-[43.2px] h-8 z-[3]"
                  alt=""
                  src="/group-26.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
