import { SERVICES } from "@/constants/services";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8 px-6 w-full">
      <h2 className="font-bold text-blue-500 text-xl">Our Services</h2>
      <p className="my-4 font-bold text-3xl text-center">
        We Provide the best quality
      </p>
      <div className="flex md:flex-row flex-col flex-wrap justify-centre items-center gap-5">
        {SERVICES.map((service, index) => (
          <ServiceCard
            link={service.link}
            key={index}
            description={service.description}
            heading={service.heading}
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services