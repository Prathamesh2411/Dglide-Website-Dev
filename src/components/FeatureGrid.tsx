import React from "react";

const FeaturesGrid = () => {
  const features = [
    {
      icon: "/form-builder.svg",
      title: "Form Builder",
      description: "Effortlessly capture data with custom, intuitive forms",
    },
    {
      icon: "/workflow-engine.svg",
      title: "Workflow Engine",
      description: "Automate complex processes with drag-and-drop tools",
    },
    {
      icon: "/integration-engine.svg",
      title: "Integration Engine",
      description: "Seamlessly connect your favourite platforms",
    },
    {
      icon: "/built-in-ai.svg",
      title: "Built-In AI",
      description: "Empower smarter decisions with predictive analytics",
    },
    {
      icon: "/sla--tat.svg",
      title: "SLA & TAT Management",
      description:
        "Track performance, deadlines, and outcomes to drive efficiency",
    },
    {
      icon: "/knowledge-base.svg",
      title: "Knowledge Base",
      description:
        "Centralize documentation empower users with self-service solutions and FAQs",
    },
  ];

  return (
    <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-5 max-w-full">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex-1 min-w-[300px] basis-[calc(33.33%-14px)] backdrop-blur-3xl bg-gray-600 rounded-xl flex flex-row items-start pt-16 px-14 pb-20 box-border gap-10"
        >
          <div className="flex-shrink-0">
            <img
              src={feature.icon}
              alt=""
              className="w-32 h-32 object-contain relative z-20"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1 min-w-[160px]">
            <h3 className="text-lg font-semibold m-0 leading-normal">
              {feature.title}:
            </h3>
            <p className="text-base leading-relaxed m-0">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
