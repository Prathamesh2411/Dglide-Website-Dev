import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ExpertsGridType = {
  className?: string;
  teamGoalspana?: string;
  provenExperts?: string;
  overTwoDecadesOfHandsOnExperi?: string;

  /** Style props */
  expertsGridAlignItems?: CSSProperties["alignItems"];
  expertsRowJustifyContent?: CSSProperties["justifyContent"];
};

const ExpertsGrid: FunctionComponent<ExpertsGridType> = ({
  className = "",
  expertsGridAlignItems,
  expertsRowJustifyContent,
  teamGoalspana,
  provenExperts,
  overTwoDecadesOfHandsOnExperi,
}) => {
  const expertsGridStyle: CSSProperties = useMemo(() => {
    return {
      alignItems: expertsGridAlignItems,
    };
  }, [expertsGridAlignItems]);

  const expertsRowStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: expertsRowJustifyContent,
    };
  }, [expertsRowJustifyContent]);

  return (
    <div
      className={`flex-1 rounded-xl bg-white flex flex-col items-start justify-start pt-20 px-[60px] pb-[100px] box-border gap-20 min-w-[410px] max-w-full z-[1] text-center text-7xl text-gray-100 font-sf-pro mq450:gap-5 mq900:gap-10 mq900:pt-[52px] mq900:px-[30px] mq900:pb-[65px] mq900:box-border mq900:min-w-full ${className}`}
      style={expertsGridStyle}
    >
      <div className="w-[547px] h-[741px] relative rounded-xl bg-white hidden max-w-full" />
      <div
        className="self-stretch flex flex-row items-start justify-start py-0 pl-[71px] pr-[72px] mq450:pl-5 mq450:pr-5 mq450:box-border"
        style={expertsRowStyle}
      >
        <img
          className="h-[300px] flex-1 relative max-w-full overflow-hidden z-[2]"
          loading="lazy"
          alt=""
          src={teamGoalspana}
        />
      </div>
      <div className="self-stretch h-[181px] relative leading-[40px] inline-block z-[2] mq450:text-2xl mq450:leading-[32px]">
        <p className="m-0 text-11xl font-semibold">{provenExperts}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">{overTwoDecadesOfHandsOnExperi}</p>
      </div>
    </div>
  );
};

export default ExpertsGrid;
