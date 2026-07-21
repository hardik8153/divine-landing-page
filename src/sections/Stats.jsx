const imgVectorSmartObject2 = "/assets/image6_1_6.png";
const imgAsset34X1 = "/assets/image7_1_6.png";
const imgAsset44X1 = "/assets/image8_1_6.png";
const imgRating = "/assets/rating.png";
const imgPhoneMockup = "/assets/image11_1_6.png";

const imgAvatarRahul = "/assets/image12_1_6.png";
const imgAvatarPriya = "/assets/image2_1_6.png";
const imgAvatarAnjali = "/assets/image3_1_6.png";
const imgAvatarVikram = "/assets/image4_1_6.png";

const testimonials = [
  {
    id: "rahul",
    name: "Rahul",
    avatar: imgAvatarRahul,
    text: "Is app ki wajah se main khud ko aur deeply samajh paaya hoon. Meri personalized readings bilkul spot on thi!",
  },
  {
    id: "priya",
    name: "Priya",
    avatar: imgAvatarPriya,
    text: "Yahan ki guidance se mujhe apne future aur relationships ko lekar kaafi clarity mili hai. Experts ki advice bahut trustworthy hai.",
  },
  {
    id: "anjali",
    name: "Anjali",
    avatar: imgAvatarAnjali,
    text: "Daily horoscopes aur insights ne mujhe life mein better decisions lene mein bahut help ki hai. Yeh app sach mein amazing hai!",
  },
  {
    id: "vikram",
    name: "Vikram",
    avatar: imgAvatarVikram,
    text: "Pehli baar kisi astrology app par itna trust hua hai. Yahan ke astrologers jo batate hain, wo ekdum sach aur accurate hota hai.",
  },
];

export default function Stats() {
  return (
    <section
      className="relative w-full py-20 md:py-32 bg-radial-astrology overflow-hidden"
      id="stats"
    >
      {/* Background Decorative Blur & Artwork */}
      <div className="absolute top-1/3 left-0 w-64 md:w-96 opacity-20 pointer-events-none select-none">
        <img src={imgVectorSmartObject2} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute top-80 md:top-30 -right-20 w-48 md:w-80 opacity-20 pointer-events-none select-none">
        <img src={imgAsset44X1} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute -bottom-10 -left-20 w-48 md:w-80 opacity-20 pointer-events-none select-none rotate-20">
        <img src={imgAsset34X1} alt="" className="w-full h-auto" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        {/* Pill Badge */}
        <div className="pill-badge">
          <img src={imgRating} className="w-5 h-5 object-contain" alt="" />
          <span>Success Stories | Hear from our community &gt;</span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-5xl leading-tight">
          Empowering Thousands With{" "}
          <span className="text-[#fe9100]">Precise Readings</span> and{" "}
          <span className="text-[#fe9100]">Life-Altering Advice.</span>
        </h2>

        <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
          See how our expert astrologers are helping people find true direction
          and peace of mind every single day.
        </p>

        {/* Desktop Showcase Grid (Phone center + Testimonials sides) */}
        <div className="mt-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Testimonials (Rahul & Priya) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {[testimonials[0], testimonials[1]].map((item) => (
              <div
                key={item.id}
                className="bg-[#100704] border border-[#8b5104] rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 hover:border-[#fe9100] shadow-lg shadow-black/50"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {item.name}
                    </h3>
                    <div className="text-[#fe9100] text-sm tracking-widest mt-1">
                      ★★★★★
                    </div>
                  </div>
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border border-[#8b5104]"
                  />
                </div>
                <hr className="my-4 border-[#8b5104]/30" />
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Center Phone Mockup */}
          <div className="hidden lg:col-span-4 md:flex justify-center items-center py-6">
            <div className="relative w-64 sm:w-80 md:w-96 max-w-full drop-shadow-[0_20px_50px_rgba(254,145,0,0.15)]">
              <img
                src={imgPhoneMockup}
                alt="DivineTalk App Interface"
                className="w-full h-auto object-contain pointer-events-none"
              />
            </div>
          </div>

          {/* Right Testimonials (Anjali & Vikram) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {[testimonials[2], testimonials[3]].map((item) => (
              <div
                key={item.id}
                className="bg-[#100704] border border-[#8b5104] rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 hover:border-[#fe9100] shadow-lg shadow-black/50"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {item.name}
                    </h3>
                    <div className="text-[#fe9100] text-sm tracking-widest mt-1">
                      ★★★★★
                    </div>
                  </div>
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border border-[#8b5104]"
                  />
                </div>
                <hr className="my-4 border-[#8b5104]/30" />
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
