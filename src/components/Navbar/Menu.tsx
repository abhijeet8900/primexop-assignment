import { useState } from "react";
import { LeftArrowIcon, MenuIcon } from "../Icons";
import MenuItem from "./MenuItem";
import { MENUS } from "@/constants/menus";
import Sidebar from "./Sidebar";

const Menu = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <>
      <div className="md:block hidden">
        <ul className="flex items-center gap-10 font-semibold text-black text-lg">
          {MENUS.map((menu, index) => (
            <MenuItem key={index} link={menu.link} name={menu.name} />
          ))}
          <a
            href="/contact-us"
            className="flex items-center gap-2 bg-blue-600 hover:bg-black px-3 py-3 rounded-none font-semibold hover:text-white cursor-pointer"
          >
            <p>Get A Quote</p>
            <LeftArrowIcon />
          </a>
        </ul>
      </div>
      <div className="block md:hidden">
        <MenuIcon
          onClick={() => {
            setSidebarOpen(true);
          }}
        />
      </div>
      <div className={sidebarOpen ? 'flex' : 'hidden'} >
        <Sidebar
          onClose={() => {
            setSidebarOpen(false);
          }}
        />
      </div>
    </>
  );
};

export default Menu;
