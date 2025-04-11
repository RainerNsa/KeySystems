
import { GridBackground } from "@/components/ui/GridBackground";
import trustedConsultant from "@/assets/trustedConsultant.webp";

const TrustedConsultantSection = () => {
  return (
    <GridBackground>
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center text-white lg:w-[1092px] m-auto mt-[169.94px] pb-[42px]">
        <h1 className="lg:text-[50px] text-[40px] font-bold leading-[120%] mb-[19px]">
          Why we are your Trusted Consultant
        </h1>
        <p className="lg:text-[24px] text-[14px] font-normal leading-[130%] mb-[45px]">
          Empowering Businesses with Cutting-edge Technology
        </p>
        <p className="lg:text-[32px] text-[22px] font-normal leading-[130%] mb-[79px] max-w-4xl">
          Excellence isn't a goal, it's our DNA; our relentless pursuit of
          excellence is the driving force behind our success. Excellence is our
          legacy, and we are proud to carry it forward.
        </p>
        <p className="lg:text-[24px] text-[14px] font-normal leading-[130%] mb-[37.9px]">
          Watch the video to see how we are innovating to keep businesses on top
          of their games.
        </p>
        <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl">
          <img
            src={trustedConsultant}
            alt="Trusted Consultant"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </GridBackground>
  );
};

export default TrustedConsultantSection;
