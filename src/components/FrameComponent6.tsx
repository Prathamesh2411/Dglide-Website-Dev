import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component1 from "./Component1";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onTextClick1 = useCallback(() => {
    navigate("/solutions");
  }, [navigate]);

  const onTextClick2 = useCallback(() => {
    navigate("/pricing");
  }, [navigate]);

  const onTextClick3 = useCallback(() => {
    navigate("/customer-stories");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[120px] box-border max-w-full ${className}`}
    >
      <header className="flex-1 [backdrop-filter:blur(200px)] bg-gray-700 flex flex-row items-start justify-start py-10 pl-[121px] pr-[120px] box-border gap-[8.5px] top-[0] z-[99] sticky max-w-full text-center text-xl text-gray-100 font-sf-pro mq900:pl-[30px] mq900:pr-[30px] mq900:box-border mq1350:pl-[60px] mq1350:pr-[60px] mq1350:box-border">
        <div className="h-[120px] w-[1920px] relative [backdrop-filter:blur(200px)] bg-gray-700 hidden max-w-full" />
        <div className="w-[192.5px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
          <img
            className="w-[102.2px] h-8 relative z-[1]"
            loading="lazy"
            alt=""
            src="/group-4.svg"
          />
        </div>
        <div className="w-[97.5px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
          <a
            className="[text-decoration:none] h-3.5 relative leading-[35px] text-[inherit] inline-block shrink-0 cursor-pointer z-[1]"
            onClick={onTextClick}
          >
            Home
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-[3px] pb-0 pl-0 pr-[37px] text-white">
          <div className="self-stretch rounded-8xs bg-dodgerblue-300 flex flex-row items-start justify-start py-2.5 pl-2.5 pr-[9px] z-[1]">
            <a className="[text-decoration:none] h-3.5 flex-1 relative leading-[14px] font-bold text-[inherit] inline-block min-w-[61px]">
              About
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border max-w-full">
          <div className="w-[436px] flex flex-row items-start justify-between gap-5 max-w-full mq1750:hidden">
            <a
              className="[text-decoration:none] h-3.5 relative leading-[14px] text-[inherit] inline-block cursor-pointer z-[1]"
              onClick={onTextClick1}
            >
              Solutions
            </a>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1">
              <a
                className="[text-decoration:none] h-3.5 relative leading-[35px] text-[inherit] inline-block shrink-0 cursor-pointer z-[1]"
                onClick={onTextClick2}
              >
                Pricing
              </a>
            </div>
            <a
              className="[text-decoration:none] h-3.5 relative leading-[14px] text-[inherit] inline-block cursor-pointer z-[1]"
              onClick={onTextClick3}
            >
              Customer Stories
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0 text-left text-sm text-dodgerblue-300 font-font-awesome-5-free">
          <div className="relative leading-[14px] z-[1]"></div>
        </div>
        <div className="flex flex-col items-start justify-start pt-1.5 pb-0 pl-0 pr-3.5 text-left text-sm font-poppins">
          <div className="relative leading-[26.3px] z-[1]">
            +1-800-456-478-23
          </div>
        </div>
        <Component1
          variant={3}
          text="Let’s Start"
          component18Border="unset"
          component18Height="40px"
          textHeight="20px"
          textDisplay="flex"
          textAlignItems="center"
          textJustifyContent="center"
        />
      </header>
    </section>
  );
};

export default FrameComponent6;
