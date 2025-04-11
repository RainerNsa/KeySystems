
import consultation from "@/assets/strategicConsultation.webp"
import collaboration from "@/assets/collaboration.webp"
import delivery from "@/assets/delivery.webp"

const OurProcess = () => {
  return (
    <section className="bg-[#020107] text-white pt-[100.73px] pb-[204.17px] lg:px-[103px] px-10">
      <div className="flex flex-col items-center justify-center lg:w-[882px] m-auto">
        <h1 className="lg:text-[44.95px] text-[30px] font-bold leading-[100%] mb-[19px]">
          Our Process
        </h1>
        <p className="lg:text-[24px] text-[14px] font-normal leading-[150%] mb-[80px]">
          At KeySystem, we leave you with a lasting impression
        </p> 
      </div>
      {/* Processes */}
      <div className="grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
        <div className="p-5 lg:p-0 lg:col-span-2 flex flex-col-reverse lg:flex-row justify-between items-center rounded-[10px] bg-gradient-to-l from-[#181B4D] to-[#04050B] from-10%">
          <div className="ml-[51px] lg:w-[515px] text-center lg:text-left">
            <h1 className="lg:text-[40px] text-[30px] font-bold mb-[16.9px]">Strategic Consultation</h1>
            <p className="text-[14px] lg:text-[24px] font-normal leading-[120%]">We kick off with a strategic consultation to understand your brand, goals, and audience</p>
          </div>
          <img src={consultation} alt="Strategic consultation" className="object-contain w-[385px]"/>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center rounded-[10px] bg-gradient-to-l from-[#181B4D] to-[#04050B] from-10%">
          <div className="ml-[51px] lg:w-[402px] text-center lg:text-left p-5 lg:p-0">
            <h1 className="lg:text-[40px] text-[30px] font-bold mb-[16.9px]">Collaboration</h1>
            <p className="text-[14px] lg:text-[24px] font-normal leading-[120%]">At KeySystem, we collaborate closely to ensure the end result meets your expectations and makes you happy</p>
          </div>
          <img src={collaboration} alt="collaboration" className="object-contain w-[230px] lg:mt-[5.8rem]"/>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center rounded-[10px] bg-gradient-to-l from-[#181B4D] to-[#04050B] from-10%">
          <div className="ml-[51px] lg:w-[402px] text-center lg:text-left p-5 lg:p-0">
            <h1 className="lg:text-[40px] text-[30px] font-bold mb-[16.9px]">Delivery</h1>
            <p className="text-[14px] lg:text-[24px] font-normal leading-[120%]">We deliver solutions that are tailored to your needs, helping you achieve your business objectives</p>
          </div>
          <img src={delivery} alt="delivery" className="object-contain w-[230px] lg:mt-40"/>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
