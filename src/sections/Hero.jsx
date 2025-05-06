import React from "react";
import hero_image from "../assets/hero_image.png";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

function Hero() {
  return (
    <div className="min-h-screen bg-[#42b55e] px-8 lg:px-32 py-6">

      {/* Hero */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-14 py-20">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to
            <span className="text-gray-900"> DGICT!</span>
          </h2>
          <p className="text-white mb-6">YOU THINK IT WE BUILD IT</p>
          <p className="text-gray-900 mb-6">
            We specialize in the development of Crypto-Currency, Non-Fungible
            Tokens (NFTs), Mobile applications, Website applications, Desktop
            Applications, and Graphic Designs.
          </p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <img
            src={hero_image}
            alt="Hero visual"
            className="w-full rounded-xl"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
