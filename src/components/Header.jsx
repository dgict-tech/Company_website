import React, { useState } from "react";
import Navbar from "./Navbar";
import dgict_logo from "../assets/dgict_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MobileNavbar from "./MobileNavbar";
import { motion } from "framer-motion";

function Header() {
  const [mobileDropdown, setMobileDropdown] = useState(false);

  return (
    <motion.header
    initial={{
      y: -100,
      opacity: 0,
    }}
    animate={{
      y: 0,
      opacity: 1,
    }}
    transition={{ duration: 0.5, ease: "easeIn" }}
    className="sticky top-0 shadow-md p-4 flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold text-blue-600">
        <img src={dgict_logo} alt="" className="w-36 h-12" />
      </h1>
      <nav className="space-x-6">
        <button
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1, delay: 1, ease: "easeIn" }}
          className="flex text-xl lg:hidden text-white"
          onClick={() => setMobileDropdown(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        {mobileDropdown && (
          <>
            <MobileNavbar setMobileDropdown={setMobileDropdown} />
          </>
        )}

        <Navbar />
      </nav>
    </motion.header>
  );
}

export default Header;
