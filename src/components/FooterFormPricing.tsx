import { FunctionComponent } from "react";

export type FooterFormType = {
  className?: string;
};

const FooterForm: FunctionComponent<FooterFormType> = () => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[150px] box-border max-w-full mq1275:pb-[97px] mq1275:box-border mq825:pb-[63px] mq825:box-border}`}
    >
      <div className="w-[1680px] flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[746.9px] w-[217.3px] absolute !m-[0] right-[322.5px] bottom-[-33px] z-[1]"
          loading="lazy"
          alt=""
          src="/character23.svg"
        />
        <div className="h-[13px] w-[13px] absolute !m-[0] bottom-[297px] left-[307px] rounded-10xs-5 bg-dodgerblue-300 opacity-[0.01] z-[1]" />
        <form className="m-0 flex-1 rounded-11xl border-lightskyblue border-[4px] border-dashed box-border flex flex-col items-start justify-start pt-[155px] px-[307px] pb-[136px] gap-20 max-w-full mq450:gap-5 mq450:pt-[66px] mq450:px-5 mq450:pb-[57px] mq450:box-border mq1275:pl-[153px] mq1275:pr-[153px] mq1275:box-border mq825:gap-10 mq825:pt-[101px] mq825:px-[76px] mq825:pb-[88px] mq825:box-border">
          <div className="w-[1680px] h-[800px] relative rounded-11xl border-lightskyblue border-[4px] border-dashed box-border hidden max-w-full" />
          <div className="flex flex-col items-start justify-start gap-[60px] max-w-full mq825:gap-[30px]">
            <h1 className="m-0 h-[45px] relative text-45xl tracking-[-0.01em] leading-[72px] font-semibold font-sf-pro text-left inline-block shrink-0 z-[1] mq450:text-19xl mq450:leading-[43px] mq825:text-32xl mq825:leading-[58px]">
              <span className="text-gray-100">{`Ready to take `}</span>
              <span className="text-dodgerblue-300">the next step?</span>
            </h1>
            <h2 className="m-0 h-[21px] relative text-11xl leading-[40px] font-medium font-sf-pro text-gray-100 text-center inline-block shrink-0 max-w-full z-[1] mq450:text-lg mq450:leading-[24px] mq825:text-5xl mq825:leading-[32px]">
              Let’s craft a pricing plan that works for you
            </h2>
            <div className="w-[520px] flex flex-col items-start justify-start gap-10 max-w-full mq825:gap-5">
              <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-5">
                <div className="flex-1 flex flex-col items-start justify-start gap-5 min-w-[162px]">
                  <div className="relative text-base font-poppins text-gray-100 text-left z-[1]">
                    Email:
                  </div>
                  <input
                    className="[border:none] [outline:none] bg-gray-300 self-stretch h-[60px] relative rounded-8xs min-w-[150px] z-[1]"
                    type="text"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-5 min-w-[162px]">
                  <div className="relative text-base font-poppins text-gray-100 text-left inline-block min-w-[124px] z-[1]">
                    Phone Number:
                  </div>
                  <input
                    className="[border:none] [outline:none] bg-gray-300 self-stretch h-[60px] relative rounded-8xs min-w-[150px] z-[1]"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[11px]">
                <input
                  className="m-0 h-6 w-6 relative rounded border-gray-400 border-[1px] border-solid box-border z-[2]"
                  type="checkbox"
                />
                <div className="relative text-sm leading-[26.3px] font-poppins text-gray-100 text-left z-[1]">
                  I agree to the Terms, Privacy Policy.
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-6 pl-[60px] pr-[59px] bg-dodgerblue-300 rounded-61xl flex flex-row items-start justify-start z-[1] hover:bg-dodgerblue-100">
            <div className="h-3.5 relative text-xl leading-[14px] font-medium font-sf-pro text-white text-left inline-block min-w-[68px] mq450:text-base mq450:leading-[32px]">
              Submit
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default FooterForm;
