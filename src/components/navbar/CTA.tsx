import { ModeToggle } from "../mode-toggle";
import ProfileDropMenu from "../profile/ProfileDropMenu";
import { Button } from "../ui/button";

const CTA = ({ IsAuthenticated }: { IsAuthenticated: boolean }) => {
  return (
    <div className="flex  items-center gap-1">
      <ModeToggle />
      {IsAuthenticated ? (
        <ProfileDropMenu />
      ) : (
        <Button size={"sm"} variant={"outline"}>
          Login
        </Button>
      )}
    </div>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export default CTA