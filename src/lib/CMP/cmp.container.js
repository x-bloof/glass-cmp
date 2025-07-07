export default function CmpContainer({ children }) {
  return (
    <div className="relative w-auto lg:w-[720px] min-h-[480px] rounded-lg overflow-hidden">
      {/* couche de filtre */}

      <div className="absolute inset-0 z-0 glass-filter pointer-events-none" />

      <div
        className="absolute inset-0 z-2 pointer-events-none rounded-lg"
        style={{
          boxShadow: `inset 1px 1px 0 rgba(255,255,255,0.25),
                inset 0 0 2px rgba(255,255,255,0.45)`,
        }}
      />

      <div
        className="absolute inset-0 
        z-0 glass-filter 
        pointer-events-none
        bg-transparent
        "
        aria-hidden="true"
      />

      {/* contenu net au-dessus */}
      <div
        className="relative z-10 flex flex-col gap-4 justify-between
        lg:w-[720px] min-h-[480px] text-white p-6
        shadow-[0_0_0_1px_rgba(255,255,255,0.05)] rounded-lg"
      >
        {children}
      </div>
    </div>
  );
}
