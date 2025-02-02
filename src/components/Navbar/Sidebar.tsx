import { MENUS } from "@/constants/menus";
import {
  CallIcon,
  CloseIcon,
  InstaIcon,
  LeftArrowIcon,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
  TelegramIcon,
  WhatsappIcon,
  YTIcon,
} from "../Icons";
import MenuItem from "./MenuItem";

const Sidebar = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="top-0 right-0 z-50 fixed border-gray-200 bg-[#F3F7FB] border-l-1 w-[300px] h-screen text-black transform transition-all translate-x-0 duration-[3s] overflow-y-auto sidebar">
      <div className="top-0 z-[100] sticky flex justify-between items-center bg-[#F3F7FB] px-4 py-4">
        <a href="/">
          <img
            alt="mainLogoSvg"
            loading="lazy"
            width="138"
            height="34"
            decoding="async"
            data-nimg="1"
            className="cursor-pointer"
            src="https://primexop.com/_next/static/media/primexopLogoBlue.a6dc87a3.svg"
          />
        </a>
        <div
          className="flex justify-center items-center bg-blue-600 rounded-full w-10 h-10 cursor-pointer"
          onClick={onClose}
        >
          <CloseIcon />
        </div>
      </div>
      <div className="">
        <ul className="flex flex-col gap-1 p-4 text-gray-800">
          {MENUS.map((menu, index) => (
            <MenuItem key={index} link={menu.link} name={menu.name} />
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-6 p-4">
        <h1 className="font-semibold text-gray-900 text-xl">Contact Info</h1>
        <ul className="flex flex-col gap-6">
          <li className="flex items-center gap-4 font-semibold text-[16px] text-gray-700">
            <LocationIcon />
            <a href="/">Khamgaon, dist. Buldhana, Maharashtra, India 444303</a>
          </li>
          <li className="flex items-center gap-4 font-semibold text-[16px] text-gray-700">
            <MailIcon className="text-blue-500" />
            <a href="mailto:support@primexop.com">support@primexop.com</a>
          </li>
          <li className="flex items-center gap-4 font-semibold text-[16px] text-gray-700">
            <CallIcon className="text-blue-500" />
            <a href="tel:+919834877006">+91-9834877006</a>
          </li>
        </ul>
      </div>
      <div className="mt-2 px-4">
        <a
          href="/contact-us"
          className="flex justify-center items-center gap-2 bg-blue-600 px-3 py-3 rounded-none font-semibold text-white cursor-pointer"
        >
          <p>Get A Quote</p>
          <LeftArrowIcon />
        </a>
      </div>
      <div className="flex items-center gap-10 p-8 text-gray-600">
        <div>
          <a href="https://www.youtube.com/@primexop">
            <YTIcon className="text-black" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/primexop">
            <InstaIcon className="text-black" />
          </a>
        </div>
        <div>
          <a href="https://telegram.me/Primexop">
            <TelegramIcon className="text-black" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/company/primexop">
            <LinkedinIcon className="text-black" />
          </a>
        </div>
        <div>
          <a href="https://api.whatsapp.com/send/?phone=919834877006">
            <WhatsappIcon className="text-black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
