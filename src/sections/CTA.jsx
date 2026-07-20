const imgStart = "/assets/rocket.png";

// 1:1 port of Figma node 1:241-1:252 "CTA website"
export default function CTA({ isMobile }) {
  if (isMobile) {
    return (
      <section className="m-cta" id="cta">
        {/* <img
          alt=""
          className="w-full h-full object-cover"
          src="/assets/image16_1_6.png"
        /> */}
        <div className="m-pill">
          <img
            src={imgStart}
            className="w-3.5 h-3.5 inline-block mr-2 align-middle"
            alt=""
          />
          <span className="align-middle">
            Get Started | Let the stars guide you &gt;
          </span>
        </div>

        <h2>
          Start Your Journey with <em>DivineTalk</em>
        </h2>

        <p>
          Ready to find your answers? Unlock highly personalized insights,
          connect with top astrologers, and navigate your life's journey with
          absolute confidence.
        </p>

        <a href="#chat" className="m-button" style={{ marginTop: 32 }}>
          Get Free Chat
        </a>
      </section>
    );
  }

  // Desktop Layout
  return (
    <div className="contents" data-node-id="cta">
      <div
        className="absolute h-193.5 left-0 top-[6964px] w-[1920px] overflow-hidden"
        data-node-id="1:241"
      >
        <img
          alt=""
          className="w-full h-full object-cover"
          src="/assets/image16_1_6.png"
        />
      </div>

      <p
        className="absolute font-extrabold leading-[normal] left-55.5 text-[56px] text-center text-white top-[7242px] w-369"
        data-node-id="1:243"
      >
        Start Your Journey with DivineTalk
      </p>

      <p
        className="absolute font-normal leading-[normal] left-124.25 text-[#939393] text-[24px] text-center top-[7380px] w-235.75"
        data-node-id="1:244"
      >
        Ready to find your answers? Unlock highly personalized insights, connect
        with top astrologers, and navigate your life's journey with absolute
        confidence.
      </p>

      <div
        className="absolute bg-black border-[#fe9100] border-[0.5px] border-solid h-16 left-173 rounded-[40px] top-[7130px] w-134.25 flex items-center gap-3 px-8"
        data-node-id="1:245"
      >
        <img alt="" className="size-8" src={imgStart} />
        <span className="font-normal text-[24px] text-white whitespace-pre">{`Get Started | Let the stars guide you  >`}</span>
      </div>

      <a
        href="#chat"
        className="absolute bg-linear-to-r from-[#fe9100] h-18 left-201.5 rounded-[36px] to-[#d92439] top-[7502px] w-76.75 flex items-center justify-center"
        data-node-id="1:250"
      >
        <span className="font-bold text-[32px] text-white whitespace-nowrap">
          Get Free Chat
        </span>
      </a>
    </div>
  );
}
