import { FunctionComponent } from "react";
import IndustryCards from "./IndustryCards";

export type SolutionsSectionType = {
  className?: string;
};

const SolutionsSection: FunctionComponent<SolutionsSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch [background:linear-gradient(247.46deg,_#5d9eff,_#3780ef)] flex flex-col items-start justify-start pt-[120px] pb-[146px] pl-[120px] pr-[119px] box-border gap-[88px] max-w-full z-[2] text-left text-45xl text-white font-sf-pro mq900:gap-[22px] mq900:pt-[33px] mq900:pb-10 mq900:pl-[30px] mq900:pr-[29px] mq900:box-border mq1350:gap-11 mq1350:pt-[51px] mq1350:pb-[62px] mq1350:pl-[60px] mq1350:pr-[59px] mq1350:box-border ${className}`}
    >
      <div className="w-[1920px] h-[2197px] relative [background:linear-gradient(247.46deg,_#5d9eff,_#3780ef)] hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-center max-w-full">
        <div className="w-[985px] flex flex-col items-start justify-start gap-[60px] max-w-full mq1350:gap-[30px]">
          <h1 className="m-0 h-[45px] relative text-inherit tracking-[-0.01em] leading-[72px] font-semibold font-[inherit] inline-block shrink-0 z-[3] mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
            Tailored Solutions for Every Industry
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[165px] pr-[164px] text-center text-11xl text-gray-500 mq900:pl-[41px] mq900:pr-[41px] mq900:box-border mq1350:pl-[82px] mq1350:pr-[82px] mq1350:box-border">
            <div className="h-[21px] flex-1 relative leading-[21px] font-medium inline-block z-[3] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
              Premium tools that custom-fit your business needs
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[130px] max-w-full text-center text-11xl text-gray-100 mq450:gap-4 mq900:gap-8 mq1350:gap-[65px]">
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-5 max-w-full">
          <div className="w-[547px] rounded-xl bg-white flex flex-col items-start justify-start pt-[104px] px-[60px] pb-[60px] box-border gap-[100px] max-w-full z-[3] mq450:gap-[25px] mq900:gap-[50px] mq900:pt-[68px] mq900:px-[30px] mq900:pb-[39px] mq900:box-border">
            <div className="w-[547px] h-[753px] relative rounded-xl bg-white hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
              <img
                className="h-[250px] flex-1 relative max-w-full overflow-hidden z-[4]"
                loading="lazy"
                alt=""
                src="/crm.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[41px] mq450:gap-5">
              <div className="self-stretch h-[181px] relative leading-[40px] inline-block z-[4] mq450:text-2xl mq450:leading-[32px]">
                <p className="m-0 font-semibold">
                  Customer Relationship Management (CRM):
                </p>
                <p className="m-0 text-7xl">
                  Boost customer engagement and build relationships with a CRM
                  designed to accelerate your sales and marketing
                </p>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-24 text-5xl text-dodgerblue-300 mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="h-[17px] flex-1 relative tracking-[-0.02em] leading-[17px] font-semibold inline-block z-[4] mq450:text-lgi mq450:leading-[64px]">
                  Contact Us for a Demo
                </div>
              </div>
            </div>
          </div>
          <div className="w-[547px] rounded-xl bg-white flex flex-col items-start justify-start pt-20 px-[60px] pb-[60px] box-border gap-[74.2px] max-w-full z-[3] text-7xl mq450:gap-[19px] mq900:gap-[37px] mq900:pt-[52px] mq900:px-[30px] mq900:pb-[39px] mq900:box-border">
            <div className="w-[547px] h-[753px] relative rounded-xl bg-white hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[62px] pr-[65px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="h-[299.8px] flex-1 relative">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full z-[4]"
                  alt=""
                  src="/ts.svg"
                />
                <img
                  className="absolute top-[89px] left-[189px] w-[24.1px] h-6 z-[5]"
                  loading="lazy"
                  alt=""
                  src="/group-12.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[41px] mq450:gap-5">
              <div className="self-stretch h-[181px] relative leading-[40px] inline-block z-[4] mq450:text-2xl mq450:leading-[32px]">
                <p className="m-0 text-11xl font-semibold">Ticketing System:</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Resolve issues faster with a centralized system for managing
                  tickets, IoT alerts, and assets.
                </p>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-24 text-5xl text-dodgerblue-300 mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="h-[17px] flex-1 relative tracking-[-0.02em] leading-[17px] font-semibold inline-block z-[4] mq450:text-lgi mq450:leading-[64px]">
                  Contact Us for a Demo
                </div>
              </div>
            </div>
          </div>
          <IndustryCards
            cMS="/cms.svg"
            customManagementSuite="Custom Management Suite:"
            achieveUnmatchedEfficiency="Achieve unmatched efficiency with a fully customizable suite built to align with your unique goals."
          />
          <div className="w-[547px] rounded-xl bg-white flex flex-col items-end justify-start pt-2 pb-[50px] pl-[47px] pr-12 box-border gap-[46px] max-w-full z-[3] mq900:gap-[23px] mq900:pt-5 mq900:pb-8 mq900:pl-[23px] mq900:pr-6 mq900:box-border">
            <div className="w-[547px] h-[753px] relative rounded-xl bg-white hidden max-w-full" />
            <div className="flex flex-row items-start justify-end py-0 px-[7px] box-border max-w-full">
              <img
                className="h-[400px] flex-1 relative max-w-full overflow-hidden z-[4]"
                loading="lazy"
                alt=""
                src="/ecmv.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[51px] mq450:gap-[25px]">
              <div className="self-stretch h-[181px] relative leading-[40px] inline-block z-[4] mq450:text-2xl mq450:leading-[32px]">
                <p className="m-0 font-semibold">Ecological Conservation</p>
                <p className="m-0 font-semibold">
                  Management and Visualisation:
                </p>
                <p className="m-0 text-7xl">
                  Turn environmental data into actionable strategies with
                  cutting-edge visualization solutions.
                </p>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[109px] pr-[108px] text-5xl text-dodgerblue-300 mq450:pl-[54px] mq450:pr-[54px] mq450:box-border">
                <div className="h-[17px] flex-1 relative tracking-[-0.02em] leading-[17px] font-semibold inline-block z-[4] mq450:text-lgi mq450:leading-[64px]">
                  Contact Us for a Demo
                </div>
              </div>
            </div>
          </div>
          <IndustryCards
            industryCardsPadding="0px 49px 60px 48px"
            industryCardsGap="54px"
            cMS="/fsm.svg"
            cMSIconHeight="400px"
            frameDivGap="81px"
            customManagementSuite="Field Service Management (FSM):"
            achieveUnmatchedEfficiency="Increase efficiency on ground. Equip your field agents with mobile-ready tools for efficient task handling."
          />
          <IndustryCards
            industryCardsPadding="69.6px 37px 60px 36px"
            industryCardsGap="64.4px"
            cMS="/itsm.svg"
            cMSIconHeight="320px"
            frameDivGap="81px"
            customManagementSuite="IT Service Management (ITSM):"
            achieveUnmatchedEfficiency="Optimize your IT processes with a seamless platform designed to deliver faster, smarter, and more reliable services"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[319px] pr-[318px] box-border max-w-full text-gray-500 mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[79px] mq900:pr-[79px] mq900:box-border mq1350:pl-[159px] mq1350:pr-[159px] mq1350:box-border">
          <div className="h-[61px] flex-1 relative leading-[40px] font-medium inline-block max-w-full z-[3] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
            With Digital Glide, you don’t need separate software for your
            business needs. You can customize as needed and step on the pedal
            for success with a few clicks!
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
