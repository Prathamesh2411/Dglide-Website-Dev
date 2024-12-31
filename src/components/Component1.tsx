import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Component1Type = {
  className?: string;
  text?: string;

  /** Variant props */
  variant?: 3;

  /** Style props */
  component18Border?: CSSProperties["border"];
  component18Height?: CSSProperties["height"];
  textHeight?: CSSProperties["height"];
  textDisplay?: CSSProperties["display"];
  textAlignItems?: CSSProperties["alignItems"];
  textJustifyContent?: CSSProperties["justifyContent"];
};

const Component1: FunctionComponent<Component1Type> = ({
  className = "",
  variant = 2,
  text = "Let’s Start",
  component18Border,
  component18Height,
  textHeight,
  textDisplay,
  textAlignItems,
  textJustifyContent,
}) => {
  const component18Style: CSSProperties = useMemo(() => {
    return {
      border: component18Border,
      height: component18Height,
    };
  }, [component18Border, component18Height]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      height: textHeight,
      display: textDisplay,
      alignItems: textAlignItems,
      justifyContent: textJustifyContent,
    };
  }, [textHeight, textDisplay, textAlignItems, textJustifyContent]);

  return (
    <button
      className={`cursor-pointer [border:none] py-2.5 px-[30px] bg-white rounded-3xs flex flex-row items-center justify-start z-[6] ${className}`}
      data-variant={variant}
      style={component18Style}
    >
      <div
        className="h-5 relative text-sm leading-[20px] font-sf-pro text-gray-100 text-center flex items-center justify-center"
        style={textStyle}
      >
        {text}
      </div>
    </button>
  );
};

export default Component1;
