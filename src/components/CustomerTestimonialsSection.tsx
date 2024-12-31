import { FunctionComponent } from "react";

export type CustomerTestimonialsSectionType = {
  className?: string;
};

const CustomerTestimonialsSection: FunctionComponent<
  CustomerTestimonialsSectionType
> = () => {
  return (
    <section
      className={`self-stretch bg-whitesmoke flex flex-col items-end justify-start pt-[120px] px-[120px] pb-[90px] box-border gap-[89px] max-w-full z-[4] text-center text-45xl text-gray-100 font-sf-pro mq900:gap-[22px] mq900:pt-[51px] mq900:px-[30px] mq900:pb-[38px] mq900:box-border mq1275:gap-11 mq1275:pt-[78px] mq1275:px-[60px] mq1275:pb-[58px] mq1275:box-border}`}
    >
      <div className="w-[1920px] h-[1045px] relative bg-whitesmoke hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[31px] pl-px pr-0 box-border max-w-full text-left">
        <div className="w-[823px] flex flex-col items-start justify-start gap-[60px] max-w-full mq900:gap-[30px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-20 max-w-full mq450:gap-5 mq900:gap-10">
            <h1 className="m-0 h-[45px] relative text-inherit tracking-[-0.01em] leading-[72px] font-semibold font-[inherit] inline-block shrink-0 z-[5] mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
              Why Clients Love Digital Glide
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-9 pr-[35px] box-border max-w-full text-center text-11xl">
              <h2 className="m-0 h-[61px] flex-1 relative text-inherit leading-[40px] font-semibold font-[inherit] inline-block max-w-full z-[5] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
                Our solutions are designed to make life easier, regardless of
                your industry or technical expertise
              </h2>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[162px] box-border max-w-full text-center text-7xl mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[81px] mq900:pr-[81px] mq900:box-border">
            <h3 className="m-0 h-[58px] flex-1 relative text-inherit leading-[40px] font-normal font-[inherit] inline-block max-w-full z-[5] mq450:text-2xl mq450:leading-[32px]">
              Customer Support That’s Always There. Your success is our
              priority. That’s why we offer:
            </h3>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center gap-10 max-w-full text-7xl mq900:gap-5 mq1600:flex-wrap">
        <div className="flex-[0.7449] rounded-xl bg-white flex flex-row items-start justify-start pt-[60px] px-[103px] pb-[100px] box-border min-w-[400px] max-w-full z-[5] text-11xl mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1 mq900:pl-[51px] mq900:pr-[51px] mq900:box-border mq900:min-w-full">
          <div className="h-[301px] w-[533px] relative rounded-xl bg-white hidden max-w-full" />
          <div className="h-[141px] flex-1 relative leading-[40px] inline-block max-w-full z-[6] mq450:text-2xl mq450:leading-[32px]">
            <p className="m-0 font-semibold">24/7 Support</p>
            <p className="m-0 font-semibold">&nbsp;</p>
            <p className="m-0 text-7xl">
              Have questions? We’ve got answers, any time of day
            </p>
          </div>
        </div>
        <div className="flex-[0.7386] rounded-xl bg-white flex flex-row items-start justify-start pt-[60px] pb-[100px] pl-[105px] pr-[104px] box-border min-w-[400px] max-w-full z-[5] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1 mq900:pl-[52px] mq900:pr-[52px] mq900:box-border mq900:min-w-full">
          <div className="h-[301px] w-[534px] relative rounded-xl bg-white hidden max-w-full" />
          <div className="h-[141px] flex-1 relative leading-[40px] inline-block z-[6] mq450:text-2xl mq450:leading-[32px]">
            <p className="m-0 text-11xl font-semibold">Expert Guidance</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Our team ensures you get the most out of our platform
            </p>
          </div>
        </div>
        <div className="flex-1 rounded-xl bg-white flex flex-row items-start justify-start py-[60px] px-[47px] box-border min-w-[400px] max-w-full z-[5] mq900:pl-[23px] mq900:pr-[23px] mq900:box-border mq900:min-w-full">
          <div className="h-[301px] w-[533px] relative rounded-xl bg-white hidden max-w-full" />
          <div className="h-[181px] flex-1 relative leading-[40px] inline-block max-w-full z-[6] mq450:text-2xl mq450:leading-[32px]">
            <p className="m-0">
              <span className="text-11xl font-semibold font-sf-pro">{`Continuous Upgrades
`}</span>
              <span>{`
We evolve with your needs, adding features and capabilities to keep`}</span>
            </p>
            <p className="m-0">you ahead of the curve</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-end py-0 px-[639px] text-11xl mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[159px] mq900:pr-[159px] mq900:box-border mq1275:pl-[319px] mq1275:pr-[319px] mq1275:box-border">
        <h2 className="m-0 h-[21px] relative text-inherit leading-[21px] font-semibold font-[inherit] inline-block z-[5] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
          See the Difference for Yourself
        </h2>
      </div>
    </section>
  );
};

export default CustomerTestimonialsSection;
