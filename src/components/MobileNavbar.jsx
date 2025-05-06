import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import dgict_logo from "../assets/dgict_logo.png";
import { motion } from "framer-motion";

function MobileNavbar({ setMobileDropdown }) {
  return (
    <>
    <motion.div
    initial={{ opacity: 0, x: -400 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay:0.4, ease: "easeIn" }}
    viewport={{ once: true, amount: 0.1 }}
    className="fixed top-0 left-0 w-[70%] h-screen bg-[#1e1e1e] text-white z-50 flex flex-col px-6 pt-6 gap-10 text-[15px] font-bold">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-blue-600">
          <img src={dgict_logo} alt="" className="w-36 h-12" />
        </h1>
        <button
        onClick={() => setMobileDropdown(false)}
        className="text-2xl lg:hidden">
        <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <nav>
        <ul className="space-y-6">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#works">WORKS</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </motion.div>
    <motion.div
    initial={{ opacity: 0, x: -400 }}
    animate={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.4, ease: "easeIn" }}
      className={`absolute top-0 left-0 w-[70%] h-screen z-10 bg-[rgba(255,255,255,0.1)] transform transition-all ease-in-out duration-1000 ${
        setMobileDropdown && "w-[50%]"
      }`}
    ></motion.div>
    </>
  );
}

export default MobileNavbar;
