const imgArrowDown = "/assets/arrow.png";
const imgAppShowcase1 = "/assets/image13_1_6.png";
const imgAppShowcase2 = "/assets/image14_1_6.png";
const imgAstrologer1 = "/assets/image15_1_6.png";
const imgQuestion = "/assets/question.png";

const stepsData = [
  {
    number: "01",
    tagline: "Get the App",
    headingPre: "Download DivineTalk for free from",
    headingHi: "Google Play.",
    image: imgAppShowcase1,
    isBadge: true,
    imageLeft: false,
  },
  {
    number: "02",
    tagline: "Log In Securely",
    headingPre: "Simply enter your mobile number and verify it instantly with a",
    headingHi: "secure OTP.",
    image: imgAppShowcase2,
    isBadge: false,
    imageLeft: true,
  },
  {
    number: "03",
    tagline: "Start Talking",
    headingPre: "Choose your preferred Astrologer, and begin your",
    headingHi: "first free consultation.",
    image: imgAstrologer1,
    isBadge: false,
    imageLeft: false,
  },
];

export default function Steps() {
  return (
    <section
      className="relative w-full py-20 md:py-32 bg-linear-to-b from-[#020001] via-[#150502] to-[#020001] overflow-hidden"
      id="steps"
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        {/* Pill Badge */}
        <div className="pill-badge">
          <img src={imgQuestion} className="w-5 h-5 object-contain" alt="" />
          <span>How to get free consultation on Divinetalk</span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl leading-tight">
          Simple Steps to Start{" "}
          <span className="bg-linear-to-r from-[#fe9100] to-[#d92439] bg-clip-text text-transparent">
            Your Journey
          </span>
        </h2>

        {/* Step Blocks List */}
        <div className="mt-20 w-full flex flex-col gap-20 md:gap-32">
          {stepsData.map((step) => (
            <div
              key={step.number}
              className={`flex flex-col ${
                step.imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center justify-between gap-12 text-left relative`}
            >
              {/* Text Content Block */}
              <div className="w-full lg:w-1/2 flex flex-col items-start relative pt-8">
                {/* Number Watermark */}
                <span className="absolute -top-6 left-0 text-7xl sm:text-9xl font-black text-white/10 select-none pointer-events-none">
                  {step.number}
                </span>

                <div className="relative z-10">
                  <p className="text-xs sm:text-sm font-extrabold tracking-[4px] uppercase bg-linear-to-r from-[#fe9100] to-[#d92439] bg-clip-text text-transparent">
                    - {step.tagline}
                  </p>
                  <div className="h-0.5 w-12 mt-2 bg-linear-to-r from-[#fe9100] to-[#d92439]" />
                </div>

                <h3 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-normal leading-tight text-white relative z-10">
                  {step.headingPre}{" "}
                  <span className="text-[#fe9100] font-semibold">
                    {step.headingHi}
                  </span>
                </h3>

                <a
                  href="#chat"
                  className="mt-8 inline-flex items-center gap-3 font-bold text-lg sm:text-xl text-gradient-orange-red hover:opacity-80 transition-opacity"
                >
                  <span>Get Started Now</span>
                  <img
                    src={imgArrowDown}
                    alt=""
                    className="w-4 h-4 -rotate-90"
                  />
                </a>
              </div>

              {/* Image Block */}
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <div
                  className={`relative w-full max-w-md h-80 sm:h-96 md:h-112.5 flex items-center justify-center ${
                    step.isBadge
                      ? "p-4"
                      : "rounded-3xl overflow-hidden bg-[#100704] border border-[#8b5104]/40 shadow-2xl shadow-black/80"
                  }`}
                >
                  <img
                    src={step.image}
                    alt={step.tagline}
                    className={`w-full h-full ${
                      step.isBadge
                        ? "object-contain max-h-48 sm:max-h-64"
                        : "object-cover"
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
