import { FunctionComponent } from "react";

export type WhyWeDoItSectionType = {
  className?: string;
};

const WhyWeDoItSection: FunctionComponent<WhyWeDoItSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[120px] box-border max-w-full text-left text-45xl text-white font-sf-pro mq900:pb-[51px] mq900:box-border mq1350:pb-[78px] mq1350:box-border ${className}`}
    >
      <div className="flex-1 [background:linear-gradient(247.46deg,_#5d9eff,_#3780ef)] flex flex-col items-start justify-start p-[120px] box-border gap-[120px] max-w-full mq900:gap-[30px] mq900:py-[51px] mq900:px-[30px] mq900:box-border mq1350:gap-[60px] mq1350:py-[78px] mq1350:px-[60px] mq1350:box-border">
        <div className="w-[1920px] h-[1005px] relative [background:linear-gradient(247.46deg,_#5d9eff,_#3780ef)] hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[663px] pr-[662px] mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[165px] mq900:pr-[165px] mq900:box-border mq1350:pl-[331px] mq1350:pr-[331px] mq1350:box-border">
          <h1 className="m-0 h-[45px] relative text-inherit tracking-[-0.01em] leading-[45px] font-semibold font-[inherit] inline-block z-[1] mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
            Why we do it
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-10 max-w-full text-center text-11xl mq900:gap-5 mq1750:flex-wrap">
          <div className="flex-[0.8759] [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 flex flex-col items-end justify-start pt-20 pb-[119px] pl-[71px] pr-[72px] box-border gap-[100px] max-w-full z-[1] mq450:gap-[50px] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1 mq900:pt-[52px] mq900:pb-[77px] mq900:box-border">
            <div className="w-[390px] h-[600px] relative [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-11 pr-[43px]">
              <img
                className="h-40 w-[159.9px] relative z-[2]"
                loading="lazy"
                alt=""
                src="/speechbubble1.svg"
              />
            </div>
            <div className="self-stretch h-[141px] relative leading-[40px] inline-block z-[2] mq450:text-2xl mq450:leading-[32px]">
              <p className="m-0 font-semibold">Simple is better</p>
              <p className="m-0 text-7xl">
                Technology should empower, not overwhelm
              </p>
            </div>
          </div>
          <div className="self-stretch flex-1 [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 flex flex-col items-start justify-end py-[79px] px-[54px] box-border relative max-w-full z-[1] mq450:py-[51px] mq450:px-5 mq450:box-border">
            <div className="w-[390px] h-[600px] relative [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 hidden max-w-full z-[0]" />
            <div className="self-stretch h-[221px] relative leading-[40px] inline-block z-[2] mq450:text-2xl mq450:leading-[32px]">
              <p className="m-0 font-semibold">For Non-Tech Users</p>
              <p className="m-0 text-7xl">
                We bridge the gap between ideas and implementation, enabling
                users to innovate without reliance on IT teams
              </p>
            </div>
            <img
              className="w-[182px] h-[185.6px] absolute !m-[0] top-[68.6px] left-[103.2px] object-contain z-[2]"
              loading="lazy"
              alt=""
              src="/group-41@2x.png"
            />
          </div>
          <div className="flex-[0.9965] [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 flex flex-col items-end justify-start pt-[100px] pb-[79px] pl-[54px] pr-[55px] box-border gap-[80.3px] max-w-full z-[1] mq450:gap-10 mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1 mq900:pt-[65px] mq900:pb-[51px] mq900:box-border">
            <div className="w-[390px] h-[600px] relative [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 hidden max-w-full" />
            <div className="flex flex-row items-start justify-end py-0 px-[31px]">
              <img
                className="h-[119.7px] flex-1 relative max-w-full overflow-hidden z-[2]"
                loading="lazy"
                alt=""
                src="/group-42.svg"
              />
            </div>
            <div className="self-stretch h-[221px] relative leading-[40px] inline-block z-[2] mq450:text-2xl mq450:leading-[32px]">
              <p className="m-0 font-semibold">
                Cost-Effective, Scalable Solutions
              </p>
              <p className="m-0 text-7xl">
                Tailored for businesses of all sizes, ensuring affordability and
                scalability
              </p>
            </div>
          </div>
          <div className="flex-1 [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 flex flex-col items-start justify-start pt-[76px] px-[54px] pb-[79px] box-border gap-16 max-w-full z-[1] mq450:gap-8 mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pt-[49px] mq900:pb-[51px] mq900:box-border">
            <div className="w-[390px] h-[600px] relative [backdrop-filter:blur(200px)] rounded-xl bg-gray-600 hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-14 pr-[59px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <img
                className="h-40 flex-1 relative max-w-full overflow-hidden z-[2]"
                loading="lazy"
                alt=""
                src="/group-43.svg"
              />
            </div>
            <div className="self-stretch h-[221px] relative leading-[40px] inline-block z-[2] mq450:text-2xl mq450:leading-[32px]">
              <p className="m-0 font-semibold">AI for All</p>
              <p className="m-0 text-7xl">
                We integrate cutting-edge AI to create tools that are simple,
                accessible, and impactful for modern industries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeDoItSection;
