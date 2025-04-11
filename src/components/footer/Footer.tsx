
import Facebook from "@/assets/icons/Facebook";
import InstagramIcon from "@/assets/icons/Instagram";
import XIcon from "@/assets/icons/X";
import logo from "@/assets/KeySystem.webp";
import linkedinIcon from "@/assets/icons/LinkedInIcon.webp";
import { services } from "@/constants/footerServices";

const Footer = () => {
  return (
    <section className="bg-[#030517] py-[76px] lg:px-[79px] px-[19px] text-[#BBBBBB]">
      {/* Logo & Services */}
      <div className="flex mb-[73px] lg:gap-0 gap-6">
        {/* Logo */}
        <div className="flex-1">
          <img
            src={logo}
            alt="KeySystem Logo"
            className="h-[50.04px] mb-[19.84px]"
          />
          <p className="font-normal text-[10.6px] text-white">
            &copy; 2025 KeySystem Technology Limited. All rights reserved.
          </p>
        </div>
        {/* Services */}
        <div className="flex-[2] text-[#BBBBBB]" aria-label="Services">
          <h1 className="text-3xl font-bold mb-4">SERVICES</h1>
          <div className="grid lg:grid-cols-2 gap-4">
            {services.map((items, id) => (
              <p key={id} className="text-[20px]">
                {items}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* QuickLinks & Contact */}
      <div className="flex mb-[63px]">
        {/* Quick Link */}
        <div className="flex-1" aria-label="Quick Links">
          <h1 className="mb-4 text[30px] font-bold">QUICK LINKS</h1>
          <p className="font-normal text-[24px] mb-2">About Us</p>
          <p className="font-normal text-[24px] mb-2">Sitemap</p>
        </div>
        {/* Contacts */}
        <div className="flex-[2] text-[#BBBBBB]" aria-label="Office Addresses">
          <h1 className="text-3xl font-bold mb-4">CONTACT</h1>
          <div className="lg:flex gap-4">
            {/* Nigeria */}
            <div className="flex-1">
              <h1 className="text-[24px] font-bold">Nigeria</h1>
              <p className="text-[24px]">
                55G Adebisi Omotola Close, Off Samuel Adedoyin Street, Victoria
                Island
              </p>
            </div>
            <div className="flex-1">
              <h1 className="text-[24px] font-bold">United Kingdom</h1>
              <p className="text-[24px]">
                39 Kenyon Lane, Off Moston Lane,Moston, Manchester, United
                Kingdom, M40 9JG
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Phone numbers */}
      <div className="flex">
        {/* Icons */}
        <div className="flex-1 flex gap-[13px] lg:flex-row flex-col lg:gap-[53px] mt-[170px]">
          <a
            href="https://www.instagram.com/daddyjamal__"
            target="_blank"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-[27.478506088256836px] h-[27.478506088256836px]" />
          </a>
          <a
            href="https://x.com/amasa_tech?s=21"
            target="_blank"
            aria-label="Tweeter"
          >
            <XIcon className="w-[27.478506088256836px] h-[27.478506088256836px]" />
          </a>
          <a
            href="https://linkedin.com/in/jamil-amasa"
            target="_blank"
            aria-label="Linkedin"
          >
            <img
              src={linkedinIcon}
              alt="linkedInIcon"
              className="rounded-full w-[27.478506088256836px] h-[27.478506088256836px]"
            />
          </a>
          <a
            href="https://linkedin.com/in/jamil-amasa"
            target="_blank"
            aria-label="Facebook"
          >
          <Facebook className="w-[27.478506088256836px] h-[27.478506088256836px]" />
          </a>

          
        </div>
        <div className="lg:flex-[2] flex-1 grid lg:grid-cols-3 gap-[63px]">
          <div>
            <h1 className="text-[24px] font-bold">United Kingdom</h1>
            <p className="text-[24px]">Tel: +44 161 948 1444</p>
          </div>
          <div>
            <h1 className="text-[24px] font-bold">United Arab Emirates</h1>
            <p className="text-[24px]">Tel: +971 50 423 8817</p>
          </div>
          <div>
            <h1 className="text-[24px] font-bold">Canada</h1>
            <p className="text-[24px]">Tel: +1 647 977 1435</p>
          </div>
          <div>
            <h1 className="text-[24px] font-bold">Nigeria</h1>
            <p className="text-[24px]">Tel:+234 8184441404</p>
          </div>
          <div>
            <h1 className="text-[24px] font-bold">Email</h1>
            <p className="text-[24px]">enquiries@keysystemltd.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
