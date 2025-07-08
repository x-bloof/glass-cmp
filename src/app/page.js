"use client";
import { createPortal } from "react-dom";
import { useRef, useEffect, useState } from "react";
import CMP from "@/lib/CMP/cmp.modal";
import BgVideo from "@/components/bg/bgVideo";
import CmpMenuOpen from "@/lib/CMP/cmp.openCtxMenu";
import CmpCtxMenu from "@/lib/CMP/cmp.ctxMenu";
//import BgSection from "@/components/bg/bgSection";

export default function Page() {
  const [showCtxMenu, setShowCtxMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showCMP, setShowCMP] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = document.createElement("div");
    document.body.appendChild(el);
    containerRef.current = el;
    setMounted(true);

    return () => {
      document.body.removeChild(el);
    };
  }, []);

  return (
    <>
      <main className="w-screen h-auto flex-col flex items-center justify-center">
        {<BgVideo src="hero-optimized.mp4"></BgVideo>}

        {mounted &&
          containerRef.current &&
          showCMP &&
          createPortal(
            <CMP onClose={() => setShowCMP(false)} />,
            containerRef.current
          )}

        {mounted &&
          containerRef.current &&
          createPortal(
            <CmpMenuOpen
              onClick={() => {
                setShowCtxMenu(true);
              }}
            />,
            containerRef.current
          )}

        {showCtxMenu &&
          mounted &&
          containerRef.current &&
          createPortal(
            <CmpCtxMenu onClose={() => setShowCtxMenu(false)} />,
            containerRef.current
          )}
      </main>
    </>
  );
}
