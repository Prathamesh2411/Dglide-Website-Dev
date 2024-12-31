import { FunctionComponent } from "react";
import SolutionPageHeader from "../components/Home/SolutionPageHeader";
import FeatureContent from "../components/FeatureContent";
import FrameComponent from "../components/FrameComponent";
import Newsletter from "../components/Newsletter";
import EmailField from "../components/EmailField";
import Component2 from "../components/Component2";
import GroupComponent1 from "../components/GroupComponent1";
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
              className="w-[156.5px] h-[537.9px] absolute !m-[0] top-[1592.1px] right-[292.5px] z-[2]"
              loading="lazy"
              alt=""
              src="/character21.svg"
            />
            <div className="self-stretch bg-whitesmoke flex flex-col items-start justify-start p-[120px] box-border gap-[119px] max-w-full z-[1] mq900:gap-[30px] mq900:pl-[30px] mq900:pr-[30px] mq900:box-border mq1350:gap-[59px] mq1350:pl-[60px] mq1350:pr-[60px] mq1350:box-border">
              <div className="w-[1920px] h-[786px] relative bg-whitesmoke hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-center max-w-full">
                <div className="flex flex-col items-start justify-start gap-[60px] max-w-full mq900:gap-[30px]">
                  <h1 className="m-0 h-[45px] relative text-inherit tracking-[-0.01em] leading-[72px] font-semibold font-[inherit] inline-block shrink-0 z-[1] mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
                    Choose from a library of tools and build your own!!!
                  </h1>
                  <div className="flex flex-row items-start justify-start py-0 pl-[522px] pr-[520px] text-11xl mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[130px] mq900:pr-[130px] mq900:box-border mq1350:pl-[261px] mq1350:pr-[260px] mq1350:box-border">
                    <h2 className="m-0 h-[21px] relative text-inherit leading-[21px] font-semibold font-[inherit] inline-block z-[1] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
                      Digital Glide Solutions Are:
                    </h2>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-10 max-w-full text-center text-7xl mq900:gap-5 mq1750:flex-wrap">
                <div className="flex-1 rounded-xl bg-white flex flex-row items-start justify-start py-20 px-[63px] box-border min-w-[263px] max-w-full z-[1] text-11xl mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="h-[301px] w-[390px] relative rounded-xl bg-white hidden max-w-full" />
                  <div className="h-[141px] flex-1 relative leading-[40px] inline-block z-[2] mq450:text-2xl mq450:leading-[32px]">
                    <p className="m-0 font-semibold">Built for Everyone</p>
                    <p className="m-0 font-semibold">&nbsp;</p>
                    <p className="m-0 text-7xl">
                      Non-tech users, welcome aboard!
                    </p>
                  </div>
                </div>
                <div className="flex-[0.8561] rounded-xl bg-white flex flex-row items-start justify-start py-20 px-[82px] box-border min-w-[263px] max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
                  <div className="h-[301px] w-[390px] relative rounded-xl bg-white hidden max-w-full" />
                  <div className="h-[141px] flex-1 relative leading-[40px] inline-block z-[2] mq450:text-2xl mq450:leading-[32px]">
                    <p className="m-0 text-11xl font-semibold">Powered by AI</p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">The future is here, and it’s smart</p>
                  </div>
                </div>
                <div className="flex-[0.8485] rounded-xl bg-white flex flex-row items-start justify-start py-20 px-[83px] box-border min-w-[263px] max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
                  <div className="h-[301px] w-[390px] relative rounded-xl bg-white hidden max-w-full" />
                  <div className="h-[141px] flex-1 relative leading-[40px] inline-block z-[2] mq450:text-2xl mq450:leading-[32px]">
                    <p className="m-0 text-11xl font-semibold">Scalable</p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">Big or small, we’ve got your back</p>
                  </div>
                </div>
                <div className="flex-[0.947] rounded-xl bg-white flex flex-row items-start justify-start py-20 px-[70px] box-border min-w-[263px] max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
                  <div className="h-[301px] w-[390px] relative rounded-xl bg-white hidden max-w-full" />
                  <div className="h-[141px] flex-1 relative leading-[40px] inline-block z-[2] mq450:text-2xl mq450:leading-[32px]">
                    <p className="m-0 text-11xl font-semibold">
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
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[120px] box-border max-w-full text-white">
              <div className="flex-1 [background:linear-gradient(247.46deg,_#5d9eff,_#3780ef)] flex flex-row items-start justify-start pt-[165px] px-[180px] pb-0 box-border gap-[287.8px] max-w-full z-[3] mq450:gap-9 mq450:pl-5 mq450:pr-5 mq450:box-border mq900:gap-[72px] mq900:pl-[45px] mq900:pr-[45px] mq900:box-border mq1350:gap-36 mq1350:pl-[90px] mq1350:pr-[90px] mq1350:box-border mq1750:flex-wrap">
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
              <div className="flex-1 rounded-11xl border-lightskyblue border-[4px] border-dashed box-border flex flex-col items-end justify-start pt-[155px] px-[414px] pb-[167px] gap-20 max-w-full z-[1] mq450:gap-5 mq450:pl-5 mq450:pr-5 mq450:box-border mq900:gap-10 mq900:pl-[103px] mq900:pr-[103px] mq900:box-border mq1350:pl-[207px] mq1350:pr-[207px] mq1350:box-border">
                <div className="w-[1680px] h-[600px] relative rounded-11xl border-lightskyblue border-[4px] border-dashed box-border hidden max-w-full" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[60px] mq900:gap-[30px]">
                  <h1 className="m-0 h-[45px] relative text-inherit tracking-[-0.01em] leading-[72px] font-semibold font-[inherit] inline-block shrink-0 z-[2] mq450:text-19xl mq450:leading-[43px] mq900:text-32xl mq900:leading-[58px]">
                    <span>{`Ready to `}</span>
                    <span className="text-dodgerblue-300">
                      Glide Into the Future?
                    </span>
                  </h1>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[99px] pr-[98px] text-center text-11xl mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[49px] mq900:pr-[49px] mq900:box-border">
                    <h2 className="m-0 h-[21px] relative text-inherit leading-[21px] font-medium font-[inherit] inline-block z-[2] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
                      The best solutions are the ones that feel effortless.
                    </h2>
                  </div>
                </div>
                <FrameComponent />
              </div>
            </div>
            <ContactSection />
            <footer className="self-stretch bg-gray-200 flex flex-row items-start justify-between py-[120px] pl-[120px] pr-[170px] box-border max-w-full gap-5 z-[1] text-left text-29xl text-white font-sf-pro mq900:pl-[30px] mq900:pr-[42px] mq900:box-border mq1350:pl-[60px] mq1350:pr-[85px] mq1350:box-border mq1750:flex-wrap">
              <div className="h-[814px] w-[1920px] relative bg-gray-200 hidden max-w-full" />
              <div className="flex flex-col items-start justify-start gap-10 min-w-[570px] max-w-full mq900:gap-5 mq900:min-w-full mq1750:flex-1">
                <h1 className="m-0 w-72 h-32 relative text-inherit leading-[64px] font-normal font-[inherit] flex items-center z-[1] mq450:text-10xl mq450:leading-[38px] mq900:text-19xl mq900:leading-[51px]">
                  <span className="w-full">
                    <p className="m-0">{`Subscribe our `}</p>
                    <p className="m-0">Newsletter</p>
                  </span>
                </h1>
                <div className="self-stretch flex flex-col items-start justify-start gap-[79.5px] max-w-full text-base font-poppins mq450:gap-5 mq900:gap-10">
                  <EmailField />
                  <button className="cursor-pointer border-white border-[3px] border-solid py-5 pl-10 pr-[33px] bg-[transparent] h-[65px] rounded-341xl box-border flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-300 hover:border-gainsboro-100 hover:border-[3px] hover:border-solid hover:box-border">
                    <div className="h-[17px] relative text-5xl tracking-[-0.02em] leading-[17px] font-semibold font-sf-pro text-white text-center inline-block min-w-[107px] mq450:text-lgi mq450:leading-[64px]">
                      Subscribe
                    </div>
                  </button>
                  <div className="flex flex-col items-start justify-start gap-[21px] max-w-full">
                    <div className="w-[299px] flex flex-row items-start justify-between gap-5">
                      <div className="relative leading-[30px] z-[1]">
                        Project inquiries:
                      </div>
                      <div className="relative leading-[30px] z-[1]">
                        Careers:
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[41px] mq450:gap-5 mq900:flex-wrap">
                      <Component2 variant={1} text="talktous@dglide.com" />
                      <Component2 variant={1} text="talktous@dglide.com" />
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Solutions;
