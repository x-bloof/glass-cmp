"use client";

import ConsentFields from "@/lib/CMP/consent.fields";
import { useOverlays } from "@/lib/CMP/cmp.overlaysCtx";

export default function CmpCtxMenu() {
  const { reset, resetAll } = useOverlays();
  return (
    <div
      className={`
         fixed z-10
         flex flex-col items-start
         right-0 bottom-0 
         md:m-2 p-4 
         w-dvw h-dvh md:w-[380px] md:h-[544px]
         rounded-lg
         bg-[#1b1b1b]/65
         backdrop
         shadow-[0_0px_24px_rgba(0,0,0,0.55),_0_0px_3px_rgba(0,0,0,0.35)]
         transition-opacity duration-500 ease-in-out
         ${reset ? "opacity-0" : "opacity-100"}`}
    >
      <div
        className="
          absolute 
          inset-0
          rounded-lg
          pointer-events-none
         "
        style={{
          boxShadow: `inset 1px 1px 0 rgba(255,255,255,0.25),
          inset 0 0 2px rgba(255,255,255,0.25)`,
        }}
      />

      <ConsentFields />
      <div className="flex gap-4 mt-4 text-gray-200">
        <button className="w-[138px] py-1 rounded bg-transparent shadow-inner ring-1 ring-white/5">
          Annuler
        </button>
        <button
          onClick={resetAll}
          className="w-[138px] py-1 rounded bg-transparent shadow-inner ring-1 ring-white/5"
        >
          Comirmer
        </button>
      </div>
    </div>
  );
}
