import CompanyInfo from "./CompanyInfo";
import ContactUs from "./ContactUs";
import QuickLinks from "./QuickLinks";
import RecentPosts from "./RecentPosts";
import StayConnectedBanner from "./StayConnectedBanner";
import TermsAndConditions from "./TermsAndConditions";

const Footer = () => {
  return (
    <footer>
      <div className="border-gray-300 border-t-1">
        <div className="relative bg-[#0F0D1D] mt-32 xl:mt-60 px-4 pt-44 xl:pt-52 pb-20 xl:pb-32">
          <StayConnectedBanner />
          <div className="flex md:flex-row flex-col md:flex-wrap gap-10 md:gap-x-24 mx-auto sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[90%] max-w-[1300px]">
            <CompanyInfo />
            <QuickLinks />
            <RecentPosts /> 
            <ContactUs />
          </div>
        </div>
        <TermsAndConditions />
      </div>
    </footer>
  );
};

export default Footer;
