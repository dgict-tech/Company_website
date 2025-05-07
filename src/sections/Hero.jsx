import React from "react";
import hero_image from "../assets/hero_image.png";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { motion } from "framer-motion";

function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-[#42b55e] px-8 lg:px-24 pt-2 pb-6">

      {/* Hero */}
      <section
      className="flex flex-col-reverse md:flex-row items-center justify-between px-2 md:px-14 py-20">
        <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-xl text-center md:text-left">
          <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to
            <span className="text-gray-900"> DGICT!</span>
          </motion.h2>
          <motion.p
          variants={fadeUp}
          className="text-white text-lg mb-6">YOU THINK IT WE BUILD IT</motion.p>
          <motion.p
          variants={fadeUp}
          className="text-black mb-6">
            We specialize in the development of Crypto-Currency, Non-Fungible
            Tokens (NFTs), Mobile applications, Website applications, Desktop
            Applications, and Graphic Designs.
          </motion.p>
          <motion.a
          variants={fadeUp}
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Contact Us
          </motion.a>
        </motion.div>
        <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.75, 0.9, 0.75] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="w-full md:w-1/2 mb-10 md:mb-0">
          <img
            src={hero_image}
            alt="Hero visual"
            className="w-full rounded-xl"
          />
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
