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
    <div className="sticky top-0 z-[100] hidden md:flex w-full bg-black p-4">
      <div className="w-full flex justify-between">
        <div className="flex flex-row gap-x-2 items-center">
          <MailIcon />
          <a
            className="text-white text-[16px] font-medium"
            href="mailto:support@primexop.com"
          >
            support@primexop.com
          </a>
          <CallIcon />
          <a
            className="text-white text-[16px] font-medium"
            href="tel:+919834877006"
          >
            +91-9834877006
          </a>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-white text-lg font-medium">Follow Us:</h1>
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
