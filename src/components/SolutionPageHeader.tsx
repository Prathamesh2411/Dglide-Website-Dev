import { FunctionComponent } from "react";

export type FrameComponent12Type = {
  className?: string;
};

const FrameComponent12: FunctionComponent<FrameComponent12Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1886px]  items-start justify-end py-0 px-20 box-border max-w-full text-left text-45xl text-gray-100 font-sf-pro ${className}`}
    >
      <div className="flex flex-row items-start justify-between align-top max-w-full gap-5">
        <div className="w-[866px] flex flex-col items-start justify-end pt-0 px-0 pb-[22px] box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-20 max-w-full mq450:gap-5 mq900:gap-10">
            <div className="flex flex-row items-start justify-start py-0 pl-2.5 pr-[9px]">
              <h1 className="m-0  relative text-inherit tracking-[-0.01em] leading-[45px] capitalize font-semibold font-[inherit] inline-block mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
                Solutions
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-0 box-border max-w-full text-11xl">
              <div className="flex-1 flex flex-col items-start justify-start gap-10 max-w-full mq450:gap-5">
                <h2 className="m-0 w-[817px] h-[61px] relative text-inherit leading-[40px] font-semibold font-[inherit] inline-block shrink-0 max-w-full mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
                  What if you could simplify, automate, and connect your
                  operations without needing an army of developers?
                </h2>
                <h3 className="m-0 self-stretch h-[218px] relative text-7xl leading-[40px] font-normal font-[inherit] inline-block mq450:text-2xl mq450:leading-[32px]">
                  <p className="m-0">
                    We’ve mastered the art of turning complex business
                    challenges into simple, powerful solutions that anyone can
                    use. Whether you’re in ITSM, CRM, FSM, or blazing your own
                    trail, we’re here to help you glide toward success.
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    Explore our suite of products designed with simplicity,
                    accessibility, and innovation in mind.
                  </p>
                </h3>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-6 pl-10 pr-[39px] bg-dodgerblue-300 w-[248px] rounded-61xl flex flex-row items-start justify-start box-border hover:bg-dodgerblue-100">
              <div className="h-3.5 flex-1 relative text-xl leading-[14px] font-medium font-sf-pro text-white text-left inline-block">
                Find your solution
              </div>
            </button>
          </div>
        </div>
        <div className="h-[848px] flex flex-col items-start justify-start max-w-full">
          <img
            className="self-stretch h-[746px] relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/group-51.svg"
          />
        </div>
        <div className="h-[100px] w-[100px] relative rounded-341xl bg-dodgerblue-300" />
      </div>
    </section>
  );
};

export default FrameComponent12;
