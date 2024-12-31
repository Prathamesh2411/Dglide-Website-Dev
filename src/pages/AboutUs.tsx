import { FunctionComponent, useCallback } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent11 from "../components/FrameComponent11";
import Newsletter from "../components/Newsletter";
import SubscriptionAgreement from "../components/SubscriptionAgreement";
import Component2 from "../components/Component2";
import { useNavigate } from "react-router-dom";

const AboutUs: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/solutions");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(#fff,_#fff),_#fff] overflow-y-auto flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <FrameComponent6 />
      <FrameComponent7 />
      <FrameComponent8 />
      <FrameComponent9 />
      <FrameComponent10 />
      <FrameComponent11 />
      <section className="self-stretch bg-cornflowerblue flex flex-row items-start justify-start pt-[140px] px-[110px] pb-0 box-border relative gap-[100px] max-w-full z-[3] text-left text-61xl text-white font-sf-pro mq450:gap-[25px] mq900:gap-[50px] mq900:pl-[27px] mq900:pt-[59px] mq900:pr-[27px] mq900:box-border mq1350:pl-[55px] mq1350:pt-[91px] mq1350:pr-[55px] mq1350:box-border mq1750:flex-wrap mq1750:justify-center">
        <div className="h-[1000px] w-[1920px] relative bg-cornflowerblue hidden max-w-full z-[0]" />
        <div className="h-[13px] w-[13px] absolute !m-[0] right-[817px] bottom-[355px] rounded-10xs-5 bg-dodgerblue-300 opacity-[0.01] z-[1]" />
        <div className="w-[880px] flex flex-col items-start justify-start gap-[60px] max-w-full mq900:gap-[30px] mq1350:min-w-full mq1750:flex-1">
          <div className="flex flex-row items-start justify-start py-0 pl-2.5 pr-[9px] box-border max-w-full">
            <h1 className="m-0 h-14 relative text-inherit tracking-[-0.02em] leading-[56px] font-semibold font-[inherit] inline-block z-[1] mq450:text-5xl mq450:leading-[32px] mq900:text-21xl mq900:leading-[48px]">
              Contact Us Today
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[7px] pl-2.5 pr-0 text-11xl font-poppins">
            <h2 className="m-0 relative text-inherit leading-[40px] font-normal font-[inherit] z-[1] mq450:text-lg mq450:leading-[24px] mq900:text-5xl mq900:leading-[32px]">
              Share The details of your project – like scope, timeframes, or
              business challenges you’d like to solve.
            </h2>
          </div>
          <div className="flex flex-col items-start justify-start gap-[43px] max-w-full mq900:gap-[21px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-[17px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start gap-10 max-w-full mq900:gap-5 mq900:flex-wrap">
                <Newsletter
                  newsletterFlex="1"
                  newsletterTitle="/frame.svg"
                  emailUs="Email Us"
                  emailUsMinWidth="93px"
                />
                <Newsletter
                  newsletterFlex="0.8759"
                  newsletterTitle="/frame-1.svg"
                  emailUs="Call Us"
                  emailUsMinWidth="76px"
                />
              </div>
            </div>
            <img
              className="self-stretch h-[462px] relative max-w-full overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/contact-us-today.svg"
            />
          </div>
        </div>
        <SubscriptionAgreement />
      </section>
      <footer className="self-stretch bg-gray-200 flex flex-row items-start justify-between py-[120px] pl-[120px] pr-[170px] box-border max-w-full gap-5 text-left text-29xl text-white font-sf-pro mq450:pt-[51px] mq450:pb-[51px] mq450:box-border mq900:py-[78px] mq900:pl-[30px] mq900:pr-[42px] mq900:box-border mq1350:pl-[60px] mq1350:pr-[85px] mq1350:box-border mq1750:flex-wrap">
        <div className="h-[814px] w-[1920px] relative bg-gray-200 hidden max-w-full" />
        <div className="flex flex-col items-start justify-start gap-[79.5px] min-w-[570px] max-w-full mq450:gap-5 mq900:gap-10 mq900:min-w-full mq1750:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-10 max-w-full mq900:gap-5">
            <h1 className="m-0 w-72 h-32 relative text-inherit leading-[64px] font-normal font-[inherit] flex items-center z-[1] mq450:text-10xl mq450:leading-[38px] mq900:text-19xl mq900:leading-[51px]">
              <span className="w-full">
                <p className="m-0">{`Subscribe our `}</p>
                <p className="m-0">Newsletter</p>
              </span>
            </h1>
            <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-sm">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start relative max-w-full">
                <img
                  className="h-6 w-6 absolute !m-[0] top-[18.5px] right-[6px] z-[1]"
                  alt=""
                  src="/component-5.svg"
                />
                <div className="self-stretch flex-1 border-gray-1100 border-b-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-[19px] pb-[22px] pl-0 pr-[35px] max-w-full z-[2]">
                  <input
                    className="w-[calc(100%_-_59px)] [border:none] [outline:none] font-sf-pro text-base bg-[transparent] flex-1 relative text-white text-left inline-block min-w-[250px] p-0 max-w-full"
                    placeholder="Email"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-[279.3px] flex flex-row items-end justify-start gap-[11px]">
                <input
                  className="m-0 h-6 w-6 relative rounded border-gray-1100 border-[1px] border-solid box-border z-[2]"
                  type="checkbox"
                />
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px">
                  <div className="self-stretch relative leading-[20px] z-[1]">
                    I agree to the Terms, Privacy Policy.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer border-white border-[3px] border-solid py-5 pl-10 pr-[33px] bg-[transparent] h-[65px] rounded-341xl box-border flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-300 hover:border-gainsboro-100 hover:border-[3px] hover:border-solid hover:box-border">
            <div className="h-[17px] relative text-5xl tracking-[-0.02em] leading-[17px] font-semibold font-sf-pro text-white text-center inline-block min-w-[107px] mq450:text-lgi mq450:leading-[64px]">
              Subscribe
            </div>
          </button>
          <div className="flex flex-col items-start justify-start gap-[21px] max-w-full text-base font-poppins">
            <div className="w-[299px] flex flex-row items-start justify-between gap-5">
              <div className="relative leading-[30px] shrink-0 z-[1]">
                Project inquiries:
              </div>
              <div className="relative leading-[30px] shrink-0 z-[1]">
                Careers:
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[41px] mq450:gap-5 mq900:flex-wrap">
              <Component2 variant={1} text="talktous@dglide.com" />
              <Component2 variant={1} text="talktous@dglide.com" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[620px] max-w-full text-right text-5xl mq1350:min-w-full mq1750:flex-1">
          <div className="self-stretch flex flex-row items-start justify-between gap-5 mq900:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-[49px] mq450:gap-6">
              <div className="w-[95px] flex flex-col items-start justify-start gap-10">
                <div className="flex flex-row items-start justify-start py-0 pl-1.5 pr-[5px]">
                  <div className="relative leading-[24px] z-[1] mq450:text-lgi mq450:leading-[19px]">
                    Support
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-lg">
                  <div className="flex flex-row items-start justify-start py-0 pl-[30px] pr-[29px]">
                    <div className="h-[13px] relative leading-[13px] inline-block z-[1]">
                      FAQ
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-[7px]">
                    <div className="h-[13px] flex-1 relative leading-[13px] inline-block z-[1]">
                      About Us
                    </div>
                  </div>
                  <div className="h-[13px] relative leading-[33.8px] inline-block shrink-0 z-[1]">
                    Contact Us
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-10 text-center">
                <div className="flex flex-row items-start justify-start py-0 pl-[27px] pr-[30px]">
                  <div className="relative leading-[24px] z-[1] mq450:text-lgi mq450:leading-[19px]">
                    Legal
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-end justify-start gap-[30px] text-lg">
                  <div className="self-stretch h-[13px] relative leading-[33.8px] inline-block shrink-0 z-[1]">
                    Privacy Policy
                  </div>
                  <div className="flex flex-row items-start justify-end py-0 px-[13px]">
                    <div className="h-[37px] relative leading-[24px] inline-block z-[1]">
                      <p className="m-0">{`Terms &`}</p>
                      <p className="m-0">Conditions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[90px] flex flex-col items-end justify-start py-0 pl-0 pr-[5px] box-border gap-10">
              <div className="flex flex-row items-start justify-end py-0 px-[5px]">
                <div className="relative leading-[24px] z-[1] mq450:text-lgi mq450:leading-[19px]">
                  Socials
                </div>
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[30px] text-center text-lg">
                <div className="flex flex-row items-start justify-end py-0 px-px">
                  <div className="h-[13px] relative leading-[13px] inline-block z-[1]">
                    Facebook
                  </div>
                </div>
                <div className="self-stretch h-[13px] relative leading-[30px] inline-block shrink-0 z-[1]">
                  Instagram
                </div>
                <div className="flex flex-row items-start justify-end py-0 pl-1.5 pr-[7px]">
                  <div className="h-[13px] relative leading-[13px] inline-block z-[1]">
                    LinkedIn
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-3 pr-[13px]">
                  <div className="h-[13px] flex-1 relative leading-[13px] inline-block z-[1]">
                    Twitter
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[120px] flex flex-col items-end justify-start gap-[43px]">
              <div className="self-stretch relative leading-[24px] whitespace-nowrap z-[1] mq450:text-lgi mq450:leading-[19px]">
                Quick Links
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[30px] text-center text-lg">
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-5">
                  <div
                    className="h-[13px] flex-1 relative leading-[13px] inline-block cursor-pointer z-[1]"
                    onClick={onTextClick}
                  >
                    Solutions
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[35px] pr-9">
                  <div className="h-[13px] flex-1 relative leading-[13px] inline-block z-[1]">
                    Blogs
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-[30px]">
                  <div className="h-[13px] flex-1 relative leading-[13px] inline-block z-[1]">
                    ⁠Pricing
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-[39px]">
                  <div className="h-[13px] flex-1 relative leading-[13px] inline-block z-[1]">
                    CRM
                  </div>
                </div>
                <div className="h-[37px] relative leading-[24px] inline-block shrink-0 z-[1]">
                  <p className="m-0">⁠Environmental</p>
                  <p className="m-0">Conservation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
