import Features from "../Features";
import GroupComponent from "../GroupComponent";

export function BenefitsSection() {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[120px] box-border max-w-full text-left text-45xl text-gray-100 font-sf-pro mq900:pb-[33px] mq900:box-border mq1350:pb-[51px] mq1350:box-border">
      <div className="flex flex-col items-start justify-start gap-[140px] max-w-full mq450:gap-[17px] mq900:gap-[35px] mq1350:gap-[70px]">
        <div className="w-[1587px] flex flex-row items-start justify-center pt-0 px-5 pb-[17px] box-border max-w-full">
          <div className="flex flex-col items-start justify-start gap-[60px] max-w-full mq1350:gap-[30px]">
            <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[1.6] font-semibold font-[inherit] mq450:text-19xl mq450:leading-[1.6] mq900:text-32xl mq900:leading-[1.6]">
              Intuitive. Affordable. Future-Proof.
            </h1>
            <div className="flex flex-row items-start justify-start py-0 pl-[275px] pr-[180px] box-border max-w-full text-11xl mq450:pl-[68px] mq450:pr-[45px] mq450:box-border mq1350:pl-[137px] mq1350:pr-[90px] mq1350:box-border">
              <div className="relative leading-[1.5] inline-block max-w-full mq450:text-lg mq900:text-5xl">
                <span>{`Glide into the future with `}</span>
                <span className="text-dodgerblue-200">Digital Glide!</span>
              </div>
            </div>
          </div>
        </div>
        <Features />
        <GroupComponent />
      </div>
    </section>
  );
}
