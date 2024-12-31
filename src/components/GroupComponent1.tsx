import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component1 from "./Component1";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onTextClick1 = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onTextClick2 = useCallback(() => {
    navigate("/pricing");
  }, [navigate]);

  const onTextClick3 = useCallback(() => {
    navigate("/customer-stories");
  }, [navigate]);

  return (
    <header
      className={`absolute top-[0px] left-[0px] [backdrop-filter:blur(200px)] bg-gray-700 w-full flex flex-row items-start justify-start py-10 pl-[121px] pr-[120px] box-border gap-[8.5px] max-w-full z-[1] text-center text-xl text-gray-100 font-sf-pro mq900:pl-[30px] mq900:pr-[30px] mq900:box-border mq1350:pl-[60px] mq1350:pr-[60px] mq1350:box-border mq1750:flex-wrap ${className}`}
    >
      <div className="h-[120px] w-[1920px] relative [backdrop-filter:blur(200px)] bg-gray-700 hidden max-w-full" />
      <div className="w-[192.5px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
        <img
          className="w-[102.2px] h-8 relative z-[1]"
          loading="lazy"
          alt=""
          src="/group-4.svg"
        />
      </div>
      <div className="w-[212.5px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
        <div className="w-[171px] flex flex-row items-start justify-between gap-5">
          <a
            className="[text-decoration:none] h-3.5 relative leading-[14px] text-[inherit] inline-block cursor-pointer z-[1] mq450:text-base mq450:leading-[28px]"
            onClick={onTextClick}
          >
            Home
          </a>
          <a
            className="[text-decoration:none] h-3.5 relative leading-[14px] text-[inherit] inline-block cursor-pointer z-[1] mq450:text-base mq450:leading-[28px]"
            onClick={onTextClick1}
          >
            About
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[3px] pb-0 pl-0 pr-[34px] text-white">
        <div className="self-stretch rounded-8xs bg-dodgerblue-300 flex flex-row items-start justify-start py-2.5 pl-2.5 pr-[9px] z-[1]">
          <a className="[text-decoration:none] h-3.5 flex-1 relative leading-[14px] font-bold text-[inherit] inline-block min-w-[94px] mq450:text-base mq450:leading-[28px]">
            Solutions
          </a>
        </div>
      </div>
      <div className="w-[121.5px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
        <a
          className="[text-decoration:none] h-3.5 relative leading-[35px] text-[inherit] inline-block shrink-0 cursor-pointer z-[1] mq450:text-base mq450:leading-[28px]"
          onClick={onTextClick2}
        >
          Pricing
        </a>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[421px] max-w-full mq900:min-w-full">
        <a
          className="[text-decoration:none] h-3.5 relative leading-[35px] text-[inherit] inline-block shrink-0 cursor-pointer z-[1] mq450:text-base mq450:leading-[28px]"
          onClick={onTextClick3}
        >
          Customer Stories
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0 text-left text-sm text-dodgerblue-300 font-font-awesome-5-free">
        <div className="relative leading-[14px] z-[1]"></div>
      </div>
      <div className="flex flex-col items-start justify-start pt-1.5 pb-0 pl-0 pr-3.5 text-left text-sm font-poppins">
        <div className="relative leading-[26.3px] z-[1]">+1-800-456-478-23</div>
      </div>
      <Component1
        variant={3}
        text="Let’s Start"
        component18Border="unset"
        component18Height="unset"
        textHeight="20px"
        textDisplay="flex"
        textAlignItems="center"
        textJustifyContent="center"
      />
    </header>
  );
};

export default GroupComponent1;
