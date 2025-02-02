import { MailIcon } from "lucide-react";
import { LocationIcon, CallIcon, LeftArrowIcon } from "../Icons";

const ContactUs = () => {
  return (
    <div className="flex xl:justify-end sm:pl-14 md:pl-28 lg:pl-0 max-w-[350px] text-white">
      <div className="flex flex-col gap-4 xl:gap-6 w-auto">
        <h1 className="font-bold text-2xl">Contact Us</h1>
        <hr className="bg-white xl:-mt-2 w-[142px] h-[1px]" />
        <a
          className="flex items-center gap-2 font-medium text-lg"
          href="/contact"
        >
          <LocationIcon className="text-white" />
          Khamgaon, dist. Buldhana, Maharashtra, India 444303
        </a>
        <a
          className="flex items-center gap-2 font-medium text-lg"
          href="tel:+919834877006"
        >
          <CallIcon />
          +91-9834877006
        </a>
        <a
          className="flex items-center gap-2 font-medium text-lg"
          href="mailto:support@primexop.com"
        >
          <MailIcon />
          support@primexop.com
        </a>
        <div className="max-w-[208px] r">
          <a
            href="/contact-us"
            className="flex justify-center items-center gap-2 bg-blue-600 hover:bg-black p-4 rounded-none w-full font-semibold hover:text-white cursor-pointer"
          >
            <p>Get A Quote</p>
            <LeftArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
