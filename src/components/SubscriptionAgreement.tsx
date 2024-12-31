import { FunctionComponent } from "react";

export type SubscriptionAgreementType = {
  className?: string;
};

const SubscriptionAgreement: FunctionComponent<SubscriptionAgreementType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[60px] min-w-[640px] max-w-full text-left text-base text-white font-poppins mq900:gap-[30px] mq900:min-w-full mq1750:flex-1 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-5">
        <div className="self-stretch flex flex-row items-start justify-start gap-10 mq900:gap-5 mq900:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[195px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-5">
              <div className="relative z-[1]">Full Name</div>
              <input
                className="[border:none] [outline:none] bg-white self-stretch h-[60px] relative rounded-8xs min-w-[180px] z-[1]"
                type="text"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-5">
              <div className="relative inline-block min-w-[45px] z-[1]">
                Email
              </div>
              <input
                className="[border:none] [outline:none] bg-white self-stretch h-[60px] relative rounded-8xs min-w-[180px] z-[1]"
                type="text"
              />
            </div>
            <div className="relative z-[1]">Your Message/Query</div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[195px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-5">
              <div className="relative z-[1]">Company Name</div>
              <input
                className="[border:none] [outline:none] bg-white self-stretch h-[60px] relative rounded-8xs min-w-[180px] z-[1]"
                type="text"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-5">
              <div className="relative z-[1]">Phone Number</div>
              <input
                className="[border:none] [outline:none] bg-white self-stretch h-[60px] relative rounded-8xs min-w-[180px] z-[1]"
                type="text"
              />
            </div>
          </div>
        </div>
        <textarea
          className="[border:none] bg-white h-[120px] w-auto [outline:none] self-stretch relative rounded-8xs z-[1]"
          rows={6}
          cols={32}
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-10 text-sm mq450:gap-5">
        <div className="flex flex-row items-start justify-start gap-[11px]">
          <input
            className="m-0 h-6 w-6 relative rounded border-gray-1100 border-[1px] border-solid box-border z-[2]"
            type="checkbox"
          />
          <div className="relative leading-[26.3px] z-[1]">
            I agree to the Terms, Privacy Policy.
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-6 pl-10 pr-[39px] bg-white w-[235px] rounded-341xl overflow-hidden flex flex-row items-start justify-start box-border z-[1] hover:bg-gainsboro-100">
          <div className="h-[17px] flex-1 relative text-5xl tracking-[-0.02em] leading-[17px] font-semibold font-sf-pro text-dodgerblue-300 text-center inline-block">
            Send Message
          </div>
        </button>
      </div>
    </div>
  );
};

export default SubscriptionAgreement;
