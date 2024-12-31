import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FeatureOneType = {
  className?: string;
  intModernScalable?: string;
  modernScalable?: string;

  /** Style props */
  intModernScalableWidth?: CSSProperties["width"];
  modernScalableAlignSelf?: CSSProperties["alignSelf"];
};

const FeatureOne: FunctionComponent<FeatureOneType> = ({
  className = "",
  intModernScalable,
  intModernScalableWidth,
  modernScalable,
  modernScalableAlignSelf,
}) => {
  const intModernScalableStyle: CSSProperties = useMemo(() => {
    return {
      width: intModernScalableWidth,
    };
  }, [intModernScalableWidth]);

  const modernScalableStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: modernScalableAlignSelf,
    };
  }, [modernScalableAlignSelf]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end text-center text-11xl text-gray-100 font-sf-pro ${className}`}
    >
      <div className="flex flex-col items-end justify-start gap-[60px] mq450:gap-[30px]">
        <div className="flex flex-row items-start justify-end py-0 pl-[75px] pr-[74px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <img
            className="h-[100px] w-[100.8px] relative"
            loading="lazy"
            alt=""
            src={intModernScalable}
            style={intModernScalableStyle}
          />
        </div>
        <div
          className="self-stretch h-[21px] relative leading-[40px] font-semibold inline-block shrink-0 mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]"
          style={modernScalableStyle}
        >
          {modernScalable}
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
