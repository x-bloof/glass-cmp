"use client";
import { createPortal } from "react-dom";
import { useRef, useEffect, useState } from "react";
import CMP from "@/lib/CMP/cmp.modal";
import BgVideo from "@/components/bg/bgVideo";
import BgSection from "@/components/bg/bgSection";
import CmpMenuOpen from "@/lib/CMP/cmp.ctxMenuOpen";
import CmpCtxMenu from "@/lib/CMP/cmp.ctxMenu";

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [showQuickMenu, setShowQuickMenu] = useState(false);
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
      <main className="w-screen h-screen flex-col flex items-center justify-center">
        {<BgVideo src="hero-optimized.mp4"></BgVideo>}

        <CmpMenuOpen
          onClick={() => {
            alert("ok");
          }}
        />
        <CmpCtxMenu />

        {mounted &&
          containerRef.current &&
          showCMP &&
          createPortal(
            <CMP onClose={() => setShowCMP(false)} />,
            containerRef.current
          )}
      </main>
    </>
  );
}
