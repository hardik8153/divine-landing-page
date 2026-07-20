const imgCancer4X1 = "/assets/image5_1_6.png";
const imgArrowDown = "/assets/arrow.png";
const imgAstroIcon1 = "/assets/mandala.png";
const imgAstroIcon2 = "/assets/dailyHoroscope2.png";
const imgAstroIcon3 = "/assets/todayPanchang.png";
const imgTrophy = "/assets/trophy.png";

function FeatureCard({ left, top, highlighted, title, desc, img }) {
  return (
    <div className="absolute contents" style={{ left, top }}>
      <div
        className={`absolute bg-black h-102.25 rounded-[20px] w-115 ${
          highlighted
            ? "border border-[#fe9100]"
            : "border border-[rgba(255,255,255,0.5)]"
        }`}
        style={{ left, top }}
      />
      <div
        className="absolute size-24 rounded-full overflow-hidden bg-[#1a1a1a] flex items-center justify-center"
        style={{ left: left + 32, top: top + 32 }}
      >
        <img alt="" className="w-16 h-16 opacity-90 object-contain" src={img} />
      </div>
      <p
        className="absolute font-bold text-[32px] text-white whitespace-nowrap"
        style={{ left: left + 32, top: top + 148 }}
      >
        {title}
      </p>
      <p
        className="absolute font-normal text-[24px] text-[#939393] w-99"
        style={{ left: left + 32, top: top + 208 }}
      >
        {desc}
      </p>
      <a
        href="#download"
        className="absolute font-normal text-[28px] text-[#fe9100] flex items-center gap-5"
        style={{ left: left + 32, top: top + 342 }}
      >
        Get App
        <img alt="" className="w-4 h-6 -rotate-90" src={imgArrowDown} />
      </a>
    </div>
  );
}

// 1:1 port of Figma node 1:34 "features"
export default function Features({ isMobile }) {
  if (isMobile) {
    return (
      <section className="m-features relative" id="features">
        <div className="absolute h-43.5 -right-20 w-38.25 opacity-20 overflow-hidden -rotate-45">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={imgCancer4X1}
          />
        </div>
        <div className="m-pill">
          <img
            src={imgTrophy}
            className="w-3.5 h-3.5 inline-block mr-2 align-middle"
            alt=""
          />
          <span className="align-middle">
            Top Choice | Find Your True Direction &gt;
          </span>
        </div>

        <h2>
          Experience Our <em>Premium Astrology Feature</em>
        </h2>

        <p className="m-lead">
          Get instant, deep insights into your life's path. Our leading
          astrology feature reveals the cosmic forces shaping your future so you
          can navigate with confidence.
        </p>

        <div className="m-card-list">
          {/* Card 1: Daily Horoscopes (selected) */}
          <div className="m-feature-card selected">
            <div className="size-16 rounded-full overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
              <img src={imgAstroIcon2} alt="" className="max-w-10 max-h-10" />
            </div>
            <h3>Daily Horoscopes</h3>
            <p>
              Get personalized daily, weekly, and monthly insights aligned with
              your zodiac.
            </p>
            <a href="#download">
              Get App
              <img
                alt=""
                className="max-w-2.5 max-h-4 -rotate-90 inline-block ml-5"
                src={imgArrowDown}
              />
            </a>
          </div>

          {/* Card 2: Kundli Match */}
          <div className="m-feature-card">
            <div className="size-16 rounded-full overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
              <img src={imgAstroIcon1} alt="" className="max-w-10 max-h-10" />
            </div>
            <h3>Kundli Match</h3>
            <p>
              Calculate deep relationship compatibility scores for a harmonious
              future together.
            </p>
            <a href="#download">
              Get App
              <img
                alt=""
                className="max-w-2.5 max-h-4 -rotate-90 inline-block ml-5"
                src={imgArrowDown}
              />
            </a>
          </div>

          {/* Card 3: Today's Panchang */}
          <div className="m-feature-card">
            <div className="size-16 rounded-full overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
              <img src={imgAstroIcon3} alt="" className="max-w-10 max-h-10" />
            </div>
            <h3>Today's Panchang</h3>
            <p>
              Track auspicious timings and daily planetary alignments with
              precise accuracy.
            </p>
            <a href="#download">
              Get App
              <img
                alt=""
                className="max-w-2.5 max-h-4 -rotate-90 inline-block ml-5"
                src={imgArrowDown}
              />
            </a>
          </div>
        </div>
      </section>
    );
  }

  // Desktop Layout
  return (
    <div className="contents" data-node-id="1:34">
      <div className="absolute h-305.75 left-105.75 top-[1810px] w-273.5 rounded-full bg-[#3a1a05] opacity-40 blur-[80px]" />
      <div className="absolute h-152.25 left-[1551px] top-288.25 w-133.75opacity-20 overflow-hidden -rotate-45">
        <img alt="" className="w-full h-full object-cover" src={imgCancer4X1} />
      </div>

      <div
        className="absolute left-55.5 top-[2306px] w-369`border-t border-white/15"
        data-node-id="1:39"
      />

      <p
        className="absolute font-normal left-[390px]text-[72px] text-center text-white top-340 w-280.5 capitalize"
        data-node-id="1:41"
      >
        Experience Our{" "}
        <span className="text-[#fe9100]">Premium Astrology Feature</span>
      </p>

      <p
        className="absolute font-normal leading-[normal] left-122 text-[#939393] text-[24px] text-center top-[1588px] w-235.75"
        data-node-id="1:42"
      >
        Get instant, deep insights into your life's path. Our leading astrology
        feature reveals the cosmic forces shaping your future so you can
        navigate with confidence.
      </p>

      <FeatureCard
        left={730}
        top={1730}
        highlighted
        title="Daily Horoscopes"
        desc="Get personalized daily, weekly, and monthly insights aligned with your zodiac."
        img={imgAstroIcon2}
      />
      <FeatureCard
        left={1238}
        top={1733}
        title="Today's Panchang"
        desc="Track auspicious timings and daily planetary alignments with precise accuracy."
        img={imgAstroIcon3}
      />
      <FeatureCard
        left={222}
        top={1730}
        title="Kundli Match"
        desc="Calculate deep relationship compatibility scores for a harmonious future together."
        img={imgAstroIcon1}
      />

      <div
        className="absolute bg-black border-[#fe9100] border-[0.5px] border-solid h-16 left-172 rounded-[40px] top-312 w-142.5 flex items-center gap-3 px-8"
        data-node-id="1:86"
      >
        <img alt="" className="size-8" src={imgTrophy} />
        <span className="font-normal text-[24px] text-white whitespace-pre">{`Top Choice  | Find Your True Direction  >`}</span>
      </div>
    </div>
  );
}
