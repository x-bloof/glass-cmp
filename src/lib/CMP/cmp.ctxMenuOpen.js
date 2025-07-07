"use client";

export default function CmpMenuOpen({ onClick }) {
  return (
    <div className="absolute z-20 flex items-center justify-center right-0 bottom-0 m-2 w-[40px] h-[40px] rounded-[8px] overflow-hidden backdrop">
      <div className="absolute inset-0 bg-white/25 z-0 pointer-events-auto" />

      <div
        className="absolute inset-0 rounded-[8px] z-10 pointer-events-none"
        style={{
          boxShadow: `inset 1px 1px 0 rgba(255,255,255,0.1),
                      inset 0 0 2px rgba(255,255,255,0.1)`,
        }}
      />
      <button onClick={onClick} className="relative z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="rgba(17,17,17,0.75)"
          className="bi bi-toggles z-20"
          viewBox="0 0 16 16"
        >
          <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m2.45 0A3.5 3.5 0 0 1 8 3.5 3.5 3.5 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7" />
        </svg>
      </button>
    </div>
  );
}
