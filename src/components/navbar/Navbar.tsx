
import Logo from "./Logo";
import Navigation from "./Navigation";

import MobileNavigation from "./MobileNavigation";
import CTA from "./CTA";

const Navbar = () => {
  const IsAuthenticated=!!1
  return (
    <header className="py-2 fixed w-full">
      <div className=" container flex items-center ">
        <MobileNavigation />
        <Logo />
        <Navigation />
        <CTA IsAuthenticated={IsAuthenticated}/>
      </div>
    </header>
  );
};



export default Navbar;
