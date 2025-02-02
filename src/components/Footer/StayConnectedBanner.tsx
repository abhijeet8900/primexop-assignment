import { LeftArrowIcon } from "../Icons";

const StayConnectedBanner = () => {
  return (
    <div className="top-0 left-1/2 absolute mx-auto w-auto min-w-[350px] max-w-[1240px] -translate-x-1/2 -translate-y-1/2">
      <div className="relative flex lg:flex-row flex-col gap-y-4 lg:gap-x-10 bg-[#384BFF] lg:px-18 lg:py-10 p-8 w-full">
        <p className="mx-auto font-bold text-2xl text-center text-white lg:text-left lg:text-4xl">
          Stay Connected With Cutting Edge IT
        </p>
        <a
          href="/contact-us"
          className="flex justify-center items-center gap-2 bg-white hover:bg-black p-4 rounded-none lg:min-w-[150px] font-semibold hover:text-white cursor-pointer"
        >
          <p>Get A Quote</p>
          <LeftArrowIcon />
        </a>
      </div>
    </div>
  );
};

export default StayConnectedBanner;
