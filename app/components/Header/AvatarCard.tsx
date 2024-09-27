import { LogOutIcon } from "lucide-react";

export default function AvatarCard() {
  return (
    <div className="bg-bgprimary absolute top-24 right-12 border-2 border-vgray rounded-md">
      <div className="bg-bgprimary border-b border-vgray flex p-2">
        <div className="justify-center w-1/3 ">
          <button type="button">
            <div className="rounded-full w-5 h-5 bg-primary" />
          </button>
        </div>
        <div className="flex flex-col w-w/3">
          <button className="text-primary text-left font-normal">
            My profile
          </button>
          <button
            type="button"
            className="text-vgray text-left flex-wrap text-xs "
          >
            Change setting of your account
          </button>
        </div>
      </div>
      <button className="bg-bgprimary flex p-3 hover:bg-bgsecondary w-full">
        <LogOutIcon />
        <span className="text-vred ml-2">Logout</span>
      </button>
    </div>
  );
}
