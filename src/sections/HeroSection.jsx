import { useState } from "react";

const imgBgLanding1 = "/assets/image0_1_6.png";
const imgLightLogo4X1 = "/assets/image1_1_6.png";
const imgEllipse1728 = "/assets/image2_1_6.png";
const imgEllipse1729 = "/assets/image3_1_6.png";
const imgEllipse1730 = "/assets/image4_1_6.png";
const imgArrowDown = "/assets/arrow.png";
const imgHeart = "/assets/Vector.png";

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full min-h-screen flex flex-col justify-between bg-[#020001] overflow-hidden isolate" id="home">
      {/* Background Hero Banner */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <img
          src={imgBgLanding1}
          alt=""
          className="w-full h-full object-cover object-top opacity-60 md:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#020001]" />
      </div>

      {/* Navigation Bar */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-20">
        <a href="#home" className="flex items-center">
          <img
            src={imgLightLogo4X1}
            alt="DivineTalk Astrology"
            className="h-10 md:h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10 text-lg font-medium">
          <a href="#home" className="text-[#fe9100] font-bold hover:opacity-80 transition-opacity">
            Home
          </a>
          <a href="#features" className="text-white hover:text-[#fe9100] transition-colors">
            Our Features
          </a>
          <a href="#steps" className="text-white hover:text-[#fe9100] transition-colors">
            Download Our App
          </a>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="#chat"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-orange-red text-white text-lg font-bold shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform"
          >
            Get Free Chat
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 border border-white/20 rounded-lg flex flex-col items-center justify-center gap-1.5 focus:outline-none bg-black/40 backdrop-blur-md"
          aria-label="Toggle navigation menu"
        >
          <span className={`w-5 h-0.5 bg-white transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-white transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#020001]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-center z-30 animate-fade-in">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#fe9100] font-bold text-lg py-2"
          >
            Home
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-lg py-2"
          >
            Our Features
          </a>
          <a
            href="#steps"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-lg py-2"
          >
            Download Our App
          </a>
          <a
            href="#chat"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center w-full py-3 rounded-full bg-gradient-orange-red text-white font-bold"
          >
            Get Free Chat
          </a>
        </div>
      )}

      {/* Hero Content Section */}
      <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-24 flex flex-col items-center lg:items-start text-center lg:text-left z-10 my-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-3xl">
          Your Answers Are Just{" "}
          <span className="block lg:inline text-[#fe9100]">A Tap Away!</span>
        </h1>

        <p className="mt-6 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
          Get personalized guidance, deep insights, and expert advice anytime,
          anywhere. Download the DivineTalk app today and take the first step
          toward clarity.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
          <a
            href="#chat"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-orange-red text-white text-lg sm:text-xl font-bold shadow-xl shadow-orange-600/30 hover:scale-105 transition-transform"
          >
            Get Free Chat
          </a>

          <a
            href="#features"
            className="flex items-center gap-2 text-white text-sm sm:text-base hover:text-[#fe9100] transition-colors"
          >
            <span>Scroll Down To Know More</span>
            <img src={imgArrowDown} alt="" className="w-4 h-4" />
          </a>
        </div>

        {/* Social Proof Capsule */}
        <div className="mt-12 inline-flex items-center gap-3 border border-white/20 rounded-full py-2.5 px-6 bg-black/60 backdrop-blur-md">
          <div className="flex -space-x-3">
            <img
              src={imgEllipse1728}
              className="w-8 h-8 rounded-full border-2 border-black object-cover"
              alt=""
            />
            <img
              src={imgEllipse1729}
              className="w-8 h-8 rounded-full border-2 border-black object-cover"
              alt=""
            />
            <img
              src={imgEllipse1730}
              className="w-8 h-8 rounded-full border-2 border-black object-cover"
              alt=""
            />
          </div>
          <img src={imgHeart} className="w-5 h-5" alt="" />
          <span className="text-white text-xs sm:text-sm font-medium">
            3 Crore+ Users Trusts Divinetalk
          </span>
        </div>
      </div>
    </header>
  );
}
