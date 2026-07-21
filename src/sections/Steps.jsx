const imgArrowDown = "/assets/arrow.png";
const imgAppShowcase1 = "/assets/image13_1_6.png";
const imgAppShowcase2 = "/assets/image14_1_6.png";
const imgAstrologer1 = "/assets/image15_1_6.png";
const imgQuestion = "/assets/question.png";

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
          className={`absolute flex items-center justify-center ${isGooglePlayBadge ? "" : "rounded-3xl overflow-hidden bg-[#100704] border border-[#8b5104]/30"}`}
          style={{
            left: imgLeft,
            top: 0,
            width: 566,
            height: 720,
          }}

        >
          <a href={window.getPlayStoreLink()} className="w-full h-full flex items-center justify-center">

            <img
              alt={tagline}
              className={isGooglePlayBadge ? "w-100 h-auto object-contain relative z-10" : "w-full h-full object-cover"}
              src={image}
              style={isGooglePlayBadge ? { filter: "none" } : undefined}
            />
          </a>
        </div>
      )}

      {/* Text content */}
      <div
        className="absolute flex flex-col gap-6.75 items-start justify-center pt-24"
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
          <p className="font-extrabold text-[18px] tracking-[6px] uppercase bg-linear-to-r from-[#fe9100] to-[#d92439] bg-clip-text text-transparent">
            {tagline}
          </p>
          <div className="h-0.5 w-18 mt-2.5 bg-linear-to-r from-[#fe9100] to-[#d92439]" />
        </div>
        <p className="font-normal text-[48px] leading-[1.2] text-white relative z-10">
          {headingPre} <span className="text-[#fe9100]">{headingHi}</span>
        </p>
        <a
          href={window.getPlayStoreLink()}
          className="flex items-center gap-3 font-bold text-[28px] bg-linear-to-r from-[#fe9100] to-[#d92439] bg-clip-text text-transparent relative z-10"
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
      <section className="m-steps relative" id="steps">
        <div className="absolute h-38.25 -right-20 top-18.5 w-43 opacity-15 overflow-hidden pointer-events-none select-none">
          <img
            alt=""
            className="w-full h-full object-cover"
            src="/assets/image9_1_6.png"
          />
        </div>
        <div className="m-pill">
          <img
            src={imgQuestion}
            className="w-3.5 h-3.5 inline-block mr-2 align-middle"
            alt=""
          />
          <span className="align-middle">
            How to get your free consultation on Divinetalk
          </span>
        </div>

        <h2>
          Simple Steps to Start{" "}
          <span className="bg-linear-to-r from-[#fe9100] to-[#d92439] bg-clip-text text-transparent font-bold">
            Your Journey
          </span>
        </h2>

        <div className="m-step-list">
          {/* Step 1 */}
          <div className="m-step" style={{ alignItems: "center" }}>
            {/* 1. Number, heading and sub heading */}
            <div className="m-step-content relative pt-16 w-75 text-left flex flex-col items-start">
              <span className="absolute left-3 top-5 text-[72px] font-extrabold text-white/10 leading-none pointer-events-none select-none">
                01
              </span>
              <div className="absolute left-20">
                <small className="relative z-10">-Get the App</small>
                <h3 className="relative z-10">
                  Download DivineTalk for free from <em>Google Play.</em>
                </h3>
                <div className="w-75 text-left mt-4 mb-8">
                  <a
                    href="#chat"
                    className="inline-flex items-center gap-2 text-[#fe9100] font-bold text-[14px]"
                  >
                    Get Started Now
                    <img
                      alt=""
                      className="w-4 h-6 -rotate-90 inline-block ml-5"
                      src={imgArrowDown}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* 3. CTA */}
            <div className="mt-4 mb-8">
              {/* <a
                href="#chat"
                className="inline-flex items-center gap-2 text-[#fe9100] font-bold text-[14px]"
              >
                Get Started Now
                <img
                  alt=""
                  className="w-[10px] h-[6px] -rotate-90 inline-block"
                  src={imgArrowDown}
                />
              </a> */}
            </div>

            {/* 2. Image (Google Play badge - NOT in a container, with image9 in bg) */}
            <div
              className="flex items-center justify-center relative mt-6 left-4 top-10"
              style={{
                width: "240px",
                height: "auto",
                minHeight: "150px",
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
                  position: "relative",
                  zIndex: 10,
                }}
              />
            </div>
          </div>

          {/* Step 2 */}
          <div
            className="m-step"
            style={{ alignItems: "center", height: "600px" }}
          >
            {/* 1. Number, heading and sub heading */}
            <div className="m-step-content relative pt-16 w-75 text-left flex flex-col items-start">
              <span className="absolute left-3 top-5 text-[72px] font-extrabold text-white/10 leading-none pointer-events-none select-none">
                02
              </span>
              <div className="absolute left-20 w-58.25">
                <small className="relative z-10">-Log In Securely</small>
                <h3 className="relative z-10">
                  Simply enter your mobile number and verify it instantly with a{" "}
                  <em>secure OTP.</em>
                </h3>
                <div className="w-75 text-left mt-4 mb-8">
                  <a
                    href="#chat"
                    className="inline-flex items-center gap-2 text-[#fe9100] font-bold text-[14px]"
                  >
                    Get Started Now
                    <img
                      alt=""
                      className="w-4 h-6 -rotate-90 inline-block ml-5"
                      src={imgArrowDown}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* 3. CTA */}
            <div className="w-75 text-left mt-4 mb-8">
              {/* <a
                href="#chat"
                className="inline-flex items-center gap-2 text-[#fe9100] font-bold text-[14px]"
              >
                Get Started Now
                <img
                  alt=""
                  className="w-[10px] h-[6px] -rotate-90 inline-block"
                  src={imgArrowDown}
                />
              </a> */}
            </div>

            {/* 2. Image */}
            <div className="m-step-img-wrap left-12 top-35 bg-[#100704] border border-[#8b5104]/30 flex items-center justify-center mt-6">
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
          </div>

          {/* Step 3 */}
          <div
            className="m-step"
            style={{ alignItems: "center", height: "600px" }}
          >
            {/* 1. Number, heading and sub heading */}
            <div className="m-step-content relative pt-16 w-75 text-left flex flex-col items-start">
              <span className="absolute left-1 top-6 text-[72px] font-extrabold text-white/10 leading-none pointer-events-none select-none">
                03
              </span>
              <div className="absolute left-20 w-58.25">
                <small className="relative z-10">-Start Talking</small>
                <h3 className="relative z-10">
                  Choose your preferred Astrologer, and begin your{" "}
                  <em>first free consultation.</em>
                </h3>
                {/* 3. CTA */}
                <div className="w-75 text-left mt-4 mb-8">
                  <a
                    href="#chat"
                    className="inline-flex items-center gap-5 text-[#fe9100] font-bold text-[14px]"
                  >
                    Get Started Now
                    <img
                      alt=""
                      className="w-4 h-6 -rotate-90 inline-block ml-5"
                      src={imgArrowDown}
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* 3. CTA */}
            <div className="w-75 text-left mt-4 mb-8">
              {/* <a
                href="#chat"
                className="inline-flex items-center gap-2 text-[#fe9100] font-bold text-[14px]"
              >
                Get Started Now
                <img
                  alt=""
                  className="w-[10px] h-[6px] -rotate-90 inline-block"
                  src={imgArrowDown}
                />
              </a> */}
            </div>
            {/* 2. Image */}
            <div className="m-step-img-wrap left-12 top-35 bg-[#100704] border border-[#8b5104]/30 flex items-center justify-center mt-6">
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
          </div>
        </div>
      </section>
    );
  }

  // Desktop Layout
  return (
    <div className="contents relative" data-node-id="steps">
      <div className="absolute h-[2992px] left-0 top-[3972px] w-[1920px] bg-linear-to-b from-black via-[#150502] to-black -z-10" />

      {/* Decorative background image9_1_6.png on top right corner absolute */}
      <div className="absolute h-139.5 -right-50 top-[4374px] w-158 opacity-15 overflow-hidden pointer-events-none select-none">
        <img
          alt=""
          className="w-full h-full object-cover"
          src="/assets/image9_1_6.png"
        />
      </div>

      {/* Pill */}
      <div
        className="absolute bg-black border-[#fe9100] border-[0.5px] border-solid h-16 left-156 rounded-[40px] top-[4136px] w-168.25 flex items-center gap-3 px-8"
        data-node-id="1:124"
      >
        <img alt="" className="size-8" src={imgQuestion} />
        <span className="font-normal text-[24px] text-white whitespace-pre">
          How to get free consultation on Divinetalk
        </span>
      </div>

      {/* Section Heading with multi-color gradient */}
      <p
        className="absolute font-normal leading-[normal] left-55.5 text-[56px] text-center text-white top-[4248px] w-369"
        data-node-id="1:123"
      >
        Simple Steps to Start{" "}
        <span className="bg-linear-to-r from-[#fe9100] to-[#d92439] bg-clip-text text-transparent">
          Your Journey
        </span>
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
        className="absolute h-0 left-55.5 top-[6964px] w-369 border-t border-white/15"
        data-node-id="1:115"
      />
    </div>
  );
}
