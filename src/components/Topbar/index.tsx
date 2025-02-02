import {
  MailIcon,
  LinkedinIcon,
  CallIcon,
  YTIcon,
  InstaIcon,
  TelegramIcon,
  WhatsappIcon,
} from "../Icons";

const Topbar = () => {
  return (
    <div className="top-0 z-[100] md:flex hidden bg-black p-2 w-full">
      <div className="flex justify-between w-full">
        <div className="flex flex-row items-center gap-x-2">
          <MailIcon />
          <a
            className="font-medium text-[16px] text-white"
            href="mailto:support@primexop.com"
          >
            support@primexop.com
          </a>
          <CallIcon />
          <a
            className="font-medium text-[16px] text-white"
            href="tel:+919834877006"
          >
            +91-9834877006
          </a>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="font-medium text-lg text-white">Follow Us:</h1>
          <a href="https://www.youtube.com/@primexop">
            <YTIcon />
          </a>
          <a href="https://www.instagram.com/primexop">
            <InstaIcon />
          </a>
          <a href="https://telegram.me/Primexop">
            <TelegramIcon />
          </a>
          <a href="https://www.linkedin.com/company/primexop">
            <LinkedinIcon />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=919834877006">
            <WhatsappIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
