"use client";

import { fields } from "@/lib/CMP/consent.fields.map";
import Toggle from "./cmp.toggle";

export default function CmpCtxMenu() {
  return (
    <div className="absolute z-20 flex flex-col items-start justify-center right-0 bottom-0 m-2 p-4 w-[380px] h-[450px] rounded-[8px] backdrop">
      <div className="absolute inset-0 bg-white/25 z-0 rounded-[8px]" />
      <div
        className="absolute inset-0 rounded-[8px] z-10 pointer-events-none glass-filter"
        style={{
          boxShadow: `inset 1px 1px 0 rgba(255,255,255,0.3),
                      inset 0 0 2px rgba(255,255,255,0.1)`,
        }}
      />
      <div className="flex flex-col gap-6">
        {fields.map(({ id, label, description }) => (
          <div key={id} className="flex items-center justify-between gap-6">
            <div className="flex flex-col gap-0.5">
              <p className="text-white font-light">{label}</p>
              <small className="text-white transition-opacity duration-450 ease-in-out">
                {description}
              </small>
            </div>
            <Toggle className={"sr-only peer"} type="checkbox" />
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-4">
        <button className="w-[138px] py-1 rounded bg-transparent text-gray-200 shadow-inner ring-1 ring-white/5">
          Annuler
        </button>
        <button className="w-[138px] py-1 rounded bg-transparent text-gray-200 shadow-inner ring-1 ring-white/5">
          Comirmer
        </button>
      </div>
    </div>
  );
}
