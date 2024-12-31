import { FunctionComponent } from "react";

export type PromiseSectionType = {
  className?: string;
};

const PromiseSection: FunctionComponent<PromiseSectionType> = () => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[70px] box-border max-w-full text-left text-45xl text-gray-100 font-sf-pro mq450:pb-[29px] mq450:box-border mq825:pb-[45px] mq825:box-border}`}
    >
      <div className="flex-1 bg-whitesmoke flex flex-col items-end justify-start p-[120px] box-border gap-[119px] max-w-full mq450:pt-[51px] mq450:pb-[51px] mq450:box-border mq1275:gap-[59px] mq1275:pl-[60px] mq1275:pr-[60px] mq1275:box-border mq825:gap-[30px] mq825:py-[78px] mq825:px-[30px] mq825:box-border">
        <div className="w-[1920px] h-[786px] relative bg-whitesmoke hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-px pr-0 box-border max-w-full">
          <div className="flex flex-col items-start justify-start gap-[60px] max-w-full mq450:gap-[30px]">
            <h1 className="m-0 h-[45px] relative text-inherit tracking-[-0.01em] leading-[72px] font-semibold font-[inherit] inline-block shrink-0 z-[1] mq450:text-19xl mq450:leading-[43px] mq825:text-32xl mq825:leading-[58px]">
              Our Pomise of
            </h1>
            <div className="flex flex-row items-start justify-start py-0 pl-5 pr-[19px] text-11xl">
              <h2 className="m-0 h-[21px] relative text-inherit leading-[21px] font-semibold font-[inherit] inline-block z-[1] mq450:text-lg mq450:leading-[24px] mq825:text-5xl mq825:leading-[32px]">
                Digital Glide Solutions Are:
              </h2>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-10 max-w-full text-center text-7xl mq825:gap-5 mq1575:flex-wrap">
          <div className="flex-[0.8117] rounded-xl bg-white flex flex-row items-start justify-start py-20 px-[135px] box-border min-w-[325px] max-w-full z-[1] text-11xl mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1 mq825:pl-[67px] mq825:pr-[67px] mq825:box-border">
            <div className="h-[301px] w-[533px] relative rounded-xl bg-white hidden max-w-full" />
            <div className="h-[141px] flex-1 relative leading-[40px] inline-block z-[2] mq450:text-2xl mq450:leading-[32px]">
              <p className="m-0 font-semibold">Tailored Solutions</p>
              <p className="m-0 font-semibold">&nbsp;</p>
              <p className="m-0 text-7xl">
                Pricing customized to fit your business goals
              </p>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-white flex flex-row items-start justify-start py-20 pl-[105px] pr-[104px] box-border min-w-[325px] max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[52px] mq825:pr-[52px] mq825:box-border">
            <div className="h-[301px] w-[534px] relative rounded-xl bg-white hidden max-w-full" />
            <div className="h-[141px] flex-1 relative leading-[40px] inline-block max-w-full z-[2] mq450:text-2xl mq450:leading-[32px]">
              <p className="m-0 text-11xl font-semibold">Scalability</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Plans that evolve as your team and operations grow
              </p>
            </div>
          </div>
          <div className="flex-[0.8488] rounded-xl bg-white flex flex-row items-start justify-start py-20 px-[129px] box-border min-w-[325px] max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1 mq825:pl-16 mq825:pr-16 mq825:box-border">
            <div className="h-[301px] w-[533px] relative rounded-xl bg-white hidden max-w-full" />
            <div className="h-[141px] flex-1 relative leading-[40px] inline-block z-[2] mq450:text-2xl mq450:leading-[32px]">
              <p className="m-0 text-11xl font-semibold">Transparency</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">Clear, no-surprise pricing for every client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
