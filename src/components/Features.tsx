import { FunctionComponent } from "react";
import FeatureOne from "./FeatureOne";

export type FeaturesType = {
  className?: string;
};

const Features: FunctionComponent<FeaturesType> = () => {
  return (
    <div
      className={`w-[1645px] flex flex-row items-start justify-start py-0 px-[33px] box-border max-w-full text-center text-11xl text-gray-100 font-sf-pro}`}
    >
      <div className="flex-1 flex flex-row items-end justify-center flex-wrap content-end gap-[15px] max-w-full">
        <div className="w-[342px] flex flex-col items-start justify-start gap-[140px] max-w-full mq450:gap-[70px]">
          <FeatureOne
            intModernScalable="/int--modern--scalable.svg"
            modernScalable={`Modern & Scalable`}
          />
          <div className="flex flex-col items-start justify-start gap-[60px]">
            <div className="flex flex-row items-start justify-start py-0 pl-[47px] pr-12">
              <img
                className="h-[100px] w-[100px] relative object-cover"
                alt=""
                src="/int--lightning-fast-deployment@2x.png"
              />
            </div>
            <div className="self-stretch h-[61px] relative leading-[40px] font-semibold inline-block shrink-0 mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
              <p className="m-0">Lightning-Fast</p>
              <p className="m-0">Deployment</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-end justify-start py-0 pl-0 pr-[68px] box-border gap-6 min-w-[373px] max-w-full mq900:flex-wrap mq900:pr-[34px] mq900:box-border mq900:min-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[140px] min-w-[241px] max-w-full mq450:gap-[70px]">
            <FeatureOne
              intModernScalable="/int--tailored-for-you.svg"
              intModernScalableWidth="104.9px"
              modernScalable="Tailored for You"
              modernScalableAlignSelf="unset"
            />
            <div className="w-[185.2px] flex flex-col items-end justify-start gap-[60px]">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/int--seamless-integrations.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[13px] pr-3">
                <div className="h-[61px] flex-1 relative leading-[40px] font-semibold inline-block mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
                  <p className="m-0">Seamless</p>
                  <p className="m-0">Integrations</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[221px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-end justify-start gap-[60px]">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-3 pr-[11px]">
                <img
                  className="h-[100px] flex-1 relative max-w-full overflow-hidden"
                  alt=""
                  src="/int--security.svg"
                />
              </div>
              <div className="self-stretch h-[21px] relative leading-[40px] font-semibold inline-block shrink-0 mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
                Security
              </div>
            </div>
          </div>
        </div>
        <div className="w-[339px] flex flex-col items-start justify-start py-0 pl-0 pr-[45px] box-border gap-[156px] max-w-full mq450:gap-[78px] mq450:pr-5 mq450:box-border">
          <div className="flex flex-col items-end justify-start gap-10">
            <img
              className="w-[141.2px] h-[140px] relative"
              loading="lazy"
              alt=""
              src="/int--ai-native.svg"
            />
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-[7px]">
              <div className="h-[21px] flex-1 relative leading-[21px] font-semibold inline-block mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
                AI-Native
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end">
            <div className="flex flex-col items-end justify-start gap-[72px]">
              <div className="flex flex-row items-start justify-end py-0 pl-[25px] pr-6">
                <img
                  className="h-[72px] w-[116.2px] relative"
                  alt=""
                  src="/int--no-code-applications.svg"
                />
              </div>
              <div className="self-stretch h-[61px] relative leading-[40px] font-semibold inline-block shrink-0 mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
                <p className="m-0">No Code</p>
                <p className="m-0">Applications</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[279px] flex flex-col items-start justify-start gap-[80.8px] mq450:gap-10">
          <div className="flex flex-row items-start justify-start py-0 px-[35px]">
            <img
              className="h-[56.2px] w-[105.4px] relative"
              alt=""
              src="/int--cloud-native.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[69.2px]">
            <div className="h-[21px] flex-1 relative leading-[21px] font-semibold inline-block mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
              Cloud-Native
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end">
            <div className="flex flex-col items-end justify-start gap-[70px]">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[31px] pr-6">
                <img
                  className="h-20 flex-1 relative max-w-full overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="/int--customisable-intuitive-ui.svg"
                />
              </div>
              <div className="self-stretch h-[61px] relative leading-[40px] font-semibold inline-block shrink-0 mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
                <p className="m-0">Customisable</p>
                <p className="m-0">Intuitive UI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
