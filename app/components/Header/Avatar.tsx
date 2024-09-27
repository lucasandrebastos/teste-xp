import { useState } from "react";
import AvatarCard from "./AvatarCard";
import { CircleUserRound } from "lucide-react";

export default function Avatar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={(e) => setIsOpen(!isOpen)}
        className="rounded-full bg-bgprimary"
      >
        <CircleUserRound width={40} height={40} />
      </button>
      {isOpen && (
        <div>
          <AvatarCard />
        </div>
      )}
    </>
  );
}
