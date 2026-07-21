const imgStart = "/assets/rocket.png";

export default function CTA() {
  return (
    <section className="relative w-full py-24 md:py-36 bg-[#020001] overflow-hidden isolate" id="cta">
      {/* Background Banner */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <img
          src="/assets/image16_1_6.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#020001] via-transparent to-[#020001]" />
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        {/* Pill Badge */}
        <div className="pill-badge">
          <img src={imgStart} className="w-5 h-5 object-contain" alt="" />
          <span>Get Started | Let the stars guide you &gt;</span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Start Your Journey With{" "}
          <span className="text-[#fe9100]">DivineTalk</span>
        </h2>

        <p className="mt-6 text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
          Ready to find your answers? Unlock highly personalized insights, connect
          with top astrologers, and navigate your life's journey with absolute
          confidence.
        </p>

        {/* Action Button */}
        <div className="mt-10">
          <a
            href="#chat"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gradient-orange-red text-white text-lg sm:text-xl font-bold shadow-2xl shadow-orange-500/30 hover:scale-105 transition-transform"
          >
            Get Free Chat
          </a>
        </div>
      </div>
    </section>
  );
}
