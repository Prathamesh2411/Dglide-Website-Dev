import { FunctionComponent, useState } from "react";

export type CustomizeToolsSectionType = {
  className?: string;
};

const carouselData = [
  {
    title: "Customize your Tools",
    description:
      "Build the perfect non-coded solution for all your business needs.",
    mainImage: "/duplicate@2x.png",
    characterImage: "/character.svg",
    speechBubble: "/speechbubble.svg",
    duplicate: "/duplicate-1.svg",
    floor: "/floor.svg",
  },
  // Add more items as needed
];

const CustomizeToolsSection: FunctionComponent<CustomizeToolsSectionType> = ({
  className = "",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div
      className={`self-stretch bg-aliceblue flex flex-row items-start justify-between pt-[89px] pb-0 pl-[90px] pr-[110px] box-border max-w-full gap-[60px] z-[4] mt-[-5.3px] text-left text-45xl text-gray-100 font-sf-pro mq900:pl-[22px] mq900:pr-[27px] mq900:box-border mq1350:pl-[45px] mq1350:pr-[55px] mq1350:box-border mq1750:flex-wrap ${className}`}
    >
      <div className="h-[600px] w-[1920px] relative bg-aliceblue hidden max-w-full" />
      <div className="flex flex-row items-end justify-start gap-[128.7px] max-w-full mq900:gap-8 mq900:flex-wrap mq1350:gap-16 mq1350:min-w-full mq1750:flex-1">
        <div className="h-[431px] flex flex-col items-start justify-start mq900:flex-1">
          <img
            className="self-stretch h-[388.6px] relative max-w-full overflow-hidden shrink-0 object-contain z-[5] mq900:self-stretch mq900:w-auto"
            loading="lazy"
            alt=""
            src={carouselData[currentSlide].mainImage}
          />
        </div>
        <div className="flex-1 flex flex-col items-end justify-between min-w-[383px] max-w-full mq450:gap-[39px] mq900:gap-[79px] mq900:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq900:gap-[30px]">
            <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[72px] font-semibold font-[inherit] z-[5] mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
              {carouselData[currentSlide].title}
            </h1>
            <div className="w-[495px] relative text-11xl leading-[40px] font-medium max-w-full z-[5] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
              {carouselData[currentSlide].description}
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-4 py-0 px-[46px]">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-dodgerblue-300" : "bg-gray-300"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[503.9px] max-w-full mq900:min-w-full mq1750:flex-1">
        <div className="self-stretch flex flex-col items-end justify-start max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[30px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start pt-[6.4px] px-[27px] pb-[0.3px] box-border relative shrink-0 max-w-full">
              <div className="h-[479.7px] w-[404px] relative max-w-full">
                <img
                  className="absolute top-[0px] left-[0px] w-[166.7px] h-[268.6px] z-[7]"
                  alt=""
                  src={carouselData[currentSlide].duplicate}
                />
                <img
                  className="absolute top-[8.9px] left-[148.1px] w-[145.2px] h-[470.8px] z-[8]"
                  alt=""
                  src={carouselData[currentSlide].characterImage}
                />
                <img
                  className="absolute top-[13.5px] left-[285.1px] w-[99.5px] h-[96.6px] z-[9]"
                  loading="lazy"
                  alt=""
                  src={carouselData[currentSlide].speechBubble}
                />
              </div>
            </div>
          </div>
          <img
            className="w-[451.8px] relative max-h-full shrink-0 max-w-full z-[6]"
            loading="lazy"
            alt=""
            src={carouselData[currentSlide].floor}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomizeToolsSection;
