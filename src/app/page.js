"use client";

import { createPortal } from "react-dom";
import { useRef, useEffect, useState } from "react";
import CMP from "@/lib/CMP/cmp.modal";
import BgVideo from "@/components/bg/bgVideo";
import CmpMenuOpen from "@/lib/CMP/cmp.triggerCtxMenu";
import CmpCtxMenu from "@/lib/CMP/cmp.ctxMenu";
import { useOverlays } from "@/lib/CMP/cmp.overlaysCtx";

export default function Page() {
  const { showCMP, showCtxMenu, setOverlay, overlayModes } = useOverlays();
  const [mounted, setMounted] = useState(false);
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
    <main className="w-screen h-auto flex-col flex items-center justify-center">
      <BgVideo src="hero-optimized.mp4" />

      {mounted && containerRef.current && (
        <>
          {showCMP &&
            createPortal(
              <CMP onClose={() => setOverlay(overlayModes.none)} />,
              containerRef.current
            )}

          {mounted &&
            containerRef.current &&
            !showCMP &&
            !showCtxMenu &&
            createPortal(<CmpMenuOpen />, containerRef.current)}

          {showCtxMenu &&
            createPortal(
              <CmpCtxMenu onClose={() => setOverlay(overlayModes.none)} />,
              containerRef.current
            )}
        </>
      )}
    </main>
  );
}
