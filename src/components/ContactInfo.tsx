import { FunctionComponent } from "react";

export type ContactInfoType = {
  className?: string;
  text?: string;

  /** Variant props */
  variant?: 1;
};

const ContactInfo: FunctionComponent<ContactInfoType> = ({
  className = "",
  variant = 1,
  text = "talktous@dglide.com",
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start py-[3.5px] px-0 text-left text-lg text-dodgerblue-300 font-poppins}`}
      data-variant={variant}
    >
      <div className="relative [text-decoration:underline] leading-[18px]">
        {text}
      </div>
    </div>
  );
};

export default ContactInfo;
