import { FunctionComponent } from "react";

export type OurJobSectionType = {
  className?: string;
};

const OurJobSection: FunctionComponent<OurJobSectionType> = () => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[120px] box-border max-w-full text-left text-45xl text-gray-100 font-sf-pro mq900:pb-[78px] mq900:box-border}`}
    >
      <div className="w-full flex flex-col justify-start gap-[100px] max-w-full mq450:gap-[25px] mq900:gap-[50px]">
        <div className="flex flex-row items-center justify-center py-0 px-5 text-center box-border max-w-full">
          <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[45px] font-semibold inline-block mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px] align-middle">
            Our Job is to
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-10 max-w-full text-center text-7xl flex-wrap">
          {/* Card 1 */}
          <div className="flex-1 rounded-xl bg-aliceblue flex flex-col items-start justify-center py-[60px] px-[70px] box-border min-w-[300px] max-w-[400px] text-left mq450:py-[39px] mq450:px-[30px] mq900:min-w-full">
            <div className="relative leading-[40px] max-w-full">
              <p className="m-0 text-11xl font-semibold">Simplify</p>
              <p className="m-0 mt-4">
                Allowing non-technical users to create workflows and
                applications independently, without coding knowledge.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 rounded-xl bg-aliceblue flex flex-col items-start justify-center py-[60px] px-[70px] box-border min-w-[300px] max-w-[400px] text-left mq450:py-[39px] mq450:px-[30px] mq900:min-w-full">
            <div className="relative leading-[40px] max-w-full">
              <p className="m-0 text-11xl font-semibold">Empower Every User</p>
              <p className="m-0 mt-4">
                We make application development simple and intuitive. So smooth,
                you can build as you please!
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-1 rounded-xl bg-aliceblue flex flex-col items-start justify-center py-[60px] px-[70px] box-border min-w-[300px] max-w-[400px] text-left mq450:py-[39px] mq450:px-[30px] mq900:min-w-full">
            <div className="relative leading-[40px] max-w-full">
              <p className="m-0 text-11xl font-semibold">Ease AI Integration</p>
              <p className="m-0 mt-4">
                Providing modern, cost-effective solutions with AI integration
                to enhance flexibility and ease of use for today’s businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJobSection;
