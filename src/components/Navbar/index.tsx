import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="flex items-center px-4 py-3 w-full">
      <div className="flex flex-row justify-between items-center mx-auto w-full max-w-[1240px]">
        <a href="/">
          <img
            alt="mainLogoSvg"
            loading="lazy"
            width="138"
            height="34"
            decoding="async"
            data-nimg="1"
            src="https://primexop.com/_next/static/media/primexopLogoBlue.a6dc87a3.svg"
          />
        </a>
        <div className="flex items-center gap-10">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
