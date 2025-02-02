const PageHeroSection = () => {
  return (
    <div className="relative flex items-center h-[250px] md:h-[350px] lg:h-[450px] xl:h-[470px] overflow-hidden">
      <span className="z-50 absolute flex flex-col justify-center items-center gap-y-4 w-full text-white">
        <h1 className="font-bold text-4xl md:text-6xl">Services</h1>
        <span className="flex gap-x-2">
          <span> Home </span>
          <span> {">"} </span>
          <span> Services </span>
        </span>
      </span>
      <img
        loading="lazy"
        width="1440"
        height="337"
        className="brightness-[.3] absolute w-full h-full object-cover"
        src="https://primexop.com/_next/static/media/breadcrumb.15fcf705.webp"
      />
    </div>
  );
};

export default PageHeroSection;
