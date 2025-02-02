import { UpArrowIcon } from "../Icons";

const TermsAndConditions = () => {
  return (
    <div className="relative bg-[#384BFF]">
      <div className="top-0 left-1/2 absolute flex justify-center items-center border-4 border-white bg-[#384BFF] rounded-full w-16 h-16 font-bold -translate-x-1/2 -translate-y-1/2">
        <UpArrowIcon />
      </div>
      <div className="sm:flex sm:flex-row justify-center sm:justify-between items-center gap-4 mx-auto px-10 xl:px-0 pt-14 md:pt-6 pb-6 w-full max-w-[1300px]">
        <div className="flex justify-center sm:justify-start w-full sm:w-1/2">
          <h1 className="group inline-block font-medium text-[16px] text-center sm:text-left cursor-pointer">
            © All Copyright 2025 by Primexop
            <hr className="group-hover:w-full group-hover:h-[1px] bg-white w-0 h-0 transition-width duration-1000" />
          </h1>
        </div>
        <div className="flex justify-center sm:justify-end items-center gap-4 mx-auto mt-6 sm:mt-0 sm:w-1/2 font-medium text-[16px]">
          <a className="group cursor-pointer" href="/legal/termsAndCondition">
            Terms &amp; Condition
            <hr className="group-hover:w-full group-hover:h-[1px] bg-white w-0 h-0 transition-width duration-1000" />
          </a>
          <a className="group cursor-pointer" href="/legal/privacyPolicy">
            Privacy Policy
            <hr className="group-hover:w-full group-hover:h-[1px] bg-white w-0 h-0 transition-width duration-1000" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
