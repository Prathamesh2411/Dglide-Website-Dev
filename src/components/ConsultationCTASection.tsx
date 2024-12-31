import { FunctionComponent } from "react";

export type ConsultationCTASectionType = {
  className?: string;
};

const ConsultationCTASection: FunctionComponent<ConsultationCTASectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch h-[863px] relative bg-white shrink-0 max-w-full z-[3] text-left text-45xl text-gray-100 font-sf-pro mq1275:h-auto mq1275:min-h-[863] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-white w-full h-full hidden" />
      <img
        className="absolute top-[169.1px] left-[1355.4px] w-[167px] h-[573.9px] z-[2]"
        loading="lazy"
        alt=""
        src="/character2.svg"
      />
      <div className="absolute top-[120px] left-[120px] rounded-11xl border-lightskyblue border-[4px] border-dashed box-border w-[1680px] flex flex-col items-start justify-start pt-[135px] px-[307px] pb-[115px] gap-20 max-w-full z-[1]">
        <div className="w-[1680px] h-[600px] relative rounded-11xl border-lightskyblue border-[4px] border-dashed box-border hidden max-w-full" />
        <div className="w-[904px] flex flex-col items-start justify-start gap-[60px] max-w-full">
          <h1 className="m-0 self-stretch h-[117px] relative text-inherit tracking-[-0.01em] leading-[72px] font-semibold font-[inherit] inline-block shrink-0 z-[2] mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
            <span>{`Ready to `}</span>
            <span className="text-dodgerblue-300">
              simplify and transform your business operations?
            </span>
          </h1>
          <h2 className="m-0 h-[21px] relative text-11xl leading-[40px] font-medium font-[inherit] text-center inline-block shrink-0 max-w-full z-[2] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
            Let’s craft a pricing plan that works for you
          </h2>
        </div>
        <div className="w-[692px] flex flex-row items-start justify-start flex-wrap content-start gap-5 max-w-full">
          <button className="cursor-pointer [border:none] py-6 pl-[60px] pr-[59px] bg-dodgerblue-300 flex-1 rounded-61xl flex flex-row items-start justify-start box-border min-w-[231px] max-w-full z-[2] hover:bg-dodgerblue-100">
            <div className="h-3.5 flex-1 relative text-xl leading-[14px] font-medium font-sf-pro text-white text-left inline-block">
              Book a Free Consultation
            </div>
          </button>
          <button className="cursor-pointer border-dodgerblue-300 border-[2px] border-solid py-[21px] pl-[60px] pr-[55px] bg-[transparent] w-[316px] rounded-61xl box-border flex flex-row items-start justify-start z-[2] hover:bg-dodgerblue-500 hover:border-dodgerblue-100 hover:border-[2px] hover:border-solid hover:box-border">
            <div className="h-3.5 flex-1 relative text-xl leading-[14px] font-medium font-sf-pro text-dodgerblue-300 text-left inline-block mq450:text-base mq450:leading-[32px]">
              Explore More Stories
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTASection;
