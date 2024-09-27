"use client";
import { usePathname } from "next/navigation";

export default function BreadCrumbs() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    pathname === "/dashboard" && (
      <div className="text-secondary m-5">
        <a href="/" className="">
          Home
        </a>

        <a href="dashboard" className=" m-1">
          {pathname}
        </a>
      </div>
    )
  );
}
