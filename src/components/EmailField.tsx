import { FunctionComponent } from "react";

export type EmailFieldType = {
  className?: string;
};

const EmailField: FunctionComponent<EmailFieldType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-left text-base text-white font-sf-pro ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-6 w-6 absolute !m-[0] top-[18.5px] right-[6px] z-[1]"
          loading="lazy"
          alt=""
          src="/component-5.svg"
        />
        <div className="flex-1 border-gray-1100 border-b-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-[19px] pb-[22px] pl-0 pr-[35px] max-w-full z-[2]">
          <div className="flex-1 relative inline-block max-w-full">Email</div>
        </div>
      </div>
      <div className="w-[279.3px] flex flex-row items-end justify-start gap-[11px] text-sm">
        <input
          className="m-0 h-6 w-6 relative rounded border-gray-1100 border-[1px] border-solid box-border shrink-0 z-[2]"
          type="checkbox"
        />
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px">
          <div className="self-stretch relative leading-[20px] shrink-0 z-[1]">
            I agree to the Terms, Privacy Policy.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailField;
