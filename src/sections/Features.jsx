const imgCancer4X1 = "/assets/image5_1_6.png";
const imgArrowDown = "/assets/arrow.png";
const imgAstroIcon1 = "/assets/mandala.png";
const imgAstroIcon2 = "/assets/dailyHoroscope2.png";
const imgAstroIcon3 = "/assets/todayPanchang.png";
const imgTrophy = "/assets/trophy.png";

const featureItems = [
  {
    id: "kundli",
    title: "Kundli Match",
    desc: "Calculate deep relationship compatibility scores for a harmonious future together.",
    img: imgAstroIcon1,
    highlighted: false,
  },
  {
    id: "horoscope",
    title: "Daily Horoscopes",
    desc: "Get personalized daily, weekly, and monthly insights aligned with your zodiac.",
    img: imgAstroIcon2,
    highlighted: true,
  },
  {
    id: "panchang",
    title: "Today's Panchang",
    desc: "Track auspicious timings and daily planetary alignments with precise accuracy.",
    img: imgAstroIcon3,
    highlighted: false,
  },
];

export default function Features() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-radial-astrology overflow-hidden" id="features">
      {/* Background Decorative Blur & Zodiac Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#fe9100]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 -right-25 w-48 md:w-80 opacity-20 pointer-events-none select-none -rotate-45">
        <img src={imgCancer4X1} alt="" className="w-full h-auto object-contain" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        {/* Pill Badge */}
        <div className="pill-badge">
          <img src={imgTrophy} className="w-5 h-5 object-contain" alt="" />
          <span>Top Choice | Find Your True Direction &gt;</span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl leading-tight">
          Experience Our{" "}
          <span className="text-[#fe9100]">Premium Astrology Feature</span>
        </h2>

        <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
          Get instant, deep insights into your life's path. Our leading astrology
          feature reveals the cosmic forces shaping your future so you can navigate
          with confidence.
        </p>

        {/* Responsive Feature Cards Grid */}
        <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {featureItems.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col justify-between p-8 rounded-2xl bg-black/80 backdrop-blur-md text-left transition-all duration-300 hover:-translate-y-1 ${
                item.highlighted
                  ? "border-2 border-[#fe9100] shadow-lg shadow-orange-500/10"
                  : "border border-white/20 hover:border-white/40"
              }`}
            >
              <div>
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center p-3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <a
                href="#steps"
                className="mt-8 inline-flex items-center gap-2 text-[#fe9100] font-bold text-base hover:gap-3 transition-all"
              >
                <span>Get App</span>
                <img
                  src={imgArrowDown}
                  alt=""
                  className="w-3.5 h-3.5 -rotate-90"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
