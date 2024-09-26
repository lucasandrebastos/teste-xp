import Image from "next/image";
import Avatar from "./Avatar";
import Logo from "../../../public/saturno-logo-1.svg";
import Navigation from "../Navigation";

export default function Header() {
  return (
    <header className="flex justify-between px-7 py-3 rounded-md bg-vblue">
      <div className="flex items-center">
        <a className="" href={"#"}>
          <Image color="white" width={50} height={50} src={Logo} alt="logo" />
        </a>
        <Navigation />
      </div>

      <div className="flex items-center">
        <Avatar />
      </div>
    </header>
  );
}
