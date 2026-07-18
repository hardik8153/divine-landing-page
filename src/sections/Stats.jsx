const imgVectorSmartObject2 = "/assets/image6_1_6.png";
const imgAsset34X1 = "/assets/image7_1_6.png";
const imgAsset44X1 = "/assets/image8_1_6.png";
const imgRating = "/assets/image9_1_6.png";
const imgAvatar = "/assets/image12_1_6.png";
const imgStars = "/assets/image10_1_6.png";

function TestimonialCard({ left, top, w, name, text, textH }) {
  return (
    <div
      className="absolute bg-black border border-white/15 rounded-[24px] flex flex-col gap-4 p-8"
      style={{ left, top, width: w, minHeight: 294 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white text-[28px] font-medium leading-none mb-2">{name}</p>
          <img alt="rating" className="h-5" src={imgStars} />
        </div>
        <img alt={name} className="w-16 h-16 rounded-full object-cover" src={imgAvatar} />
      </div>
      <hr className="border-white/15" />
      <p className="text-[#939393] text-[20px]" style={{ minHeight: textH }}>
        {text}
      </p>
    </div>
  );
}

// 1:1 port of Figma nodes 1:102 (bg) + 1:116-1:204 (stats/testimonials)
export default function Stats() {
  return (
    <div className="contents" data-node-id="stats">
      {/* decorative background */}
      <div className="absolute h-[637px] left-[363px] top-[2416px] w-[1195px] opacity-20 overflow-hidden">
        <img alt="" className="w-full h-full object-cover" src={imgVectorSmartObject2} />
      </div>
      <div className="absolute h-[762px] left-[-176px] top-[3395px] w-[713px] opacity-20 overflow-hidden rotate-[22deg]">
        <img alt="" className="w-full h-full object-cover" src={imgAsset34X1} />
      </div>
      <div className="absolute h-[416px] left-[1666px] top-[2518px] w-[392px] opacity-15 overflow-hidden">
        <img alt="" className="w-full h-full object-cover" src={imgAsset44X1} />
      </div>

      <div className="absolute bg-black border-[#fe9100] border-[0.5px] border-solid h-[64px] left-[658px] rounded-[40px] top-[2470px] w-[603px] flex items-center gap-3 px-8" data-node-id="1:118">
        <img alt="" className="size-[32px]" src={imgRating} />
        <span className="font-normal text-[24px] text-white whitespace-pre">{`Success Stories | Hear from our community  >`}</span>
      </div>

      <p className="absolute font-extrabold leading-[90px] left-[222px] text-[64px] text-white top-[2582px] w-[1476px]" data-node-id="1:116">
        Empowering thousands with precise readings and life-altering advice.
      </p>

      <p className="absolute font-normal leading-[normal] left-[497px] text-[#939393] text-[24px] text-center top-[2810px] w-[943px]" data-node-id="1:117">
        See how our expert astrologers are helping people find true direction and peace of mind every single day.
      </p>

      <TestimonialCard
        left={261}
        top={3021}
        w={382}
        name="Rahul"
        text="Is app ki wajah se main khud ko aur deeply samajh paaya hoon. Meri personalized readings bilkul spot on thi!"
        textH={96}
      />
      <TestimonialCard
        left={293}
        top={3408}
        w={382}
        name="Priya"
        text="Yahan ki guidance se mujhe apne future aur relationships ko lekar kaafi clarity mili hai. Experts ki advice bahut trustworthy hai."
        textH={120}
      />
      <TestimonialCard
        left={1283}
        top={3053}
        w={382}
        name="Anjali"
        text="Daily horoscopes aur insights ne mujhe life mein better decisions lene mein bahut help ki hai. Yeh app sach mein amazing hai!"
        textH={120}
      />
      <TestimonialCard
        left={1251}
        top={3504}
        w={382}
        name="Vikram"
        text="Pehli baar kisi astrology app par itna trust hua hai. Yahan ke astrologers jo batate hain, wo ekdum sach aur accurate hota hai."
        textH={120}
      />

      <div className="absolute h-0 left-[222px] top-[3972px] w-[1476px] border-t border-white/15" data-node-id="1:108" />
    </div>
  );
}
