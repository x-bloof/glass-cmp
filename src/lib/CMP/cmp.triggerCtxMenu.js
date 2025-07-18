"use client";

import { useOverlays } from "@/lib/CMP/cmp.overlaysCtx";

export default function CmpMenuOpen() {
  const { setOverlay, overlayModes } = useOverlays();
  return (
    <div
      className="fixed z-10
      flex items-center justify-center
      right-0 bottom-0
      w-10 h-10 m-2"
    >
<button className="p-3" onClick={() => setOverlay(overlayModes.ctx_menu)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="rgba(17,17,17,0.7)"
          className="bi bi-toggles z-20"
          viewBox="0 0 16 16"
        >
          <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m2.45 0A3.5 3.5 0 0 1 8 3.5 3.5 3.5 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7" />
        </svg>
      </button>
    </div>
  );
}
