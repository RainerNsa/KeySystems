
import CtaSection from "./sections/CtaSection";
import CertificationSection from "./sections/CertificationSection";
import HeroSection from "./sections/HeroSection";
import OfferingsSection from "./sections/OfferingsSection";
import PartnersSection from "./sections/PartnersSection";
import ProcessSection from "./sections/ProcessSection";
import TrustSection from "./sections/TrustSection";
import TrustedConsultantSection from "./sections/TrustedConsultantSection";
import RepresentationSection from "./sections/RepresentationSection";

const Home = () => {
  return (
    <main className="bg-gradient-to-r from-[#05071E] to-[#000080] flex justify-center items-center flex-col overflow-hidden" id='home'>
      <div className="w-full relative">
        <HeroSection />   
        <TrustedConsultantSection />
        <OfferingsSection/>
        <RepresentationSection/>
        <CertificationSection/>
        <TrustSection/>
        <ProcessSection/>
        <PartnersSection/>
        <CtaSection/>
      </div>
    </main>
  );
};

export default Home;
