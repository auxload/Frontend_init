import { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";
import { Menu, X } from "lucide-react";

const MobileNavigation = () => {
  const [open, setOpen] = useState<boolean | false>(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const menuBtnRef = useRef<any>();
  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  function handleWindowClick(e: MouseEvent) {
    if (menuBtnRef.current && !menuBtnRef.current.contains(e.target as Node)) {
      setOpen(false);
      return;
    }
    setOpen(true);
  }

  return (
    <div>
      <Menu ref={menuBtnRef} className=" md:hidden cursor-pointer" />
      <div
        className={`absolute ${
          !open && "-translate-x-full"
        } w-1/2 bg-background transition  ${
          open && "shadow-[0_0px_0px_9999px_rgba(0,0,0,0.7)]"
        }  left-0 top-0 h-screen grid `}
      >
        <X className="z-50 ml-8 mt-4 absolute  cursor-pointer" />
        <Navigation
          flexCol={true}
          className=" md:hidden flex items-center justify-center "
        />
      </div>
    </div>
  );
};

export default MobileNavigation;
