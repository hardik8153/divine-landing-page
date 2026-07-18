const imgCancer4X1 = "/assets/image14_1_6.png";
const imgArrowDown = "/assets/arrow.png";
const imgGroup130755 = "/assets/image9_1_6.png";
const imgTrophy = "/assets/image8_1_6.png";

function FeatureCard({ left, top, highlighted, title, desc }) {
  return (
    <div className="absolute contents" style={{ left, top }}>
      <div
        className={`absolute bg-black h-[409px] rounded-[20px] w-[460px] ${
          highlighted ? "border border-[#fe9100]" : "border border-[rgba(255,255,255,0.5)]"
        }`}
        style={{ left, top }}
      />
      <div className="absolute size-[96px] rounded-full overflow-hidden bg-[#1a1a1a] flex items-center justify-center" style={{ left: left + 32, top: top + 32 }}>
        <img alt="" className="w-16 h-16 opacity-90" src={imgGroup130755} />
      </div>
      <p className="absolute font-bold text-[32px] text-white whitespace-nowrap" style={{ left: left + 32, top: top + 148 }}>
        {title}
      </p>
      <p className="absolute font-normal text-[24px] text-[#939393] w-[396px]" style={{ left: left + 32, top: top + 208 }}>
        {desc}
      </p>
      <a href="#download" className="absolute font-bold text-[28px] text-[#fe9100] flex items-center gap-2" style={{ left: left + 32, top: top + 342 }}>
        Get App
        <img alt="" className="w-4 h-6 -rotate-90" src={imgArrowDown} />
      </a>
    </div>
  );
}

// 1:1 port of Figma node 1:34 "features"
export default function Features() {
  return (
    <div className="contents" data-node-id="1:34">
      <div className="absolute h-[1223px] left-[423px] top-[1810px] w-[1094px] rounded-full bg-[#3a1a05] opacity-40 blur-[80px]" />
      <div className="absolute h-[809px] left-[1431px] top-[1453px] w-[810px] overflow-hidden opacity-20">
        <img alt="" className="w-full h-full object-cover" src={imgCancer4X1} />
      </div>

      <div className="absolute left-[222px] top-[2306px] w-[1476px] border-t border-white/15" data-node-id="1:39" />

      <p className="absolute font-extrabold leading-[90px] left-[390px] text-[72px] text-center text-white top-[1360px] w-[1122px] capitalize" data-node-id="1:41">
        Experience Our <span className="text-[#fe9100]">Premium Astrology Feature</span>
      </p>

      <p className="absolute font-normal leading-[normal] left-[488px] text-[#939393] text-[24px] text-center top-[1588px] w-[943px]" data-node-id="1:42">
        Get instant, deep insights into your life's path. Our leading astrology feature reveals the cosmic forces shaping your future so you can navigate with confidence.
      </p>

      <FeatureCard
        left={730}
        top={1730}
        highlighted
        title="Daily Horoscopes"
        desc="Get personalized daily, weekly, and monthly insights aligned with your zodiac."
      />
      <FeatureCard
        left={1238}
        top={1733}
        title="Today's Panchang"
        desc="Track auspicious timings and daily planetary alignments with precise accuracy."
      />
      <FeatureCard
        left={222}
        top={1730}
        title="Kundli Match"
        desc="Calculate deep relationship compatibility scores for a harmonious future together."
      />

      <div className="absolute bg-black border-[#fe9100] border-[0.5px] border-solid h-[64px] left-[688px] rounded-[40px] top-[1248px] w-[545px] flex items-center gap-3 px-8" data-node-id="1:86">
        <img alt="" className="size-[32px]" src={imgTrophy} />
        <span className="font-normal text-[24px] text-white whitespace-pre">{`Top Choice  | Find Your True Direction  >`}</span>
      </div>
    </div>
  );
}
