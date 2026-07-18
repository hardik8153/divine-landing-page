const imgLogo = "/assets/image13_1_6.png";
const imgIconMail = "/assets/arrow.png";
const imgIconPhone = "/assets/arrow.png";
const imgIconPin = "/assets/arrow.png";

// 1:1 port of Figma node 1:253 "Frame 1261156794" (footer), placed at its exact page position (400, 7902)
export default function Footer() {
  return (
    <div
      className="absolute flex flex-col gap-8 items-center"
      style={{ left: 400, top: 7902, width: 1120 }}
      data-node-id="1:253"
    >
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col gap-6 items-start w-[213px]">
          <img alt="DivineTalk" className="h-16 w-auto object-contain" src={imgLogo} />
          <p className="text-white text-[12px] leading-normal">
            Divine is faith tech platform that provides Astrology, Meditation and Ayurveda under a single umbrella.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-start text-white w-[83px]">
          <p className="font-semibold text-[16px]">Browse</p>
          <div className="flex flex-col gap-2 text-[12px]">
            <a href="#home">Home</a>
            <a href="#features">Services</a>
            <a href="#shop">Shop</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-start text-white w-[191px]">
          <p className="font-semibold text-[16px]">Support</p>
          <div className="flex flex-col gap-2 text-[12px]">
            <a href="#faqs">Faqs</a>
            <a href="#terms">Terms and condition</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#referral">Referral and Cancelation policy</a>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-start text-white w-[283px]">
          <p className="font-semibold text-[16px]">Get in Touch</p>
          <p className="text-[12px]">You are always welcome to contact us if you have any queries</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img alt="" className="size-[32px]" src={imgIconMail} />
              <span className="text-[12px]">Support@Divintalk.in</span>
            </div>
            <div className="flex items-center gap-2">
              <img alt="" className="size-[32px]" src={imgIconPhone} />
              <span className="text-[12px]">+91 8104151935</span>
            </div>
            <div className="flex items-start gap-2">
              <img alt="" className="size-[32px]" src={imgIconPin} />
              <span className="text-[12px] leading-[16.875px]">
                504, Advent atri, Chincholi Bundar Road, Malad West Mumbai - 400064
                <br />
                Registered Add : F34, New Gitanjali CHS LTD, Raheja Township Opp.Panchvati,
                <br />
                Malad East, Mumbai Suburban, Maharashtra, 400097;
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-white text-[11.25px] text-center w-full">
        © 2022. All Rights Reserved by DigiAstro Technologies Pvt Ltd.
      </p>
    </div>
  );
}
