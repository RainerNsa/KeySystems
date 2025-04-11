
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import softwareGroup from "@/assets/ourPartnersImages/softwareGroup.webp";
import cognizant from "@/assets/ourPartnersImages/cognizant.webp";
import temenos from "@/assets/ourPartnersImages/temenos.webp";
import netInfo from "@/assets/ourPartnersImages/NetInfo.webp";
import techMahidra from "@/assets/ourPartnersImages/techMahidra.webp";


export function PartnersSection() {
  return (
    <section className="bg-[#020107] text-white pt-[100.73px] pb-[204.17px] lg:px-[103px] px-10">
      <div className=" flex flex-col items-center justify-center lg:w-[882px] m-auto">
        <h1 className="lg:text-[44.95px] text-[30px] font-bold leading-[100%] mb-[19px]">
        Our Partners
        </h1>
        <p className="lg:text-[24px] text-[14px] font-normal leading-[150%] mb-[80px]">
        Creating a Synergy with global brands
        </p>
      </div>
      <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden w-[100vw] bg-[#050617]">
        <InfiniteMovingCards elements={images} direction="right" speed="slow" />
      </div>
    </section>
  );
}

const images = [
  {
    jsx: <img src={softwareGroup} alt="our partner" className="lg:w-[230.11px] lg:h-[91.55px]" />,
  },
  {
    jsx: <img src={cognizant} alt="our partner" className="lg:w-[230.11px] lg:h-[91.55px]" />,
  },
  {
    jsx: <img src={temenos} alt="our partner" className="lg:w-[230.11px] lg:h-[91.55px]" />,
  },
  {
    jsx: <img src={netInfo} alt="our partner" className="lg:w-[230.11px] lg:h-[91.55px]" />,
  },
  {
    jsx: <img src={techMahidra} alt="our partner" className="lg:w-[230.11px] lg:h-[91.55px]" />,
  },
];

export default PartnersSection;
