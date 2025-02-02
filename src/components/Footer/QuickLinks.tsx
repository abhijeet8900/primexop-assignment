import { ArrowBulletinIcon } from "../Icons";

const QuickLinks = () => {
  return (
    <div className="flex lg:justify-center sm:pl-14 md:pl-28 lg:pl-0 max-w-[350px]z-[10]">
      <div className="flex flex-col gap-4 xl:gap-6 w-auto text-white">
        <h1 className="font-bold text-2xl">Quick Links</h1>
        <hr className="bg-white xl:-mt-2 w-[135px] h-[1px]" />
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-1 -ml-2 text-lg hover:text-blue-800 transition-all hover:translate-x-2 cursor-pointer">
            <ArrowBulletinIcon />
            <a href="/services">Our Services</a>
          </li>
          <li className="flex items-center gap-1 -ml-2 text-lg hover:text-blue-800 transition-all hover:translate-x-2 cursor-pointer">
            <ArrowBulletinIcon />
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuickLinks;
