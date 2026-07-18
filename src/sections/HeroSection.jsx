const imgBgLanding1 = "/assets/image0_1_6.png";
const imgLightLogo4X1 = "/assets/image1_1_6.png";
const imgEllipse1728 = "/assets/image2_1_6.png";
const imgEllipse1729 = "/assets/image3_1_6.png";
const imgEllipse1730 = "/assets/image4_1_6.png";
const imgArrowDown = "/assets/arrow.png";
const imgHeart = "/assets/Vector.png";

// 1:1 port of Figma node 1:7 "hero section" — coordinates match the design exactly.
export default function HeroSection() {
  return (
    <div className="contents" data-node-id="1:7">
      <div className="absolute h-[1080px] left-0 top-0 w-[1920px]" data-node-id="1:8">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBgLanding1} />
      </div>

      <div className="absolute font-['Gilroy-ExtraBold','Poppins',sans-serif] leading-[0] left-[164px] top-[289px] w-[786px]" data-node-id="1:9">
        <p className="leading-[90px] mb-0 text-[72px] text-white font-extrabold">Your Answers Are</p>
        <p className="leading-[90px] text-[#fe9100] text-[72px] font-extrabold">Just a Tap Away!</p>
      </div>

      <div className="absolute h-[64px] left-[164px] top-[94px] w-[239px]" data-node-id="1:10">
        <img alt="DivineTalk" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLightLogo4X1} />
      </div>

      <div className="absolute contents left-[1534px] top-[95px]" data-node-id="1:11">
        <a href="#chat" className="absolute bg-gradient-to-r from-[#fe9100] h-[62px] left-[1534px] rounded-[36px] to-[#d92439] top-[95px] w-[222px] flex items-center justify-center" data-node-id="1:12">
          <span className="font-bold text-[24px] text-white whitespace-nowrap">Get Free Chat</span>
        </a>
      </div>

      <div className="absolute contents left-[809px] top-[113px]" data-node-id="1:14">
        <a href="#features" className="absolute font-normal leading-[normal] left-[927px] text-[20px] text-white top-[113px] whitespace-nowrap" data-node-id="1:15">
          Our Features
        </a>
        <a href="#download" className="absolute font-normal leading-[normal] left-[1110px] text-[20px] text-white top-[113px] whitespace-nowrap" data-node-id="1:16">
          Download Our App
        </a>
        <a href="#home" className="absolute font-bold leading-[normal] left-[809px] text-[20px] text-[#fe9100] top-[113px]" data-node-id="1:17">
          Home
        </a>
      </div>

      <div className="absolute contents left-[164px] top-[652px]" data-node-id="1:18">
        <p className="absolute font-normal leading-[normal] left-[503px] text-[24px] text-white top-[673px] whitespace-nowrap" data-node-id="1:19">
          Scroll Down To Know More
        </p>
        <div className="absolute h-[24px] left-[809px] top-[676px] w-[16px] rotate-180" data-node-id="1:20">
          <img alt="" className="block max-w-none mr-5 size-full" src={imgArrowDown} />
        </div>
        <a href="#chat" className="absolute contents left-[164px] top-[652px]" data-node-id="1:21">
          <div className="absolute bg-gradient-to-r from-[#fe9100] h-[72px] left-[164px] rounded-[36px] to-[#d92439] top-[652px] w-[307px] flex items-center" data-node-id="1:22">
            <span className="font-bold text-[32px] text-white whitespace-nowrap absolute left-[48px]">Get Free Chat</span>
          </div>
        </a>
      </div>

      <p className="absolute font-normal leading-[normal] left-[164px] text-[#939393] text-[24px] top-[501px] w-[824px]" data-node-id="1:24">
        Get personalized guidance, deep insights, and expert advice anytime, anywhere. Download the DivineTalk app today and take the first step toward clarity.
      </p>

      <div className="absolute contents left-[164px] top-[788px]" data-node-id="1:25">
        <div className="absolute bg-black border-[0.5px] border-[rgba(255,255,255,0.5)] border-solid h-[64px] left-[164px] rounded-[40px] top-[788px] w-[565px]" data-node-id="1:26" />
        <div className="absolute left-[308px] size-[32px] top-[804px]" data-node-id="1:27">
          <img alt="" className="block max-w-none size-full" src={imgHeart} />
        </div>
        <img alt="" className="absolute left-[172px] size-[48px] top-[796px] rounded-full" src={imgEllipse1728} />
        <img alt="" className="absolute left-[206px] size-[48px] top-[796px] rounded-full" src={imgEllipse1729} />
        <img alt="" className="absolute left-[240px] size-[48px] top-[796px] rounded-full" src={imgEllipse1730} />
        <p className="absolute font-normal leading-[normal] left-[360px] text-[24px] text-white top-[805px] whitespace-pre" data-node-id="1:32">{`3 Crore+ Users Trusts Divinetalk  `}</p>
      </div>

      <div className="absolute left-[222px] top-[1080px] w-[1476px] border-t border-white/15" data-node-id="1:33" />
    </div>
  );
}
