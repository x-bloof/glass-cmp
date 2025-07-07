export default function Toggle({ className, type, checked, onChange }) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        className={className}
        type={type}
        checked={checked}
        onChange={onChange}
      />
      <div
        className="relative w-8 h-4
        bg-transparent rounded-full
        transition-colors duration-450 ease-in-out
        peer dark:bg-transparent peer-checked:bg-[#2ecc71]
        after:content-[''] after:absolute after:top-0 after:left-0
        after:bg-white/60 after:rounded-full after:h-4 after:w-4
        after:transition-transform after:duration-450 after:ease-in-out
        peer-checked:after:translate-x-4
        after:will-change-transform
        shadow-[0_0_0_1px_rgba(255,255,255,0.10)]"
      />
    </label>
  );
}
