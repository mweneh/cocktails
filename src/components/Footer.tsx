import React from "react";
import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="pt-40 container bg-black text-white">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Our Location</h2>
          <p className="leading-[1.8]">
            Klub House,
            <br />
            Parklands Road, Westlands
            <br />
            Nairobi, Kenya
          </p>
          <p className="font-bold">
            For Reservations - <span className="text-accent">info@kemonigroup.com</span>
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">The Joint</h2>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-accent">About Us</a>
            </li>
            <li>
              <a href="/mixologists" className="hover:text-accent">Mixologists</a>
            </li>
            <li>
              <a href="/events" className="hover:text-accent">Events</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-accent">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold">Socials</h2>
          <div className="flex gap-8 text-accent text-2xl pt-16">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><BsTwitterX /></a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          </div>
        </div>
      </div>

      <div className="w-fit mx-auto pt-16 pb-8 text-[14px] sm:text-[16px]">
        &copy; Copyright {currentYear}. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
