import { YTIcon, InstaIcon, TelegramIcon, WhatsappIcon, LinkedinIcon } from "../Icons";

const CompanyInfo = () => {
  return (
    <div className="flex max-w-[350px]">
      <div className="flex flex-col gap-6 xl:gap-8 w-auto">
        <div className="">
          <img
            alt="logoImg"
            loading="lazy"
            width="138"
            height="34"
            decoding="async"
            data-nimg="1"
            className="w-48"
            src="https://primexop.com/_next/static/media/primexopLogoWhite.cf13571e.svg"
          />
        </div>
        <div>
          <p className="font-medium text-[15px] text-gray-300">
            Empowering Businesses with Cutting-edge Technology Solutions
          </p>
        </div>
        <div className="flex gap-4">
          <a
            className="flex justify-center items-center border-1 border-gray-700 hover:bg-[#384BFF] hover:border-none w-9 h-9 transition-all duration-1000"
            href="https://www.youtube.com/@primexop"
          >
            <YTIcon />
          </a>
          <a
            className="flex justify-center items-center border-1 border-gray-700 hover:bg-[#384BFF] hover:border-none w-9 h-9 transition-all duration-1000"
            href="https://www.instagram.com/primexop"
          >
            <InstaIcon />
          </a>
          <a
            className="flex justify-center items-center border-1 border-gray-700 hover:bg-[#384BFF] hover:border-none w-9 h-9 transition-all duration-1000"
            href="https://telegram.me/Primexop"
          >
            <TelegramIcon />
          </a>
          <a
            className="flex justify-center items-center border-1 border-gray-700 hover:bg-[#384BFF] hover:border-none w-9 h-9 transition-all duration-1000"
            href="https://www.linkedin.com/company/primexop"
          >
            <LinkedinIcon />
          </a>
          <a
            className="flex justify-center items-center border-1 border-gray-700 hover:bg-[#384BFF] hover:border-none w-9 h-9 transition-all duration-1000"
            href="https://api.whatsapp.com/send/?phone=919834877006"
          >
            <WhatsappIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo