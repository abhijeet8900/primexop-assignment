import { ServiceType } from "@/constants/services";

type ServiceCardProps = ServiceType & {
  link: string
}

const ServiceCard = ({ imageSrc, heading, description, link = '/' }: ServiceCardProps) => {
  return (
    <a href={link} className="z-0 shadow-md p-6 hover:border min-w-[320px] max-w-sm h-[250px]">
      <img src={imageSrc} loading="lazy" width="40" height="40" />
      <h3 className="mt-4 max-w-[50%] font-bold text-lg">{heading} </h3>
      <p className="font-normal text-base">{description}</p>
    </a>
  );
};

export default ServiceCard;
