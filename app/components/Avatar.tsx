import { useState } from "react";

export default function Avatar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={(e) => setIsOpen(!isOpen)}
      className="rounded-full w-10 h-10 bg-black"
    ></button>
  );
}
