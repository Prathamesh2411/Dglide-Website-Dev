import { FormProvider, useForm } from "react-hook-form";
import { Card, CardContent } from "../ui/card";
import { Form, FormControl, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Newsletter from "../Newsletter";
import SubscriptionAgreement from "../SubscriptionAgreement";

export function ContactSection() {
  const methods = useForm();

  return (
    <section className="self-stretch bg-cornflowerblue flex flex-row items-start justify-start pt-[140px] px-[110px] pb-0 box-border relative gap-[100px] max-w-full z-[3] text-left text-61xl text-white font-sf-pro mq450:gap-[25px] mq900:gap-[50px] mq900:pl-[27px] mq900:pt-[59px] mq900:pr-[27px] mq900:box-border mq1350:pl-[55px] mq1350:pt-[91px] mq1350:pr-[55px] mq1350:box-border mq1750:flex-wrap mq1750:justify-center">
      <div className="h-[1000px] w-[1920px] relative bg-cornflowerblue hidden max-w-full z-[0]" />
      <div className="h-[13px] w-[13px] absolute !m-[0] right-[817px] bottom-[355px] rounded-10xs-5 bg-dodgerblue-300 opacity-[0.01] z-[1]" />
      <div className="w-[880px] flex flex-col items-start justify-start gap-[60px] max-w-full mq900:gap-[30px] mq1350:min-w-full mq1750:flex-1">
        <div className="flex flex-row items-start justify-start py-0 pl-2.5 pr-[9px] box-border max-w-full">
          <h1 className="m-0 h-14 relative text-inherit tracking-[-0.02em] leading-[56px] font-semibold font-[inherit] inline-block z-[1] mq450:text-5xl mq450:leading-[32px] mq900:text-21xl mq900:leading-[48px]">
            Contact Us Today
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[7px] pl-2.5 pr-0 text-11xl font-poppins">
          <h2 className="m-0 relative text-inherit leading-[40px] font-normal font-[inherit] z-[1] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
            Share The details of your project – like scope, timeframes, or
            business challenges you’d like to solve.
          </h2>
        </div>
        <div className="flex flex-col items-start justify-start gap-[43px] max-w-full mq900:gap-[21px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-[17px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-10 max-w-full mq900:gap-5 mq900:flex-wrap">
              <Newsletter
                newsletterFlex="1"
                newsletterTitle="/frame.svg"
                emailUs="Email Us"
                emailUsMinWidth="93px"
              />
              <Newsletter
                newsletterFlex="0.8759"
                newsletterTitle="/frame-1.svg"
                emailUs="Call Us"
                emailUsMinWidth="76px"
              />
            </div>
          </div>
          <img
            className="self-stretch h-[462px] relative max-w-full overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/contact-us-today.svg"
          />
        </div>
      </div>
      <SubscriptionAgreement />
    </section>
  );
}
