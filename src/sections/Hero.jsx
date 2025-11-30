import React from "react";
import hero_image from "../assets/hero_image.png";
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
          className="text-white text-lg mb-6">
            YOU WANT IT, WE'LL BUILD IT!
          </motion.p>
          <motion.p
          variants={fadeUp}
          className="text-black mb-6">
            We specialize in building high-performance website platforms, mobile applications, website applications, desktop applications, and providing expert tech consultation tailored to your business goals.
          </motion.p>
          <br/>
          <motion.a
          variants={fadeUp}
            href="#contact"
            className="bg-black text-white px-[60px] py-4 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Contact Us
          </motion.a>
        </motion.div>
        <motion.div
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
