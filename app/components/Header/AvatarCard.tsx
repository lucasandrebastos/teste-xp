import { CircleUserRound, LogOutIcon } from "lucide-react";

export default function AvatarCard() {
  return (
    <div className="bg-bgsecondary absolute top-24 right-12 border border-vgray rounded-md">
      <div className="border-b border-vgray flex p-2">
        <div className="justify-center w-1/3 ">
          <button type="button">
            <CircleUserRound width={20} height={20} />
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
      <button className="bg-bgsecondary flex p-3 hover:bg-bgprimary w-full">
        <LogOutIcon color="red" width={20} height={20} />
        <span className="text-vred ml-2 text-sm">Logout</span>
      </button>
    </div>
  );
}
