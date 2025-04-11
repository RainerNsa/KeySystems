
import { MovingBorderDiv } from "@/components/ui/moving-border";
import visionImage from "@/assets/vision.webp";
import missionImage from "@/assets/mission.webp";
import { Spotlight } from "@/components/ui/Spotlight";

const WhatWeRepresent = () => {
  const items = [
    {
      title: "Our Vision",
      description:
        "To be the trusted partner for businesses seeking to leverage technology to improve decision-making, unlock new opportunities, and achieve transformative growth",
      image: visionImage,
    },
    {
      title: "Our Mission",
      description:
        "We bridge the gap between technology and business, delivering customized ICT solutions that drive efficiency, growth, and competitive advantage.",
      image: missionImage,
    },
  ];
  const cardBaseClass = "bg-gradient-to-tr from-[#05071E] to-[#000080] from-55% text-white px-8 py-12 rounded-[10px] text-left flex flex-col";
  
  return (
    <section className="bg-[#030416] text-white text-center pt-[119px] pb-[204.17px] px-3">
      <div className="flex flex-col items-center justify-center lg:w-[882px] m-auto">
        <h1 className="lg:text-[44.95px] text-[40px] font-bold leading-[100%] mb-[8px]">
          What we Represent
        </h1>
        <p className="lg:text-[24px] text-[14px] font-normal leading-[150%] mb-[45px]">
          Our relentless pursuit of excellence is the driving force behind our
          success
        </p>
        <p className="lg:text-[24px] text-[14px] font-normal leading-[150%] mb-[45px]">
          Excellence isn't a goal, it's our DNA; our relentless pursuit of
          excellence is the driving force behind our success. Excellence is our
          legacy, and we are proud to carry it forward.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
        {items.map((item, index) => (
          <MovingBorderDiv
            key={index}
            borderRadius="12px"
            className={cardBaseClass}
            containerClassName="w-full h-full"
            duration={4000}
          >
            <div className="relative">
              <Spotlight
                className="top-4 -right-[5rem] md:-top-8 md:-right-[130%]"
                fill="#000080"
              />
            </div>
            <div className="flex justify-center mb-8">
              <img
                src={item.image}
                alt={item.title}
                className="w-auto h-[300px] object-contain"
              />
            </div>
            <h3 className="text-white lg:text-[48px] text-3xl font-bold mb-[8px]">
              {item.title}
            </h3>
            <p className="text-white lg:text-[20px] text-base font-normal max-w-md leading-[150%]">
              {item.description}
            </p>
          </MovingBorderDiv>
        ))}
      </div>
    </section>
  );
};

export default WhatWeRepresent;
