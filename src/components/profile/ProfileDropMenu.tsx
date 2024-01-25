import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProfileAvatar from "./ProfileAvatar";

const ProfileDropMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ProfileAvatar className="w-8 h-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="mr-7 flex items-center gap-2">
          <ProfileAvatar className="w-14 h-14"/>
          <div className="flex flex-col">
            <span className="font-bold">Alexandru</span>
            <span className="text-gray-400 text-xs">gd69435@gmail.com</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropMenu;
