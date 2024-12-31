import { FunctionComponent } from "react";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1886px] flex flex-row items-start justify-end pt-0 px-20 pb-[120px] box-border max-w-full text-left text-45xl text-gray-100 font-sf-pro mq450:pb-[51px] mq450:box-border mq900:pb-[78px] mq900:box-border mq1350:pl-10 mq1350:pr-10 mq1350:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-10 max-w-full mq900:gap-5">
        <div className="flex flex-row items-start justify-start pt-0 pb-5 pl-2.5 pr-[9px] box-border max-w-full">
          <h1 className="m-0 h-[45px] relative text-inherit tracking-[-0.01em] leading-[45px] capitalize font-semibold font-[inherit] inline-block mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
            Redefining Simplicity in Digital Transformation
          </h1>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pl-2.5 pr-[9px] box-border max-w-full text-11xl">
          <h2 className="m-0 h-[21px] relative text-inherit leading-[21px] font-semibold font-[inherit] inline-block mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
            Empowering your business to glide as seamlessly as an AI prompt!
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-1 max-w-full text-7xl">
          <div className="w-[1696px] flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
            <h3 className="m-0 h-[338px] flex-1 relative text-inherit leading-[40px] font-normal font-[inherit] inline-block max-w-full mq450:text-2xl mq450:leading-[32px]">
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
                operations—without requiring technical expertise. Any business
                is as successful as the workflows it attains. Inspired by Fred
                Luddy’s groundbreaking vision in 2003, we carry forward the
                philosophy of accessibility and simplicity, building tools that
                modern businesses need to thrive in a fast-paced, tech-driven
                world. From AI powered task management, CRM for freelancers,
                enterprise workflow tools, intelligent sales management,
                solutions for NGOs, retail management and whatnot… Digital Glide
                can help you manage it all.
              </p>
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-11xl mq900:flex-wrap">
            <div className="w-[661px] flex flex-col items-start justify-start pt-[76px] px-0 pb-0 box-border max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[70px] mq450:gap-[17px] mq900:gap-[35px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-0">
                  <h2 className="m-0 h-[21px] relative text-inherit leading-[21px] font-semibold font-[inherit] inline-block mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
                    It’s time to glide past the challenges—effortlessly!
                  </h2>
                </div>
                <button className="cursor-pointer [border:none] py-6 pl-10 pr-[39px] bg-dodgerblue-300 w-[248px] rounded-61xl flex flex-row items-start justify-start box-border hover:bg-dodgerblue-100">
                  <div className="h-3.5 flex-1 relative text-xl leading-[14px] font-medium font-sf-pro text-white text-left inline-block">
                    Find your solution
                  </div>
                </button>
              </div>
            </div>
            <div className="h-[100px] w-[100px] relative rounded-341xl bg-dodgerblue-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
