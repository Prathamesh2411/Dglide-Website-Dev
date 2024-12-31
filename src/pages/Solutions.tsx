import { FunctionComponent } from "react";
import SolutionPageHeader from "../components/Home/SolutionPageHeader";
import FeatureContent from "../components/FeatureContent";
import FrameComponent from "../components/FrameComponent";
import Newsletter from "../components/Newsletter";
import EmailField from "../components/EmailField";
import Component2 from "../components/Component2";
import Footer from "@/components/Home/Footer";
import { ContactSection } from "@/components/Home/ContactSection";
import NavBar from "@/components/Home/NavBar";

const Solutions: FunctionComponent = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="absolute top-[0px] left-[0px] w-full flex flex-col items-end justify-start max-w-full">
        <NavBar />
        <SolutionPageHeader />
        <section className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-45xl text-gray-100 font-sf-pro">
          <FeatureContent />
          <div className="self-stretch bg-white flex flex-col items-start justify-start relative max-w-full z-[1]">
            <div className="self-stretch h-[4064px] relative bg-white hidden z-[0]" />
            <img
              className="w-[12rem] h-[35rem] absolute !m-[0] top-[1592.1px] right-[18rem] z-[2]"
              loading="lazy"
              alt=""
              src="/character21.svg"
            />
            <div className="self-stretch bg-whitesmoke flex flex-col items-start justify-start p-[7.5rem] box-border gap-[7rem] max-w-full z-[1] mq900:gap-[2rem] mq900:pl-[2rem] mq900:pr-[2rem] mq900:box-border mq1350:gap-[3rem] mq1350:pl-[4rem] mq1350:pr-[4rem] mq1350:box-border">
              <div className="w-[120rem] h-[49rem] relative bg-whitesmoke hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-center max-w-full">
                <div className="flex flex-col items-start justify-start gap-[3.75rem] max-w-full mq900:gap-[2rem]">
                  <h1 className="m-0 h-[2.8rem] relative text-inherit tracking-[-0.01em] leading-[4.5rem] font-semibold font-[inherit] inline-block shrink-0 z-[1] mq450:text-[1.8rem] mq450:leading-[2.5rem] mq900:text-[2rem] mq900:leading-[3.5rem]">
                    Choose from a library of tools and build your own!!!
                  </h1>
                  <div className="flex flex-row items-start justify-start py-0 px-[32rem] text-[1.5rem] mq450:px-5 mq450:box-border mq900:px-[8rem] mq900:box-border mq1350:px-[16rem] mq1350:box-border">
                    <h2 className="m-0 h-[1.3rem] relative text-inherit leading-[1.3rem] font-semibold font-[inherit] inline-block z-[1] mq450:text-[1rem] mq450:leading-[1.5rem] mq900:text-[1.5rem] mq900:leading-[2rem]">
                      Digital Glide Solutions Are:
                    </h2>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-[2rem] max-w-full text-center text-[1.2rem] mq900:gap-[1rem] mq1750:flex-wrap">
                <div className="flex-1 rounded-xl bg-white flex flex-col items-start justify-start py-[1.25rem] px-[4rem] box-border min-w-[16rem] max-w-full z-[1] text-[1.5rem]">
                  <div className="h-[18.8rem] flex-1 relative leading-[2.5rem] inline-block z-[2]">
                    <p className="m-0 font-semibold">Built for Everyone</p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0 text-[1rem]">
                      Non-tech users, welcome aboard!
                    </p>
                  </div>
                </div>
                <div className="flex-[0.8561] rounded-xl bg-white flex flex-col items-start justify-start py-[1.25rem] px-[5.125rem] box-border min-w-[16rem] max-w-full z-[1]">
                  <div className="h-[18.8rem] flex-1 relative leading-[2.5rem] inline-block z-[2]">
                    <p className="m-0 text-[1.5rem] font-semibold">
                      Powered by AI
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">The future is here, and it’s smart</p>
                  </div>
                </div>
                <div className="flex-[0.8485] rounded-xl bg-white flex flex-col items-start justify-start py-[1.25rem] px-[5.18rem] box-border min-w-[16rem] max-w-full z-[1]">
                  <div className="h-[18.8rem] flex-1 relative leading-[2.5rem] inline-block z-[2]">
                    <p className="m-0 text-[1.5rem] font-semibold">Scalable</p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">Big or small, we’ve got your back</p>
                  </div>
                </div>
                <div className="flex-[0.947] rounded-xl bg-white flex flex-col items-start justify-start py-[1.25rem] px-[4.375rem] box-border min-w-[16rem] max-w-full z-[1]">
                  <div className="h-[18.8rem] flex-1 relative leading-[2.5rem] inline-block z-[2]">
                    <p className="m-0 text-[1.5rem] font-semibold">
                      Cost-Effective
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Innovation that doesn’t break the bank
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[120px] box-border max-w-full text-white">
            <div className="flex-1 [background:linear-gradient(247.46deg,_#5d9eff,_#3780ef)] flex flex-row items-start justify-start pt-[165px] px-[180px] pb-0 box-border gap-[287.8px] max-w-full z-[3] mq450:gap-9 mq450:pl-5 mq450:pr-5 mq450:box-border mq900:gap-[72px] mq900:pl-[45px] mq900:pr-[45px] mq900:box-border mq1350:gap-36 mq1350:pl-[90px] mq1350:pr-[90px] mq1350:box-border ">
              <div className="h-[600px] w-[1920px] relative [background:linear-gradient(247.46deg,_#5d9eff,_#3780ef)] hidden max-w-full" />
              <img
                className="w-[491px] relative max-h-full max-w-full z-[1] mq1750:flex-1"
                loading="lazy"
                alt=""
                src="/group-10.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border min-w-[541px] max-w-full mq1350:min-w-full mq1750:flex-1">
                <div className="flex flex-col items-start justify-start gap-[60px] max-w-full mq900:gap-[30px]">
                  <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[40px] font-semibold font-[inherit] z-[1] mq450:text-19xl mq450:leading-[24px] mq900:text-32xl mq900:leading-[32px]">
                    Upcoming Products
                  </h1>
                  <div className="w-[341px] flex flex-col items-start justify-start gap-10 max-w-full text-7xl mq450:gap-5">
                    <h3 className="m-0 self-stretch h-[18px] relative text-inherit leading-[40px] font-normal font-[inherit] inline-block shrink-0 z-[1] mq450:text-2xl mq450:leading-[32px]">
                      Human Resource Management
                    </h3>
                    <h3 className="m-0 w-[215px] h-[18px] relative text-inherit leading-[40px] font-normal font-[inherit] inline-block shrink-0 z-[1] mq450:text-2xl mq450:leading-[32px]">
                      Asset Management
                    </h3>
                    <h3 className="m-0 h-[18px] relative text-inherit leading-[40px] font-semibold font-[inherit] inline-block shrink-0 min-w-[85px] z-[1] mq450:text-2xl mq450:leading-[32px]">{`& More`}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[120px] pb-36 box-border max-w-full mq900:pl-[30px] mq900:pr-[30px] mq900:box-border mq1350:pl-[60px] mq1350:pr-[60px] mq1350:box-border">
            <div className="flex-1 rounded-11xl border-lightskyblue border-[4px] border-dashed box-border flex flex-col items-end justify-start pt-[155px] px-[414px] pb-[167px] gap-[40px] max-w-full z-[1] mq450:gap-[20px] mq450:pl-5 mq450:pr-5 mq450:box-border mq900:gap-[30px] mq900:pl-[103px] mq900:pr-[103px] mq900:box-border mq1350:pl-[207px] mq1350:pr-[207px] mq1350:box-border">
              <div className="w-[1680px] h-[600px] relative rounded-11xl border-lightskyblue border-[4px] border-dashed box-border hidden max-w-full" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[40px] mq900:gap-[20px]">
                <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[1.5] text-5xl font-semibold font-[inherit] inline-block shrink-0 z-[2] mq450:text-[2rem] mq450:leading-[1.4] mq900:text-[3rem] mq900:leading-[1.4]">
                  <span>{`Ready to `}</span>
                  <span className="text-dodgerblue-300">
                    Glide Into the Future?
                  </span>
                </h1>
                <div className="self-stretch flex flex-row items-center justify-center py-0 px-[40px] text-center text-[1.5rem] leading-[1.6] font-medium font-[inherit] z-[2] mq450:px-[20px] mq450:leading-[1.4] mq900:text-[1.8rem] mq900:leading-[1.5]">
                  <h2 className="m-0 relative">
                    The best solutions are the ones that feel effortless.
                  </h2>
                </div>
              </div>
              <FrameComponent />
            </div>
          </div>

          <ContactSection />
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Solutions;
