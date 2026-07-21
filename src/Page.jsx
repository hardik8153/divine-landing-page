import HeroSection from "./sections/HeroSection.jsx";
import Features from "./sections/Features.jsx";
import Stats from "./sections/Stats.jsx";
import Steps from "./sections/Steps.jsx";
import CTA from "./sections/CTA.jsx";
import Footer from "./sections/Footer.jsx";

export default function Page() {
  return (
    <main className="relative bg-[#020001] text-white w-full overflow-hidden font-gilroy">
      <HeroSection />
      <Features />
      <Stats />
      <Steps />
      <CTA />
      <Footer />
    </main>
  );
}
