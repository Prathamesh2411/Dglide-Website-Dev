import { FunctionComponent } from "react";

export type AboutUsHeroType = {
  className?: string;
};

const AboutUsHero: FunctionComponent<AboutUsHeroType> = () => {
  return (
    <section
      className={`w-full flex flex-row items-start justify-end pt-0 px-20 pb-[120px] box-border max-w-full text-left text-45xl text-gray-100 font-sf-pro mq450:pb-[51px] mq900:pb-[78px] mq1350:pl-10 mq1350:pr-10 mq1350:box-border}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-10 max-w-full mq900:gap-5">
        <div className="flex flex-row items-start justify-start pt-0 pb-5 px-2.5 box-border max-w-full">
          <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[45px] capitalize font-semibold inline-block shrink-0 mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
            Redefining Simplicity in Digital Transformation
          </h1>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full text-11xl">
          <h2 className="m-0 relative text-inherit leading-[21px] font-semibold inline-block mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
            Empowering your business to glide as seamlessly as an AI prompt!
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-7xl">
          <div className="flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
            <h3 className="m-0 flex-1 relative text-inherit leading-[40px] font-normal inline-block max-w-full mq450:text-2xl mq450:leading-[32px]">
              <p className="m-0">
                With over 20 years of industry experience, Digital Glide was
                born out of a mission to solve real-world challenges for
                businesses in IT Service Management (ITSM), Customer
                Relationship Management (CRM), Field Service Management (FSM),
                and beyond. We understand the complexities and inefficiencies
                businesses face while navigating technology.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Our journey began with a vision to simplify workflows and
                empower individuals to create applications and streamline
                operations—without requiring technical expertise. Inspired by
                Fred Luddy’s groundbreaking vision in 2003, we carry forward the
                philosophy of accessibility and simplicity, building tools that
                modern businesses need to thrive in a fast-paced, tech-driven
                world.
              </p>
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-5 text-11xl mq900:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[35px]">
              <div className="self-stretch">
                <h2 className="m-0 relative text-inherit leading-[21px] font-semibold inline-block mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
                  It’s time to glide past the challenges—effortlessly!
                </h2>
              </div>
              <button className="cursor-pointer border-none py-6 px-10 bg-dodgerblue-300 w-[248px] rounded-full flex items-center justify-center hover:bg-dodgerblue-100">
                <div className="text-white text-xl font-medium">
                  Find your solution
                </div>
              </button>
            </div>
            <div className="h-[100px] w-[100px] rounded-full bg-dodgerblue-300 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
