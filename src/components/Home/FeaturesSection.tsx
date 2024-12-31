import { FunctionComponent } from "react";

export type FeaturesSectionType = {
  className?: string;
};

const featureCards = [
  {
    id: 1,
    title: "Form Builder",
    description: "Effortlessly capture data with custom, intuitive forms",
    icon: "/form-builder.svg",
  },
  {
    id: 2,
    title: "Workflow Engine",
    description: "Automate complex processes with drag-and-drop tools.",
    icon: "/vector.svg",
    secondaryIcon: "/workflow-engine.svg",
  },
  {
    id: 3,
    title: "Integration Engine",
    description: "Seamlessly connect your favourite platforms.",
    icon: "/integration-engine.svg",
  },
  {
    id: 4,
    title: "Built-In AI",
    description: "Empower smarter decisions with predictive analytics",
    icon: "/built-in-ai.svg",
  },
  {
    id: 5,
    title: "SLA & TAT Management",
    description:
      "Track performance, deadlines, and outcomes to drive efficiency",
    icon: "/sla--tat.svg",
  },
  {
    id: 6,
    title: "Knowledge Base",
    description:
      "Centralize documentation empower users with self-service solutions and FAQs",
    icon: "/knowledge-base.svg",
  },
];

const FeaturesSection: FunctionComponent<FeaturesSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[140px] box-border max-w-full text-left text-5xl text-white font-sf-pro mq900:pb-[59px] mq900:box-border mq1350:pb-[91px] mq1350:box-border ${className}`}
    >
      <div className="flex-1 [background:linear-gradient(247.46deg,_#5d9eff,_#3780ef)] flex flex-col items-start justify-start pt-[140px] px-[120px] pb-[110px] box-border gap-[137px] max-w-full mq900:gap-[34px] mq900:pt-[59px] mq900:px-[30px] mq900:pb-[46px] mq900:box-border mq1350:gap-[68px] mq1350:pt-[91px] mq1350:px-[60px] mq1350:pb-[71px] mq1350:box-border">
        <div className="w-[1920px] h-[1154px] relative [background:linear-gradient(247.46deg,_#5d9eff,_#3780ef)] hidden max-w-full" />

        {/* Header Section */}
        <div className="self-stretch flex flex-row items-start justify-center max-w-full">
          <div className="flex flex-col items-center justify-start gap-6 max-w-full">
            <h1 className="m-0 text-2xl tracking-[-0.02em] leading-[1.2] font-semibold [text-shadow:0px_4px_15px_rgba(255,_255,_255,_0.15)] z-[1] mq450:text-xl">
              The Future is Here
            </h1>
            <div className="text-base leading-[1.5] font-medium text-gray-500 text-center max-w-xl z-[1] mq450:text-sm">
              User-friendly and innovative—like plug-and-play for businesses
            </div>
          </div>
        </div>

        {/* Grid Container */}
        <div className="self-stretch grid grid-cols-3 gap-8 max-w-full text-lg mq1350:grid-cols-2 mq900:grid-cols-1 mq900:gap-5">
          {featureCards.map((card) => (
            <div
              key={card.id}
              className="[backdrop-filter:blur(200px)] rounded-xl bg-gray-600 flex flex-row items-start justify-start p-8 gap-6 max-w-full z-[1] hover:bg-gray-700 transition-colors mq900:flex-wrap mq900:justify-center"
            >
              <div className="flex flex-col items-start justify-start mq900:flex-1">
                {card.secondaryIcon ? (
                  <div className="relative">
                    <img
                      className="w-16 h-16 relative z-[2]"
                      alt=""
                      src={card.icon}
                    />
                    <img
                      className="w-20 h-20 absolute -right-4 -bottom-4 z-[3]"
                      alt=""
                      src={card.secondaryIcon}
                    />
                  </div>
                ) : (
                  <img
                    className="w-16 h-16 relative z-[2] object-contain"
                    alt=""
                    src={card.icon}
                  />
                )}
              </div>
              <div className="flex-1 flex flex-col gap-2 min-w-[160px] z-[2]">
                <p className="m-0 text-xl font-semibold leading-tight">
                  {card.title}
                </p>
                <p className="m-0 text-base leading-relaxed text-gray-200">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
