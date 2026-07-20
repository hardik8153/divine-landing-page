import { useEffect, useRef, useState } from "react";
import Page from "./Page.jsx";
// import MobilePage from "./MobilePage.jsx";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 8506;

export default function App() {
  const [scale, setScale] = useState(1);
  const [mobile, setMobile] = useState(() => window.innerWidth < 768);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function updateScale() {
      const width = wrapperRef.current?.parentElement?.clientWidth ?? window.innerWidth;
      setScale(width / DESIGN_WIDTH);
      setMobile(width < 768);
    }
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);


  return (
    <div
      className="bg-black w-full overflow-hidden"
      style={{ height: DESIGN_HEIGHT * scale }}
      ref={wrapperRef}
    >
      <div style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}>
        <Page />
      </div>
    </div>
  );
}
