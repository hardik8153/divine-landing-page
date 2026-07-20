const imgVectorSmartObject2 = "/assets/image6_1_6.png";
const imgAsset34X1 = "/assets/image7_1_6.png";
const imgAsset44X1 = "/assets/image8_1_6.png";
const imgRating = "/assets/rating.png";
const imgPhoneMockup = "/assets/image11_1_6.png";

const imgAvatarRahul = "/assets/image12_1_6.png";
const imgAvatarPriya = "/assets/image2_1_6.png";
const imgAvatarAnjali = "/assets/image3_1_6.png";
const imgAvatarVikram = "/assets/image4_1_6.png";

function TestimonialCard({ left, top, w, name, text, textH, avatar }) {
  return (
    <div
      className="absolute bg-[#100704] border border-[#8b5104] rounded-3xl flex flex-col gap-4 p-8 animate-fade-in"
      style={{ left, top, width: w, minHeight: 294 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white text-[28px] font-medium leading-none mb-2">{name}</p>
          <span className="text-[#fe9100] text-[20px] tracking-[2px] block mb-2">★★★★★</span>
        </div>
        <img alt={name} className="w-16 h-16 rounded-full object-cover" src={avatar} />
      </div>
      <hr className="border-[#8b5104]/30" />
      <p className="text-[#939393] text-[20px] leading-relaxed" style={{ minHeight: textH }}>
        {text}
      </p>
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
      <div className="absolute h-[637px] left-[363px] top-[2416px] w-[1195px] opacity-20 overflow-hidden">
        <img
          alt=""
          className="w-full h-full object-cover"
          src={imgVectorSmartObject2}
        />
      </div>
      <div className="absolute h-[611px] left-[-176px] top-[3395px] w-[522px] opacity-20 overflow-hidden rotate-[22deg]">
        <img alt="" className="w-full h-full object-cover" src={imgAsset34X1} />
      </div>
      <div className="absolute h-[416px] left-[1666px] top-[2518px] w-[392px] opacity-15 overflow-hidden">
        <img alt="" className="w-full h-full object-cover" src={imgAsset44X1} />
      </div>

      <div
        className="absolute bg-black border-[#fe9100] border-[0.5px] border-solid h-[64px] left-[658px] rounded-[40px] top-[2470px] w-[633px] flex items-center gap-3 px-8"
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
        className="absolute font-normal leading-[normal] left-[497px] text-[#939393] text-[24px] text-center top-[2810px] w-[943px]"
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
        avatar={imgAvatarRahul}
      />
      <TestimonialCard
        left={293}
        top={3408}
        w={382}
        name="Priya"
        text="Yahan ki guidance se mujhe apne future aur relationships ko lekar kaafi clarity mili hai. Experts ki advice bahut trustworthy hai."
        textH={120}
        avatar={imgAvatarPriya}
      />
      <TestimonialCard
        left={1283}
        top={3053}
        w={382}
        name="Anjali"
        text="Daily horoscopes aur insights ne mujhe life mein better decisions lene mein bahut help ki hai. Yeh app sach mein amazing hai!"
        textH={120}
        avatar={imgAvatarAnjali}
      />
      <TestimonialCard
        left={1251}
        top={3504}
        w={382}
        name="Vikram"
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
        className="absolute h-0 left-[222px] top-[3972px] w-[1476px] border-t border-white/15"
        data-node-id="1:108"
      />
    </div>
  );
}
