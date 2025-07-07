"use client";

import { useState, useEffect } from "react";
import ConsentFields from "@/lib/CMP/consent.fields";
import CmpContainer from "@/lib/CMP/cmp.container";

export default function CMP({ onClose }) {
  const [view, setView] = useState("default");
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
        fixed inset-0 z-10 flex items-center justify-center
        bg-black/25 backdrop
        transition-opacity duration-700 ease-in-out
        ${closing ? "opacity-0" : "opacity-100"}
      `}
    >
      {view === "default" && (
        <CmpContainer>
          <p className="text-xl mb-4 font-light">Bienvenue</p>
          <p className="text-sm text-white">
            Ce site utilise des cookies pour améliorer votre expérience, mesurer
            l’audience et afficher des contenus personnalisés. Vous pouvez
            accepter, refuser ou personnaliser vos préférences à tout moment.
            Votre consentement est conservé pendant 6 mois, conformément au
            RGPD.
          </p>

          <div className="flex gap-4 mt-4">
            <button className="w-[120px] py-1 rounded bg-transparent text-gray-400 shadow-inner ring-1 ring-white/5">
              Refuser
            </button>
            <button
              id="personnalize"
              onClick={() => setView("personnalize")}
              className="w-[180px] py-1 rounded bg-transparent text-gray-200 shadow-inner ring-1 ring-white/5"
            >
              Personnaliser mes choix
            </button>

            <button
              id="accept"
              onClick={closeModal}
              className="w-[180px] py-1 rounded bg-gradient-to-b from-gray-300 to-gray-50 text-[#1b1b1b] shadow-inner ring-1 ring-black/5"
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

          <div className="flex gap-4 mt-8">
            <button
              id=""
              onClick={() => setView("default")}
              className="w-[120px] 
                py-1 
                rounded 
                bg-transparent text-gray-400 
                shadow-inner ring-1 ring-white/5"
            >
              Retour
            </button>
            <button className="w-[180px] py-1 rounded bg-gradient-to-b from-gray-300 to-gray-100 text-[#1b1b1b] shadow-inner ring-1 ring-black/5">
              Confirmer mes choix
            </button>
            <button
              id="accept"
              onClick={closeModal}
              className="w-[180px] py-1 rounded bg-gradient-to-b from-gray-300 to-gray-100 text-[#1b1b1b] shadow-inner ring-1 ring-black/5"
            >
              Tout accepter
            </button>
          </div>
        </CmpContainer>
      )}
    </div>
  );
}
