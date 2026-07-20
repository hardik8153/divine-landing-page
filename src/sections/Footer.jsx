const imgLogo = "/assets/image1_1_6.png";

// 1:1 port of Figma node 1:253 "Frame 1261156794" (footer), placed at its exact page position (400, 7902)
export default function Footer({ isMobile }) {
  if (isMobile) {
    return (
      <footer className="m-footer" id="footer">
        {/* <img alt="DivineTalk" src={imgLogo} />
        <p>
          Divine is a faith tech platform that provides Astrology, Meditation and Ayurveda under a single umbrella.
        </p>

        <div style={{ marginTop: 32, display: "flex", gap: 48, flexWrap: "wrap" }}>
          <div>
            <p style={{ fontWeight: 600, fontSize: 14, color: "#fff", marginBottom: 12 }}>Browse</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 12, color: "#939393" }}>
              <a href="#home" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
              <a href="#features" style={{ color: "inherit", textDecoration: "none" }}>Services</a>
              <a href="#shop" style={{ color: "inherit", textDecoration: "none" }}>Shop</a>
              <a href="#privacy" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</a>
              <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</a>
            </div>
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: 14, color: "#fff", marginBottom: 12 }}>Support</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 12, color: "#939393" }}>
              <a href="#faqs" style={{ color: "inherit", textDecoration: "none" }}>Faqs</a>
              <a href="#terms" style={{ color: "inherit", textDecoration: "none" }}>Terms and condition</a>
              <a href="#privacy" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</a>
              <a href="#referral" style={{ color: "inherit", textDecoration: "none" }}>Referral and Cancelation policy</a>
            </div>
          </div>
        </div> */}

        <div
          style={{
            marginTop: 32,
            fontSize: 12,
            color: "#939393",
            lineHeight: 1.65,
          }}
        >
          <p
            style={{
              fontWeight: 600,
              fontSize: 14,
              color: "#fff",
              marginBottom: 8,
            }}
          >
            Get in Touch
          </p>
          <p>You are always welcome to contact us if you have any queries.</p>
          <p>Mail us at : Support@Divinetalk.in</p>
          <p style={{ marginTop: 4 }}>
            Contact us on whatsapp : +91 8104151935
          </p>
          <p style={{ marginTop: 4, fontSize: 11 }}>
            Our Head Office : 504, Advent atri, Chincholi Bundar Road, Malad
            West Mumbai - 400064 Registered Add : F34, New Gitanjali CHS LTD,
            Raheja Township Opp.Panchvati, Malad East, Mumbai Suburban,
            Maharashtra, 400097.
          </p>
        </div>

        <p
          style={{
            marginTop: 40,
            fontSize: 11,
            color: "#555",
            textAlign: "center",
          }}
        >
          © 2026. All Rights Reserved by DigiAstro Technologies Pvt Ltd.
        </p>
      </footer>
    );
  }

  // Desktop Layout
  return (
    <div
      className="absolute flex flex-col gap-8 items-center"
      style={{ left: 400, top: 7902, width: 1120 }}
      data-node-id="1:253"
    >
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col gap-6 items-start w-[213px]">
          <img
            alt="DivineTalk"
            className="h-16 w-auto object-contain"
            src={imgLogo}
          />
          <p className="text-white text-[12px] leading-normal">
            Divine is faith tech platform that provides Astrology, Meditation
            and Ayurveda under a single umbrella.
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
          <p className="text-[12px]">
            You are always welcome to contact us if you have any queries
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[12px]">✉</span>
              <span className="text-[12px]">Support@Divintalk.in</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[12px]">📞</span>
              <span className="text-[12px]">+91 8104151935</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[12px]">📍</span>
              <span className="text-[12px] leading-[16.875px]">
                504, Advent atri, Chincholi Bundar Road, Malad West Mumbai -
                400064 Registered Add : F34, New Gitanjali CHS LTD, Raheja
                Township Opp.Panchvati, Malad East, Mumbai Suburban,
                Maharashtra, 400097;
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-white text-[11.25px] text-center w-full">
        © 2026. All Rights Reserved by DigiAstro Technologies Pvt Ltd.
      </p>
    </div>
  );
}
