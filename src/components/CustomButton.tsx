import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CustomButtonType = {
  className?: string;
  text?: string;

  /** Variant props */
  variant?: 3;

  /** Style props */
  CustomButton8Border?: CSSProperties["border"];
  CustomButton8Height?: CSSProperties["height"];
  textHeight?: CSSProperties["height"];
  textDisplay?: CSSProperties["display"];
  textAlignItems?: CSSProperties["alignItems"];
  textJustifyContent?: CSSProperties["justifyContent"];
};

const CustomButton: FunctionComponent<CustomButtonType> = ({
  className = "",
  variant = 2,
  text = "Let’s Start",
  CustomButton8Border,
  CustomButton8Height,
  textHeight,
  textDisplay,
  textAlignItems,
  textJustifyContent,
}) => {
  const CustomButton8Style: CSSProperties = useMemo(() => {
    return {
      border: CustomButton8Border,
      height: CustomButton8Height,
    };
  }, [CustomButton8Border, CustomButton8Height]);

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
      className={`cursor-pointer [border:none] py-2.5 px-[30px] bg-white rounded-3xs flex flex-row items-center justify-start z-[6]}`}
      data-variant={variant}
      style={CustomButton8Style}
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

export default CustomButton;
