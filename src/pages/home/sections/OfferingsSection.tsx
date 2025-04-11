
import { MagicButtonLink } from "@/components/ui/MagicButton";
import offering1 from "@/assets/offerings/offering1.webp";
import offering2 from "@/assets/offerings/offering2.webp";
import offering3 from "@/assets/offerings/offering3.webp";
import offering4 from "@/assets/offerings/offering4.webp";
import offering5 from "@/assets/offerings/offering5.webp";
import offering6 from "@/assets/offerings/offering6.webp";
import offering7 from "@/assets/offerings/offering7.webp";
import offering8 from "@/assets/offerings/offering8.webp";
import offering9 from "@/assets/offerings/offering9.webp";
import { cn } from "@/lib/utils";

const OurOfferings = () => {
  return (
    <section className="bg-[#05071E] text-white text-center pt-[198.6px] pb-[204.17px]">
      <div className="flex flex-col items-center justify-center lg:w-[882px] m-auto px-4">
        <h1 className="lg:text-[50px] text-[40px] font-bold leading-[100%] mb-[19px]">
          Our Offerings
        </h1>
        <p className="lg:text-[24px] text-[14px] font-normal leading-[150%] mb-[35px]">
          Leverage KeySystem's cutting-edge expertise to transform your
          business. Our tailored software and cybersecurity solutions drive
          efficiency, security, and growth. We empower businesses to thrive in
          the digital age
        </p>
        <MagicButtonLink title="Learn More" href="#" variant="default" />
      </div>
      {/* Services */}
      <div className="grid grid-cols-3 gap-6 w-full max-w-[1173.55px] m-auto px-5 mt-16">
        {[
          { src: offering1, alt: "IT Consulting" },
          { src: offering2, alt: "Digital Transformation" },
          { src: offering3, alt: "Cybersecurity" },
          { src: offering4, alt: "Custom Software Development" },
          { src: offering5, alt: "Financial Technology" },
          { src: offering6, alt: "Data Services" },
          { src: offering7, alt: "Cloud Solutions" },
          { src: offering8, alt: "IT Infrastructure" },
          { src: offering9, alt: "Enterprise Integration" },
        ].map((offering, index) => (
          <div 
            key={index} 
            className={cn(
              "flex justify-center",
              index >= 3 && index < 6 ? "mt-12" : ""
            )}
          >
            <img
              src={offering.src}
              alt={offering.alt}
              className="lg:w-[277.55px] w-[177.55px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurOfferings;
