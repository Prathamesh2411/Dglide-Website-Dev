import { FunctionComponent } from "react";

export type FutureReadySectionType = {
  className?: string;
};

const FutureReadySection: FunctionComponent<FutureReadySectionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch bg-white relative flex flex-col items-start justify-start pt-[200px] pb-0 px-[110px] box-border gap-[78px] max-w-full z-[3] text-left text-45xl text-gray-100 font-sf-pro mq900:gap-[19px] mq900:px-[27px] mq900:pt-[84px] mq900:box-border mq1350:gap-[39px] mq1350:px-[55px] mq1350:pt-[130px] mq1350:box-border ${className}`}
    >
      <img
        src="/future-ready-solutions.svg"
        className="absolute right-0 bottom-0 w-1/2 bg-no-repeat bg-contain bg-bottom-right z-[1]"
        style={{}}
      />

      <div className="w-[1920px] h-[970px] relative bg-white hidden max-w-full" />
      <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[45px] font-semibold font-[inherit] z-[2] mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
        Your Partner for Future-Ready Solutions
      </h1>

      <div className="w-[60%] flex flex-row items-start justify-between gap-[60px] text-7xl text-darkslategray">
        <div className="w-1/2 flex flex-col items-start justify-start gap-[40px] z-[2] mq1750:w-full">
          <div className="text-13xl leading-[23px] font-medium mq450:text-lgi mq450:leading-[24px] mq900:text-7xl mq900:leading-[32px]">
            Let's Connect & Build Together
          </div>

          <div className="w-full leading-[40px] mq450:text-2xl mq450:leading-[32px]">
            At Digital Glide, we're rewriting the future of business operations
            with cutting-edge technology and over 100 years of combined
            expertise. From AI-native automation and workflow optimization to
            seamless integrations, we deliver intuitive, scalable, and reliable
            tools that empower businesses to thrive in today's fast-paced
            digital landscape. Whether you're looking to streamline processes,
            modernize ITSM, improve lead conversion, or enable smarter
            decision-making, our platform is your gateway to transformation.
          </div>

          <div className="flex flex-row items-start justify-start gap-[30px] mq450:flex-wrap">
            <button className="cursor-pointer [border:none] py-[30px] px-10 bg-dodgerblue-300 flex-1 rounded-61xl flex flex-row items-start justify-start box-border min-w-[159px] hover:bg-dodgerblue-100">
              <div className="h-3.5 flex-1 relative text-xl leading-[14px] font-medium font-sf-pro text-white text-left">
                Explore Solutions
              </div>
            </button>
            <button className="cursor-pointer border-dodgerblue-300 border-[2px] border-solid py-[27px] px-10 bg-[transparent] w-[220px] rounded-61xl box-border flex flex-row items-start justify-start hover:bg-dodgerblue-500 hover:border-dodgerblue-100">
              <div className="h-3.5 flex-1 relative text-xl leading-[14px] font-medium font-sf-pro text-dodgerblue-300 text-left mq450:text-base mq450:leading-[32px]">
                Read the Story
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureReadySection;
