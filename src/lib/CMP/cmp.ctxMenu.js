"use client";

import ConsentFields from "@/lib/CMP/consent.fields";
import { useEffect, useState } from "react";

export default function CmpCtxMenu({ onClose }) {
  const [closing, setClosing] = useState(false);
  const closeModal = () => setClosing(true);

  useEffect(() => {
    if (!closing) return;
    const timeout = setTimeout(() => {
      onClose();
    }, 700);
    return () => clearTimeout(timeout);
  }, [closing, onClose]);

  return (
    <div
      className={`
         fixed z-20
         flex flex-col items-start
         right-0 bottom-0 
         md:m-2 p-4 
         w-screen h-screen md:w-[380px] md:h-[488px] 
         rounded-[8px] 
         bg-[#1b1b1b]/65
         shadow-[0_0px_24px_rgba(0,0,0,0.55),_0_0px_3px_rgba(0,0,0,0.35)]
         backdrop
        transition-opacity duration-700 ease-in-out
        ${closing ? "opacity-0" : "opacity-100"}
        `}
    >
      <div className="absolute inset-0 rounded-[8px] z-10 pointer-events-none border-glass" />

      <ConsentFields />
      <div className="flex gap-4 mt-4 text-gray-200">
        <button className="w-[138px] py-1 rounded bg-transparent  shadow-inner ring-1 ring-white/5">
          Annuler
        </button>
        <button
          onClick={closeModal}
          className="w-[138px] py-1 rounded bg-transparent shadow-inner ring-1 ring-white/5"
        >
          Comirmer
        </button>
      </div>
    </div>
  );
}
