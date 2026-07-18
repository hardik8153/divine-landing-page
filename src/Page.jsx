import HeroSection from "./sections/HeroSection.jsx";
import Features from "./sections/Features.jsx";
import Stats from "./sections/Stats.jsx";
import Steps from "./sections/Steps.jsx";
import CTA from "./sections/CTA.jsx";
import Footer from "./sections/Footer.jsx";

// This mirrors the Figma frame "Landing Page Divinetalk" (node 1:6)
// at its native size of 1920 x 8506px, pixel for pixel.
export default function Page() {
  return (
    <div className="relative bg-black" style={{ width: 1920, height: 8506 }}>
      <HeroSection />
      <Features />
      <Stats />
      <Steps />
      <CTA />
      <Footer />
    </div>
  );
}
