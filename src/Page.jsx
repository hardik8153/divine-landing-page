import { useState, useEffect } from "react";
import HeroSection from "./sections/HeroSection.jsx";
import Features from "./sections/Features.jsx";
import Stats from "./sections/Stats.jsx";
import Steps from "./sections/Steps.jsx";
import CTA from "./sections/CTA.jsx";
import Footer from "./sections/Footer.jsx";

// This mirrors the Figma frame "Landing Page Divinetalk" (node 1:6)
// at its native size of 1920 x 8506px, pixel for pixel.
export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth < 768);
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="mobile-page max-w-107 mx-auto min-h-screen bg-[#020001] text-white relative">
        <style>{`
          #root > div {
            height: auto !important;
          }
          #root > div > div {
            transform: none !important;
            transform-origin: initial !important;
          }
        `}</style>
        <HeroSection isMobile={true} />
        <Features isMobile={true} />
        <Stats isMobile={true} />
        <Steps isMobile={true} />
        <CTA isMobile={true} />
        <Footer isMobile={true} />
      </div>
    );
  }

  return (
    <div className="relative bg-black" style={{ width: 1920, height: 8506 }}>
      <HeroSection isMobile={false} />
      <Features isMobile={false} />
      <Stats isMobile={false} />
      <Steps isMobile={false} />
      <CTA isMobile={false} />
      <Footer isMobile={false} />
    </div>
  );
}
