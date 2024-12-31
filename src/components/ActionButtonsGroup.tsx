import { FunctionComponent } from "react";

export type ActionButtonsGroupType = {
  className?: string;
};

const ActionButtonsGroup: FunctionComponent<ActionButtonsGroupType> = () => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-0.5 pr-0 box-border max-w-full}`}
    >
      <div className="w-[490px] flex flex-row items-start justify-start flex-wrap content-start gap-[20px] max-w-full">
        <button className="cursor-pointer [border:none] py-[16px] px-[20px] bg-dodgerblue-300 flex-1 rounded-61xl flex flex-row items-center justify-center box-border min-w-[146px] z-[1] hover:bg-dodgerblue-100">
          <div className="relative text-lg leading-[1.5] font-medium font-sf-pro text-white text-center">
            Schedule a Call
          </div>
        </button>
        <button className="cursor-pointer border-dodgerblue-300 border-[2px] border-solid py-[16px] px-[20px] bg-[transparent] flex-1 rounded-61xl box-border flex flex-row items-center justify-center min-w-[153px] min-h-[62px] z-[1] hover:bg-dodgerblue-500 hover:border-dodgerblue-100 hover:border-[2px] hover:box-border">
          <div className="relative text-lg leading-[1.5] font-medium font-sf-pro text-dodgerblue-300 text-center">
            Start a Free Trial
          </div>
        </button>
      </div>
    </div>
  );
};

export default ActionButtonsGroup;
