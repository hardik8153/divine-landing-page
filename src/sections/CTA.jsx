const imgCtaBg = "/assets/image16_1_6.png";
const imgStart = "/assets/image8_1_6.png";

// 1:1 port of Figma node 1:241-1:252 "CTA website"
export default function CTA() {
  return (
    <div className="contents" data-node-id="cta">
      <div className="absolute h-[774px] left-0 top-[6964px] w-[1920px] overflow-hidden" data-node-id="1:241">
        <img alt="" className="w-full h-full object-cover" src={imgCtaBg} />
      </div>

      <p className="absolute font-extrabold leading-[normal] left-[222px] text-[56px] text-center text-white top-[7242px] w-[1476px]" data-node-id="1:243">
        start Your Journey with DivineTalk
      </p>

      <p className="absolute font-normal leading-[normal] left-[497px] text-[#939393] text-[24px] text-center top-[7380px] w-[943px]" data-node-id="1:244">
        Ready to find your answers? Unlock highly personalized insights, connect with top astrologers, and navigate your life's journey with absolute confidence.
      </p>

      <div className="absolute bg-black border-[#fe9100] border-[0.5px] border-solid h-[64px] left-[692px] rounded-[40px] top-[7130px] w-[537px] flex items-center gap-3 px-8" data-node-id="1:245">
        <img alt="" className="size-[32px]" src={imgStart} />
        <span className="font-normal text-[24px] text-white whitespace-pre">{`Get Started | Let the stars guide you  >`}</span>
      </div>

      <a
        href="#chat"
        className="absolute bg-gradient-to-r from-[#fe9100] h-[72px] left-[806px] rounded-[36px] to-[#d92439] top-[7502px] w-[307px] flex items-center justify-center"
        data-node-id="1:250"
      >
        <span className="font-bold text-[32px] text-white whitespace-nowrap">Get Free Chat</span>
      </a>
    </div>
  );
}
