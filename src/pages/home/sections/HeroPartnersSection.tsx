
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import sterling from '@/assets/heroPartners/sterling.webp'
import crusadersterling from '@/assets/heroPartners/crusadersterling.webp'
import NAFC from '@/assets/heroPartners/NAFC.webp'
import nbf from '@/assets/heroPartners/nbf.webp'
import militaryPension from '@/assets/heroPartners/militaryPension.webp'
import stanbic from '@/assets/heroPartners/stanbic.webp'
import bankMusa from '@/assets/heroPartners/bankmusa.webp'
import bankIga from '@/assets/heroPartners/bankiga.webp'
import lapo from '@/assets/heroPartners/lapo.webp'

export function HeroPartnersSection() {
  return (
    <section className="rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden w-[100vw]">
      <InfiniteMovingCards
        elements={images}
        direction="right"
        speed="slow"
      />
    </section>
  );
}

const images = [
  {
    jsx: <img src={sterling} alt="our partner" className="w-[188.44px] h-[75.06px]"/>,
  },
  {
    jsx: <img src={crusadersterling} alt="our partner" className="w-[188.44px] h-[75.06px]"/>,
  },
  {
    jsx: <img src={NAFC} alt="our partner" className="w-[188.44px] h-[75.06px]"/>,
  },
  {
    jsx: <img src={nbf} alt="our partner" className="w-[188.44px] h-[75.06px]" />,
  },
  {
    jsx: <img src={militaryPension} alt="our partner" className="w-[188.44px] h-[75.06px]"/>,
  },
  {
    jsx: <img src={stanbic} alt="our partner" className="w-[188.44px] h-[75.06px]" />,
  },
  {
    jsx: <img src={bankMusa} alt="our partner" className="w-[188.44px] h-[75.06px]"/>,
  },
  {
    jsx: <img src={bankIga} alt="our partner" className="w-[188.44px] h-[75.06px]"/>,
  },
  {
    jsx: <img src={lapo} alt="our partner" className="w-[188.44px] h-[75.06px]"/>,
  },
];

export default HeroPartnersSection;
