import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-0.5 pr-0 box-border max-w-full ${className}`}
    >
      <div className="w-[490px] flex flex-row items-start justify-start flex-wrap content-start gap-[30px] max-w-full">
        <button className="cursor-pointer [border:none] py-6 pl-10 pr-[39px] bg-dodgerblue-300 flex-1 rounded-61xl flex flex-row items-start justify-start box-border min-w-[146px] z-[1] hover:bg-dodgerblue-100">
          <div className="h-3.5 flex-1 relative text-xl leading-[14px] font-medium font-sf-pro text-white text-left inline-block">
            Schedule a Call
          </div>
        </button>
        <button className="cursor-pointer border-dodgerblue-300 border-[2px] border-solid py-[21px] pl-10 pr-[35px] bg-[transparent] flex-1 rounded-61xl box-border flex flex-row items-start justify-start min-w-[153px] min-h-[62px] z-[1] hover:bg-dodgerblue-500 hover:border-dodgerblue-100 hover:border-[2px] hover:border-solid hover:box-border">
          <div className="h-3.5 flex-1 relative text-xl leading-[14px] font-medium font-sf-pro text-dodgerblue-300 text-left inline-block mq450:text-base mq450:leading-[32px]">
            Start a Free Trial
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
