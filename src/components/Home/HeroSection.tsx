import { Button } from "@/components/ui/button";

export default function HeroSection({ className = "" }) {
  return (
    <>
      <div
        className={`self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-left text-45xl text-gray-100 font-sf-pro mq1750:flex-wrap ${className}`}
      >
        <div className="[background:linear-gradient(270deg,_rgba(255,_255,_255,_0),_#fff_65.4%)] flex flex-col items-start justify-start pt-24 md:pt-32 px-[114px] pb-[220px] box-border gap-[60px] min-w-[961px] max-w-full z-[2] mq450:gap-[15px] mq450:pt-[85px] mq450:px-5 mq450:pb-[93px] mq450:box-border mq900:gap-[30px] mq900:px-[57px] mq900:pb-[143px] mq900:box-border mq1350:min-w-full mq1750:flex-1">
          <div className="w-[961px] h-[788px] relative [background:linear-gradient(270deg,_rgba(255,_255,_255,_0),_#fff_65.4%)] hidden max-w-full" />
          <div className="flex flex-row items-start justify-start py-0 pl-2.5 pr-[9px] box-border max-w-full">
            <h1 className="m-0 h-[45px] relative text-inherit tracking-[-0.01em] leading-[45px] capitalize font-semibold font-[inherit] inline-block z-[3] mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
              get Started!
            </h1>
          </div>
          <div className="w-[648px] flex flex-row items-start justify-start pt-0 px-2.5 pb-5 box-border max-w-full text-11xl">
            <div className="flex-1 flex flex-col items-start justify-start gap-10 max-w-full mq900:gap-5">
              <div className="self-stretch h-[21px] relative leading-[40px] font-semibold inline-block shrink-0 z-[3] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
                Streamline your Business, Build Relationships
              </div>
              <div className="self-stretch h-[58px] relative text-7xl leading-[40px] inline-block shrink-0 z-[3] mq450:text-2xl mq450:leading-[32px]">
                Highly customisable Relationship management systems to make it
                work for your needs.
              </div>
            </div>
          </div>
          <div className="w-[490px] flex flex-row items-start justify-start gap-[30px] max-w-full mq450:flex-wrap">
            <button className="cursor-pointer [border:none] py-6 pl-10 pr-[39px] bg-dodgerblue-300 flex-1 rounded-61xl flex flex-row items-start justify-start box-border min-w-[146px] z-[3] hover:bg-dodgerblue-100">
              <div className="h-3.5 flex-1 relative text-xl leading-[14px] font-medium font-sf-pro text-white text-left inline-block">
                Schedule a Call
              </div>
            </button>
            <button className="cursor-pointer border-dodgerblue-300 border-[2px] border-solid py-[21px] pl-10 pr-[35px] bg-[transparent] flex-1 rounded-61xl box-border flex flex-row items-start justify-start min-w-[153px] min-h-[62px] z-[3] hover:bg-dodgerblue-500 hover:border-dodgerblue-100 hover:border-[2px] hover:border-solid hover:box-border">
              <div className="h-3.5 flex-1 relative text-xl leading-[14px] font-medium font-sf-pro text-dodgerblue-300 text-left inline-block mq450:text-base mq450:leading-[32px]">
                Start a Free Trial
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 top-20 w-full flex justify-end">
        <img
          src="./floating_mac.png"
          alt="Dashboard Preview"
          className="w-auto h-[85vh] object-contain"
        />
      </div>
    </>
  );
}
