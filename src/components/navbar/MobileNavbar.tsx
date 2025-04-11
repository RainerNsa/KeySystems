import logo from "@/assets/KeySystem.webp";
import phoneIcon from "@/assets/icons/phone.webp";
import { Menu} from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { NavLink as navLinkType } from "@/constants/navLinks";
import { NavLink } from "react-router-dom";

type Props = { navLinks: navLinkType[] };

const MobileNavbar = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="md:hidden p-2 text-white" aria-label="Toggle navigation menu">
          <Menu className="w-6 h-6" />
        </button>
      </DialogTrigger>
      <DialogContent className="bg-[#05071E] text-white rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <img src={logo} alt="KeySystem Logo" className="h-[40px]" />
        </div>
        <nav className="flex flex-col gap-4 text-lg">
          {props.navLinks.map((link) =>
            link.children ? (
              <div key={link.name}>
                <span className="font-semibold">{link.name}</span>
                <ul className="ml-4 mt-1 flex flex-col gap-2 text-sm">
                  {link.children.map((child) => (
                    <li key={child.name}>
                      <NavLink to={child.href}>{child.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <NavLink key={link.name} to={link.href}>
                {link.name}
              </NavLink>
            )
          )}
          <a
            href="tel:+2348184441404"
            className="mt-6 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#000080] via-[#4169E1] to-[#000080] px-4 py-2 text-sm font-medium text-white border border-[#4169E1]"
          >
            <img src={phoneIcon} alt="phone icon" className="w-4 h-4" />
            <span>+234 818 444 1404</span>
          </a>
        </nav>
      </DialogContent>
    </Dialog>
  );
};

export default MobileNavbar;
