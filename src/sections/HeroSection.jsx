const imgBgLanding1 = "/assets/image0_1_6.png";
const imgLightLogo4X1 = "/assets/image1_1_6.png";
const imgEllipse1728 = "/assets/image2_1_6.png";
const imgEllipse1729 = "/assets/image3_1_6.png";
const imgEllipse1730 = "/assets/image4_1_6.png";
const imgArrowDown = "/assets/arrow.png";
const imgHeart = "/assets/Vector.png";

// 1:1 port of Figma node 1:7 "hero section" — coordinates match the design exactly.
export default function HeroSection({ isMobile }) {
  if (isMobile) {
    return (
      <div
        className="m-hero relative w-full h-225 px-8 pt-7.5 flex flex-col items-center overflow-hidden"
        data-node-id="782-244"
      >
        {/* Navigation Bar */}
        <div className="m-nav w-full flex justify-between items-center z-10">
          <img
            src={imgLightLogo4X1}
            className="w-26 h-auto opacity-100"
            alt="DivineTalk Astrology"
          />
          <button className="w-10 h-10 border border-white/20 rounded flex flex-col justify-center items-center gap-1 focus:outline-none">
            <span className="w-4.5 h-0.5 bg-white"></span>
            <span className="w-4.5 h-0.5 bg-white"></span>
            <span className="w-4.5 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Hero Copy */}
        <div className="m-hero-copy w-full max-w-75 flex flex-col items-center mt-14.5 text-center z-10">
          <h1 className="text-[35px] font-extrabold leading-[1.18] text-white text-center">
            Your Answers Are Just
            <em className="block text-[#fe9100] not-italic">A Tap Away!</em>
          </h1>
          <p className="text-[#939393] text-[13px] leading-[1.55] mt-5.5 text-center">
            Get personalized guidance, deep insights, and expert advice anytime,
            anywhere. Download the DivineTalk app today and take the first step
            toward clarity.
          </p>
          <a
            href="#chat"
            className="m-button inline-flex items-center justify-center min-w-33 h-10 mt-6.5 px-5 bg-linear-to-r from-[#fe9100] to-[#d92439] rounded-full text-white text-[12px] font-bold no-underline shadow-lg"
          >
            Get Free Chat
          </a>
        </div>

        {/* Scroll link */}
        <div className="mt-6.5 flex items-center justify-center gap-1.25 z-10">
          <span className="text-[12px] font-normal text-white">
            Scroll Down To Know More
          </span>
          <span className="text-[#fe9100] font-bold text-[12px]">↓</span>
        </div>

        {/* Social Proof Capsule */}
        <div className="mt-6 flex items-center gap-2 border border-white/30 rounded-full py-1.5 px-4 bg-black/60 backdrop-blur-sm z-10">
          <div className="flex -space-x-2.5">
            <img
              src={imgEllipse1728}
              className="w-6 h-6 rounded-full border border-black"
              alt=""
            />
            <img
              src={imgEllipse1729}
              className="w-6 h-6 rounded-full border border-black"
              alt=""
            />
            <img
              src={imgEllipse1730}
              className="w-6 h-6 rounded-full border border-black"
              alt=""
            />
          </div>
          <img src={imgHeart} className="w-4 h-4" alt="" />
          <span className="text-white text-[11px] font-medium">
            3 Crore+ Users Trusts Divinetalk
          </span>
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="contents" data-node-id="1:7">
      <div
        className="absolute h-270 left-0 top-0 w-[1920px]"
        data-node-id="1:8"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgBgLanding1}
        />
      </div>

      <div
        className="absolute font-['Gilroy-ExtraBold','Poppins',sans-serif] leading-0 left-41 top-72.25 w-196.5"
        data-node-id="1:9"
      >
        <p className="leading-22.5 mb-0 text-[72px] text-white font-extrabold">
          Your Answers Are
        </p>
        <p className="leading-22.5 text-[#fe9100] text-[72px] font-extrabold">
          Just A Tap Away!
        </p>
      </div>

      <div
        className="absolute h-16 left-41 top-23.5 w-59.75"
        data-node-id="1:10"
      >
        <img
          alt="DivineTalk"
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgLightLogo4X1}
        />
      </div>

      <div
        className="absolute contents left-383.5 top-23.75"
        data-node-id="1:11"
      >
        <a
          href="#chat"
          className="absolute bg-linear-to-r from-[#fe9100] h-15.5 left-383.5 rounded-[36px] to-[#d92439] top-23.75 w-55.5 flex items-center justify-center"
          data-node-id="1:12"
        >
          <span className="font-bold text-[24px] text-white whitespace-nowrap">
            Get Free Chat
          </span>
        </a>
      </div>

      <div
        className="absolute contents left-202.25 top-28.25"
        data-node-id="1:14"
      >
        <a
          href="#features"
          className="absolute font-normal leading-[normal] left-231.75 text-[20px] text-white top-28.25 whitespace-nowrap"
          data-node-id="1:15"
        >
          Our Features
        </a>
        <a
          href={window.getPlayStoreLink()}
          className="absolute font-normal leading-[normal] left-277.5 text-[20px] text-white top-28.25 whitespace-nowrap"
          data-node-id="1:16"
        >
          Download Our App
        </a>
        <a
          href="#home"
          className="absolute font-bold leading-[normal] left-202.25 text-[20px] text-[#fe9100] top-28.25"
          data-node-id="1:17"
        >
          Home
        </a>
      </div>

      <div
        className="absolute contents left-41 top-163"
        data-node-id="1:18"
      >
        <p
          className="absolute font-normal leading-[normal] left-125.75 text-[24px] text-white top-168.25 whitespace-nowrap"
          data-node-id="1:19"
        >
          Scroll Down To Know More
        </p>
        <div
          className="absolute h-6 left-207.25 top-170 w-4"
          data-node-id="1:20"
        >
          <img
            alt=""
            className="block max-w-none mr-5 size-full"
            src={imgArrowDown}
          />
        </div>
        <a
          href="#chat"
          className="absolute contents left-41 top-163"
          data-node-id="1:21"
        >
          <div
            className="absolute bg-linear-to-r from-[#fe9100] h-18 left-41 rounded-[36px] to-[#d92439] top-163 w-76.75 flex items-center"
            data-node-id="1:22"
          >
            <span className="font-bold text-[32px] text-white whitespace-nowrap absolute left-12">
              Get Free Chat
            </span>
          </div>
        </a>
      </div>

      <p
        className="absolute font-normal leading-[normal] left-41 text-[#939393] text-[24px] top-125.25 w-206"
        data-node-id="1:24"
      >
        Get personalized guidance, deep insights, and expert advice anytime,
        anywhere. Download the DivineTalk app today and take the first step
        toward clarity.
      </p>

      <div
        className="absolute contents left-41 top-197"
        data-node-id="1:25"
      >
        <div
          className="absolute bg-black border-[0.5px] border-[rgba(255,255,255,0.5)] border-solid h-16 left-41 rounded-[40px] top-197 w-147.5"
          data-node-id="1:26"
        />
        <div
          className="absolute left-77 size-8 top-201"
          data-node-id="1:27"
        >
          <img alt="" className="block max-w-none size-full" src={imgHeart} />
        </div>
        <img
          alt=""
          className="absolute left-43 size-12 top-199 rounded-full"
          src={imgEllipse1728}
        />
        <img
          alt=""
          className="absolute left-51.5 size-12 top-199 rounded-full"
          src={imgEllipse1729}
        />
        <img
          alt=""
          className="absolute left-60 size-12 top-199 rounded-full"
          src={imgEllipse1730}
        />
        <p
          className="absolute font-normal leading-[normal] left-90 text-[24px] text-white top-201.25 whitespace-pre"
          data-node-id="1:32"
        >{`3 Crore+ Users Trusts Divinetalk  `}</p>
      </div>

      <div
        className="absolute left-55.5 top-270 w-369 border-t border-white/15"
        data-node-id="1:33"
      />
    </div>
  );
}
