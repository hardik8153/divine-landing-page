const imgArrowDown = "/assets/arrow.png";
const imgAppShowcase1 = "/assets/image11_1_6.png";
const imgAppShowcase2 = "/assets/image12_1_6.png";
const imgAstrologer1 = "/assets/image15_1_6.png";
const imgQuestion = "/assets/image8_1_6.png";

function StepBlock({ top, number, tagline, headingPre, headingHi, image, imageLeft }) {
  const textLeft = imageLeft ? 229 + 868 : 229 + 192;
  return (
    <div className="absolute" style={{ top, left: 229, width: 1462, height: 720 }}>
      <p className="absolute font-bold leading-[240px] opacity-10 text-[240px] text-white" style={{ left: imageLeft ? 0 : 872, top: 38 }}>
        {number}
      </p>

      {image && (
        <div
          className="absolute rounded-[24px] overflow-hidden"
          style={{ left: imageLeft ? 0 : 872, top: imageLeft ? 0 : 224, width: imageLeft ? 566 : 526, height: imageLeft ? 720 : 204 }}
        >
          <img alt={tagline} className="w-full h-full object-cover" src={image} />
        </div>
      )}

      <div className="absolute flex flex-col gap-[27px] items-start" style={{ left: textLeft, top: 189, width: 555 }}>
        <div>
          <p className="font-extrabold text-[18px] tracking-[6px] uppercase bg-gradient-to-r from-[#fe9100] to-[#d92439] bg-clip-text text-transparent">
            {tagline}
          </p>
          <div className="h-[2px] w-[72px] mt-[10px] bg-gradient-to-r from-[#fe9100] to-[#d92439]" />
        </div>
        <p className="font-normal text-[48px] leading-[normal] text-white">
          {headingPre} <span className="text-[#fe9100]">{headingHi}</span>
        </p>
        <a href="#chat" className="flex items-center gap-3 font-bold text-[28px] bg-gradient-to-r from-[#fe9100] to-[#d92439] bg-clip-text text-transparent">
          Get Started Now
          <img alt="" className="w-4 h-6 -rotate-90" src={imgArrowDown} style={{ filter: "none" }} />
        </a>
      </div>
    </div>
  );
}

// 1:1 port of Figma nodes 1:123 heading + 1:205 / 1:216 / 1:227 "Content" steps
export default function Steps({ isMobile }) {
  if (isMobile) {
    return (
      <section className="m-steps" id="steps">
        <div className="m-pill">
          <img src={imgQuestion} className="w-[14px] h-[14px] inline-block mr-2 align-middle" alt="" />
          <span className="align-middle">Not Sure Where to Start? We Got You</span>
        </div>

        <h2>Simple Steps to Start Your Journey</h2>

        <div className="m-step-list flex flex-col gap-[48px]">
          {/* Step 1 */}
          <div className="m-step">
            <span>01</span>
            <img src={imgAppShowcase1} alt="Get the App" />
            <div>
              <small>Get the App</small>
              <h3>
                Download DivineTalk for free from <em>Google Play.</em>
              </h3>
              <a href="#chat">
                Get Started Now
                <img alt="" className="w-[10px] h-[6px] -rotate-90 inline-block ml-[6px]" src={imgArrowDown} />
              </a>
            </div>
          </div>

          {/* Step 2 (Flipped) */}
          <div className="m-step flip">
            <span>02</span>
            <img src={imgAppShowcase2} alt="Log In Securely" />
            <div>
              <small>Log In Securely</small>
              <h3>
                Simply enter your mobile number and verify it instantly with a <em>secure OTP.</em>
              </h3>
              <a href="#chat">
                Get Started Now
                <img alt="" className="w-[10px] h-[6px] -rotate-90 inline-block ml-[6px]" src={imgArrowDown} />
              </a>
            </div>
          </div>

          {/* Step 3 */}
          <div className="m-step">
            <span>03</span>
            <img src={imgAstrologer1} alt="Start Talking" />
            <div>
              <small>Start Talking</small>
              <h3>
                Choose your preferred Astrologer, and begin your <em>first free consultation.</em>
              </h3>
              <a href="#chat">
                Get Started Now
                <img alt="" className="w-[10px] h-[6px] -rotate-90 inline-block ml-[6px]" src={imgArrowDown} />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop Layout
  return (
    <div className="contents" data-node-id="steps">
      <div className="absolute h-[2992px] left-0 top-[3972px] w-[1920px] bg-gradient-to-b from-black via-[#150502] to-black -z-10" />

      <p className="absolute font-extrabold leading-[normal] left-[222px] text-[56px] text-center text-white top-[4248px] w-[1476px]" data-node-id="1:123">
        Simple Steps to Start Your Journey
      </p>

      <div className="absolute bg-black border-[#fe9100] border-[0.5px] border-solid h-[64px] left-[624px] rounded-[40px] top-[4136px] w-[673px] flex items-center gap-3 px-8" data-node-id="1:124">
        <img alt="" className="size-[32px]" src={imgQuestion} />
        <span className="font-normal text-[24px] text-white whitespace-pre">Not Sure Where to Start? We Got You</span>
      </div>

      <StepBlock
        top={4464}
        number="01"
        tagline="Get the App"
        headingPre="Download DivineTalk for free from"
        headingHi="Google Play."
        image={imgAppShowcase1}
        imageLeft={false}
      />
      <StepBlock
        top={5162}
        number="02"
        tagline="Log In Securely"
        headingPre="Simply enter your mobile number and verify it instantly with a"
        headingHi="secure OTP."
        image={imgAppShowcase2}
        imageLeft={true}
      />
      <StepBlock
        top={6080}
        number="03"
        tagline="Start Talking"
        headingPre="Choose your preferred Astrologer, and begin your"
        headingHi="first free consultation."
        image={imgAstrologer1}
        imageLeft={false}
      />

      <div className="absolute h-0 left-[222px] top-[6964px] w-[1476px] border-t border-white/15" data-node-id="1:115" />
    </div>
  );
}
