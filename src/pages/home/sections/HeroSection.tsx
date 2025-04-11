
import { GridBackground } from "@/components/ui/GridBackground";
import { MagicButtonLink } from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import HeroVisualComponent from "./HeroVisualComponent";
import HeroPartnersSection from "./HeroPartnersSection";

const HeroSection = () => {
  return (
    <section id="home">
      {/* Spotlight */}
      <div>
        <Spotlight
          className="top-4 -right-[30rem] w-[100vw] md:-top-8 md:-right-[100%]"
          fill="white"
        />
      </div>
      <GridBackground>
        <div className="flex flex-col items-center h-full px-4 text-center text-white relative z-10 mt-[74.83px]">
          <h2 className="text-[20.83px] py-[5.66px] px-[14.15px] border-[0.87px] border-[#FFFFFF] rounded-[84.93px] bg-[#2E6D9C] mb-[26px] inline-block">
            Welcome to KeySystem
          </h2>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-[80.14px] lg:text-[80.14px] max-w-4xl leading-[108%] mb-[8px]">
            IT Consulting for Forward-thinking Businesses
          </h1>
          <p className="mt-6 text-lg md:text-[32px] mb-[75px]">
            Driving Digital Transformation, One Solution at a Time
          </p>
          <div className="flex gap-4">
            <MagicButtonLink title="Get Started" href="#" variant="default" />
            <MagicButtonLink title="Learn More" href="#" variant="outline" />
          </div>
        </div>
      </GridBackground>
      <div className="bg-gradient-to-r from-[#05071E] to-[#000080] mt-[101.88px]">
        <div className="relative w-full px-4 mb-[117.06px]">
          <HeroVisualComponent />
        </div>
        <HeroPartnersSection />
      </div>
    </section>
  );
};

export default HeroSection;
