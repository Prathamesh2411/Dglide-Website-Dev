import { FunctionComponent } from "react";

export type SolutionsSectionType = {
  className?: string;
};

const solutionsData = [
  {
    id: 1,
    title: "Customer Relationship Management (CRM):",
    description:
      "Boost customer engagement and build relationships with a CRM designed to accelerate your sales and marketing",
    image: "/crm.svg",
  },
  {
    id: 2,
    title: "Ticketing System:",
    description:
      "Resolve issues faster with a centralized system for managing tickets, IoT alerts, and assets.",
    image: "/ts.svg",
  },
  {
    id: 3,
    title: "Custom Management Suite:",
    description:
      "Achieve unmatched efficiency with a fully customizable suite built to align with your unique goals.",
    image: "/cms.svg",
  },
  {
    id: 4,
    title: "Ecological Conservation Management:",
    description:
      "Turn environmental data into actionable strategies with cutting-edge visualization solutions.",
    image: "/ecmv.svg",
  },
  {
    id: 5,
    title: "Field Service Management (FSM):",
    description:
      "Increase efficiency on ground. Equip your field agents with mobile-ready tools for efficient task handling.",
    image: "/fsm.svg",
  },
  {
    id: 6,
    title: "IT Service Management (ITSM):",
    description:
      "Optimize your IT processes with a seamless platform designed to deliver faster, smarter, and more reliable services",
    image: "/itsm.svg",
  },
];

const SolutionsSection: FunctionComponent<SolutionsSectionType> = () => {
  return (
    <section
      className={`self-stretch [background:linear-gradient(247.46deg,_#5d9eff,_#3780ef)] flex flex-col items-start justify-start pt-24 pb-32 px-16 box-border gap-16 max-w-full z-[2] text-left text-45xl text-white font-sf-pro mq900:gap-8 mq900:pt-12 mq900:pb-16 mq900:px-8 mq1350:gap-12 mq1350:pt-16 mq1350:pb-20 mq1350:px-12}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center max-w-full">
        <div className="w-[1024px] flex flex-col items-start justify-start gap-12 max-w-full mq1350:gap-8">
          <h1 className="m-0 h-[45px] relative text-inherit tracking-[-0.01em] leading-[72px] font-semibold font-[inherit] inline-block shrink-0 z-[3] mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
            Tailored Solutions for Every Industry
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-16 text-center text-2xl text-gray-500 mq900:px-8 mq1350:px-12">
            <div className="h-[21px] flex-1 relative leading-[21px] font-medium inline-block z-[3] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
              Premium tools that custom-fit your business needs
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch flex flex-col items-start justify-start gap-24 max-w-full text-center text-2xl text-gray-100 mq450:gap-8 mq900:gap-12 mq1350:gap-16">
        <ul className="self-stretch grid grid-cols-3 gap-6 max-w-full mq1350:grid-cols-2 mq900:grid-cols-1">
          {solutionsData.map((solution) => (
            <li
              key={solution.id}
              className="rounded-xl bg-white flex flex-col items-start justify-start p-12 gap-16 max-w-full z-[3] mq450:gap-8 mq900:gap-12 mq900:p-8"
            >
              <div className="self-stretch flex items-center justify-center h-64">
                <img
                  className="max-w-full max-h-full object-contain z-[4]"
                  loading="lazy"
                  alt={solution.title}
                  src={solution.image}
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-8 mq450:gap-6">
                <div className="self-stretch leading-[1.5] z-[4] mq450:text-xl">
                  <p className="m-0 font-semibold">{solution.title}</p>
                  <p className="m-0 text-7xl">{solution.description}</p>
                </div>
                <div className="self-stretch flex justify-center text-lg text-dodgerblue-300">
                  <div className="h-[17px] flex-1 relative tracking-[-0.02em] leading-[17px] font-semibold inline-block z-[4] mq450:text-lgi mq450:leading-[64px]">
                    Contact Us for a Demo
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[319px] pr-[318px] box-border max-w-full text-gray-500 mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[79px] mq900:pr-[79px] mq900:box-border mq1350:pl-[159px] mq1350:pr-[159px] mq1350:box-border">
          <div className="h-[61px] flex-1 relative leading-[40px] font-medium inline-block max-w-full z-[3] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
            With Digital Glide, you don't need separate software for your
            business needs. You can customize as needed and step on the pedal
            for success with a few clicks!
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
