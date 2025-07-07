"use client";
import { createPortal } from "react-dom";
import { useRef, useEffect, useState } from "react";
import CMP from "@/lib/CMP/cmp.modal";
import BgSection from "@/components/bg/bgSection";
import BgVideo from "@/components/bg/bgVideo";

export default function Page() {
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
    <>
      <main className="w-screen h-auto flex-col flex items-center justify-center">
        <BgVideo src="hero-optimized.mp4"></BgVideo>

        {mounted &&
          containerRef.current &&
          createPortal(<CMP />, containerRef.current)}
      </main>
    </>
  );
}
