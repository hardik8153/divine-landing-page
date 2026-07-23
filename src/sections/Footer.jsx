import { assetUrl } from "../assetUrl";

const imgLogo = assetUrl("image1_1_6.png");

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#020001] border-t border-white/10 pt-16 pb-12 text-gray-400 text-sm"
      id="footer"
    >
      <div className="w-full max-w-7xl mx-auto px-6">

        {/* Main Columns Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-left">

          {/* Column 1: Brand Info */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <img
              src={imgLogo}
              alt="DivineTalk Logo"
              className="h-12 w-auto object-contain self-start"
            />

            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              Divine is a faith tech platform that provides Astrology,
              Meditation, and Ayurveda under a single umbrella.
            </p>
          </div>


          {/* Column 2: Browse */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-base mb-1">
              Browse
            </h4>

            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href=""
                  className="hover:text-[#fe9100] transition-colors"
                >
                  Home
                </a>
              </li>

              {/* <li>
                <a
                  href="#features"
                  className="hover:text-[#fe9100] transition-colors"
                >
                  Services
                </a>
              </li> */}

              <li>
                <a
                  href="https://divinetalk.in/shop-pooja"
                  className="hover:text-[#fe9100] transition-colors"
                >
                  Shop
                </a>
              </li>

              <li>
                <a
                  href="https://divinetalk.in/privacy-policy"
                  className="hover:text-[#fe9100] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  // href="#contact"
                  className="hover:text-[#fe9100] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>


          {/* Column 3: Support */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-base mb-1">
              Support
            </h4>

            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="https://divinetalk.in/faq"
                  className="hover:text-[#fe9100] transition-colors"
                >
                  Faqs
                </a>
              </li>

              <li>
                <a
                  href="https://divinetalk.in/terms-and-condition"
                  className="hover:text-[#fe9100] transition-colors"
                >
                  Terms and condition
                </a>
              </li>

              <li>
                <a
                  href="https://divinetalk.in/privacy-policy"
                  className="hover:text-[#fe9100] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  // href=""
                  className="hover:text-[#fe9100] transition-colors"
                >
                  Referral and Cancelation policy
                </a>
              </li>
            </ul>
          </div>


          {/* Column 4: Get in Touch */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-3">

            <h4 className="text-white font-semibold text-base mb-1">
              Get in Touch
            </h4>

            <p className="text-gray-300 text-xs leading-relaxed">
              You are always welcome to contact us if you have any queries.
            </p>


            <div className="flex flex-col gap-2.5 mt-1 text-xs">

              <div className="flex items-center gap-2">
                <span className="text-[#fe9100]">
                  ✉
                </span>

                <span className="text-gray-300">
                  Support@Divinetalk.in
                </span>
              </div>


              <div className="flex items-center gap-2">
                <span className="text-[#fe9100]">
                  📞
                </span>

                <span className="text-gray-300">
                  +91 8104151935
                </span>
              </div>


              <div className="flex items-start gap-2 mt-1">

                <span className="text-[#fe9100]">
                  📍
                </span>

                <span className="text-gray-400 leading-relaxed">

                  504, Advent atri, Chincholi Bundar Road,
                  Malad West Mumbai - 400064.

                  <br />

                  <span className="text-gray-500 text-[11px] block mt-1">
                    Registered Add: F34, New Gitanjali CHS LTD,
                    Raheja Township Opp.Panchvati,
                    Malad East, Mumbai Suburban,
                    Maharashtra, 400097.
                  </span>

                </span>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500">

          © 2026. All Rights Reserved by DigiAstro Technologies Pvt Ltd.

        </div>

      </div>
    </footer>
  );
}
