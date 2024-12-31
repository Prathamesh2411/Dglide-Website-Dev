import { FunctionComponent } from "react";

export type Component2Type = {
  className?: string;
  text?: string;

  /** Variant props */
  variant?: 1;
};

const Component2: FunctionComponent<Component2Type> = ({
  className = "",
  variant = 1,
  text = "talktous@dglide.com",
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start py-[3.5px] px-0 text-left text-lg text-dodgerblue-300 font-poppins ${className}`}
      data-variant={variant}
    >
      <div className="relative [text-decoration:underline] leading-[18px]">
        {text}
      </div>
    </div>
  );
};

export default Component2;
