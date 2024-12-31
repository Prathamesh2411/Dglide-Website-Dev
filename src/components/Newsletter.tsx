import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type NewsletterType = {
  className?: string;
  newsletterTitle?: string;
  emailUs?: string;

  /** Style props */
  newsletterFlex?: CSSProperties["flex"];
  emailUsMinWidth?: CSSProperties["minWidth"];
};

const Newsletter: FunctionComponent<NewsletterType> = ({
  className = "",
  newsletterFlex,
  newsletterTitle,
  emailUs,
  emailUsMinWidth,
}) => {
  const newsletterStyle: CSSProperties = useMemo(() => {
    return {
      flex: newsletterFlex,
    };
  }, [newsletterFlex]);

  const emailUsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: emailUsMinWidth,
    };
  }, [emailUsMinWidth]);

  return (
    <button
      className={`cursor-pointer [border:none] py-[30px] px-[51px] bg-lavender flex-1 rounded-3xs flex flex-row items-start justify-start box-border gap-5 min-w-[161px] z-[1] ${className}`}
      style={newsletterStyle}
    >
      <img
        className="h-8 w-8 relative overflow-hidden shrink-0"
        alt=""
        src={newsletterTitle}
      />
      <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
        <div
          className="h-[17px] relative text-5xl leading-[40px] font-medium font-sf-pro text-white text-left inline-block shrink-0 min-w-[93px] mq450:text-lgi mq450:leading-[32px]"
          style={emailUsStyle}
        >
          {emailUs}
        </div>
      </div>
    </button>
  );
};

export default Newsletter;
