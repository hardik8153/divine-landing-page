const imgArrowDown = "/assets/arrow.png";
const imgAppShowcase1 = "/assets/image13_1_6.png";
const imgAppShowcase2 = "/assets/image14_1_6.png";
const imgAstrologer1 = "/assets/image15_1_6.png";
const imgQuestion = "/assets/image8_1_6.png";

function StepBlock({ top, number, tagline, headingPre, headingHi, image, imageLeft }) {
  /* 
   * Figma layout: 1462px wide container starting at left:229
   * Image: 566x720 rounded-24px
   * Text block: ~555px wide, vertically centered
   * When imageLeft: image at x=0, text at x=620
   * When imageRight: text at x=0, image at x=896
   */
  const imgLeft = imageLeft ? 0 : 896;
  const textLeft = imageLeft ? 620 : 0;

  const isGooglePlayBadge = image && image.includes("image13");

  return (
    <div className="absolute" style={{ top, left: 229, width: 1462, height: 720 }}>
      {/* Step image */}
      {image && (
        <div
          className={`absolute flex items-center justify-center ${
            isGooglePlayBadge ? "" : "rounded-[24px] overflow-hidden bg-[#100704] border border-[#8b5104]/30"
          }`}
          style={{
            left: imgLeft,
            top: 0,
            width: 566,
            height: 720,
          }}
        >
          <img
            alt={tagline}
            className={isGooglePlayBadge ? "w-[400px] h-auto object-contain" : "w-full h-full object-cover"}
            src={image}
            style={isGooglePlayBadge ? { filter: "none" } : undefined}
          />
        </div>
      )}

      {/* Text content */}
      <div
        className="absolute flex flex-col gap-[27px] items-start justify-center pt-24"
        style={{ left: textLeft, top: 0, width: 555, height: 720 }}
      >
        {/* Large step number watermark on the left top of the heading */}
        <span
          className="absolute font-extrabold text-[150px] text-white/10 leading-none pointer-events-none select-none"
          style={{
            left: 0,
            top: 50,
          }}
        >
          {number}
        </span>

        <div className="relative z-10">
          <p className="font-extrabold text-[18px] tracking-[6px] uppercase bg-gradient-to-r from-[#fe9100] to-[#d92439] bg-clip-text text-transparent">
            {tagline}
          </p>
          <div className="h-[2px] w-[72px] mt-[10px] bg-gradient-to-r from-[#fe9100] to-[#d92439]" />
        </div>
        <p className="font-normal text-[48px] leading-[1.2] text-white relative z-10">
          {headingPre} <span className="text-[#fe9100]">{headingHi}</span>
        </p>
        <a
          href="#chat"
          className="flex items-center gap-3 font-bold text-[28px] bg-gradient-to-r from-[#fe9100] to-[#d92439] bg-clip-text text-transparent relative z-10"
        >
          Get Started Now
          <img
            alt=""
            className="w-4 h-6 -rotate-90"
            src={imgArrowDown}
            style={{ filter: "none" }}
          />
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
          <img
            src={imgQuestion}
            className="w-[14px] h-[14px] inline-block mr-2 align-middle"
            alt=""
          />
          <span className="align-middle">Not Sure Where to Start? We Got You</span>
        </div>

        <h2>Simple Steps to Start Your Journey</h2>

        <div className="m-step-list">
          {/* Step 1 */}
          <div className="m-step" style={{ alignItems: "center" }}>
            {/* Google Play badge - NOT in a container */}
            <div
              className="flex items-center justify-center"
              style={{
                width: "240px",
                height: "auto",
                minHeight: "120px",
                marginTop: "30px",
                background: "transparent",
                border: "none",
              }}
            >
              <img
                src={imgAppShowcase1}
                alt="Get the App"
                style={{
                  objectFit: "contain",
                  width: "200px",
                  height: "auto",
                }}
              />
            </div>
            <div className="m-step-content relative pt-16 w-[300px] text-left">
              <span className="absolute left-0 top-0 text-[72px] font-extrabold text-white/10 leading-none pointer-events-none select-none">
                01
              </span>
              <small className="relative z-10">Get the App</small>
              <h3 className="relative z-10">
                Download DivineTalk for free from <em>Google Play.</em>
              </h3>
              <a href="#chat" className="relative z-10">
                Get Started Now
                <img
                  alt=""
                  className="w-[10px] h-[6px] -rotate-90 inline-block ml-[6px]"
                  src={imgArrowDown}
                />
              </a>
            </div>
          </div>

          {/* Step 2 */}
          <div className="m-step" style={{ alignItems: "center" }}>
            <div className="m-step-img-wrap bg-[#100704] border border-[#8b5104]/30 flex items-center justify-center">
              <img
                src={imgAppShowcase2}
                alt="Log In Securely"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div className="m-step-content relative pt-16 w-[300px] text-left">
              <span className="absolute left-0 top-0 text-[72px] font-extrabold text-white/10 leading-none pointer-events-none select-none">
                02
              </span>
              <small className="relative z-10">Log In Securely</small>
              <h3 className="relative z-10">
                Simply enter your mobile number and verify it instantly with a{" "}
                <em>secure OTP.</em>
              </h3>
              <a href="#chat" className="relative z-10">
                Get Started Now
                <img
                  alt=""
                  className="w-[10px] h-[6px] -rotate-90 inline-block ml-[6px]"
                  src={imgArrowDown}
                />
              </a>
            </div>
          </div>

          {/* Step 3 */}
          <div className="m-step" style={{ alignItems: "center" }}>
            <div className="m-step-img-wrap bg-[#100704] border border-[#8b5104]/30 flex items-center justify-center">
              <img
                src={imgAstrologer1}
                alt="Start Talking"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div className="m-step-content relative pt-16 w-[300px] text-left">
              <span className="absolute left-0 top-0 text-[72px] font-extrabold text-white/10 leading-none pointer-events-none select-none">
                03
              </span>
              <small className="relative z-10">Start Talking</small>
              <h3 className="relative z-10">
                Choose your preferred Astrologer, and begin your{" "}
                <em>first free consultation.</em>
              </h3>
              <a href="#chat" className="relative z-10">
                Get Started Now
                <img
                  alt=""
                  className="w-[10px] h-[6px] -rotate-90 inline-block ml-[6px]"
                  src={imgArrowDown}
                />
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
      <div
        className="absolute h-[2992px] left-0 top-[3972px] w-[1920px] bg-gradient-to-b from-black via-[#150502] to-black -z-10"
      />

      {/* Pill */}
      <div
        className="absolute bg-black border-[#fe9100] border-[0.5px] border-solid h-[64px] left-[624px] rounded-[40px] top-[4136px] w-[673px] flex items-center gap-3 px-8"
        data-node-id="1:124"
      >
        <img alt="" className="size-[32px]" src={imgQuestion} />
        <span className="font-normal text-[24px] text-white whitespace-pre">
          Not Sure Where to Start? We Got You
        </span>
      </div>

      {/* Section Heading */}
      <p
        className="absolute font-extrabold leading-[normal] left-[222px] text-[56px] text-center text-white top-[4248px] w-[1476px]"
        data-node-id="1:123"
      >
        Simple Steps to Start Your Journey
      </p>

      {/* Step 1: Image Right */}
      <StepBlock
        top={4464}
        number="01"
        tagline="Get the App"
        headingPre="Download DivineTalk for free from"
        headingHi="Google Play."
        image={imgAppShowcase1}
        imageLeft={false}
      />

      {/* Step 2: Image Left */}
      <StepBlock
        top={5284}
        number="02"
        tagline="Log In Securely"
        headingPre="Simply enter your mobile number and verify it instantly with a"
        headingHi="secure OTP."
        image={imgAppShowcase2}
        imageLeft={true}
      />

      {/* Step 3: Image Right */}
      <StepBlock
        top={6104}
        number="03"
        tagline="Start Talking"
        headingPre="Choose your preferred Astrologer, and begin your"
        headingHi="first free consultation."
        image={imgAstrologer1}
        imageLeft={false}
      />

      {/* Bottom divider */}
      <div
        className="absolute h-0 left-[222px] top-[6964px] w-[1476px] border-t border-white/15"
        data-node-id="1:115"
      />
    </div>
  );
}
