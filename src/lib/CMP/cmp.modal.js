"use client";

import ConsentFields from "@/lib/CMP/consent.fields";
import CmpContainer from "@/lib/CMP/cmp.container";
import { useOverlays } from "@/lib/CMP/cmp.overlaysCtx";
import { useState } from "react";

export default function CMP() {
  const [view, setView] = useState("default");
  const { reset, resetAll } = useOverlays();
  return (
    <div
      className={`
        fixed inset-0 z-10 
        flex items-center justify-center
        backdrop
        transition-opacity duration-500 ease-in-out
        ${reset ? "opacity-0" : "opacity-100"}
      `}
    >
      {view === "default" && (
        <CmpContainer>
          <p className="text-xl mb-4 font-light">Bienvenue</p>
          <p>
            Ce site utilise des cookies pour améliorer votre expérience, mesurer
            l’audience et afficher des contenus personnalisés. Vous pouvez
            accepter, refuser ou personnaliser vos préférences à tout moment.
            Votre consentement est conservé pendant 6 mois, conformément au
            RGPD.
          </p>

          <small>
            À tout moment, modifiez vos préférences en appuyant sur
            l'icône
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="rgba(255,255,255,0.75)"
              className="z-20 inline mx-2 align-baseline"
              viewBox="0 0 16 16"
            >
              <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m2.45 0A3.5 3.5 0 0 1 8 3.5 3.5 3.5 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7" />
            </svg>
            en bas à droite de l'écran.
          </small>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <button className="
                      w-[120px]
                      py-1 rounded
                      bg-transparent 
                      text-gray-400 
                      shadow-inner ring-1 ring-white/5">
              Refuser
            </button>
            <button
              id="personnalize"
              onClick={() => setView("personnalize")}
              className="
                w-[180px] 
                py-1 
                rounded 
                bg-transparent 
                text-gray-100 
                shadow-inner 
                ring-1 ring-white/5"
            >
              Personnaliser mes choix
            </button>

            <button
              id="accept"
              onClick={resetAll}
              className="
                w-[180px]
                py-1 
                rounded
                bg-gradient-to-b from-gray-300 to-gray-50 
                text-[#1b1b1b]
                shadow-inner ring-1 ring-black/5"
            >
              Accepter
            </button>
          </div>
        </CmpContainer>
      )}
      {view === "personnalize" && (
        <CmpContainer>
          <p className="text-xl mb-4 font-light">Personnaliser mes choix</p>

          <ConsentFields />

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <button
              id=""
              onClick={() => setView("default")}
              className="
                w-[120px] 
                py-1 
                rounded 
                bg-transparent 
                text-gray-400 
                shadow-inner ring-1 ring-white/5"
            >
              Retour
            </button>
            <button  className="
                        w-[180px] 
                        py-1 
                        rounded 
                        bg-transparent 
                        text-gray-100 
                        shadow-inner 
                        ring-1 ring-white/5"
                >
              Confirmer mes choix
            </button>
            <button
              id="accept"
              onClick={resetAll}
              className="
                w-[180px]
                py-1
                rounded
                bg-gradient-to-b from-gray-300 to-gray-100
                text-[#1b1b1b]
                shadow-inner ring-1 ring-black/5"
            >
              Tout accepter
            </button>
          </div>
        </CmpContainer>
      )}
    </div>
  );
}
