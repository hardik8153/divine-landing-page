const imgVectorSmartObject2 = "/assets/image6_1_6.png";
const imgAsset34X1 = "/assets/image7_1_6.png";
const imgAsset44X1 = "/assets/image8_1_6.png";
const imgRating = "/assets/rating.png";
const imgPhoneMockup = "/assets/image11_1_6.png";

const imgAvatarRahul = "/assets/image12_1_6.png";
const imgAvatarPriya = "/assets/image2_1_6.png";
const imgAvatarAnjali = "/assets/image3_1_6.png";
const imgAvatarVikram = "/assets/image4_1_6.png";

function TestimonialCard({ left, top, w, name, text, avatar, pointerSide }) {
  return (
    <div
      className="absolute animate-fade-in flex items-start"
      style={{ left, top, width: w, zIndex: 20 }}
    >
      <div className="relative w-full bg-[#0c0905] border border-[#fe9100]/60 rounded-[28px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.7)]">

        {/* Header: Name and Avatar */}
        <div className="flex justify-between items-start mb-1">
          <div>
            <h3 className="text-white text-[26px] font-semibold leading-tight">{name}</h3>
            {/* 5 Stars */}
            <div className="flex gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#fe9100] text-xl">★</span>
              ))}
            </div>
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10">
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-white/15 my-5"></div>

        {/* Review Text */}
        <p className="text-[#b3b3b3] text-[18px] leading-[1.6] font-light">
          {text}
        </p>

        {/* Speech Bubble Arrow (Pointer) */}
        <div
          className={`absolute top-12 w-5 h-5 bg-[#0c0905] border-t border-l border-[#fe9100]/60 z-30
            ${pointerSide === 'left'
              ? '-left-[11px] -rotate-45'
              : '-right-[11px] rotate-[135deg]'
            }`}
        ></div>
      </div>
    </div>
  );
}

// 1:1 port of Figma nodes 1:102 (bg) + 1:116-1:204 (stats/testimonials)
export default function Stats({ isMobile }) {
  if (isMobile) {
    return (
      <section className="m-stories relative" id="stats">
        <div className="absolute h-52 -right-20 top-50  w-49 opacity-20 overflow-hidden">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={imgAsset44X1}
          />
        </div>
        <div className="absolute h-65.5 -left-18 -bottom-10  w-55.75 opacity-20 overflow-hidden rotate-22">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={imgAsset34X1}
          />
        </div>
        <div className="m-pill">
          <img
            src={imgRating}
            className="w-3.5 h-3.5 inline-block mr-2 align-middle"
            alt=""
          />
          <span className="align-middle">
            Success Stories | Hear from our community &gt;
          </span>
        </div>

        <h2>
          Empowering thousands with <em>Precise Readings</em> And{" "}
          <em>Life-Altering</em>
        </h2>

        <p className="m-lead">
          See how our expert astrologers are helping people find true direction
          and peace of mind every single day.
        </p>

        <div className="m-review-list">
          {/* Card 1: Rahul */}
          <div className="m-review">
            <img src={imgAvatarRahul} alt="Rahul" />
            <h3>Rahul</h3>
            <b>★★★★★</b>
            <p>
              Is app ki wajah se main khud ko aur deeply samajh paaya hoon. Meri
              personalized readings bilkul spot on thi!
            </p>
          </div>

          {/* Card 2: Anjali */}
          <div className="m-review">
            <img src={imgAvatarAnjali} alt="Anjali" />
            <h3>Anjali</h3>
            <b>★★★★★</b>
            <p>
              Daily horoscopes aur insights ne mujhe life mein better decisions
              lene mein bahut help ki hai. Yeh app sach mein amazing hai!
            </p>
          </div>

          {/* Card 3: Priya */}
          <div className="m-review">
            <img src={imgAvatarPriya} alt="Priya" />
            <h3>Priya</h3>
            <b>★★★★★</b>
            <p>
              Yahan ki guidance se mujhe apne future aur relationships ko lekar
              kaafi clarity mili hai. Experts ki advice bahut trustworthy hai.
            </p>
          </div>

          {/* Card 4: Vikram */}
          <div className="m-review">
            <img src={imgAvatarVikram} alt="Vikram" />
            <h3>Vikram</h3>
            <b>★★★★★</b>
            <p>
              Pehli baar kisi astrology app par itna trust hua hai. Yahan ke
              astrologers jo batate hain, wo ekdum sach aur accurate hota hai.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Desktop Layout
  return (
    <div className="contents" data-node-id="stats">
      {/* decorative background */}
      <div className="absolute h-159.25 left-90.75 top-[2416px] w-298.75 opacity-20 overflow-hidden">
        <img
          alt=""
          className="w-full h-full object-cover"
          src={imgVectorSmartObject2}
        />
      </div>
      <div className="absolute h-152.75 -left-44 top-[3395px] w-130.5 opacity-20 overflow-hidden rotate-22">
        <img alt="" className="w-full h-full object-cover" src={imgAsset34X1} />
      </div>
      <div className="absolute h-104 left-[1666px] top-[2518px] w-98 opacity-15 overflow-hidden">
        <img alt="" className="w-full h-full object-cover" src={imgAsset44X1} />
      </div>

      <div
        className="absolute bg-black border-[#fe9100] border-[0.5px] border-solid h-16 left-164.5 rounded-[40px] top-[2470px] w-158.25 flex items-center gap-3 px-8"
        data-node-id="1:118"
      >
        <img alt="" className="size-8" src={imgRating} />
        <span className="font-normal text-[24px] text-white whitespace-pre">{`Success Stories | Hear from our community >`}</span>
      </div>
      <p
        className="absolute font-normal left-55.5 text-[72px] text-center text-white top-[2582px] w-369 capitalize"
        data-node-id="1:116"
      >
        Empowering thousands with{" "}
        <span className="text-[#fe9100]">precise readings </span> and
        <span className="text-[#fe9100]"> Life-altering advice.</span>
      </p>

      <p
        className="absolute font-normal leading-[normal] left-124.25 text-[#939393] text-[24px] text-center top-[2810px] w-235.75"
        data-node-id="1:117"
      >
        See how our expert astrologers are helping people find true direction
        and peace of mind every single day.
      </p>

      <TestimonialCard
        left={261}
        top={3021}
        w={382}
        name="Rahul"
        text="Is app ki wajah se main khud ko aur deeply samajh paaya hoon. Meri personalized readings bilkul spot on thi!"
        textH={96}
        pointerSide="right"
        avatar={imgAvatarRahul}
      />
      <TestimonialCard
        left={293}
        top={3408}
        w={382}
        name="Priya"
        text="Yahan ki guidance se mujhe apne future aur relationships ko lekar kaafi clarity mili hai. Experts ki advice bahut trustworthy hai."
        textH={120}
        pointerSide="right"
        avatar={imgAvatarPriya}
      />
      <TestimonialCard
        left={1283}
        top={3053}
        w={382}
        name="Anjali"
        text="Daily horoscopes aur insights ne mujhe life mein better decisions lene mein bahut help ki hai. Yeh app sach mein amazing hai!"
        textH={120}
        pointerSide="left"
        avatar={imgAvatarAnjali}
      />
      <TestimonialCard
        left={1251}
        top={3504}
        w={382}
        name="Vikram"
        pointerSide="left"
        text="Pehli baar kisi astrology app par itna trust hua hai. Yahan ke astrologers jo batate hain, wo ekdum sach aur accurate hota hai."
        textH={120}
        avatar={imgAvatarVikram}
      />

      {/* Center Phone Mockup */}
      <div
        className="absolute overflow-hidden flex items-center justify-center pointer-events-none select-none"
        style={{ left: 710, top: 2950, width: 500, height: 960 }}
      >
        <img
          alt=""
          className="w-full h-full object-contain"
          src={imgPhoneMockup}
        />
      </div>

      <div
        className="absolute h-0 left-55.5 top-[3972px] w-369 border-t border-white/15"
        data-node-id="1:108"
      />
    </div>
  );
}
