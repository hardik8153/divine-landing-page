import Page from "./Page.jsx";
import { useState, useEffect, useRef } from "react";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 8506;

export default function App() {
  const [scale, setScale] = useState(1);
  const [mobile, setMobile] = useState(() => window.innerWidth < 768);
  const wrapperRef = useRef(null);

  const getPlayStoreUrlWithReferrer = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const referrer = searchParams.toString();

    return `https://play.google.com/store/apps/details?id=app.divine${
      referrer ? `&referrer=${encodeURIComponent(referrer)}` : ""
    }`;
  };

  useEffect(() => {
    const isAndroid = /Android/i.test(navigator.userAgent);
    const location = window.location;

    if (isAndroid && location.pathname === "/" && location.search) {
      const appUrl = `intent://divinetalk.in/${location.search}#Intent;scheme=https;package=app.divine;end`;

      const playStoreUrl = getPlayStoreUrlWithReferrer();

      window.location.href = appUrl;

      setTimeout(() => {
        window.location.href = playStoreUrl;
      }, 2000);
    }
  }, []);

  useEffect(() => {
    function updateScale() {
      const width =
        wrapperRef.current?.parentElement?.clientWidth ??
        window.innerWidth;

      setScale(width / DESIGN_WIDTH);
      setMobile(width < 768);
    }

    updateScale();

    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="bg-black min-h-screen w-full overflow-x-hidden text-white font-sans selection:bg-[#fe9100] selection:text-black"
    >
      <Page />
    </div>
  );
}