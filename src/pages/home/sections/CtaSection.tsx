
import { MagicButtonLink } from "@/components/ui/MagicButton";

const CallToAction = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#4169E14A] to-40% to-[#060515] text-white px-6 py-16 lg:py-24">
      <div className="relative max-w-5xl mx-auto bg-[#0A0A2F] rounded-[20px] px-6 lg:px-12 py-16 overflow-hidden border border-[#4169E19E]">
        {/* Gradient circle effect */}
        <div className="absolute -right-40 -top-20 w-[400px] h-[400px] rounded-full bg-[#000080] opacity-40 z-0 pointer-events-none" />
        <div className="absolute -right-40 -top-10 w-[350px] h-[350px] rounded-full bg-[#0D0D9F] opacity-40 z-0 pointer-events-none" />
        <div className="absolute -right-40 0 w-[300px] h-[300px] rounded-full bg-[#2020AC] opacity-40 z-0 pointer-events-none" />
        <div className="absolute -right-40 top-10 w-[250px] h-[250px] rounded-full bg-[#3838C9] opacity-40 z-0 pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10 max-w-3xl pt-[34px]">
          <h1 className="text-3xl lg:text-[57.99px] font-bold mb-[8px]">
            Ready to get started?
          </h1>
          <p className="text-lg lg:text-[20px] text-gray-300 mb-[19px]">
            Shoot us a Mail
          </p>
          <p className="text-sm lg:text-[24px] text-gray-300 mb-10 leading-[150%]">
            Join numerous corporations, organizations, and businesses as they
            scale their teams, tap into new market opportunities, and build
            innovative products with KeySystem Technology.
          </p>
          <p className="text-sm lg:text-[24px] text-gray-300 mb-8 leading-[150%]">
            Join thousands of students who are ready to learn new skills or take
            their career to the next level by enrolling in one of our training
            programs today.
          </p>
          <MagicButtonLink
            title="Send Us a Mail Now"
            href="mailto:info@keysystem.com"
            variant="default"
            otherClasses="mb-[40px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
