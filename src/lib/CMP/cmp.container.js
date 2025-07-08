export default function CmpContainer({ children }) {
  return (
    <div
      className="relative 
      w-auto lg:w-[720px] min-h-[480px] 
      md:mx-2
    bg-[#1b1b1b]/35 
      rounded-lg 
      overflow-hidden
      shadow-[0_0px_24px_rgba(0,0,0,0.55),_0_0px_3px_rgba(0,0,0,0.35)]
      "
    >
      <div className="absolute inset-0 z-0 pointer-events-auto backdrop" />

      {/** Factoriser! */}

      <div
        className="absolute inset-0 z-10 pointer-events-auto rounded-lg"
        style={{
          boxShadow: `inset 1px 1px 0 rgba(255,255,255,0.25),
                inset 0 0 2px rgba(255,255,255,0.45)`,
        }}
      />

      <div
        className="relative z-10 
        flex flex-col gap-4 justify-between
        lg:w-[720px] min-h-[480px] 
        text-white p-6
        rounded-lg
        shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
        "
      >
        {children}
      </div>
    </div>
  );
}
