import { motion } from "framer-motion";
import {
  Blocks,
  Smartphone,
  Globe,
  Monitor,
  Brush,
  LayoutTemplate,
} from "lucide-react";

const services = [
  {
    title: "Blockchain Development",
    description:
      "We create and deploy Crypto-currency Tokens, Web3 (Dapps), NFT(Non Fungible Tokens) and Smartchain Contracts.",
    icon: <Blocks className="w-8 h-8 text-purple-400" />,
  },
  {
    title: "Mobile Application",
    description:
      "We build reliable mobile applications for every type of business and idea.",
    icon: <Smartphone className="w-8 h-8 text-green-400" />,
  },
  {
    title: "Website Application",
    description:
      "We create interactive, innovative, and custom-made websites for businesses.",
    icon: <Globe className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Desktop Application",
    description:
      "We build, troubleshoot, test, and deploy custom desktop application software for businesses.",
    icon: <Monitor className="w-8 h-8 text-orange-400" />,
  },
  {
    title: "UI/UX Development",
    description:
      "We apply interactive and visual design principles to web & mobile applications for a positive and cohesive user experience",
    icon: <LayoutTemplate className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "Graphic Designs",
    description:
      "We create beautiful and attractive visual content to help you communicate messages E.G logo identity, Business cards. etc.",
    icon: <Brush className="w-8 h-8 text-pink-400" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Services() {
  return (
    <div id="services" className="relative bg-black text-white py-20 px-8 md:px-28 overflow-hidden">
      <h1 className="absolute text-[60px] md:text-[120px] font-extrabold text-white/5 top-14 md:top-3 left-1/2 -translate-x-1/2 select-none">
        SERVICES
      </h1>

      <h2 className="text-4xl font-bold text-center mb-4 z-10 relative">
        Our Services
      </h2>

      <hr className="w-16 m-auto mb-16 border-2 border-[#f6ee8f]"/>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10 relative">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
