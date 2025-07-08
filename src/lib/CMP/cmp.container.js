export default function CmpContainer({ children }) {
  return (
    <div
      className="
      relative
      md:mx-2
      lg:w-1/2 lg:h-7/12 md:w-full md:h-1/2
    bg-[#1b1b1b]/65
      overflow-hidden
      rounded-xl
      backdrop
      shadow-[0_0px_24px_rgba(0,0,0,0.55),_0_0px_3px_rgba(0,0,0,0.35)]

      "
    >
      <div
        className="
          absolute
          inset-0
          "
        style={{
          boxShadow: `inset 1px 1px 0 rgba(255,255,255,0.25),
          inset 0 0 2px rgba(255,255,255,0.25)`,
        }}
      />

      <div
        className="
        relative
        flex flex-col justify-between
        gap-4
        h-dvh w-dvw md:w-full md:h-full
      text-white p-6
        "
      >
        {children}
      </div>
    </div>
  );
}
