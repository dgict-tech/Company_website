"use client"

import { motion } from "framer-motion"
import { Blocks, Smartphone, Globe, Monitor, Brush, LayoutTemplate } from "lucide-react"

const services = [
  {
    title: "Blockchain Development",
    description:
      "We create and deploy Crypto-currency Tokens, Web3 (Dapps), NFT(Non Fungible Tokens) and Smartchain Contracts.",
    icon: <Blocks className="w-10 h-10" />,
  },
  {
    title: "Mobile Application",
    description: "We build reliable mobile applications for every type of business and idea.",
    icon: <Smartphone className="w-10 h-10" />,
  },
  {
    title: "Website Application",
    description: "We create interactive, innovative, and custom-made websites for businesses.",
    icon: <Globe className="w-10 h-10" />,
  },
  {
    title: "Desktop Application",
    description: "We build, troubleshoot, test, and deploy custom desktop application software for businesses.",
    icon: <Monitor className="w-10 h-10" />,
  },
  {
    title: "UI/UX Development",
    description:
      "We apply interactive and visual design principles to web & mobile applications for a positive and cohesive user experience",
    icon: <LayoutTemplate className="w-10 h-10" />,
  },
  {
    title: "Graphic Designs",
    description:
      "We create beautiful and attractive visual content to help you communicate messages E.G logo identity, Business cards. etc.",
    icon: <Brush className="w-10 h-10" />,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

export default function Services() {
  return (
    <div id="services" className="lg:bg-gradient-to-br lg:from-black lg:via-[#1a1a1a] lg:to-black pt-28 pb-20 md:pb-32 min-h-screen flex items-center relative bg-black text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#42b55e]/15 rounded-full blur-3xl -z-10"></div>

      <h1 className="hidden md:inline-block absolute text-[60px] md:text-[120px] font-extrabold text-white/5 top-12 md:top-12 left-1/2 -translate-x-1/2 select-none">
        SERVICES
      </h1>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">What We Offer</h2>

        <hr className="w-16 m-auto mb-16 border-2 border-[#42b55e]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-[#42b55e]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[#42b55e]/20 hover:shadow-2xl"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="mb-4 text-[#42b55e] group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
