import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component1 from "../Component1";

export type NavBarType = {
  className?: string;
};

const NavBar: FunctionComponent<NavBarType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTextClick1 = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onTextClick2 = useCallback(() => {
    navigate("/solutions");
  }, [navigate]);

  const onTextClick3 = useCallback(() => {
    navigate("/pricing");
  }, [navigate]);

  return (
    <header
      className={`self-stretch [backdrop-filter:blur(200px)] bg-gray-700 flex flex-row items-start justify-start py-10 pl-[121px] pr-[120px] box-border gap-[23.8px] top-[0] z-[99] sticky max-w-full text-center text-xl text-gray-100 font-sf-pro mq900:pl-[30px] mq900:pr-[30px] mq900:box-border mq1275:pl-[60px] mq1275:pr-[60px] mq1275:box-border ${className}`}
    >
      <div className="h-[120px] w-[1920px] relative [backdrop-filter:blur(200px)] bg-gray-700 hidden max-w-full" />
      <div className="w-[177.2px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
        <img
          className="w-[102.2px] h-8 relative z-[1]"
          loading="lazy"
          alt=""
          src="/group-4.svg"
        />
      </div>
      <div className="w-[467.2px] flex flex-col items-start justify-start pt-[13px] pb-0 pl-0 pr-[26px] box-border max-w-full">
        <div className="self-stretch h-3.5 relative">
          <a
            className="[text-decoration:none] absolute top-[0px] left-[0px] leading-[35px] text-[inherit] inline-block w-14 h-3.5 min-w-[56px] cursor-pointer z-[1]"
            onClick={onTextClick}
          >
            Home
          </a>
          <a
            className="[text-decoration:none] absolute top-[0px] left-[115px] leading-[35px] text-[inherit] inline-block w-[57px] h-3.5 min-w-[57px] cursor-pointer z-[1]"
            onClick={onTextClick1}
          >
            About
          </a>
          <a
            className="[text-decoration:none] absolute top-[0px] left-[231px] leading-[35px] text-[inherit] inline-block w-[88px] h-3.5 min-w-[88px] cursor-pointer z-[1]"
            onClick={onTextClick2}
          >
            Solutions
          </a>
          <a
            className="[text-decoration:none] absolute top-[0px] left-[377px] leading-[35px] text-[inherit] inline-block w-[66px] h-3.5 min-w-[66px] cursor-pointer z-[1]"
            onClick={onTextClick3}
          >
            Pricing
          </a>
        </div>
      </div>
      <button className="cursor-pointer [border:none] pt-[3px] px-0 pb-0 bg-[transparent] flex-1 flex flex-col items-start justify-start box-border max-w-full">
        <div className="w-48 rounded-8xs bg-dodgerblue-300 flex flex-row items-start justify-start py-2.5 pl-2.5 pr-[9px] box-border z-[1]">
          <a className="[text-decoration:none] h-3.5 flex-1 relative text-xl leading-[14px] font-bold font-sf-pro text-white text-center inline-block">
            Customer Stories
          </a>
        </div>
      </button>
      <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-left text-sm text-dodgerblue-300 font-font-awesome-5-free">
        <div className="flex flex-row items-start justify-start gap-[8.5px] mq1600:hidden">
          <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
            <div className="relative leading-[14px] z-[1]"></div>
          </div>
          <div className="relative leading-[26.3px] font-poppins text-gray-100 z-[1]">
            +1-800-456-478-23
          </div>
        </div>
      </div>
      <Component1
        variant={3}
        text="Let’s Start"
        component18Border="unset"
        component18Height="40px"
        textHeight="unset"
        textDisplay="unset"
        textAlignItems="unset"
        textJustifyContent="unset"
      />
    </header>
  );
};

export default NavBar;