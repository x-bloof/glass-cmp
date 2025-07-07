import { fields } from "@/lib/CMP/consent.fields.map";
import Toggle from "./cmp.toggle";

export default function ConsentFields() {
  return (
    <div className="flex flex-col gap-6">
      {fields.map(({ id, label, description }) => (
        <div key={id} className="flex items-center justify-between gap-6">
          <div className="flex flex-col gap-0.5">
            <p className="text-white font-light">{label}</p>
            <small className="text-gray-300">Finalité :</small>
            <small className="text-white transition-opacity duration-450 ease-in-out">
              {description}
            </small>
          </div>

          <Toggle className={"sr-only peer"} type="checkbox" />
        </div>
      ))}
    </div>
  );
}
