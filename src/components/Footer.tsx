import React from "react";
import { FaFacebookF, FaTiktok ,FaWhatsapp} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="pt-40 container">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Our Location</h2>
          <p className="leading-[1.8]">
            Klub House,
          Parklands Road, Westlands
          Nairobi, Kenya
          </p>
          <p className="font-bold ">For Reservations -  <span className="text-accent ">info@kemonigroup.com</span> </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">The Joint</h2>

          <ul className="space-y-2">
            <li>About Us</li>
            <li>Mixologists</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
        <h2 className="text-xl font-bold">Socials</h2>
          <div className="flex gap-8 text-accent text-2xl pt-16">
            <FaFacebookF />
            <BsTwitterX />
            <FaWhatsapp />
            <FaTiktok />
          </div>
        </div>
      </div>
    

      <div className="w-fit mx-auto pt-16 pb-8 text-[14px] sm:text-[16px]">
        &copy; Copyright {currentYear} All rights reserved
      </div>
    </div>
  );
};

export default Footer;